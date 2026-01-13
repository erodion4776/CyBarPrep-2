import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

const FloatingLeadButton: React.FC = () => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal'));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="relative group bg-slate-900 text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl shadow-slate-900/40 hover:bg-slate-800 transition-all border border-slate-800"
      >
        {/* Animated Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#B4975A]/20 animate-ping pointer-events-none group-hover:animate-none"></span>
        
        <div className="relative flex items-center gap-3 font-semibold text-sm tracking-wide">
          <div className="bg-[#B4975A] p-2 rounded-full">
            <Gift size={16} className="text-white" />
          </div>
          <span>Get Free Guide</span>
          <Sparkles size={14} className="text-[#B4975A] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.button>
    </motion.div>
  );
};

export default FloatingLeadButton;