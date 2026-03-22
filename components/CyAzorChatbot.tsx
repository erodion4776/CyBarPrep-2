import React, { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Shield, Gavel, Send, Settings, Trash2, ChevronRight } from "lucide-react";

const SITE_KNOWLEDGE = `
CYAZOR BAR PREP — COMPLETE SITE KNOWLEDGE BASE

=== ABOUT CYNTHIA AZOR, ESQ. ===
Cynthia Azor, Esq. is a foreign-trained attorney who successfully passed the U.S. Bar Exam on her first sitting by applying focused strategy, disciplined execution, and proven exam skills. She is the Founder & Strategist of CyAzor Bar Prep.

She understands the challenges bar candidates face — whether first-time takers, repeat takers, or those balancing work, family, and other commitments. She believes memorization is essential for bar success, but only when it is intentional, organized, and strategically applied. She teaches candidates how to memorize what matters, apply the law efficiently, manage time effectively, and approach the exam with clarity and confidence.

Her three key philosophical pillars are:
1. Intentional Memorization — focusing on high-yield rules that move the needle for graders, not just rote repetition of thousand-page outlines.
2. Disciplined Execution — building strict formatting and logic-first drafting skills that resonate with U.S. Bar examiners.
3. Proven Exam Skills — applying the same technical strategy Cynthia used to pass on her first attempt, tailored for the foreign attorney perspective.

Contact email: strategic@cyazorbarprep.com

=== WHO CYAZOR BAR PREP SERVES ===
- Foreign-trained legal professionals navigating the U.S. bar admission process
- LLM graduates unfamiliar with U.S. law firm formatting
- First-time takers who want to pass on their first sitting
- Repeat takers who have failed using generic big-box prep courses
- Candidates 1-2 weeks out who need a tactical fix
- Those balancing work, family, and other commitments

=== SERVICES & CONSULTATIONS ===

STEP 1 — Free Initial Case Review (Screening):
- Duration: 15-minute diagnostic screening
- Cost: FREE
- Includes: Situation analysis & Eligibility check, Service fit determination
- Does NOT include: Substantive legal advice, deep-dive strategic mapping, written assignment feedback
- Note: Strictly limited to 15 minutes. Minute 16+ requires an upgrade to a paid session.
- Booking: Via Calendly at https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq

STEP 2 — Paid Professional Services (All $100 each):

A) Full Strategy + Feedback ($100) — MOST POPULAR:
- Initial strategy session (45-60 min)
- Expert review of one assignment
- Detailed follow-up feedback session
- Assignments returned within 3-5 business days
- Does NOT include: Unlimited coaching access, review of multiple assignments

B) Strategy-Only Session ($100):
- Strategic roadmap session (60 min)
- Study planning & resource selection
- Execution timeline development
- Does NOT include: Formal assignment review, written grading feedback

C) Technical Feedback Only ($100):
- Rigorous review of MEE or MPT
- Written feedback on technical execution
- Rubric-based scoring indicators
- Does NOT include: Live strategic consultation, general eligibility advice

D) Eligibility Guidance ($100):
- Pathway evaluation (LLM vs Non-LLM)
- Strategic state selection insights
- Application risk factor assessment
- Does NOT include: Active legal representation, drafting/filing applications
- Disclaimer: Guidance is informational and does not create an attorney-client relationship

BOOKING LINK for paid sessions: https://calendly.com/cynobas/bar-prep-strategy-with-cynthia-azor

=== MPT STRATEGY INTENSIVE ($400) ===
The MPT Strategic Intensive — 90-minute 1-on-1 consultation:
- Private 90-Minute 1-on-1 Strategy Consultation
- The MPT "Capture Matrix" Framework (Template provided)
- Live analysis of a "File & Library" together
- Formatting Guide for Memos, Briefs, and Letters
- Bonus: Access to the Private MPT Strategy Webinar

Limited to 4 seats per week.
Booking: https://calendly.com/cynobas/bar-prep-strategy-with-cynthia-azor

=== THE CAPTURE MATRIX™ SYSTEM ===
Most candidates fail the MPT because of the "Analytic Trap" — they spend 50+ minutes reading and outlining without putting a single point on the actual grading sheet.

The Capture Matrix is a proprietary physical framework used during the exam to link the Library to the File in real-time. It ensures every Library point is immediately linked to a File fact.

The 35/55 Rule:
- 35 minutes for the Analysis phase
- 55 minutes for drafting a polished, professional memo

The Matrix automates US Law Firm formatting — graders look at layout before they read your words. If it doesn't look like a real US law firm memo, you've already lost points.

Key benefits:
- Immediate "Capture" of grading points as you read
- 90-minute breakdown: 35m Analysis, 55m Drafting
- Formatting templates that graders expect from US Lawyers
- Logic-first prioritization of the Library facts
- Stop rereading the same paragraph 5 times (Time Mastery)
- Find the "Hidden Instructions" that graders use to fail people (Point Extraction)

Why not just a PDF? Execution cannot be read — it must be taught and practiced. Most foreign-trained attorneys have the law but lack the rhythmic execution of a US legal practitioner. The 90-minute live session ensures the Matrix is applied correctly to YOUR writing style.

=== CANCELLATION & RESCHEDULING POLICY ===
Any session canceled or rescheduled without at least 24 hours' notice will be considered a "No-Show" and the session fee will be forfeited. These sessions cannot be rescheduled. A valid credit card may be required on file for bookings to prevent no-shows.

=== COURSES & RESOURCES ===
Coming Soon — Golden MPT Strategy eBook:
- 40+ expert pages
- The definitive blueprint to mastering the Multi-state Performance Test
- Learn to manage critical time constraints and formatting nuances

Free Resources (available for download):
1. The Foreign Attorney's Essential Bar Checklist
2. U.S. State Eligibility Multi-Factor Matrix
3. 5 Sample MPT Structural Templates
4. Free Application Guide (for foreign-trained lawyers)

=== APPLICATION & LICENSING GUIDANCE ===
CyAzor Bar Prep provides strategic guidance to help foreign-trained lawyers:
- Understand eligibility requirements
- Prepare required documents
- Navigate the application process to sit for bar and licensing exams in the U.S.

This service focuses on exam application and registration support only — helping avoid delays, confusion, and common filing mistakes.

IMPORTANT DISCLAIMER: This service does not provide exam tutorials or coaching and does not guarantee admission to any exam. Application outcomes depend on individual credentials and the requirements of relevant regulatory authorities.

=== COMMUNITY ===
CyAzor Bar Prep has a Skool Community for peer support and accountability:
- Platform: Skool
- Link: https://www.skool.com/@cynthia-azor-2820?g=cyazor-law-and-digital-hub-1083
- This is for peer support, NOT coaching
- For specific legal eligibility determination or professional grading, engage via private consultation

=== ENGAGEMENT POLICIES ===
Scope of Access: Consultations are professional appointments limited to the duration of the session. No unlimited 24/7 access via messaging or email.
Cancellation: Sessions cannot be rescheduled after a missed appointment.
Follow-up: Additional inquiries or deep-dives require a subsequent booking.
No attorney-client relationship is created through consulting services.

=== FREQUENTLY ASKED QUESTIONS ===
Q: Do you help with the Bar Application process?
A: No. We provide strategic guidance on pathway and state selection based on your profile, but you must handle the formal application submission yourself. Our focus is on the strategy and execution of the exam itself.

Q: Is this for the UBE or California?
A: The strategies primarily apply to the UBE (MEE, MPT, and MBE). However, the fundamental logic is universal. Specific state nuances can be discussed during a tailored 1-on-1 strategy consultation.

Q: What is the turnaround time for feedback?
A: 3-5 business day turnaround for all written feedback.

Q: Can I book a single session without a course?
A: Yes. You can book a "Strategy-Only" session or "Assignment Feedback" independently.

=== KEY BAR EXAM CONCEPTS TAUGHT ===
The IRAC method (Issue, Rule, Application, Conclusion) — the gold standard for bar exam answers.
The difference between knowing the law and applying it for graders.
Specific intent vs. general intent crimes.
Transferred intent doctrine (applies to both Torts and Criminal Law).
The Dormant Commerce Clause framework.
Erie Doctrine — federal courts in diversity cases apply state substantive law.
FRE 404(a) — propensity evidence rules.
FRE 609(b) — 10-year rule for prior convictions.
FRE 804(b)(4) — family history hearsay exception.
Rule 56 summary judgment burden shifting.
Pre-existing duty rule in contracts.
Anticipatory repudiation — requires clear and unequivocal refusal.
Unilateral contract — offeree must know of the offer.
Periodic tenancy from holdover.
Res Judicata (Claim Preclusion) — transactional test.
Arizona v. Gant — vehicle search incident to arrest limitations.
Berghuis v. Thompkins — unambiguous invocation of right to silence.
Felony-murder rule and co-felon liability.
Accretion vs. Avulsion in property law.
Lateral support — strict liability for natural state, negligence for improved land.
Lien theory vs. Title theory for mortgages and joint tenancy.
Race-Notice recording statutes.
Easement by necessity vs. easement by implication.
Structural error (denial of counsel) — not subject to harmless error analysis.
Voluntary intoxication — defense only to specific-intent crimes.
The Rule Against Perpetuities (RAP) — "must vest, if at all, within 21 years of a life in being."
Equitable conversion — buyer bears risk of loss after contract signing.
Burglary — "intent at entry" element is key.
Continuing trespass doctrine for larceny.
Extortion (future threat) vs. Robbery (imminent threat).
Factual impossibility is NOT a defense to attempt.

=== CYAZOR BAR PREP — MISSION STATEMENT ===
CyAzor Bar Prep empowers foreign-trained legal minds through focused, non-traditional bar exam navigation and strategic mastery. The goal is to bridge the gap between foreign legal training and U.S. licensure with a strategic, logic-first approach.

"The bar exam isn't just about knowing the law; it's about knowing how to pass a test. For foreign attorneys, the gap is often in strategy, not knowledge." — Cynthia Azor, Esq.

=== PRICING SUMMARY ===
- Free 15-min strategy call: $0
- All Step 2 consultations (Strategy+Feedback, Strategy-Only, Feedback-Only, Eligibility): $100 each
- MPT Strategic Intensive (90-min 1-on-1 + Capture Matrix): $400
- Golden MPT eBook: Coming Soon
- Free resources (checklists, templates, guide): Free

=== LEGAL NOTICE ===
CyAzor Bar Prep provides informational and strategic consulting. This service does not constitute legal representation, nor does it establish an attorney-client relationship.
`;

