import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gavel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Consultations', path: '/consultations' },
    { name: 'Courses & eBooks', path: '/courses' },
    { name: 'Community', path: '/community' },
    { name: 'Articles', path: '/articles' },
  ];

  const handleBookClick = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal'));
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Gavel strokeWidth={1.5} className="h-8 w-8 text-slate-900 group-hover:text-[#B4975A] transition-colors" />
              </motion.div>
              <span className="text-xl md:text-2xl font-bold font-serif tracking-tight text-slate-900">
                CyAzor Bar Prep
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.path) 
                    ? 'text-slate-900' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 h-0.5 w-full bg-[#B4975A] rounded-full" 
                  />
                )}
              </Link>
            ))}
            
            {/* Google Translate Widget Desktop */}
            <div id="google_translate_element" className="translate-widget-nav"></div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#a3864d" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBookClick}
              className="bg-[#B4975A] text-white px-6 py-3 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Book a Call
            </motion.button>
          </div>

          {/* Mobile menu toggle container */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-slate-200 py-6 px-6 shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    isActive(link.path) ? 'text-slate-900' : 'text-slate-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Google Translate Widget Mobile */}
              <div className="py-2 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Language</p>
                <div id="google_translate_element" className="translate-widget-nav !ml-0 w-full"></div>
              </div>

              <button
                onClick={handleBookClick}
                className="bg-[#B4975A] text-white px-5 py-4 rounded-md text-center text-sm font-bold shadow-sm"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;