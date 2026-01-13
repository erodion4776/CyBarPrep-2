import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Users, Shield, Star, ChevronDown, ChevronUp, AlertCircle, CheckCircle, FileText, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BarQuizSection from '../components/BarQuizSection';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#B4975A] transition-colors">
          {question}
        </span>
        {isOpen ? <ChevronUp size={20} className="text-[#B4975A]" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-600 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home: React.FC = () => {
  const handleBookClick = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal'));
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-40 md:pb-48 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <motion.div 
              className="text-left order-1"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-6 md:mb-8 border border-slate-200"
              >
                <Shield size={12} strokeWidth={2} /> Independent Legal Strategy
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-7xl xl:text-8xl font-bold font-serif text-slate-900 mb-6 md:mb-10 leading-[1.1] tracking-tight"
              >
                Strategic Bar Exam <br /><span className="text-[#B4975A]">Guidance</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-xl leading-relaxed font-light"
              >
                One-on-one strategy, focused feedback, and practical execution — not a traditional corporate bar prep course.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-start items-center gap-4 md:gap-6 mb-12"
              >
                <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={handleBookClick}
                    className="w-full bg-slate-900 text-white px-10 py-5 rounded-md font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-center"
                  >
                    Book Free Case Review
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </button>
                </motion.div>
                
                <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/courses"
                    className="w-full bg-transparent text-slate-900 border-2 border-slate-900 px-10 py-[1.15rem] rounded-md font-semibold hover:bg-slate-900 hover:text-white transition-all text-center"
                  >
                    Explore Courses
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold"
              >
                Limited scope. Strategic Focus. Targeted Results.
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="relative w-full order-2 lg:h-[600px]"
            >
              <img 
                src="https://i.ibb.co/Zz61FvNW/1767934656153-019ba11d-b570-747f-833f-a2358a9268c2.jpg" 
                alt="Strategic Legal Guidance" 
                className="w-full h-64 md:h-[400px] lg:h-full object-cover rounded-2xl shadow-2xl border border-slate-200"
              />
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-lg shadow-xl border border-slate-100 max-w-[240px] md:max-w-xs z-20">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Consultations</span>
                </div>
                <p className="text-xs md:text-sm font-medium text-slate-800 leading-snug italic">
                  "Bridge the gap between foreign legal training and US licensure requirements."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle background flair */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none"
        >
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B4975A] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-900 rounded-full blur-[120px]"></div>
        </motion.div>
      </section>

      {/* Positioning Statement Section */}
      <section className="py-24 md:py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-10 md:p-20 rounded-lg border border-slate-200 shadow-xl relative overflow-hidden text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#B4975A] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              Our Core Philosophy
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-slate-900 italic">"Focused on your success, not a corporate bottom line."</h2>
            <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
              I am an independent attorney providing strategic bar exam guidance based on real-world experience. I am not a traditional bar prep company, and services are limited in scope and clearly defined for maximum impact.
            </p>
          </div>
        </motion.div>
      </section>

      {/* BAR REALITY CHECK QUIZ */}
      <BarQuizSection />

      {/* THE CYAZOR DIFFERENCE */}
      <section className="py-24 md:py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Don't just write. <span className="text-[#B4975A]">Write to Pass.</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              We bridge the gap between knowing the law and applying it for the graders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8 lg:p-12 relative"
            >
              <div className="absolute top-6 right-8 inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-[10px]">
                <AlertCircle size={14} /> Low Scoring
              </div>
              <h4 className="text-[#B4975A] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Generic Bar Answer</h4>
              <p className="text-xl md:text-2xl font-serif italic text-slate-300 leading-relaxed mb-8">
                "The defendant is liable because he was negligent. He failed to exercise the duty of care that a reasonable person would have used under the circumstances."
              </p>
              <div className="pt-6 border-t border-red-900/20">
                <p className="text-xs text-red-400/80 font-medium">Lacks specific factual integration and technical application of the legal standard.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-950/20 border border-[#B4975A]/40 rounded-2xl p-8 lg:p-12 relative"
            >
              <div className="absolute top-6 right-8 inline-flex items-center gap-2 text-[#B4975A] font-bold uppercase tracking-widest text-[10px]">
                <CheckCircle size={14} /> Passing Score
              </div>
              <h4 className="text-[#B4975A] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">CyAzor Bar Prep Strategy</h4>
              <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-8">
                "The defendant breached his duty of care when he failed to secure the construction site, despite the high volume of pedestrian traffic. This failure created a foreseeable risk..."
              </p>
              <div className="pt-6 border-t border-green-900/20">
                <p className="text-xs text-[#B4975A] font-medium">Demonstrates IRAC precision, exhaustive factual application, and grader-ready organization.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENT SUCCESS STORIES */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Client Success Stories</h2>
            <div className="h-1 w-20 bg-[#B4975A] mx-auto"></div>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                text: "I failed twice using big box prep courses. CyAzor Bar Prep fixed my MPT structure in one session. The difference was night and day.",
                author: "Foreign-Trained Attorney, NY Bar"
              },
              {
                text: "The strategy feedback was brutally honest and exactly what I needed. For the first time, I actually felt like I was writing like a US lawyer.",
                author: "LLM Graduate, CA Bar"
              },
              {
                text: "Finally, someone who understands the foreign applicant's struggle with logic and timing. This is high-level guidance you won't find anywhere else.",
                author: "Practitioner, International Firm"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-slate-50 border border-slate-100 p-10 rounded-2xl flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#B4975A" className="text-[#B4975A]" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 italic font-light leading-relaxed flex-grow mb-8">
                  "{testimonial.text}"
                </p>
                <div className="pt-6 border-t border-slate-200">
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-widest">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW LEAD MAGNET SECTION */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative border border-slate-800"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[140%] bg-gradient-to-bl from-[#B4975A] to-transparent rounded-full blur-[100px]"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              <div className="p-12 md:p-20 lg:w-3/5 text-center lg:text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-[#B4975A] text-[10px] uppercase font-bold tracking-[0.2em] mb-8 border border-slate-700">
                  <FileText size={12} /> Strategic Advantage
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Not ready to book? <br />
                  <span className="text-[#B4975A]">Grab our Free Guide.</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                  The "Foreign-Trained Attorney's Roadmap to US Licensure" — critical steps, state selection strategy, and common pitfalls to avoid.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookClick}
                  className="bg-[#B4975A] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-[#a3864d] transition-all flex items-center justify-center lg:justify-start gap-3 mx-auto lg:mx-0"
                >
                  Get the Free Guide
                  <Download size={18} />
                </motion.button>
              </div>

              <div className="lg:w-2/5 p-12 lg:p-0 flex justify-center lg:justify-end">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-[#B4975A]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <img 
                    src="https://i.ibb.co/zTdGtH35/1767934818862-019ba120-0e5f-7229-b2f3-cccd5423fd90.jpg" 
                    alt="Strategic Roadmap Guide" 
                    className="w-64 h-80 md:w-80 md:h-[450px] object-cover rounded-2xl shadow-2xl border border-slate-700 relative z-10 transition-transform group-hover:-translate-y-4"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-20 hidden md:block">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <p className="text-sm font-bold text-slate-900">Immediate Access</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 md:py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-light">Clear answers for independent professionals.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
            <FAQItem 
              question="Do you help with Bar Eligibility filing?" 
              answer="No. We provide strategic guidance on the pathway and state selection based on your profile, but you must handle the formal application paperwork and filings yourself. Our focus is on the strategy and execution of the exam itself." 
            />
            <FAQItem 
              question="Is this for the UBE or California?" 
              answer="The strategies taught primarily apply to the UBE (MEE, MPT, and MBE). However, the fundamental logic of passing a U.S. Bar Exam is universal. Specific state nuances can be discussed during a tailored 1-on-1 strategy consultation." 
            />
            <FAQItem 
              question="What is the turnaround time for feedback?" 
              answer="We maintain a strict 3-5 business day turnaround for all written feedback. This ensures that every assignment receives a detailed, high-quality professional review that goes beyond surface-level comments." 
            />
            <FAQItem 
              question="Can I book a single session without a course?" 
              answer="Yes. We believe in high-impact, limited engagements. You can book a 'Strategy-Only' session or 'Assignment Feedback' independently based on your specific needs at this stage of your preparation." 
            />
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 md:py-32 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-12 lg:gap-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Target, title: "Focused Strategy", text: "Forget the 100-page outlines. We focus on exactly what you need to pass, specifically tailored for the foreign-trained perspective and logic." },
              { icon: CheckCircle2, title: "Direct Feedback", text: "Get precise, expert-level written feedback on MEEs, MPTs, and MBEs from someone who understands the grading rubric from a practitioner's lens." },
              { icon: Users, title: "Independent Advice", text: "No corporate agenda. Just honest, practical guidance on eligibility, state selection, and study planning that larger companies overlook." }
            ].map((pillar, i) => (
              <motion.div key={i} variants={fadeInUp} className="group">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-14 w-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 group-hover:border-[#B4975A] transition-colors"
                >
                  <pillar.icon strokeWidth={1.5} className="text-slate-900 group-hover:text-[#B4975A] transition-colors" size={28} />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold mb-5 text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Quote with Founder Avatar */}
      <section className="py-24 md:py-32 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 text-center md:text-left">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="shrink-0"
            >
              <img 
                src="https://i.ibb.co/sJVy0C5s/1767935007259-019ba122-c25c-7f8a-af4a-f23a9a1f3085.jpg" 
                alt="Founder of CyAzor Bar Prep" 
                className="h-48 w-48 md:h-64 md:w-64 rounded-xl object-cover shadow-2xl border border-slate-200 bg-white p-1"
              />
            </motion.div>
            
            <div className="flex-grow">
              <div className="mb-6 text-slate-200 hidden md:block">
                <span className="text-8xl font-serif leading-none">“</span>
              </div>
              <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-900 leading-[1.3] mb-8">
                The bar exam isn't just about knowing the law; it's about knowing how to pass a test. For foreign attorneys, the gap is often in strategy, not knowledge.
              </blockquote>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="h-1 w-16 bg-[#B4975A] mb-6 origin-left"></div>
                <p className="font-bold text-slate-900 tracking-widest uppercase text-sm">The Strategist</p>
                <p className="text-xs text-[#B4975A] uppercase tracking-[0.2em] mt-1 font-bold">U.S. Attorney at Law</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;