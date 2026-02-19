import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lock, Calendar, Zap, FileText, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    title: "The #1 Reason Foreign Attorneys Fail the MPT",
    content: "It's not language. It's not the law. It's the **Analytic Trap.** Most candidates spend 50+ minutes reading and outlining without putting a single point on the actual grading sheet.",
    badge: "Module 1: The Mindset",
    icon: Zap
  },
  {
    title: "Introducing: The Capture Matrix",
    content: "Instead of taking notes on scrap paper, you build your answer **inside** the Capture Matrix. This ensures that every Library point is immediately linked to a File fact.",
    badge: "Module 2: The Tool",
    icon: Lock
  },
  {
    title: "Analysis vs. Drafting (The 35/55 Rule)",
    content: "The Matrix allows you to finish your Analysis phase in exactly 35 minutes. This leaves 55 full minutes for drafting a polished, professional memo that US graders recognize.",
    badge: "Module 3: Timing",
    icon: FileText
  },
  {
    title: "Formatting: The 'US Firm' Standard",
    content: "Graders look at your layout before they read your words. If it doesn't look like a real US law firm memo, you've already lost points. The Matrix automates this for you.",
    badge: "Module 4: Presentation",
    icon: CheckCircle2
  },
  {
    title: "Ready to Master the Matrix?",
    content: "The slides are the 'What'. The 90-minute Intensive is the 'How'. Let's work together to ensure you finish every MPT with time to spare.",
    badge: "Next Steps",
    icon: Calendar,
    isFinal: true
  }
];

const MPTResource: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleBookClick = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cynobas/bar-prep-strategy-with-cynthia-azor'
      });
    }
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="bg-[#0F172A] min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-12">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${
                i <= currentSlide ? 'bg-[#C5A059]' : 'bg-slate-800'
              }`}
            />
          ))}
        </div>

        <div className="relative min-h-[500px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-3xl p-10 md:p-20 shadow-2xl w-full relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#C5A059] text-[10px] uppercase font-bold tracking-[0.2em] mb-10 border border-slate-200">
                  {activeSlide.badge}
                </div>
                
                <div className="h-16 w-16 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center mb-10 text-[#C5A059]">
                  <activeSlide.icon size={32} strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                  {activeSlide.title}
                </h2>

                <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                  {activeSlide.content}
                </p>

                {activeSlide.isFinal && (
                  <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={handleBookClick}
                    className="mt-12 bg-[#C5A059] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-[#b38d4a] transition-all flex items-center gap-3"
                  >
                    Book Your Intensive ($400)
                    <ChevronRight size={18} strokeWidth={3} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all ${
              currentSlide === 0 ? 'text-slate-700 opacity-20 cursor-not-allowed' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ChevronLeft size={18} /> Previous
          </button>
          
          <p className="text-slate-500 font-mono text-sm">
            {currentSlide + 1} / {slides.length}
          </p>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all ${
              currentSlide === slides.length - 1 ? 'text-slate-700 opacity-20 cursor-not-allowed' : 'text-[#C5A059] hover:text-[#b38d4a]'
            }`}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-20 text-center">
           <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium italic">
             Proprietary Information of CyAzor Bar Prep. Confidential.
           </p>
        </div>
      </div>
    </div>
  );
};

export default MPTResource;