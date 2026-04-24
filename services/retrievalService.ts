
import { LEGAL_CHUNKS, LegalChunk } from './legalKnowledgeBase';

/**
 * Retrieval Service (RAG Simulation)
 * In a production environment with millions of rows, this would use pgvector.
 * For CyAzor, we use an optimized keyword-weighting and semantic-overlap algorithm.
 */
export const retrieveRelevantLaw = (query: string, maxResults: number = 3): LegalChunk[] => {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\W+/).filter(w => w.length > 2);

  const scores = LEGAL_CHUNKS.map(chunk => {
    let score = 0;
    
    // Keyword match
    chunk.keywords.forEach(keyword => {
      if (queryLower.includes(keyword.toLowerCase())) {
        score += 10;
      }
    });

    // Semantic overlap in content
    queryWords.forEach(word => {
      if (chunk.content.toLowerCase().includes(word)) {
        score += 2;
      }
      if (chunk.title.toLowerCase().includes(word)) {
        score += 5;
      }
    });

    // Category boost
    if (queryLower.includes('nigeria') && chunk.category === 'Nigeria') score += 20;
    if ((queryLower.includes('new york') || queryLower.includes(' ny ')) && chunk.category === 'NY') score += 20;

    return { chunk, score };
  });

  // Sort by score and return top results
  return scores
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(s => s.chunk);
};
