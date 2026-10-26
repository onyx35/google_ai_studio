import React, { useState } from 'react';
import { SPECIALTIES } from '../data/counsellingData';
import { Sparkles, Shield, ArrowRight, HeartHandshake } from 'lucide-react';

interface SpecialtiesSectionProps {
  onOpenBooking: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'emotional' | 'trauma' | 'relationships' | 'professional'>('all');

  const filtered = selectedCategory === 'all'
    ? SPECIALTIES
    : SPECIALTIES.filter(s => s.category === selectedCategory);

  return (
    <section id="specialties" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
              Clinical Specialisms & Symptoms
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
              You don&apos;t have to carry this alone.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Therapy at Talk Aid is grounded in compassionate, paced integrative practice. Explore the common challenges we support clients through each week.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl max-w-fit shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setSelectedCategory('trauma')}
              className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'trauma' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Trauma & PTSD
            </button>
            <button
              onClick={() => setSelectedCategory('emotional')}
              className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'emotional' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Anxiety & Mood
            </button>
            <button
              onClick={() => setSelectedCategory('professional')}
              className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'professional' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Burnout & Care
            </button>
          </div>
        </div>

        {/* Grid of Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-sm hover:border-emerald-700/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-medium">
                  <span className="capitalize text-emerald-800 font-semibold">{item.category} Support</span>
                  <Shield className="w-3.5 h-3.5 text-stone-400" />
                </div>

                <h3 className="text-xl font-semibold text-stone-900 font-serif-display mb-2.5">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Common manifestations */}
                <div className="space-y-3 mb-5 pt-4 border-t border-stone-100">
                  <div>
                    <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      How it may feel:
                    </p>
                    <ul className="space-y-1">
                      {item.symptoms.map((symptom, sIdx) => (
                        <li key={sIdx} className="text-xs text-stone-600 flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">·</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Our therapeutic approach:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.therapeuticTechniques.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="mt-2 w-full py-2 px-3 rounded-xl border border-stone-200 hover:border-emerald-700 hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Discuss {item.name}</span>
                <ArrowRight className="w-3 h-3 text-emerald-800" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom assurance */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-900/5 border border-emerald-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900">
                Not sure what category your feelings fall into?
              </p>
              <p className="text-xs text-stone-600">
                You don&apos;t need a clinical diagnosis or medical label to start therapy. We explore whatever is on your mind.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold whitespace-nowrap transition-colors shrink-0 cursor-pointer"
          >
            Book Free Introductory Call
          </button>
        </div>
      </div>
    </section>
  );
};
