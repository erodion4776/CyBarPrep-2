import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, ChevronRight, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const body = new URLSearchParams({
      'form-name': 'booking-leads',
      ...formData
    });

    try {
      // Netlify AJAX submission
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      
      // SUCCESS: Open Calendly in a new tab
      window.open('https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq', '_blank', 'noopener,noreferrer');
      onClose();
    } catch (error) {
      console.error('Lead capture failed:', error);
      // Fail gracefully: still allow booking if lead capture fails
      window.open('https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq', '_blank', 'noopener,noreferrer');
      onClose();
    } finally {
      setLoading(false);
      setFormData({ name: '', email: '' }); // Reset
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-2 z-20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8 text-center">
                <div className="h-1 w-12 bg-[#B4975A] mx-auto mb-6"></div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3">Final Step: Secure Your Slot</h2>
                <p className="text-slate-500 text-sm font-light">Please enter your email to access the live calendar.</p>
              </div>

              <form 
                name="booking-leads" 
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="booking-leads" />
                
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-[#B4975A] focus:ring-1 focus:ring-[#B4975A] outline-none transition-all text-slate-900 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-[#B4975A] focus:ring-1 focus:ring-[#B4975A] outline-none transition-all text-slate-900 bg-slate-50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#B4975A] text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-lg hover:shadow-xl hover:bg-[#a3864d] transition-all flex items-center justify-center gap-3 mt-8"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>
                      Continue to Booking
                      <ChevronRight size={16} strokeWidth={3} />
                    </>
                  )}
                </button>
              </form>
              
              <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-widest font-medium italic">
                Secure & Confidential Case Review.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;