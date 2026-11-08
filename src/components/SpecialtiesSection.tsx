import React, { useState } from 'react';
import { SPECIALTIES } from '../data/counsellingData';
import { Sparkles, Shield, ArrowRight, HeartHandshake } from 'lucide-react';

interface SpecialtiesSectionProps {
  onOpenBooking: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'emotional' | 'trauma' | 'relationships' | 'professional' | 'adhd'>('all');

  const filtered = selectedCategory === 'all'
    ? SPECIALTIES
    : SPECIALTIES.filter(s => s.category === selectedCategory);

  return (
    <section id="specialties" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            Clinical Specialisms & Symptoms
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-stone-900 font-serif-display leading-tight mb-4">
            You don&apos;t have to carry this alone.
          </h2>
          <div className="my-6 flex justify-center w-full">
            <img
              src="/images/circle_image.png"
              alt="Talkaid Counselling Services"
              className="w-72 h-72 sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] max-w-full aspect-square object-contain rounded-full shadow-md border-4 border-white mx-auto"
            />
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 text-left">
            Therapy at Talkaid is rooted in compassionate and paced integrative practice. Explore the common challenges we support clients through each week. General counselling includes all the issues in the above poster. Below are some examples of what we deal with.
          </p>

          <div className="flex items-center justify-center gap-1.5 p-1 bg-stone-200/70 rounded-xl max-w-fit mx-auto flex-wrap">
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
              onClick={() => setSelectedCategory('adhd')}
              className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'adhd' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ADHD
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

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Common manifestations */}
                <div className="pt-4 border-t border-stone-100">
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
              </div>

              <button
                onClick={onOpenBooking}
                className="mt-5 w-full py-2 px-3 rounded-xl border border-stone-200 hover:border-emerald-700 hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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
              <p className="text-stone-900 text-sm sm:text-base font-semibold leading-relaxed">
                Not sure what category your feelings fall into?
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
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
