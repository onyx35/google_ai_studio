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

      <div className="max-w-6xl mx-auto px-4 relative z-10 pt-4 sm:pt-6">
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

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-stone-900 font-serif-display leading-[1.25] mb-4">
              A calm, confidential space to <span className="italic font-medium text-emerald-900">heal</span>, understand yourself, and move forward.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
              Professional, compassionate therapy for adults, couples, and adolescents dealing with anxiety, depression, trauma, and life crossroads. Discreet private consulting room in Oadby, Leicester with free parking, plus secure video sessions nationwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onOpenBooking}
                className="py-3.5 px-6 rounded-xl bg-[#b4c271] hover:bg-[#a3b35a] text-stone-950 font-bold text-sm transition-all shadow-xs border border-[#9eb05b]/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Free 15-Minute Intro Call</span>
                <ArrowRight className="w-4 h-4 text-stone-950" />
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
            {/* Trust Directory Badges directly from talkaid website */}
            <div className="pt-6 border-t border-stone-200 w-full">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3.5">
                Verified Professional Registrations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
                <a
                  href={PRACTICE_INFO.verificationLinks.bacp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-700/60 transition-all hover:shadow-xs group flex items-center justify-center h-20 sm:h-24 w-full shadow-2xs"
                  title="View BACP Registered Member Profile"
                >
                  <img
                    src={PRACTICE_INFO.images.bacpBadge}
                    alt="BACP Registered Member"
                    className="max-h-14 sm:max-h-16 w-auto max-w-[90%] object-contain transition-transform group-hover:scale-105"
                  />
                </a>

                <a
                  href={PRACTICE_INFO.verificationLinks.psychologyToday}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-700/60 transition-all hover:shadow-xs group flex items-center justify-center h-20 sm:h-24 w-full shadow-2xs"
                  title="View Psychology Today Verified Profile"
                >
                  <img
                    src={PRACTICE_INFO.images.psychologyToday}
                    alt="Psychology Today Verified"
                    className="max-h-14 sm:max-h-16 w-auto max-w-[90%] object-contain transition-transform group-hover:scale-105"
                  />
                </a>

                <a
                  href={PRACTICE_INFO.verificationLinks.counsellingDirectory}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-700/60 transition-all hover:shadow-xs group flex items-center justify-center h-20 sm:h-24 w-full shadow-2xs"
                  title="View Counselling Directory Profile"
                >
                  <img
                    src={PRACTICE_INFO.images.counsellingDirectory}
                    alt="Counselling Directory Verified"
                    className="max-h-14 sm:max-h-16 w-auto max-w-[90%] object-contain transition-transform group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Genuine Consulting Room Photo & Reassurance */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-sm relative">
              {/* Therapy Practice Image from Website - Complete Circle (Twice as Big) */}
              <div className="relative rounded-full overflow-hidden mb-5 border-4 border-stone-100 shadow-md aspect-square w-80 h-80 sm:w-96 sm:h-96 max-w-full mx-auto group bg-stone-100">
                <img
                  src={PRACTICE_INFO.images.teamIndex}
                  alt="Talkaid Counselling Services"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center mb-5">
                <h3 className="font-bold text-stone-900 text-sm font-serif-display">
                  Raksha Patel
                </h3>
                <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                  Talkaid Counselling Services · MBACP
                </p>
              </div>

              {/* Location options */}
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 mb-4">
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
              <div className="bg-emerald-950 text-white rounded-xl p-3.5 flex items-center justify-between gap-3">
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
