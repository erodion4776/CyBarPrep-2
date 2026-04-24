
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Lock, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StrategyTeaser: React.FC = () => {
  return (
    <div className="bg-[#0F172A] rounded-3xl p-1 shadow-2xl border border-[#B4975A]/20 overflow-hidden group">
      <div className="bg-slate-900 rounded-[calc(1.5rem-4px)] p-8 relative overflow-hidden h-[600px] flex flex-col">
        {/* Animated Background Overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B4975A]/5 rounded-full blur-3xl group-hover:bg-[#B4975A]/10 transition-all duration-700"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#B4975A]/10 rounded-xl flex items-center justify-center border border-[#B4975A]/20">
              <BrainCircuit className="text-[#B4975A]" size={20} />
            </div>
            <div>
              <h4 className="text-white font-serif font-bold tracking-wide">CyAzor Engine</h4>
              <p className="text-[9px] text-[#B4975A] font-bold uppercase tracking-widest">3 Nodes Active</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/5">
            <Shield size={12} className="text-slate-400" />
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">End-to-End</span>
          </div>
        </div>

        {/* Simulated Chat Content */}
        <div className="flex-grow space-y-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-start gap-4"
          >
            <div className="h-8 w-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-[#B4975A] shrink-0">
              <Sparkles size={14} />
            </div>
            <div className="bg-slate-800/50 border border-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
              <p className="text-[11px] text-slate-300 leading-relaxed italic">
                "I've analyzed your logic on the Dormant Commerce Clause. The architect recommends the 'Logic-First' approach to avoid common US specific traps..."
              </p>
            </div>
          </motion.div>

          {/* User Mock Msg */}
          <div className="flex justify-end">
            <div className="bg-[#B4975A] p-4 rounded-2xl rounded-tr-none max-w-[80%]">
              <p className="text-[11px] text-white leading-relaxed">
                "How do I apply the 35/55 rule to this MPT file?"
              </p>
            </div>
          </div>

          {/* Engine Response Mock */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="h-8 w-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-[#B4975A] shrink-0">
              <Sparkles size={14} />
            </div>
            <div className="bg-slate-800/50 border border-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
              <p className="text-[11px] text-slate-300 leading-relaxed">
                "Cynthia here. Break your analysis into exactly 35 minutes for point extraction using the Capture Matrix..."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
          <Link 
            to="/lex-ai" 
            className="w-full bg-[#B4975A] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-[#a3864a] transition-all group/btn shadow-xl shadow-black/20"
          >
            Launch Full Strategy Engine
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <div className="mt-4 flex items-center justify-center gap-2 opacity-30">
            <Lock size={10} className="text-white" />
            <span className="text-[8px] text-white font-bold uppercase tracking-widest">Proprietary Nexus Synchronization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyTeaser;
