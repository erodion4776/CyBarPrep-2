
export interface LegalChunk {
  id: string;
  category: 'MPT' | 'MBE' | 'MEE' | 'General' | 'Nigeria' | 'NY' | 'CA';
  title: string;
  content: string;
  keywords: string[];
}

export const LEGAL_CHUNKS: LegalChunk[] = [
  {
    id: 'mpt-1',
    category: 'MPT',
    title: 'The 35/55 Timing Rule',
    content: "The 35/55 Rule is non-negotiable for foreign-trained attorneys. You must spend exactly 35 minutes reading and 'Capturing' data into your Matrix, and 55 minutes strictly for production. If you are still reading at minute 40, you are bleeding points.",
    keywords: ['time', '35/55', 'timing', 'minutes', 'schedule']
  },
  {
    id: 'mpt-2',
    category: 'MPT',
    title: 'The Capture Matrix™',
    content: "The Capture Matrix is the proprietary CyAzor framework where you map 'File Facts' directly to 'Library Rules'. Do not summarize; link. If a rule says 'intent is required', find the fact in the file that proves intent and place them in the same row.",
    keywords: ['matrix', 'capture', 'framework', 'mapping', 'library', 'file']
  },
  {
    id: 'mbe-1',
    category: 'MBE',
    title: 'Evidence: The Hearsay Trap',
    content: "For Hearsay, always ask: 'What is the point of the statement?' If it is to prove the TRUTH of the matter, it's hearsay. If it's for 'Notice' or 'Effect on Listener', it's NOT hearsay. Foreign attorneys often miss this distinction.",
    keywords: ['hearsay', 'evidence', 'FRE', 'truth', 'notice', 'effect']
  },
  {
    id: 'mbe-2',
    category: 'MBE',
    title: 'Contracts: UCC vs Common Law',
    content: "MBE loves the Battle of the Forms (UCC 2-207). Remember: Common Law follows the Mirror Image Rule; UCC does not. If the contract involves goods (shoes, cars, machines), use UCC logic: additional terms can become part of the deal between merchants.",
    keywords: ['contract', 'UCC', 'mirror image', 'common law', 'merchants', '2-207']
  },
  {
    id: 'juris-1',
    category: 'Nigeria',
    title: 'Nigerian vs US Legal Conversion',
    content: "Nigerian practitioners often rely on English Common Law precedents. In the US, especially for the Bar, statutes and the Restatements take precedence. Stop looking for the 'justice' of the case and start looking for the 'mechanical application' of the rule.",
    keywords: ['nigeria', 'conversion', 'precedent', 'common law', 'lagos']
  },
  {
    id: 'juris-2',
    category: 'NY',
    title: 'New York (UBE) Jurisdiction Specifics',
    content: "As a UBE state, New York tests the majority rules. However, for the MPT, you must follow the 'local' laws provided in the Library, even if they contradict General Common Law. The MPT library is the ONLY law that exists during those 90 minutes.",
    keywords: ['new york', 'ny', 'ube', 'jurisdiction', 'library']
  },
  {
    id: 'mbe-3',
    category: 'MBE',
    title: 'Civ Pro: The Erie Doctrine',
    content: "In Diversity cases (28 USC 1332), federal courts apply STATE substantive law and FEDERAL procedural law. If a rule is in the FRCP (Federal Rules of Civil Procedure), it is procedural and takes precedence unless it changes a substantive right.",
    keywords: ['erie', 'civ pro', 'substantive', 'procedural', 'diversity']
  },
  {
    id: 'mpt-3',
    category: 'MPT',
    title: 'Tone and Professionalism',
    content: "Foreign attorneys often write in a high-academic style. The MPT grader wants 'Professional Pragmatism'. Write as if you are a first-year associate writing to a busy senior partner. Be concise. Use bullets for readability.",
    keywords: ['tone', 'writing', 'style', 'academic', 'pragmatism', 'concise']
  }
];
