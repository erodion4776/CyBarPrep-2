import React from 'react';
import { Check, X, Info, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  price: string;
  includes: string[];
  excludes: string[];
  note?: string;
  disclaimer?: string;
  highlight?: boolean;
  badge?: string;
  badgeColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, includes, excludes, note, disclaimer, highlight, badge, badgeColor }) => {
  const handleBookClick = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal'));
  };

  return (
    <motion.div 
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)",
        borderColor: highlight ? "#B4975A" : "#cbd5e1"
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col p-10 rounded-lg border bg-white relative transition-all duration-300 ${highlight ? 'border-slate-900 shadow-xl scale-[1.02] z-10' : 'border-slate-200 shadow-sm'} h-full group`}
    >
      {(badge || highlight) && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`${badgeColor || 'bg-[#B4975A]'} text-white text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 rounded-full self-start mb-8 shadow-sm`}
        >
          {badge || 'Highly Strategic'}
        </motion.div>
      )}
      {!badge && !highlight && <div className="h-4 self-start mb-8"></div>}
      
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 leading-tight">{title}</h3>
      <div className="text-4xl font-light text-slate-900 mb-10 flex items-baseline">
        {price.toLowerCase().includes('free') ? (
          <span className="font-serif font-bold text-[#B4975A]">{price}</span>
        ) : (
          <>
            <span className="text-sm font-bold self-start mr-1 mt-1">$</span>
            <span className="font-serif font-bold">{price.replace('$', '')}</span>
          </>
        )}
      </div>
      
      <div className="space-y-8 flex-grow">
        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Check size={14} strokeWidth={2.5} className="text-[#B4975A]" /> Core Deliverables
          </h4>
          <ul className="space-y-4">
            {includes.map((item, idx) => (
              <li key={idx} className="text-sm text-slate-700 flex items-start gap-3">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-900 shrink-0"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <X size={14} strokeWidth={2.5} className="text-slate-300" /> Out of Scope
          </h4>
          <ul className="space-y-4">
            {excludes.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-400 flex items-start gap-3 italic">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-200 shrink-0"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {(note || disclaimer) && (
          <div className="pt-6 border-t border-slate-100">
            {note && (
              <div className="flex gap-3 mb-3">
                <Info size={16} strokeWidth={1.5} className="text-[#B4975A] shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{note}</p>
              </div>
            )}
            {disclaimer && (
              <p className="text-[10px] text-slate-400 italic leading-relaxed">
                {disclaimer}
              </p>
            )}
          </div>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleBookClick}
        className={`mt-10 w-full py-5 rounded-md text-center font-bold tracking-wide transition-all flex items-center justify-center gap-2 ${
          highlight || price.toLowerCase().includes('free')
            ? 'bg-slate-900 text-white hover:bg-slate-800' 
            : 'bg-white text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white'
        }`}
      >
        {price.toLowerCase().includes('free') ? 'Book Free Screening' : 'Book Service'}
        <ChevronRight size={16} strokeWidth={2} />
      </motion.button>
    </motion.div>
  );
};

const Consultations: React.FC = () => {
  return (
    <div className="py-12 md:py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-24 flex flex-col lg:flex-row items-stretch"
        >
          <div className="lg:hidden w-full h-56 md:h-80">
            <img 
              src="https://i.ibb.co/h170sq6J/1767934729924-019ba11e-deba-7788-8276-fc15561ffccc.jpg" 
              alt="Professional Consultation Environment" 
              className="w-full h-full object-cover border-b border-slate-200"
            />
          </div>

          <div className="p-8 md:p-16 lg:w-3/5 flex flex-col justify-center">
            <div className="h-1 w-20 bg-[#B4975A] mb-8"></div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 md:mb-8 leading-tight">Strategic Intake</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed">
              From initial eligibility screening to intensive MPT mastery — we provide the high-level guidance foreign-trained attorneys actually need.
            </p>
          </div>

          <div className="hidden lg:block lg:w-2/5">
            <img 
              src="https://i.ibb.co/h170sq6J/1767934729924-019ba11e-deba-7788-8276-fc15561ffccc.jpg" 
              alt="Professional Consultation Environment" 
              className="w-full h-full object-cover border-l border-slate-200"
            />
          </div>
        </motion.div>

        {/* Step 1: Funnel Entry */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-slate-900 text-white h-10 w-10 rounded-full flex items-center justify-center font-serif text-xl italic font-bold">1</div>
            <div>
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Step 1: Start Here</h2>
              <p className="text-xl font-serif font-bold text-slate-900">Initial Strategic Alignment</p>
            </div>
            <div className="h-[1px] bg-slate-200 flex-grow"></div>
          </div>
          
          <div className="max-w-xl">
            <ServiceCard
              title="Initial Case Review (Screening)"
              price="Free"
              badge="New Client Starter"
              badgeColor="bg-slate-500"
              includes={[
                "Situation analysis & Eligibility check",
                "15-minute diagnostic screening",
                "Service fit determination"
              ]}
              excludes={[
                "Substantive legal advice",
                "Deep-dive strategic mapping",
                "Written assignment feedback"
              ]}
              note="Strictly limited to 15 minutes. Minute 16+ requires an upgrade to a paid session."
              disclaimer="A valid credit card may be required on file for bookings to prevent no-shows."
            />
          </div>
        </div>

        {/* Step 2: Strategic Execution */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#B4975A] text-white h-10 w-10 rounded-full flex items-center justify-center font-serif text-xl italic font-bold">2</div>
            <div>
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Step 2: Deep Dive</h2>
              <p className="text-xl font-serif font-bold text-slate-900">Professional Strategic Execution</p>
            </div>
            <div className="h-[1px] bg-slate-200 flex-grow"></div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <ServiceCard
              title="Full Strategy + Feedback"
              price="$100"
              highlight={true}
              includes={[
                "Initial strategy session (45-60 min)",
                "Expert review of one assignment",
                "Detailed follow-up feedback session"
              ]}
              excludes={[
                "Unlimited coaching access",
                "Review of multiple assignments"
              ]}
              note="Assignments typically returned within 3-5 business days."
            />

            <ServiceCard
              title="Strategy-Only Session"
              price="$100"
              includes={[
                "Strategic roadmap session (60 min)",
                "Study planning & resource selection",
                "Execution timeline development"
              ]}
              excludes={[
                "Formal assignment review",
                "Written grading feedback"
              ]}
            />

            <ServiceCard
              title="Technical Feedback Only"
              price="$100"
              includes={[
                "Rigorous review of MEE or MPT",
                "Written feedback on technical execution",
                "Rubric-based scoring indicators"
              ]}
              excludes={[
                "Live strategic consultation",
                "General eligibility advice"
              ]}
            />

            <ServiceCard
              title="Eligibility Guidance"
              price="$100"
              includes={[
                "Pathway evaluation (LLM vs Non-LLM)",
                "Strategic state selection insights",
                "Application risk factor assessment"
              ]}
              excludes={[
                "Active legal representation",
                "Drafting/filing applications"
              ]}
              disclaimer="Guidance is informational and does not create an attorney-client relationship for application filings."
            />
          </motion.div>
        </div>

        {/* Policy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-lg p-10 md:p-16 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 opacity-50 translate-x-16 -translate-y-16 rounded-full"></div>
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <div className="h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
              <Info className="text-[#B4975A]" size={22} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Engagement Policies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 relative z-10">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs border-b border-slate-100 pb-2">Scope of Access</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Consultations are professional appointments limited to the duration of the session. We do not offer unlimited 24/7 access via messaging or email.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs border-b border-slate-100 pb-2">Cancellation Policy</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Sessions cannot be rescheduled after a missed appointment. Your time is reserved exclusively for your case; please plan accordingly.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs border-b border-slate-100 pb-2">Follow-up Protocols</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Additional inquiries or deep-dives into new topics require a subsequent booking. We maintain a clear boundary on session deliverables.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Consultations;