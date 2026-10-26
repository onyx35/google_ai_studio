import React, { useState } from 'react';
import { FAQS } from '../data/counsellingData';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" /> Reassurance & Clarification
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Starting therapy naturally raises questions. Here are clear answers to the most common inquiries from prospective clients.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-stone-900">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-50 text-emerald-800' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-stone-900">Have a specific or confidential question?</h4>
            <p className="text-xs text-stone-600 mt-0.5">We are always happy to discuss your circumstances before deciding.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="py-2.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Ask During Free 15-Min Call</span>
          </button>
        </div>
      </div>
    </section>
  );
};
