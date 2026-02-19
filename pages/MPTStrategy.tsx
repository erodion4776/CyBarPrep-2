import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  Lock, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  BarChart, 
  Zap, 
  Gavel,
  Check,
  Users
} from 'lucide-react';
import MPTLeadModal from '../components/MPTLeadModal';

const MPTStrategy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cynobas/bar-prep-strategy-with-cynthia-azor'
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#C5A059]/30">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0F172A] pt-24 pb-32 px-6 relative overflow-hidden">
        {/* Decorative flair */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[140%] bg-gradient-to-bl from-[#C5A059] to-transparent rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-[#C5A059] text-[10px] uppercase font-bold tracking-[0.2em] mb-8 border border-slate-700"
          >
            <ShieldCheck size={12} /> Strategic Execution Only
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]"
          >
            Finish the MPT in 90 Minutes <br />
            <span className="text-[#C5A059]">With Structure, Not Panic.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Access the Private MPT Strategy Webinar + Capture Matrix Framework <br className="hidden md:block" />
            through a bespoke 1-on-1 Strategy Consultation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={handleBookClick}
              className="w-full sm:w-auto bg-[#C5A059] text-white px-10 py-6 rounded-xl font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-[#b38d4a] transition-all flex items-center justify-center gap-3"
            >
              Book 90-Minute Consultation ($400)
              <Calendar size={18} />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-transparent text-slate-400 border border-slate-700 px-10 py-6 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-3"
            >
              View Free Matrix Intro Slide
              <ArrowRight size={18} />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-50 grayscale contrast-125"
          >
            <span className="text-white font-serif font-bold italic tracking-tighter text-2xl">FOREIGN-TRAINED ADVANTAGE</span>
            <div className="h-4 w-[1px] bg-slate-700 hidden sm:block"></div>
            <span className="text-white font-serif font-bold tracking-tighter text-2xl">LLM COMPLIANT</span>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <section className="py-24 md:py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">The Reality Check</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">If you're being honest...</h3>
            <p className="text-slate-500 font-light text-lg">The MPT isn't failing you because of the law. It's failing you because of the clock.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div 
              {...fadeInUp}
              className="p-10 rounded-2xl bg-white border border-slate-200 shadow-sm"
            >
              <h4 className="flex items-center gap-3 text-red-600 font-bold text-sm uppercase tracking-widest mb-8">
                <XCircle size={18} /> Typical MPT Panic
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start text-slate-600 font-light">
                  <span className="shrink-0 text-red-200 mt-1">❌</span>
                  <span>Spending 45 minutes reading the file and 0 minutes drafting.</span>
                </li>
                <li className="flex gap-4 items-start text-slate-600 font-light">
                  <span className="shrink-0 text-red-200 mt-1">❌</span>
                  <span>Getting lost in the 'Library' and forgetting the 'Client File.'</span>
                </li>
                <li className="flex gap-4 items-start text-slate-600 font-light">
                  <span className="shrink-0 text-red-200 mt-1">❌</span>
                  <span>Writing a perfect introduction but leaving the conclusion blank.</span>
                </li>
                <li className="flex gap-4 items-start text-slate-600 font-light">
                  <span className="shrink-0 text-red-200 mt-1">❌</span>
                  <span>Treating it like a law school exam instead of a professional memo.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="p-10 rounded-2xl bg-slate-900 border border-[#C5A059]/30 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 p-4">
                <Zap className="text-[#C5A059]" size={24} />
              </div>
              <h4 className="flex items-center gap-3 text-[#C5A059] font-bold text-sm uppercase tracking-widest mb-8">
                <CheckCircle2 size={18} /> Our Matrix Structure
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start text-slate-300 font-light">
                  <span className="shrink-0 text-[#C5A059] mt-1">✔</span>
                  <span>Immediate 'Capture' of grading points as you read.</span>
                </li>
                <li className="flex gap-4 items-start text-slate-300 font-light">
                  <span className="shrink-0 text-[#C5A059] mt-1">✔</span>
                  <span>90-Minute breakdown: 35m Analysis, 55m Drafting.</span>
                </li>
                <li className="flex gap-4 items-start text-slate-300 font-light">
                  <span className="shrink-0 text-[#C5A059] mt-1">✔</span>
                  <span>Formatting templates that graders expect from US Lawyers.</span>
                </li>
                <li className="flex gap-4 items-start text-slate-300 font-light">
                  <span className="shrink-0 text-[#C5A059] mt-1">✔</span>
                  <span>Logic-first prioritization of the Library facts.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILT (THE MATRIX) */}
      <section className="py-24 md:py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 text-[#C5A059] font-bold text-xs uppercase tracking-[0.3em] mb-8">
              <Lock size={16} /> Proprietary System
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              The <span className="text-[#C5A059]">Capture Matrix™</span> System
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10">
              Most courses tell you "what" the MPT is. I show you "how" to finish it. 
              The Capture Matrix is a physical framework you use during the exam to link the Library to the File in real-time.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-white/10 rounded flex items-center justify-center shrink-0">
                  <Clock className="text-[#C5A059]" size={20} />
                </div>
                <div>
                  <h5 className="font-bold mb-2">Time Mastery</h5>
                  <p className="text-sm text-slate-500">Stop rereading the same paragraph 5 times.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-white/10 rounded flex items-center justify-center shrink-0">
                  <BarChart className="text-[#C5A059]" size={20} />
                </div>
                <div>
                  <h5 className="font-bold mb-2">Point Extraction</h5>
                  <p className="text-sm text-slate-500">Find the 'Hidden Instructions' that graders use to fail people.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="bg-gradient-to-br from-[#C5A059]/20 to-transparent p-1 rounded-3xl">
              <div className="bg-[#0F172A] p-12 rounded-[calc(1.5rem-4px)] border border-white/5 relative">
                <div className="absolute top-6 left-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Webinar Preview: Module 3</div>
                <div className="space-y-6 pt-8">
                  <div className="h-2 w-32 bg-[#C5A059] rounded"></div>
                  <div className="h-24 w-full bg-slate-800 rounded flex items-center justify-center border border-slate-700">
                    <span className="text-slate-500 italic text-sm font-serif">"The Capture Matrix Visualized"</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-800 rounded"></div>
                    <div className="h-2 w-full bg-slate-800 rounded"></div>
                    <div className="h-2 w-2/3 bg-slate-800 rounded"></div>
                  </div>
                </div>
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-48 bg-[#C5A059]/5 blur-3xl pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY NOT A PDF SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Why isn't this just a PDF?</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
              Execution cannot be read. It must be <span className="text-slate-900 font-bold">taught and practiced.</span> 
              Most foreign-trained attorneys have the law, but lack the rhythmic execution of a US legal practitioner. 
              Our 90-minute live session ensures the Matrix is applied correctly to YOUR writing style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. WHAT YOU GET ($400 PACKAGE) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-12 md:p-16 md:w-2/3">
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8">The MPT Strategic Intensive</h3>
                <div className="space-y-8 mb-12">
                  {[
                    "Private 90-Minute 1-on-1 Strategy Consultation",
                    "The MPT 'Capture Matrix' Framework (Template provided)",
                    "Live analysis of a 'File & Library' together",
                    "Formatting Guide for Memos, Briefs, and Letters",
                    "Bonus: Access to the Private MPT Strategy Webinar"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="h-6 w-6 bg-amber-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="text-[#C5A059]" size={14} strokeWidth={3} />
                      </div>
                      <p className="text-slate-700 font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 p-12 md:p-16 md:w-1/3 text-center flex flex-col justify-center border-l border-white/5">
                <div className="mb-10">
                  <span className="text-slate-400 text-xs uppercase tracking-widest font-bold block mb-4">Investment</span>
                  <div className="text-white text-6xl font-serif font-bold mb-2">$400</div>
                  <span className="text-slate-500 text-xs uppercase tracking-widest">Single Payment</span>
                </div>
                <button
                  onClick={handleBookClick}
                  className="w-full bg-[#C5A059] text-white py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-2xl hover:bg-[#b38d4a] transition-all"
                >
                  Secure Your Slot
                </button>
                <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Limited to 4 seats per week</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. WHO THIS IS FOR */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Who this is for:</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                    <Zap className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">The "1-2 Weeks Out" Candidate</h5>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">You've mastered the law, but your MPTs are still coming back as "Incomplete." You need a tactical fix, now.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                    <Users className="text-[#C5A059]" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">The LLM Graduate</h5>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">You aren't used to the rigid formatting of US Law Firms. We give you the "Grader-Ready" layout.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#0F172A] p-12 rounded-3xl relative"
            >
              <div className="relative z-10">
                <div className="h-1 w-12 bg-[#C5A059] mb-8"></div>
                <p className="text-white text-2xl font-serif italic leading-relaxed mb-8">
                  "I was failing MPTs because I was thinking like a lawyer back home. Cynthia's Matrix showed me how to think like a US bar grader."
                </p>
                <p className="text-[#C5A059] font-bold uppercase tracking-widest text-[10px]">Previous Successful Candidate</p>
              </div>
              <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] bg-gradient-to-br from-[#C5A059]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. PREMIUM POSITIONING */}
      <section className="py-24 md:py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 text-[#C5A059]">The Strategic Contrast</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
              <div className="p-8 border border-white/10 rounded-2xl">
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block mb-4">Other Courses</span>
                <p className="text-2xl font-serif">❌ A 400-page summary of rules.</p>
              </div>
              <div className="p-8 border border-[#C5A059] rounded-2xl bg-[#C5A059]/10">
                <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest block mb-4">Our Intensive</span>
                <p className="text-2xl font-serif">✔ Structured execution for a 270+ score.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
             <div className="inline-flex items-center justify-center h-20 w-20 bg-slate-900 rounded-2xl mb-12 border border-slate-700 shadow-2xl">
              <Gavel size={32} strokeWidth={1.5} className="text-[#C5A059]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">Ready to Master the MPT?</h2>
            <p className="text-xl text-slate-600 font-light mb-16 max-w-2xl mx-auto">
              Secure your 1-on-1 intensive and get the Capture Matrix. 
              Limited slots available for the upcoming Bar Exam window.
            </p>
            <button
              onClick={handleBookClick}
              className="bg-[#C5A059] text-white px-12 py-7 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-2xl shadow-[#C5A059]/20 hover:bg-[#b38d4a] transition-all"
            >
              Book 90-Minute Consultation ($400)
            </button>
            <p className="mt-12 text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Lock size={12} /> Secure Booking via Calendly
            </p>
          </motion.div>
        </div>
      </section>

      <MPTLeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MPTStrategy;