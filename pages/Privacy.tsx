import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="h-1 w-20 bg-[#B4975A] mb-8"></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12">Privacy Policy</h1>
        
        <div className="space-y-10 text-slate-700 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">Introduction</h2>
            <p>
              At CyAzor Bar Prep, we value the privacy and confidentiality of the legal professionals we serve. This Privacy Policy outlines how we collect, use, and protect your information when you engage with our strategic consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">Information Collection</h2>
            <p>
              We collect personal information that you provide voluntarily when booking a consultation or purchasing resources. This typically includes your name, professional email address, and any specific bar exam context you share to facilitate our strategic guidance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">Use of Information</h2>
            <p>
              Your information is used exclusively to deliver our services. This includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Scheduling and managing consultation sessions.</li>
              <li>Providing technical and strategic feedback on assignments.</li>
              <li>Processing transactions for courses and eBooks.</li>
              <li>Communicating critical updates regarding your scheduled services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">Data Protection</h2>
            <p>
              We implement industry-standard security measures to safeguard your data. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. All professional feedback is treated with strict confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">Third-Party Services</h2>
            <p>
              We utilize established third-party platforms for scheduling (Calendly) and payment processing. These providers have their own independent privacy policies, and we recommend reviewing them upon use.
            </p>
          </section>

          <section className="pt-10 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">Contact Information</h2>
            <p>
              For any inquiries regarding your privacy or data usage, please contact us at:
            </p>
            <p className="mt-4 font-bold text-slate-900 tracking-wide uppercase text-xs">
              strategic@cyazorbarprep.com
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;