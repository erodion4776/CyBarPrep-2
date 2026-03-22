import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const MailchimpForm: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200 shadow-sm relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Mail size={200} strokeWidth={0.5} className="text-slate-900" />
          </div>

          <div className="relative z-10 text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-slate-600 text-lg font-light mb-8">
              Get strategic bar exam tips, immigration updates, and exclusive resources delivered directly to your inbox.
            </p>

            <form 
              action="https://gmail.us10.list-manage.com/subscribe/post?u=8f5491b30629cbc87e83a7bfa&amp;id=55e1e6fa8d&amp;f_id=0073f6e3f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              target="_blank"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B4975A] focus:border-transparent transition-all" 
                    id="mce-EMAIL" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_8f5491b30629cbc87e83a7bfa_55e1e6fa8d" tabIndex={-1} value="" readOnly />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </motion.button>
              </div>
              <p className="mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                No spam. Only high-value strategy.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MailchimpForm;