const GOLD = "#B4975A";
const DARK = "#0F172A";

const buildSystemPrompt = (extraKnowledge: string) => `
You are the official CyAzor Bar Prep AI Assistant. You help foreign-trained attorneys with questions about bar prep strategy, services offered by CyAzor Bar Prep, and U.S. bar exam concepts.

STRICT RULES:
1. ONLY answer questions based on the knowledge base provided below. Do not invent services, prices, or policies not mentioned.
2. If someone asks something outside of what is in the knowledge base, say: "I don't have specific information on that in my knowledge base — I'd recommend booking a free strategy call with Cynthia at https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq to get a personalized answer."
3. Be warm, professional, and concise. Use short paragraphs.
4. When relevant, always mention the free 15-min strategy call as a next step.
5. Never make up legal advice or specific exam answers beyond what is in the knowledge base.
6. Format responses clearly. Use bullet points when listing multiple items.
7. You represent CyAzor Bar Prep — be encouraging and supportive to candidates who may be stressed.

KNOWLEDGE BASE:
${SITE_KNOWLEDGE}

${extraKnowledge ? `\nADDITIONAL KNOWLEDGE ADDED BY ADMIN:\n${extraKnowledge}` : ""}
`;

const Spinner = () => (
  <div className="flex gap-1 items-center py-1">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </div>
);

