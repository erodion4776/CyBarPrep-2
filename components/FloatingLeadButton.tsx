import React from 'react';
import { Calendar, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingLeadButton = () => {
  const handleClick = () => {
    // Trigger Calendly Pop-up
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq'
      });
    } else {
      console.error("Calendly script not loaded yet");
    }
  };

  return (
    <motion.button
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-[#0F172A] text-white px-5 py-3 rounded-full shadow-2xl border border-[#EAB308] hover:bg-[#1E293B] transition-all group"
    >
      <div className="relative">
        <Calendar className="w-5 h-5" />
        <Gift className="w-3 h-3 absolute -top-1 -right-2 text-[#FACC15]" />
      </div>
      <span className="font-semibold text-sm tracking-wide">
        Book Free Call & Resources
      </span>
      {/* Subtle pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#EAB308]/10 animate-ping pointer-events-none"></span>
    </motion.button>
  );
};

export default FloatingLeadButton;