
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, BrainCircuit } from 'lucide-react';

const LexAI: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-8 border border-slate-200">
            <Sparkles size={12} className="text-[#B4975A]" /> Powered by LexAI
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            LexAI Legal <span className="text-[#B4975A]">Mentor</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Advanced AI-driven strategic guidance for bar candidates and international legal professionals.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Feature Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 space-y-8 lg:sticky lg:top-32"
          >
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center text-[#B4975A]">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-lg">Smart Mentorship</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cognitive Strategy</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                LexAI Mentor provides real-time strategic analysis and feedback based on thousands of UBE and licensing standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center text-[#B4975A]">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-lg">Secure & Private</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidential Inputs</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Your queries and study strategies are kept completely confidential within the LexAI encrypted environment.
              </p>
            </div>
          </motion.div>

          {/* Embed Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-2/3 w-full"
          >
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', background: 'transparent' }}>
              <iframe 
                src="https://cylawtech.netlify.app/lex-ai-embed?hideHeader=true" 
                style={{ width: '100%', height: '600px', border: 'none' }}
                title="LexAI Assistant"
              ></iframe>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">
                Strategic AI Tooling for Global Attorneys
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LexAI;
