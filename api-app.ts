import express, { Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import axios from "axios";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
import { GoogleGenAI } from "@google/genai";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// AI Initialization
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || "",
  process.env.VITE_SUPABASE_ANON_KEY || ""
);

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// --- API ROUTES ---

// Health Check
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "operational", timestamp: new Date().toISOString() });
});

/**
 * STRATEGY ENGINE PROXY
 * Current engine is routed via Netlify Functions for secure key management.
 * Logic found in: /netlify/functions/lexai-proxy.ts
 */
app.get("/api/engine-status", (req: Request, res: Response) => {
  res.json({
    engine: "LexAI (Proxy)",
    proxied: true,
    env_keys_expected: ["LEXAI_API_URL", "LEXAI_API_KEY", "LEXAI_SITE"]
  });
});

// Logs (Simplified for demo)
let logs: any[] = [];
const addLog = (message: string, type: "info" | "error" | "success" = "info") => {
  logs.unshift({ id: Date.now(), message, type, time: new Date().toLocaleTimeString() });
  if (logs.length > 50) logs.pop();
};

app.get("/api/logs", (req: Request, res: Response) => {
  res.json(logs);
});

// Knowledge Ingester
app.post("/api/embed", upload.single("file"), async (req: Request, res: Response): Promise<any> => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    addLog(`Processing upload: ${req.file.originalname}`, "info");

    const data = await pdf(req.file.buffer);
    const text = data.text;
    const jurisdiction = req.body.jurisdiction || "General";

    const words = text.split(/\s+/);
    const chunks = [];
    for (let i = 0; i < words.length; i += 500) {
      chunks.push(words.slice(i, i + 500).join(" "));
    }

    addLog(`Extracted ${chunks.length} chunks from ${req.file.originalname}`, "success");

    for (const [index, chunk] of chunks.entries()) {
      const result = await genAI.models.embedContent({
        model: "text-embedding-004",
        contents: [{ parts: [{ text: chunk }] }]
      });
      const embedding = result.embeddings?.[0]?.values;

      if (!embedding) throw new Error("Embedding failure");

      const { error } = await supabase.from("documents").insert({
        content: chunk,
        embedding: embedding,
        metadata: {
          source: req.file.originalname,
          jurisdiction,
          chunk_index: index,
        }
      });

      if (error) throw error;
    }

    addLog(`Ingestion complete: ${chunks.length} segments stored.`, "success");
    res.json({ success: true, chunks: chunks.length });
  } catch (error: any) {
    addLog(`Ingestion failed: ${error.message}`, "error");
    res.status(500).json({ error: error.message });
  }
});

// Document Manager
app.get("/api/documents", async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("documents")
    .select("id, content, metadata")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.delete("/api/documents/:id", async (req: Request, res: Response) => {
  const { error } = await supabase.from("documents").delete().eq("id", req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

// AI Control
let globalSystemPrompt = "You are the LexAI Strategy Engine. Be technical and authoritative.";
let temperature = 0.7;

app.get("/api/config", (req: Request, res: Response) => {
  res.json({ systemPrompt: globalSystemPrompt, temperature });
});

app.post("/api/config", (req: Request, res: Response) => {
  globalSystemPrompt = req.body.systemPrompt || globalSystemPrompt;
  temperature = req.body.temperature || temperature;
  addLog("System configuration updated", "info");
  res.json({ success: true });
});

// Chat with RAG
app.post("/api/chat", async (req: Request, res: Response) => {
  const { message, history } = req.body;
  
  try {
    addLog(`Similarity search: "${message.slice(0, 30)}..."`, "info");
    
    const embedResult = await genAI.models.embedContent({
      model: "text-embedding-004",
      contents: [{ parts: [{ text: message }] }]
    });
    const queryEmbedding = embedResult.embeddings?.[0]?.values;

    if (!queryEmbedding) throw new Error("Vector sync failed");

    const { data: matches, error: searchError } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: 5
    });

    if (searchError) throw searchError;

    const context = matches?.map((m: any) => m.content).join("\n\n") || "No relevant documents found.";
    addLog(`RAG Context retrieved. Chunks: ${matches?.length || 0}`, "success");

    // Format history for Gemini
    const geminiHistory = (history || []).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const result = await genAI.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        ...geminiHistory,
        { 
          role: "user", 
          parts: [{ text: `CONTEXT:\n${context}\n\nSYSTEM:\n${globalSystemPrompt}\n\nQUESTION:\n${message}\n\n(Remember to use the context above if applicable and stay in character as the LexAI Engine)` }] 
        }
      ],
      config: { temperature }
    } as any);

    res.json({ text: result.text, contextFound: (matches?.length || 0) > 0 });
  } catch (error: any) {
    addLog(`Chat Failure: ${error.message}`, "error");
    res.status(500).json({ error: error.message });
  }
});

export default app;
