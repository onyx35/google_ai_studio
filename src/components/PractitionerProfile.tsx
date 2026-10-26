import React from 'react';
import { PRACTICE_INFO } from '../data/counsellingData';
import { Shield, CheckCircle, Heart, Lock, BookOpen, Award } from 'lucide-react';

export const PractitionerProfile: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Reassurance & Practice Ethos */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
              Clinical Background & Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-5">
              Therapy built on unconditional positive regard, ethics, and safety.
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5">
              At Talk Aid Counselling Services, we recognise that entering therapy is an act of genuine courage. You may be facing a sudden bereavement, grappling with overwhelming anxiety that prevents you from working, or navigating relationship strain that feels impossible to resolve.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Our clinical approach is integrative—meaning we do not force you into a rigid one-size-fits-all model. Instead, we draw from Humanistic, Psychodynamic, and Cognitive Behavioural traditions to honor your unique lived experience and pace.
            </p>

            {/* Unboxed Credentials List */}
            <div className="space-y-3 pt-4 border-t border-stone-200 mb-8">
              {PRACTICE_INFO.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="font-medium">{cred}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
              <Award className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  BACP Register of Counsellors & Psychotherapists
                </p>
                <p className="text-xs text-stone-600 mt-0.5">
                  The BACP Register is accredited by the Professional Standards Authority for Health and Social Care. Membership ensures rigorous ethical compliance, clinical supervision, and continuous professional development (CPD).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: First Session Walkthrough */}
          <div className="lg:col-span-5">
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
                <BookOpen className="w-4 h-4" /> Demystifying The Process
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-serif-display mb-3">
                What happens during your first session?
              </h3>
              <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                Many clients fear being put on the spot. Here is exactly what you can expect when we meet:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Arriving & Settling In</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      A quiet, comfortable environment. We review confidentiality, boundaries, and ensure you feel physically grounded and at ease.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Exploring Your Story</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      You share what brought you through the door, at whatever pace feels manageable. There is no interrogation or pressure to discuss traumatic memories immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Identifying Hopes & Goals</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      We clarify what relief, healing, or clarity would look like for you. Together, we decide whether short-term focused work or open-ended support is ideal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">No Obligation Decision</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      At the end of the initial meeting, you are invited to reflect privately before committing to regular weekly sessions. You are always in control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
                <Lock className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                <span>All communication is governed by the BACP Ethical Framework.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
