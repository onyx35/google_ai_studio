import React from 'react';
import { BookOpen, Lock } from 'lucide-react';

export const FirstSessionSection: React.FC = () => {
  return (
    <section id="first-session" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-9 border border-stone-200/90 shadow-2xs">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <BookOpen className="w-4 h-4" /> Demystifying The Process
            </div>
            <h3 className="text-2xl font-normal text-stone-900 font-serif-display">
              What happens during your first session?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Fear of being put on the spot is natural. Here is exactly how we approach our first conversation:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-4 rounded-2xl bg-white border border-stone-200">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="text-xs font-bold text-stone-900 mb-1">Arriving & Settling In</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                A quiet, comfortable environment. We review confidentiality and ensure you feel physically grounded and at ease.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="text-xs font-bold text-stone-900 mb-1">Exploring Your Story</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                You share what brought you through the door, at whatever pace feels manageable. There is no interrogation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h4 className="text-xs font-bold text-stone-900 mb-1">Clarifying Hopes</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                We identify what relief or clarity looks like for you. Together we decide between focused or open-ended support.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center mb-3">
                4
              </div>
              <h4 className="text-xs font-bold text-stone-900 mb-1">No Obligation Decision</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                You are encouraged to reflect privately before booking regular sessions. You remain in complete control.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
            <Lock className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
            <span>All sessions are conducted in accordance with the British Association for Counselling and Psychotherapy (BACP) Ethical Framework.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
