import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, ShieldCheck, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const handleBookClick = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq'
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero / Profile Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Side: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://i.ibb.co/tpVvydGn/1768391419081-019bbc57-559b-7f19-9797-2c39a5070872.png" 
                  alt="Cynthia Azor, Esq." 
                  className="w-full rounded-2xl shadow-2xl border-4 border-[#B4975A]/20"
                />
                {/* Decorative gold accent frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B4975A] rounded-2xl -z-10 hidden md:block opacity-30"></div>
              </div>
            </motion.div>

            {/* Right Side: Bio Text */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[#B4975A] text-[10px] uppercase font-bold tracking-[0.2em] mb-4 border border-slate-200">
                  Founder & Strategist
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-2">About Cynthia Azor, Esq.</h1>
                <p className="text-xl font-medium text-slate-500 font-serif italic">Bar Exam Strategist | Foreign-Trained Attorney</p>
              </motion.div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <motion.p variants={fadeInUp} className="font-serif text-2xl text-slate-800 italic leading-snug">
                  "Cynthia Azor, Esq. is a foreign-trained attorney who successfully passed the U.S. Bar Exam on her first sitting by applying focused strategy, disciplined execution, and proven exam skills."
                </motion.p>
                
                <motion.p variants={fadeInUp}>
                  Drawing from her legal training and real exam experience, Cynthia understands the challenges bar candidates face—whether first-time takers, repeat takers, or those balancing work, family, and other commitments.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  She believes that memorization is essential for bar success, but only when it is intentional, organized, and strategically applied. Rather than relying on generic study plans, she teaches candidates how to memorize what matters, apply the law efficiently, manage time effectively, and approach the exam with clarity and confidence.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  Through personalized strategy sessions and practical guidance, Cynthia helps bar candidates prepare intentionally, avoid common pitfalls, and position themselves to pass the bar exam efficiently and confidently.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="mt-12">
                <button
                  onClick={handleBookClick}
                  className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center gap-3"
                >
                  Book a Strategy Call
                  <ChevronRight size={18} strokeWidth={3} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Focus Areas */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-[#B4975A] uppercase tracking-[0.3em] mb-4">The Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Key Strategic Pillars</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: "Intentional Memorization", 
                text: "We focus on memorizing the 'high-yield' rules that move the needle for graders, not just rote repetition of thousand-page outlines." 
              },
              { 
                icon: Target, 
                title: "Disciplined Execution", 
                text: "Success is found in the application. We build strict formatting and logic-first drafting skills that resonate with U.S. Bar examiners." 
              },
              { 
                icon: ShieldCheck, 
                title: "Proven Exam Skills", 
                text: "Applying the same technical strategy Cynthia used to pass on her first attempt, tailored for the foreign attorney perspective." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#B4975A] transition-colors group"
              >
                <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-[#B4975A] transition-all">
                  <feature.icon className="text-slate-900 group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B4975A] opacity-5 -translate-y-32 translate-x-32 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-[0.02] translate-y-16 -translate-x-16 rounded-full"></div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to apply this strategy to your exam?</h2>
            <p className="text-slate-400 text-lg mb-12 font-light max-w-2xl mx-auto">
              Stop guessing and start preparing with intention. Let's map out your path to licensure together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBookClick}
              className="bg-[#B4975A] text-white px-10 py-5 rounded-md font-bold text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-[#a3864d] transition-all"
            >
              Book a Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;