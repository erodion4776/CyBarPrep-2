import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Gavel, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <Gavel strokeWidth={1.5} className="h-6 w-6 text-slate-900" />
              <span className="text-xl font-bold font-serif tracking-tight text-slate-900">
                CyAzor Bar Prep
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-light italic">
              Empowering foreign-trained legal minds through focused, non-traditional bar exam navigation and strategic mastery.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-[#B4975A] transition-all transform hover:-translate-y-1">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-slate-300 hover:text-[#B4975A] transition-all transform hover:-translate-y-1">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-slate-300 hover:text-[#B4975A] transition-all transform hover:-translate-y-1">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em] mb-8 border-l-2 border-[#B4975A] pl-4">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/consultations"
                  className="text-slate-500 hover:text-[#B4975A] text-sm font-medium transition-colors"
                >
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className="text-slate-500 hover:text-[#B4975A] text-sm font-medium transition-colors"
                >
                  Courses & eBooks
                </Link>
              </li>
              <li>
                <Link 
                  to="/articles" 
                  className="text-slate-500 hover:text-[#B4975A] text-sm font-medium transition-colors"
                >
                  Legal Articles
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.skool.com/@cynthia-azor-2820?g=cyazor-law-and-digital-hub-1083" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#B4975A] text-sm font-medium transition-colors flex items-center gap-1.5"
                >
                  Global Community
                  <ExternalLink size={12} className="opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em] mb-8 border-l-2 border-[#B4975A] pl-4">Engage</h4>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed font-light">
              For professional inquiries and bespoke institutional support:
            </p>
            <p className="text-slate-900 font-bold text-sm tracking-wide">
              strategic@cyazorbarprep.com
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-[0.1em] font-medium max-w-2xl mx-auto italic">
              LEGAL NOTICE: CYAZOR BAR PREP PROVIDES INFORMATIONAL AND STRATEGIC CONSULTING. THIS SERVICE DOES NOT CONSTITUTE LEGAL REPRESENTATION, NOR DOES IT ESTABLISH AN ATTORNEY-CLIENT RELATIONSHIP.
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              &copy; 2026 CyAzor Bar Prep. Independent Professional Guidance.
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <Link to="/privacy" className="hover:text-[#B4975A] transition-colors">Privacy</Link>
             <Link to="/terms" className="hover:text-[#B4975A] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;