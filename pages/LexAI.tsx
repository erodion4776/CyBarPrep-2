
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, ArrowLeft, Lock } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

import StrategyChat from '../components/StrategyChat';

const LexAI: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isEmbed = searchParams.get('embed') === 'true';

  return (
    <div className={`${isEmbed ? 'bg-transparent' : 'bg-[#0F172A]'} min-h-screen flex flex-col font-sans`}>
      {/* Immersive Header - Hidden in Embed Mode */}
      {!isEmbed && (
        <div className="bg-[#0F172A] border-b border-white/5 px-4 md:px-6 py-4 md:py-5 flex flex-wrap md:flex-nowrap items-center justify-between sticky top-0 z-50 gap-4">
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-400 hover:text-[#B4975A] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Back to Site</span>
            </Link>
            
            <div className="h-px w-6 bg-slate-800 hidden md:block"></div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-white/10 shadow-xl">
                <Sparkles size={18} className="text-[#B4975A]" />
              </div>
              <div>
                <h1 className="text-sm md:text-base font-serif font-bold text-white tracking-wide">CyAzor Strategy Engine</h1>
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none">Internal Node • Native Execution</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Shield size={14} className="text-[#B4975A]" />
            <span className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">End-to-End Encryption</span>
          </div>
        </div>
      )}

      {/* Main Command Center */}
      <main className={`flex-grow flex flex-col items-center ${isEmbed ? 'justify-start p-0' : 'justify-start md:justify-center p-4 pt-4 md:p-8'} relative`}>
        {/* Background Decorative Element */}
        {!isEmbed && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-[#B4975A]/5 to-transparent opacity-20 pointer-events-none blur-[120px]"></div>
        )}

        <motion.div 
          initial={{ opacity: 0, scale: isEmbed ? 0.98 : 1, y: isEmbed ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`w-full ${isEmbed ? 'max-w-none h-screen' : 'max-w-6xl'} relative z-10`}
        >
          {/* Status Bar */}
          {!isEmbed && (
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-[#0F172A] bg-slate-800 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#B4975A]/50"></div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">3 Strategic Nodes Connected</p>
              </div>
              <div className="flex items-center gap-2 text-[#B4975A]">
                <Lock size={12} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Proprietary Nexus</span>
              </div>
            </div>
          )}

          {/* The Embed Frame Replacement */}
          <div className={isEmbed ? 'h-full' : ''}>
            <StrategyChat />
          </div>
          
          {/* Verification Footer */}
          {!isEmbed && (
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-4">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border border-red-500/20">Privileged</span>
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.4em] font-bold text-center md:text-left leading-relaxed">
                  Legal Strategy Simulation • Confidential Environment
                </p>
              </div>
              <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                   <div className="h-1 w-1 bg-[#B4975A] rounded-full"></div>
                   <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Security Audit: Passed</span>
                 </div>
                 <div className="h-4 w-px bg-slate-800"></div>
                 <p className="text-[9px] text-slate-600 font-bold">© 2026 LEX-TECH ADVISORY</p>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default LexAI;
