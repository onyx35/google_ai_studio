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
    <section id="home" className="relative pt-4 sm:pt-6 pb-14 md:pb-20 overflow-hidden bg-stone-50 border-b border-stone-200">
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Left Content */}
          <div className="md:col-span-6">
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center flex-wrap gap-2 text-xs text-stone-600 mb-4 font-medium">
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <Shield className="w-3.5 h-3.5" /> Registered Member MBACP
              </span>
              <span aria-hidden="true">·</span>
              <span>Counseller & Clinical Supervisor</span>
              <span aria-hidden="true">·</span>
              <span> Leicestershire & Online </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-stone-900 font-serif-display leading-[1.25] mb-4">
              A calm, confidential space to <span className="italic font-medium text-emerald-900">heal</span>, understand yourself, and move forward.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
              Professional, compassionate therapy for adults, couples, and young people dealing with anxiety, depression, trauma, ADHS, Autism and life crossroads. Discreet private consulting room in Oadby, Leicester with free parking, plus secure video sessions nationwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-start gap-3 mb-8 w-full">
              <button
                onClick={onExploreQuiz}
                className="w-full sm:w-[380px] py-3.5 px-6 rounded-xl bg-[#b4c271] hover:bg-[#a3b35a] text-stone-950 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs border border-[#9eb05b]/60 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-stone-950 shrink-0" />
                <span className="whitespace-nowrap">Questionaire - is therapy right for you?</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-[380px] py-3.5 px-6 rounded-xl bg-[#b4c271] hover:bg-[#a3b35a] text-stone-950 font-bold text-sm transition-all shadow-xs border border-[#9eb05b]/60 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Request Free 10-Minute Intro Call</span>
                <ArrowRight className="w-4 h-4 text-stone-950 shrink-0" />
              </button>
            </div>

            {/* Friendly reassurance micro-note */}
            <div className="flex items-center gap-2.5 text-xs text-stone-700 bg-white/90 border border-[#b4c271]/30 rounded-xl p-3 max-w-xl shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b4c271] shrink-0" />
              <p>
                <strong className="text-stone-950 font-semibold">Take all the time you need.</strong> Free 10-minute introductory chats are completely informal—an unhurried chance to say hello and see how you feel.
              </p>
            </div>
          </div>

          {/* Right Card: Genuine Consulting Room Photo & Reassurance */}
          <div className="md:col-span-6">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-sm relative">
              {/* Therapy Practice Image from Website - Complete Circle */}
              <div className="relative rounded-full overflow-hidden mb-5 border-4 border-stone-100 shadow-md aspect-square w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 max-w-full mx-auto group bg-stone-100">
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

              {/* Direct Call / Contact Banner */}
              <div className="bg-[#b4c271] text-stone-950 rounded-2xl p-4 flex items-center justify-between gap-3 border border-[#9eb05b]/60 shadow-xs">
                <div>
                  <p className="text-xs text-stone-900 font-medium">Prefer to speak first?</p>
                  <p className="text-sm font-bold tracking-tight text-stone-950">{PRACTICE_INFO.phone}</p>
                </div>
                <a
                  href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
                  className="py-2 px-3.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-200" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Professional Registrations: Below image div component & extended across full width */}
        <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-stone-200/90 w-full">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-4 text-center sm:text-left">
            Verified Professional Registrations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
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
              className="p-2 sm:p-2.5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-700/60 transition-all hover:shadow-xs group flex items-center justify-center h-20 sm:h-24 w-full shadow-2xs overflow-hidden"
              title="View Counselling Directory Profile"
            >
              <img
                src={PRACTICE_INFO.images.counsellingDirectory}
                alt="Counselling Directory Verified"
                className="max-h-[80%] sm:max-h-[85%] w-auto max-w-[98%] scale-[1.35] sm:scale-[1.4] object-contain transition-transform group-hover:scale-[1.45]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
