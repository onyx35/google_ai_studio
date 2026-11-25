import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, ArrowRight, CheckCircle2, MapPin, Video, Lock } from 'lucide-react';
import { PRACTICE_INFO } from '../data/counsellingData';

const HERO_BACKGROUND_IMAGES = [
  '/assets/aistudio/talkaid_website_IMG_0242_d6ae8ca8.JPG',
  '/assets/aistudio/talkaid_website_IMG_0247_b1fc0a9e.JPG',
  '/assets/aistudio/tlakaid_website_IMG_0240_60226688.JPG',
];

interface HeroProps {
  onOpenBooking: () => void;
  onExploreQuiz?: () => void;
  onSwitchToAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onSwitchToAudit
}) => {
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % HERO_BACKGROUND_IMAGES.length);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-stone-200">
      {/* Rotating Background Images (5-second interval) */}
      <div className="absolute inset-0 pointer-events-none bg-stone-50" aria-hidden="true">
        {HERO_BACKGROUND_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover contrast-115 saturate-110 transition-opacity duration-[2000ms] ease-in-out ${
              idx === activeBgIndex ? 'opacity-55' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/65 via-stone-50/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-transparent to-stone-50/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Main Content */}
          <div>
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center flex-wrap gap-2 text-xs text-stone-600 mb-4 font-medium">
              <span className="flex items-center gap-1 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
                <Shield className="w-3.5 h-3.5" /> Registered Member MBACP
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">Counseller & Clinical Supervisor</span>
              <span aria-hidden="true">·</span>
              <span className="text-xs font-semibold tracking-wider text-emerald-800 uppercase"> Leicestershire & Online </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-stone-900 font-serif-display leading-[1.25] mb-4">
              A calm, confidential space to explore your thoughts and feelings to <span className="font-serif-display italic font-medium text-[#b4c271]">heal</span> and move forward.
            </h1>

            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-xl">
              Professional, compassionate therapy for adults, couples, and young people dealing with Anxiety, Depression, Trauma, ADHD, Autism, and life crossroads. Discreet private consulting room in Oadby, Leicester, with free parking, plus secure online sessions nationwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-start gap-3 mb-8 w-full">
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
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Take a free 10-minute introductory chat; it's completely informal and a chance to say hello and see how you feel.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Professional Registrations: Below image div component & extended across full width */}
        <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-stone-200/90 w-full">
          <div className="mb-4 text-center sm:text-left">
            <p className="inline-block px-2.5 py-1 rounded-md bg-white/80 text-xs font-bold uppercase tracking-wider text-stone-900">
              Verified Professional Registrations:
            </p>
          </div>
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
