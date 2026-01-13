import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, ChevronRight, Loader2, Phone, FileText, CheckCircle2 } from 'lucide-react';

const CALENDLY_LINK = "https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq";
const PDF_LINK = "/ebooks/guide.pdf";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleClose = () => {
    onClose();
    // Reset to step 1 after transition
    setTimeout(() => setStep(1), 300);
  };

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
      
      // Move to success step
      setStep(2);
    } catch (error) {
      console.error('Lead capture failed:', error);
      // Even if capture fails, we want the user to proceed
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
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
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-2 z-20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    <div className="mb-8 text-center">
                      <div className="h-1 w-12 bg-[#B4975A] mx-auto mb-6"></div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3">Do you have Bar Prep questions?</h2>
                      <p className="text-slate-500 text-sm font-light">Unlock our calendar and get a free strategy guide by entering your details below.</p>
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
                            Unlock Access
                            <ChevronRight size={16} strokeWidth={3} />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="bg-green-100 p-4 rounded-full">
                        <CheckCircle2 className="text-green-600" size={32} />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3">You're In!</h2>
                    <p className="text-slate-500 text-sm font-light mb-10">Choose your next step toward Bar success:</p>
                    
                    <div className="space-y-4">
                      <button
                        onClick={() => handleAction(CALENDLY_LINK)}
                        className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-4 group"
                      >
                        <Phone size={18} className="text-[#B4975A]" />
                        <span className="flex-1 text-left">Book Free 15-Min Call</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => handleAction(PDF_LINK)}
                        className="w-full bg-white text-slate-900 border-2 border-slate-900 py-5 rounded-xl font-bold transition-all shadow-sm hover:bg-slate-50 flex items-center justify-center gap-4 group"
                      >
                        <FileText size={18} className="text-slate-500" />
                        <span className="flex-1 text-left">Download Free Guide</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
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