
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { processStrategyQuery, ChatMessage } from '../services/strategyEngine';
import ReactMarkdown from 'react-markdown';

const StrategyChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Welcome to the proprietary CyAzor Strategy Engine. I have engaged three strategic nodes: The Legal Architect, The Bar Grader, and The Mentor. How can we optimize your Bar Exam execution today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const [showPromo, setShowPromo] = useState(false);
  const [promoTitle, setPromoTitle] = useState('');

  const keywords = [
    { word: 'contract', title: 'CyAzor Premium Drafting Template' },
    { word: 'drafting', title: 'CyAzor Premium Drafting Template' },
    { word: 'guide', title: 'The Ultimate Strategy Masterclass' },
    { word: 'mpt', title: 'Elite MPT Strategy Pack' },
    { word: 'mbe', title: 'High-Yield MBE Logic Vault' },
    { word: 'strategy', title: '1-on-1 Strategic Consulting' }
  ];

  const checkPromo = (text: string) => {
    const lowerText = text.toLowerCase();
    const match = keywords.find(k => lowerText.includes(k.word));
    if (match) {
      setPromoTitle(match.title);
      setShowPromo(true);
    } else {
      setShowPromo(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setShowPromo(false);

    const url = import.meta.env.VITE_LEX_AI_URL;
    const apiKey = import.meta.env.VITE_LEX_AI_KEY;
    const siteId = import.meta.env.VITE_LEX_SITE_ID;

    if (!url || !apiKey || !siteId) {
      console.error("Missing LexAI environment variables:", { url, apiKey, siteId });
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "System configuration error: Strategic API endpoints are not fully configured. Please reach out to your administrator to verify VITE_LEX_AI_URL, VITE_LEX_AI_KEY, and VITE_LEX_SITE_ID." 
      }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({
          message: input,
          site: siteId,
          jurisdiction: 'Cyprus',
        })
      });
      
      if (!response.ok) {
        throw new Error(`Strategic link failure: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("LexAI Response:", data);
      const assistantMsg = data.response || "Signal lost. Re-establishing strategic link...";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMsg }]);
      checkPromo(assistantMsg);
    } catch (error) {
      console.error("Strategy Engine Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Strategy Engine synchronization failed. Please try again or check system logs." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[750px] bg-slate-950 rounded-[24px] overflow-hidden border border-white/10 shadow-2xl relative">
      {/* Promo Bolt (Commercial Integration) */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-6 right-6 z-20 w-64 bg-gradient-to-br from-[#B4975A] to-[#8E7947] p-4 rounded-xl shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-white" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Recommended Resource</span>
            </div>
            <h4 className="text-white font-serif font-bold text-sm mb-3 leading-tight">{promoTitle}</h4>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest py-2 rounded-lg border border-white/20 transition-colors">
              Acquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.role === 'user' ? 'bg-[#B4975A] text-white' : 'bg-slate-800 border border-white/10 text-[#B4975A]'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#0F172A] text-white rounded-xl rounded-tr-none shadow-lg' 
                    : 'bg-white text-[#1E293B] border border-[#E2E8F0] rounded-xl rounded-tl-none shadow-sm markdown-body'
                }`}>
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start gap-3"
          >
            <div className="h-8 w-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-[#B4975A]">
              <Loader2 size={16} className="animate-spin" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1 pl-1">
                <Loader2 size={12} className="animate-spin text-[#B4975A]" />
                <span className="text-[10px] text-[#B4975A] font-bold uppercase tracking-[0.2em]">Analyzing Intelligence...</span>
              </div>
              <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl rounded-tl-none shadow-sm h-10 flex items-center">
                <div className="flex gap-1.5 px-1 py-0.5">
                  <motion.span animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} className="h-1.5 w-1.5 bg-[#B4975A] rounded-full"></motion.span>
                  <motion.span animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="h-1.5 w-1.5 bg-[#B4975A] rounded-full"></motion.span>
                  <motion.span animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="h-1.5 w-1.5 bg-[#B4975A] rounded-full"></motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-900 border-t border-white/5">
        <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your current Bar Exam hurdle..."
            disabled={isLoading}
            className="w-full bg-slate-950 text-white border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#B4975A]/50 placeholder:text-slate-600 pr-14 transition-all"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 p-2.5 bg-[#B4975A] text-white rounded-lg hover:bg-[#a3864a] transition-all disabled:opacity-50 disabled:grayscale"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </form>
        <div className="mt-2 flex items-center justify-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
           <span className="flex items-center gap-1"><Sparkles size={10} className="text-[#B4975A]" /> 3 Agent Synthesis Active</span>
           <span className="h-1 w-1 bg-slate-700 rounded-full"></span>
           <span className="flex items-center gap-1 font-black text-slate-400 tracking-tighter">SECURE NODE-L7</span>
           <span className="h-1 w-1 bg-slate-700 rounded-full"></span>
           <span className="flex items-center gap-1 text-[#B4975A]/80 uppercase tracking-widest text-[8px]">Encrypted Strategy Channel</span>
        </div>
      </div>
    </div>
  );
};

export default StrategyChat;
