import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, ChevronRight, Loader2, Phone, FileText, CheckCircle2, BookOpen } from 'lucide-react';

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
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      setStep(2);
    } catch (error) {
      console.error('Lead capture failed:', error);
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row min-h-[500px]"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2 z-30 bg-white/50 backdrop-blur-sm rounded-full"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Left Side: Desktop Image/Branding */}
            <div className="hidden md:flex md:w-5/12 bg-slate-900 relative flex-col justify-end p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://i.ibb.co/zTdGtH35/1767934818862-019ba120-0e5f-7229-b2f3-cccd5423fd90.jpg" 
                  alt="Strategic Roadmap" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="h-1 w-12 bg-[#B4975A] mb-6"></div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">The Foreign Attorney's Roadmap.</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Bridge the gap between international training and U.S. licensure with a strategic, logic-first approach.
                </p>
              </div>
              
              {/* Subtle Decorative Circle */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#B4975A]/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side: Form/Success */}
            <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full"
                  >
                    <div className="mb-10">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">Do you have Bar Prep questions?</h2>
                      <p className="text-slate-500 text-base font-light">
                        Book a <span className="text-[#B4975A] font-medium">Free Strategy Call</span> AND grab your <span className="text-slate-900 font-medium">Free Roadmap Guide</span> today.
                      </p>
                    </div>

                    <form 
                      name="booking-leads" 
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Professional Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                          <input
                            required
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-100 focus:border-[#B4975A] focus:ring-1 focus:ring-[#B4975A] outline-none transition-all text-slate-900 bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Contact Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-100 focus:border-[#B4975A] focus:ring-1 focus:ring-[#B4975A] outline-none transition-all text-slate-900 bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#B4975A] text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-lg shadow-[#B4975A]/20 hover:shadow-xl hover:bg-[#a3864d] transition-all flex items-center justify-center gap-3 mt-8"
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-8">
                      <div className="bg-emerald-50 p-5 rounded-full ring-8 ring-emerald-50/50">
                        <CheckCircle2 className="text-emerald-600" size={40} />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">Access Granted</h2>
                    <p className="text-slate-500 text-base font-light mb-12">How would you like to start your journey?</p>
                    
                    <div className="space-y-4 max-w-sm mx-auto">
                      <button
                        onClick={() => handleAction(CALENDLY_LINK)}
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold transition-all shadow-xl shadow-slate-900/20 hover:bg-slate-800 flex items-center px-8 gap-4 group"
                      >
                        <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#B4975A] transition-colors">
                          <Phone size={18} className="text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-0.5">Priority Step</p>
                          <p className="text-sm">Book Free 15-Min Call</p>
                        </div>
                        <ChevronRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => handleAction(PDF_LINK)}
                        className="w-full bg-white text-slate-900 border border-slate-200 py-5 rounded-2xl font-bold transition-all hover:bg-slate-50 flex items-center px-8 gap-4 group"
                      >
                        <div className="h-10 w-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                          <FileText size={18} className="text-slate-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-0.5">Resources</p>
                          <p className="text-sm">Download Free Guide</p>
                        </div>
                        <ChevronRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="mt-12 text-center">
                <p className="text-[10px] text-slate-300 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                  <BookOpen size={10} /> Trusted by Foreign-Trained Attorneys Globally
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;