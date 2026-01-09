
import React from 'react';
import { ExternalLink, ShieldAlert, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
  return (
    <div className="py-24 md:py-48 px-6 bg-slate-900 text-white min-h-[90vh] flex items-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[150px]"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center h-20 w-20 bg-slate-800 rounded-2xl mb-12 border border-slate-700"
        >
          <MessageSquare size={32} strokeWidth={1.5} className="text-[#B4975A]" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight"
        >
          Peer Support, <br /><span className="italic font-normal text-slate-400">Not Coaching.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed font-light max-w-2xl mx-auto"
        >
          Connect with a global network of foreign-trained legal professionals in a dedicated space for peer accountability and shared insights.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm p-10 rounded-lg mb-16 text-left flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="h-10 w-10 bg-[#B4975A]/20 rounded-full flex items-center justify-center shrink-0">
            <ShieldAlert className="text-[#B4975A]" size={20} strokeWidth={2} />
          </div>
          <div>
            <h4 className="font-bold mb-2 uppercase tracking-widest text-xs text-white">Community Standard</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              This space is for encouragement and navigation support. For specific legal eligibility determination or professional grading, please engage via a private consultation.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#B4975A", color: "#ffffff" }}
            whileTap={{ scale: 0.98 }}
            href="https://skool.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-6 rounded-md font-bold transition-all text-sm uppercase tracking-widest shadow-2xl"
          >
            Access Skool Community
            <ExternalLink size={18} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
