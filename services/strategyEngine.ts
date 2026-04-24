
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";
import { HfInference } from "@huggingface/inference";
import { KNOWLEDGE_BASE } from "./knowledgeBase";
import { getSupabase } from "./supabaseClient";
import { generateEmbedding } from "./embeddingService";

const geminiAi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const getGroq = () => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  if (!apiKey) return null;
  return new Groq({ apiKey, dangerouslyAllowBrowser: true });
};

const getHf = () => {
  const token = import.meta.env.VITE_HF_TOKEN;
  if (!token) return null;
  return new HfInference(token);
};

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * LexAI Strategy Engine: Multi-Model prioritized RAG chain.
 * FALLBACK CHAIN: Groq (Mixtral) -> Gemini (1.5 Flash) -> HuggingFace.
 */
export const processStrategyQuery = async (userMessage: string, history: ChatMessage[]) => {
  let contextStrings = "";

  // 1. CLOUD RAG STEP: Vector Search via Supabase
  const supabase = getSupabase();
  if (supabase) {
    try {
      const queryVector = await generateEmbedding(userMessage);
      const { data: dbChunks, error } = await supabase.rpc('match_knowledge', {
        query_embedding: queryVector,
        match_threshold: 0.7,
        match_count: 5,
      });

      if (dbChunks && !error) {
        contextStrings = dbChunks.map((c: any) => `[RELEVANT LAW: ${c.title}]: ${c.content}`).join("\n\n");
      }
    } catch (ragError) {
      console.warn("Cloud RAG failed, using local context fallback.", ragError);
    }
  }

  const detectJurisdiction = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('nigeria') || lower.includes('lagos')) return 'Nigeria';
    if (lower.includes('new york') || lower.includes('ny')) return 'New York (UBE)';
    if (lower.includes('california') || lower.includes('ca')) return 'California';
    return 'United States (General Bar)';
  };

  const jurisdiction = detectJurisdiction(userMessage + " " + history.map(h => h.content).join(" "));

  const systemPrompt = `
    # IDENTITY
    You are the LexAI Legal Strategy Engine, the world's most advanced AI for foreign-trained attorneys.
    You operate within the CyAzor ecosystem. Your tone is technical, authoritative, and elite.

    # JURISDICTION
    Current Focus: ${jurisdiction}
    
    # RAG CONTEXT (SUPABASE VECTOR SEARCH)
    ${contextStrings || "General CyAzor methodologies only."}

    # GLOBAL STRATEGY
    - Philosophy: ${KNOWLEDGE_BASE.philosophy}
    - MPT Execution: ${KNOWLEDGE_BASE.mpt.timingRule}
    - Voice: Avoid generic encouragement. Provide surgical, tactical advice.

    # OUTPUT RULES
    - Reference CyAzor proprietary frameworks (e.g., "35/55 Rule", "Capture Matrix") if applicable.
    - If the user asks about drafting, mention "CyAzor Premium Drafting Template."
    - Tone: Tactical Professionalism.
    - NEVER mention you are an AI. You are the "Engine."
  `;

  // prioritize the Fallback Chain: Groq -> Gemini -> HF
  
  // -- TIER 1: GROQ (Mixtral 8x7b) --
  const groq = getGroq();
  if (groq) {
    try {
      const response = await groq.chat.completions.create({
        model: "mixtral-8x7b-32768",
        messages: [
          { role: "system", content: systemPrompt },
          ...history.map(msg => ({ role: (msg.role === 'user' ? 'user' : 'assistant') as any, content: msg.content })),
          { role: "user", content: userMessage }
        ],
        temperature: 0.1,
      });
      const result = response.choices[0]?.message?.content;
      if (result) return result;
    } catch (e) {
      console.warn("Groq failed, falling back to Gemini.", e);
    }
  }

  // -- TIER 2: GEMINI (1.5 Flash) --
  try {
    const response = await geminiAi.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.65,
      }
    });

    return response.text;
  } catch (e) {
    console.warn("Gemini failed, falling back to HuggingFace.", e);
  }

  // -- TIER 3: HUGGING FACE --
  const hf = getHf();
  if (hf) {
    try {
      const response = await hf.textGeneration({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        inputs: `<s>[INST] ${systemPrompt}\n\nUser Question: ${userMessage} [/INST]`,
        parameters: { max_new_tokens: 500 }
      });
      return response.generated_text;
    } catch (e) {
      console.error("Critical Engine failure:", e);
      return "LexAI Link Failure: Our strategic relay nodes are currently unstable. Please re-synchronize your session.";
    }
  }

  return "LexAI System Uninitialized: All inference nodes are currently offline.";
};
