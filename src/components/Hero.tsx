import React from 'react';
import { Shield, Sparkles, ArrowRight, Phone, CheckCircle2, MapPin, Video, Lock } from 'lucide-react';
import { PRACTICE_INFO } from '../data/counsellingData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreQuiz: () => void;
  onSwitchToAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreQuiz,
  onSwitchToAudit
}) => {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-18 md:pb-24 overflow-hidden bg-stone-50 border-b border-stone-200">
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Top suggestion bar pointing to audit */}
        <div className="mb-6 inline-flex items-center gap-2 p-1 pl-3 pr-2 bg-emerald-900/5 border border-emerald-800/15 rounded-full text-xs text-emerald-900">
          <span className="font-semibold">Practice Growth Notice:</span>
          <span className="text-stone-600 hidden sm:inline">
            We analyzed your existing website (talkaidcounsellingservices.co.uk)
          </span>
          <button
            onClick={onSwitchToAudit}
            className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 ml-1"
          >
            <span>View Full SEO & Client Audit</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Left Content */}
          <div className="lg:col-span-7">
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center flex-wrap gap-2 text-xs text-stone-600 mb-4 font-medium">
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <Shield className="w-3.5 h-3.5" /> Registered Member MBACP
              </span>
              <span aria-hidden="true">·</span>
              <span>Integrative Psychotherapy</span>
              <span aria-hidden="true">·</span>
              <span>Oadby, Leicester & Online UK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 font-serif-display leading-[1.12] mb-6">
              A calm, confidential space to <span className="italic font-medium text-emerald-900">heal</span>, understand yourself, and move forward.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
              Professional, compassionate therapy for adults, couples, and adolescents dealing with anxiety, depression, trauma, and life crossroads. Discreet private consulting room in Oadby, Leicester with free parking, plus secure video sessions nationwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onOpenBooking}
                className="py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Free 15-Minute Intro Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreQuiz}
                className="py-3.5 px-5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>60-Second Therapy Fit Quiz</span>
              </button>
            </div>

            {/* Unboxed Trust Signals */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>No GP Referral Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Enhanced DBS Checked</span>
              </div>
            </div>
          </div>

          {/* Right Card: Immediate Reassurance & Availability */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-emerald-800 uppercase block">
                    Session Availability
                  </span>
                  <p className="text-sm font-semibold text-stone-900">
                    Appointments Within 7 Days
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800">
                  <Shield className="w-4 h-4" />
                </div>
              </div>

              {/* Service Quick-Select preview */}
              <div className="space-y-3 mb-5">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-sm text-stone-900">Adult 1-to-1 Therapy</span>
                    <span className="text-xs font-semibold text-emerald-800">£60 – £90</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Anxiety, depression, trauma, PTSD, grief & burnout support.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-sm text-stone-900">Couples & Relationships</span>
                    <span className="text-xs font-semibold text-emerald-800">£90</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    De-escalating conflict, rebuilding trust & intimacy.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-sm text-stone-900">Young People (13–17)</span>
                    <span className="text-xs font-semibold text-emerald-800">£60</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Adolescent emotional regulation, school stress & identity.
                  </p>
                </div>
              </div>

              {/* Location options */}
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 mb-5">
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-stone-100/70">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Oadby (Free Parking)</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-stone-100/70">
                  <Video className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Online (Secure Zoom)</span>
                </div>
              </div>

              {/* Direct Call / Contact Banner */}
              <div className="bg-emerald-950 text-white rounded-xl p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] text-emerald-300 font-medium">Prefer to speak first?</p>
                  <p className="text-sm font-semibold tracking-tight">{PRACTICE_INFO.phone}</p>
                </div>
                <a
                  href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
                  className="py-2 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
