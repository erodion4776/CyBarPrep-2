
import React from 'react';
import { Clock, ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "Mastering the MPT: Why Format is More Important Than Content",
    excerpt: "Most foreign attorneys fail the MPT because they treat it like a conventional law school exam. In reality, it is an exercise in clerical efficiency and instruction adherence.",
    category: "Technical Strategy",
    readTime: "8 min",
    image: "https://i.ibb.co/zTdGtH35/1767934818862-019ba120-0e5f-7229-b2f3-cccd5423fd90.jpg"
  },
  {
    title: "Navigating the U.S. State Eligibility Matrix",
    excerpt: "A deep strategic dive into which jurisdictions allow foreign-trained attorneys to sit for the bar, and the specific hurdles associated with LLM requirements.",
    category: "Regulatory Insights",
    readTime: "12 min",
    image: "https://i.ibb.co/zTdGtH35/1767934818862-019ba120-0e5f-7229-b2f3-cccd5423fd90.jpg"
  },
  {
    title: "Psychological Resilience in Foreign Applicants",
    excerpt: "Studying for a foreign bar exam is as much a mental endurance challenge as it is an academic one. Here is the framework for maintaining cognitive focus.",
    category: "Candidate Mindset",
    readTime: "6 min",
    image: "https://i.ibb.co/zTdGtH35/1767934818862-019ba120-0e5f-7229-b2f3-cccd5423fd90.jpg"
  }
];

const Articles: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="h-1 w-20 bg-[#B4975A] mb-8"></div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">Legal Perspectives</h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Curated strategic insights for the international legal professional navigating U.S. licensure.
            </p>
          </div>
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="hidden md:block"
          >
            <div className="h-24 w-24 border border-slate-200 rounded-full flex items-center justify-center text-slate-300">
               <BookOpen strokeWidth={1} size={40} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {articles.map((article, i) => (
            <motion.article 
              key={i} 
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.1)" }}
              className="group cursor-pointer bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm transition-all duration-500"
            >
              <div className="overflow-hidden aspect-[16/9] border-b border-slate-100">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={article.image} 
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 border-slate-200"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold text-[#B4975A] uppercase tracking-widest">{article.category}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Clock size={12} strokeWidth={2} /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-tight mb-5">
                  {article.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-light line-clamp-3 mb-8">
                  {article.excerpt}
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest group-hover:gap-4 transition-all group-hover:text-[#B4975A]">
                    Read Full Perspective <ChevronRight size={14} strokeWidth={3} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter / CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-16 md:p-24 bg-slate-900 rounded-lg text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B4975A] opacity-5 -translate-y-32 translate-x-32 rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">Deepened Strategic Analysis</h2>
          <p className="text-slate-400 mb-12 text-lg font-light max-w-xl mx-auto">Join our private briefing list for foreign attorneys. Zero noise, strictly high-level bar strategy.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Professional Email" 
              className="flex-grow px-6 py-4 rounded-md bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#B4975A] transition-all"
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#B4975A] text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-[#a3864d] transition-all shadow-xl"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium italic">Confidentiality Assured.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
