import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Generates 768-dimensional embeddings using Gemini's text-embedding-004.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const result = await ai.models.embedContent({
      model: "text-embedding-004",
      contents: [{ parts: [{ text }] }]
    });
    
    // text-embedding-004 is 768 dimensions.
    const values = result.embeddings?.[0]?.values;
    if (!values) throw new Error("No embedding values returned from Gemini.");
    return values;
  } catch (error) {
    console.error("Embedding generation failed:", error);
    throw error;
  }
}
