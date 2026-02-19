import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, ChevronRight, Loader2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MPTLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MPTLeadModal: React.FC<MPTLeadModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const body = new URLSearchParams({
      'form-name': 'mpt-leads',
      ...formData
    });

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      onClose();
      navigate('/mpt-resource');
    } catch (error) {
      console.error('Lead capture failed:', error);
      // Still redirect even if netlify fails in dev
      onClose();
      navigate('/mpt-resource');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative z-10 p-8 md:p-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center h-14 w-14 bg-amber-50 rounded-full mb-6">
                <Lock className="text-[#C5A059]" size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-3">Access Exclusive Resource</h2>
              <p className="text-slate-500 text-sm font-light">
                Enter your details to view the <strong>Capture Matrix Intro Slides</strong> and master the MPT structure.
              </p>
            </div>

            <form name="mpt-leads" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="form-name" value="mpt-leads" />
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. John Doe, Esq."
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Professional Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@firm.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mt-4"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    See the Slides
                    <ChevronRight size={16} strokeWidth={3} />
                  </>
                )}
              </button>
            </form>
            
            <p className="mt-6 text-[10px] text-slate-400 text-center uppercase tracking-widest font-medium">
              Join 500+ Foreign-Trained Attorneys
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MPTLeadModal;