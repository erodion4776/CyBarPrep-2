import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="h-1 w-20 bg-[#B4975A] mb-8"></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12">Terms of Service</h1>
        
        <div className="space-y-10 text-slate-700 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">1. Scope of Services</h2>
            <p>
              CyAzor Bar Prep provides strategic consulting and educational resources designed for foreign-trained attorneys preparing for U.S. Bar Exams. 
            </p>
            <p className="mt-4 font-medium text-slate-900 italic">
              Crucial Disclaimer: Our services do not constitute legal representation, legal advice, or an attorney-client relationship for the purpose of bar admission filings or any other legal matter. We provide strategic navigation and technical feedback only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">2. Consultation Policies</h2>
            <p>
              To maintain a high standard of professional service, the following rules apply to all consultations:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Minimum Notice:</strong> Client agrees that a minimum of 24 hours' notice is required to cancel or reschedule any appointment.</li>
              <li><strong>No Unlimited Access:</strong> Consultations are discrete professional appointments. We do not provide ongoing or "on-call" messaging/email support outside of scheduled sessions.</li>
              <li><strong>No Rescheduling:</strong> Due to the limited nature of our availability, sessions cannot be rescheduled after a missed appointment or late cancellation.</li>
              <li><strong>Subsequent Bookings:</strong> Any further guidance or follow-up beyond the scope of a specific session requires a new, separate booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">3. Refunds & Cancellations</h2>
            <p>
              Fees paid for consultations are non-refundable once the service has been delivered. Cancellation requests must be made at least 24 hours prior to the appointment to be eligible for a credit toward a future session.
            </p>
            <p className="mt-4 font-medium text-slate-900">
              Failure to provide such notice will result in the forfeiture of the appointment and any fees paid. No refunds or credits will be issued for missed appointments or late cancellations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All materials provided, including but not limited to eBooks, strategy guides, templates, and video modules, are the exclusive intellectual property of CyAzor Bar Prep. 
            </p>
            <p className="mt-4">
              These materials are for your personal use only. Unauthorized redistribution, reproduction, or commercial use of our proprietary materials is strictly prohibited and will be met with legal action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p>
              CyAzor Bar Prep provides guidance based on experience and rubric analysis, but we do not guarantee specific outcomes on the U.S. Bar Exam. Success depends on individual candidate execution and examiner discretion.
            </p>
          </section>

          <section className="pt-10 border-t border-slate-100">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;