export default function CyAzorChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("chat");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm the CyAzor Bar Prep AI Assistant. I can help you with questions about bar exam strategy, our services, eligibility guidance, and more. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [extraKnowledge, setExtraKnowledge] = useState("");
  const [adminDraft, setAdminDraft] = useState("");
  const [adminSaved, setAdminSaved] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminError, setAdminError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const ADMIN_PASS = "cyazor2026";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: buildSystemPrompt(extraKnowledge)
        }
      });

      // Prepare history if needed, but the ai.chats.create doesn't take history directly in the same way as startChat.
      // Actually, we can just send the message.
      const result = await chat.sendMessage({ message: text });
      const reply = result.text || "Sorry, I couldn't process that. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASS) {
      setAdminUnlocked(true);
      setAdminDraft(extraKnowledge);
      setAdminError("");
    } else {
      setAdminError("Incorrect password.");
    }
  };

  const handleAdminSave = () => {
    setExtraKnowledge(adminDraft);
    setAdminSaved(true);
    setTimeout(() => setAdminSaved(false), 2500);
  };

  const handleClearChat = () => {
    setMessages([{ role: "assistant", content: "Hi! I'm the CyAzor Bar Prep AI Assistant. I can help you with questions about bar exam strategy, our services, eligibility guidance, and more. How can I help you today?" }]);
  };

  const suggestions = [
    "What services do you offer?",
    "How does the Capture Matrix work?",
    "What's included in the $100 consultation?",
    "How do I book a free strategy call?",
    "What is the MPT Strategic Intensive?",
  ];

  const renderMessage = (content: string) => {
    const parts = content.split(/(\*\*[^*]+\*\*|\n)/g);
    return parts.map((part, i) => {
      if (part === "\n") return <br key={i} />;
      if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-slate-900 text-[#B4975A] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#B4975A] flex items-center justify-center text-white">
                  <Gavel size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-none">CyAzor Bar Prep</div>
                  <div className="text-[#B4975A] text-[10px] font-bold tracking-widest uppercase mt-1">AI Assistant</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTab("chat")}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest transition-colors ${tab === "chat" ? "bg-[#B4975A] text-white" : "bg-slate-800 text-slate-400"}`}
                >Chat</button>
                <button
                  onClick={() => setTab("admin")}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${tab === "admin" ? "bg-[#B4975A] text-white" : "bg-slate-800 text-slate-400"}`}
                >
                  <Settings size={12} /> Admin
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex flex-col bg-slate-50">
              {tab === "chat" ? (
                <>
                  <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-[#B4975A] text-white rounded-tr-none" : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm"}`}>
                          {renderMessage(msg.content)}
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                          <Spinner />
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggestions */}
                  {messages.length <= 1 && (
                    <div className="px-4 py-2 flex flex-wrap gap-2">
                      {suggestions.map((s, i) => (
                        <button key={i} onClick={() => { setInput(s); setTimeout(() => inputRef.current?.focus(), 50); }}
                          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#B4975A] text-[#B4975A] hover:bg-[#B4975A] hover:text-white transition-colors">
                          {s}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 bg-white border-t border-slate-200 flex gap-2 items-end">
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      placeholder="Ask a question..."
                      rows={1}
                      className="flex-1 resize-none border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B4975A] focus:border-transparent transition-all max-h-32"
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = Math.min(target.scrollHeight, 128) + "px";
                      }}
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!input.trim() || loading}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${!input.trim() || loading ? "bg-slate-100 text-slate-300" : "bg-slate-900 text-[#B4975A] shadow-lg"}`}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <div className="px-4 pb-4 bg-white flex justify-between items-center">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Sourced from CyAzor Knowledge Base</span>
                    <button onClick={handleClearChat} className="text-[9px] text-slate-400 font-bold uppercase tracking-widest hover:text-red-500 flex items-center gap-1">
                      <Trash2 size={10} /> Clear
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex-1 overflow-y-auto p-6">
                  {!adminUnlocked ? (
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">Admin Access</h4>
                      <input
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                        placeholder="Enter password"
                        className="w-full border border-slate-200 rounded-xl p-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#B4975A]"
                      />
                      {adminError && <div className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">{adminError}</div>}
                      <button onClick={handleAdminLogin} className="w-full bg-slate-900 text-white p-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                        Unlock
                      </button>
                      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 text-[10px] text-slate-500 leading-relaxed">
                        <span className="font-bold text-slate-900">Demo password:</span> cyazor2026
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">Extra Knowledge</h4>
                        <p className="text-[10px] text-slate-500 mb-4 leading-relaxed">Add custom context that the AI should know. This is stored locally for this session.</p>
                        <textarea
                          value={adminDraft}
                          onChange={(e) => setAdminDraft(e.target.value)}
                          placeholder="Add new services, pricing, or FAQs..."
                          rows={8}
                          className="w-full border border-slate-200 rounded-xl p-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#B4975A] resize-none"
                        />
                        <div className="flex items-center gap-4">
                          <button onClick={handleAdminSave} className="flex-1 bg-[#B4975A] text-white p-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#a3864d] transition-colors">
                            Save Knowledge
                          </button>
                          {adminSaved && <span className="text-green-600 text-[10px] font-bold uppercase tracking-widest">Saved!</span>}
                        </div>
                      </div>
                      <div className="p-4 bg-slate-900 rounded-2xl text-[10px] text-slate-400 leading-relaxed border border-slate-800">
                        <span className="text-[#B4975A] font-bold uppercase tracking-widest block mb-1">How it works</span>
                        The AI combines the built-in site knowledge with your custom additions to provide accurate, brand-safe answers.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
