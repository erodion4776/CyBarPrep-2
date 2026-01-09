
import React from 'react';
import { Download, Star, Clock, Check, ChevronRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const Courses: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="h-1 w-20 bg-[#B4975A] mb-8"></div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">Strategic Resources</h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl leading-relaxed">
            High-value assets and intensive final programs designed to bridge the gap between foreign legal training and U.S. exam success.
          </p>
        </motion.div>

        {/* Paid Products */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Signature Programs</h2>
            <div className="h-[1px] bg-slate-100 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product 1 */}
            <motion.div 
              {...fadeInUp}
              whileHover={{ y: -5, borderColor: "#cbd5e1" }}
              className="group bg-[#F8FAFC] border border-slate-200 rounded-lg p-12 relative transition-all overflow-hidden"
            >
              <div className="absolute top-8 right-8 bg-[#B4975A] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm">
                Reserve Now
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Golden MPT Strategy eBook</h3>
              <p className="text-slate-600 mb-10 leading-relaxed font-light text-lg">
                The definitive blueprint to mastering the Multi-state Performance Test. Learn to manage critical time constraints and formatting nuances with elite precision.
              </p>
              <div className="flex items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
                <div className="flex items-center gap-2">
                  <Star size={16} strokeWidth={2} className="text-[#B4975A]" /> 40+ Expert Pages
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} strokeWidth={2} /> Instant Access
                </div>
              </div>
              <button disabled className="w-full py-5 rounded-md bg-white border border-slate-200 text-slate-400 font-bold uppercase tracking-widest text-xs cursor-not-allowed transition-all">
                Coming Soon — Late 2024
              </button>
            </motion.div>

            {/* Product 2 */}
            <motion.div 
              {...fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.5)" }}
              className="group bg-slate-900 text-white rounded-lg p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#B4975A] opacity-10 rounded-full blur-3xl"></div>
              <h3 className="text-3xl font-serif font-bold mb-6">1-Month Final Sprint</h3>
              <p className="text-slate-300 mb-10 leading-relaxed font-light text-lg">
                The high-intensity finish line protocol. Exactly what to focus on in the final 30 days to optimize your score and clear the passing threshold.
              </p>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4 text-sm font-medium text-slate-100">
                  <Check size={18} strokeWidth={3} className="text-[#B4975A] shrink-0 mt-0.5" />
                  Structured day-by-day execution schedule
                </li>
                <li className="flex items-start gap-4 text-sm font-medium text-slate-100">
                  <Check size={18} strokeWidth={3} className="text-[#B4975A] shrink-0 mt-0.5" />
                  High-yield strategy video module library
                </li>
                <li className="flex items-start gap-4 text-sm font-medium text-slate-100">
                  <Check size={18} strokeWidth={3} className="text-[#B4975A] shrink-0 mt-0.5" />
                  Issue-spotting logic for foreign applicants
                </li>
              </ul>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-md bg-[#B4975A] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#a3864d] transition-all flex items-center justify-center gap-2"
              >
                Enroll Today — $149
                <ChevronRight size={16} strokeWidth={3} />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Free Resources */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Knowledge Base</h2>
            <div className="h-[1px] bg-slate-100 flex-grow"></div>
          </div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              "The Foreign Attorney's Essential Bar Checklist",
              "U.S. State Eligibility Multi-Factor Matrix",
              "5 Sample MPT Structural Templates"
            ].map((title, i) => (
              <motion.div 
                key={i} 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, borderColor: "#94a3b8", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                className="bg-white border border-slate-200 p-8 rounded-lg flex flex-col justify-between transition-all group"
              >
                <div className="h-12 w-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <FileText strokeWidth={1.5} size={24} />
                </div>
                <h4 className="font-serif font-bold text-xl text-slate-900 mb-6 leading-snug">{title}</h4>
                <a href="#" className="text-[11px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2 group-hover:text-[#B4975A] transition-colors">
                  Download Complimentary PDF <Download size={14} strokeWidth={2.5} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
