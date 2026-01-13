import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questionBank, Question } from '../data/questionBank';
import { CheckCircle, XCircle, ChevronRight, AlertTriangle, Lightbulb } from 'lucide-react';

const BarQuizSection: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Select one random question on mount
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    setSelectedQuestion(questionBank[randomIndex]);
  }, []);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
  };

  const handleBookClick = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cynobas/strategy-call-with-cynthia-azor-esq'
      });
    }
  };

  if (!selectedQuestion) return null;

  const isCorrect = selectedOption === selectedQuestion.correctAnswer;

  return (
    <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-8 border border-slate-200"
          >
            <AlertTriangle size={12} className="text-[#B4975A]" /> The Bar Reality Check
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Test Your Readiness: One Question, One Reality Check.</h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            Genuinely difficult, MBE-level nuances to gauge your current strategic precision.
          </p>
        </div>

        <motion.div 
          layout
          className="bg-slate-900 text-white rounded-2xl shadow-2xl overflow-hidden border border-slate-800"
        >
          <div className="p-8 md:p-12">
            {/* Question Text */}
            <h3 className="text-xl md:text-2xl font-serif leading-relaxed mb-10 text-slate-100">
              {selectedQuestion.question}
            </h3>

            {/* Options */}
            <div className="space-y-4">
              {selectedQuestion.options.map((option, index) => {
                let bgColor = "bg-slate-800 hover:bg-slate-700 border-slate-700";
                let textColor = "text-slate-300";

                if (isAnswered) {
                  if (index === selectedQuestion.correctAnswer) {
                    bgColor = "bg-green-900/40 border-green-500/50";
                    textColor = "text-green-400";
                  } else if (index === selectedOption) {
                    bgColor = "bg-red-900/40 border-red-500/50";
                    textColor = "text-red-400";
                  } else {
                    bgColor = "bg-slate-800/50 border-slate-800 opacity-50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group ${bgColor} ${textColor}`}
                  >
                    <span className="text-sm md:text-base font-medium leading-relaxed">
                      <span className="inline-block w-8 text-slate-500 font-bold">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </span>
                    {isAnswered && index === selectedQuestion.correctAnswer && <CheckCircle size={20} className="shrink-0" />}
                    {isAnswered && index === selectedOption && index !== selectedQuestion.correctAnswer && <XCircle size={20} className="shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                  className="overflow-hidden border-t border-slate-800 pt-10"
                >
                  <div className={`p-6 rounded-xl mb-8 ${isCorrect ? 'bg-green-950/20 border border-green-900/30' : 'bg-red-950/20 border border-red-900/30'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                        {isCorrect ? <CheckCircle size={18} className="text-white" /> : <XCircle size={18} className="text-white" />}
                      </div>
                      <h4 className={`font-bold uppercase tracking-widest text-xs ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {isCorrect ? "Correct Logic" : "Conceptual Gap Identified"}
                      </h4>
                    </div>
                    <p className="text-slate-200 leading-relaxed italic mb-4">
                      {isCorrect ? selectedQuestion.passMessage : selectedQuestion.failMessage}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-4 text-[#B4975A]">
                        <Lightbulb size={18} strokeWidth={2.5} />
                        <h5 className="font-bold uppercase tracking-widest text-[10px]">The Legal Rule</h5>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {selectedQuestion.explanation}
                      </p>
                    </div>

                    <div className="shrink-0 w-full md:w-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBookClick}
                        className="w-full inline-flex items-center justify-center gap-3 bg-[#B4975A] text-white px-8 py-5 rounded-md font-bold uppercase tracking-widest text-[10px] shadow-2xl hover:bg-[#a3864d] transition-all"
                      >
                        {isCorrect ? "Secure Your Score" : "Fix This Nuance"}
                        <ChevronRight size={14} strokeWidth={3} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        
        <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          One reality check per visit. Master the nuances with CyAzor Bar Prep.
        </p>
      </div>
    </section>
  );
};

export default BarQuizSection;