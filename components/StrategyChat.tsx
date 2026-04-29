
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, Loader2, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
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
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const [configStatus, setConfigStatus] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const checkConnection = async () => {
    try {
      setConnectionStatus('checking');
      const [healthRes, configRes] = await Promise.all([
        fetch('/api/health'),
        fetch('/api/lex-config-status')
      ]);
      
      const configData = await configRes.json();
      setConfigStatus(configData);

      if (healthRes.ok) {
        setConnectionStatus('connected');
      } else {
        setConnectionStatus('error');
      }
    } catch (err) {
      setConnectionStatus('error');
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

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

    try {
      const response = await fetch('/api/lex-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          jurisdiction: 'Cyprus',
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        const errorMsg = errorData.error || `Strategic link failure: ${response.status}`;
        const detailInfo = errorData.details ? JSON.stringify(errorData.details, null, 2) : 'No extra details';
        const siteInfo = errorData.site_used ? ` [Site: ${errorData.site_used}]` : '';
        const endpointInfo = errorData.endpoint_prefix ? ` [Endpoint: ${errorData.endpoint_prefix}...]` : '';
        
        setDebugInfo(`
          ERROR: ${errorMsg}
          STATUS: ${response.status}
          ${siteInfo}
          ${endpointInfo}
          
          RAW DETAILS:
          ${detailInfo}
        `.trim());
        
        throw new Error(errorMsg);
      }

      const data = await response.json();
      console.log("LexAI Proxy Response:", data);
      const assistantMsg = data.response || "Signal lost. Re-establishing strategic link...";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMsg }]);
      setDebugInfo(null);
      checkPromo(assistantMsg);
    } catch (error: any) {
      console.error("Strategy Engine Error:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `**CRITICAL ERROR:** ${error.message}\n\nStrategic links are down. This usually happens when environment variables (API Key/URL) are missing or incorrect in the server.` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[750px] bg-slate-950 rounded-[24px] overflow-hidden border border-white/10 shadow-2xl relative">
      {/* Connection Status & Debug Info */}
      <div className="absolute top-4 left-6 z-20 flex flex-col gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full border border-white/5">
          <motion.div 
            animate={{ opacity: connectionStatus === 'checking' ? [0.3, 1, 0.3] : 1 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={`h-2 w-2 rounded-full ${
              connectionStatus === 'connected' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 
              connectionStatus === 'error' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]' : 
              'bg-amber-500'
            }`} 
          />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {connectionStatus === 'connected' ? 'Nexus Live' : 
             connectionStatus === 'error' ? 'Nexus Offline' : 
             'Syncing Nexus...'}
          </span>
          {connectionStatus === 'error' && (
            <button 
              onClick={checkConnection}
              className="ml-2 hover:text-white transition-colors"
              title="Retry Nexus Sync"
            >
              <RefreshCw size={10} />
            </button>
          )}
        </div>
        {debugInfo && (
          <div className="flex flex-col gap-1 p-3 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20 font-mono text-[9px] max-w-[280px] shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-1 mb-1">
              <div className="flex items-center gap-2">
                <AlertCircle size={10} />
                <span className="font-bold">ENGINE DIAGNOSTIC</span>
              </div>
              <button onClick={() => setDebugInfo(null)} className="opacity-50 hover:opacity-100">×</button>
            </div>
            <div className="max-h-[150px] overflow-y-auto whitespace-pre-wrap break-all pr-2">
              {debugInfo}
            </div>
            {configStatus && (
              <div className="mt-2 pt-2 border-t border-rose-500/20 text-[8px] opacity-70">
                <p>Config Check:</p>
                <p>URL: {configStatus.url_preview} {configStatus.url_set ? '✅' : '❌'}</p>
                <p>KEY: {configStatus.key_preview} {configStatus.key_set ? '✅' : '❌'}</p>
                <p>SITE: {configStatus.site_preview} {configStatus.site_set ? '✅' : '❌'}</p>
              </div>
            )}
          </div>
        )}
      </div>

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
