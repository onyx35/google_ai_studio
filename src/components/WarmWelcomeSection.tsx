import React, { useState } from 'react';
import { Heart, Coffee, Shield, Sparkles, MessageCircle, ArrowRight, CheckCircle2, Phone, Smile } from 'lucide-react';
import { PRACTICE_INFO } from '../data/counsellingData';

interface WarmWelcomeSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const WarmWelcomeSection: React.FC<WarmWelcomeSectionProps> = ({ onOpenBooking }) => {
  const [selectedFeeling, setSelectedFeeling] = useState<number | null>(null);

  const feelings = [
    {
      emoji: '🌿',
      feeling: 'Overwhelmed or constantly on edge',
      reassurance: 'Anxiety, stress, and burnout can make daily life feel exhausting. Together, we look at calming your nervous system and untangling what is making you feel overloaded.',
      serviceId: 'adult-counselling'
    },
    {
      emoji: '💔',
      feeling: 'Disconnected from your partner',
      reassurance: 'Communication breakdowns and lost intimacy are painful. We create a calm, neutral space where both of you can speak honestly without turning into an argument.',
      serviceId: 'couples-therapy'
    },
    {
      emoji: '🕊️',
      feeling: 'Navigating loss, grief, or life changes',
      reassurance: 'Grief does not follow a timeline. Whether you have lost a loved one, a relationship, or an identity, you are allowed to grieve at your own unhurried pace.',
      serviceId: 'adult-counselling'
    },
    {
      emoji: '🛡️',
      feeling: 'Carrying past wounds or trauma',
      reassurance: 'Old memories and painful experiences don’t just vanish. Using gentle, trauma-informed therapy, we work carefully so you never feel pushed beyond your comfort zone.',
      serviceId: 'adult-counselling'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#faf7f2] border-b border-stone-200/80 relative overflow-hidden">
      {/* Gentle warm background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#b4c271]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b4c271]/25 border border-[#9eb05b]/40 text-stone-900 text-xs font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-stone-900 fill-stone-900/30" />
            <span>A Safe, Non-Judgmental Welcome</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
            You don’t have to carry everything by yourself.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Taking the first step into counselling can feel vulnerable. Whether you are seeking therapy for the very first time or returning, you are met with warmth, empathy, and unconditional kindness.
          </p>
        </div>

        {/* 2-Column Warm Philosophy & Therapist Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: Personal Welcome from Raksha Patel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#b4c271]/30 flex items-center justify-center text-[#354310]">
                  <Smile className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  A Personal Note from Raksha Patel
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-stone-800 font-serif-display leading-relaxed italic mb-6">
                &ldquo;People often reach out when they feel they have tried everything else, or when carrying their thoughts alone has simply become too exhausting. 
                My consulting room is not a cold clinic. It is a quiet, comfortable sanctuary where you can take off the mask, breathe, and speak freely without any fear of judgment.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                As a Registered Member of the British Association for Counselling and Psychotherapy (MBACP), I practice integrative therapy—which simply means I adapt to you and what you need, rather than forcing you into a rigid box.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={PRACTICE_INFO.images.teamIndex}
                  alt="Raksha Patel"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#b4c271]"
                />
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-stone-900">Raksha Patel</h4>
                  <p className="text-[11px] text-stone-500">Registered Member MBACP · Integrative Counsellor</p>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="py-2.5 px-4 rounded-xl bg-[#b4c271] hover:bg-[#a3b35a] text-stone-950 font-bold text-xs transition-all shadow-xs border border-[#9eb05b]/60 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Have a Free 15-Min Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: What You Can Always Expect */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#f8f5ee] to-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 mb-4">
                <Coffee className="w-4 h-4 text-[#354310]" /> What You Can Always Expect
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b4c271]/35 text-stone-950 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs sm:text-sm text-stone-900">Your Pace, Never Rushed</h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      You share only what you feel ready to share. There are no right or wrong answers, and no interrogation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b4c271]/35 text-stone-950 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs sm:text-sm text-stone-900">Quiet, Discreet Oadby Setting</h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Free on-street parking directly outside on Highcroft Avenue. Calm armchairs, ambient lighting, and complete privacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#b4c271]/35 text-stone-950 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs sm:text-sm text-stone-900">No GP Referral Needed</h5>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Sessions are entirely independent and confidential. Nothing is logged on your medical record unless you request it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200/70 bg-[#faf7f2] rounded-2xl p-3.5 flex items-center justify-between">
              <span className="text-xs text-stone-600">Prefer an informal WhatsApp or call?</span>
              <a
                href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
                className="text-xs font-bold text-stone-950 underline underline-offset-2 hover:text-black flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#354310]" />
                <span>07983 680550</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive "How are you feeling right now?" Navigator */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-stone-200/90 shadow-2xs">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Start Where It Hurts Most
            </span>
            <h3 className="text-xl sm:text-2xl font-normal text-stone-900 font-serif-display">
              How are you feeling right now?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Click any of the cards below to see how we gently support you through it:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {feelings.map((item, idx) => {
              const isSelected = selectedFeeling === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedFeeling(isSelected ? null : idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#faf7f0] border-[#b4c271] shadow-xs ring-2 ring-[#b4c271]/40'
                      : 'bg-stone-50/80 border-stone-200/80 hover:border-[#b4c271]/80 hover:bg-white'
                  }`}
                >
                  <div>
                    <span className="text-2xl mb-3 block">{item.emoji}</span>
                    <h4 className="font-semibold text-xs sm:text-sm text-stone-900 mb-2 leading-snug">
                      {item.feeling}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.reassurance}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-stone-900">
                    <span className="text-[11px] text-[#354310]">How we help &rarr;</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBooking(item.serviceId);
                      }}
                      className="text-[11px] underline text-stone-600 hover:text-black cursor-pointer"
                    >
                      Talk to Raksha
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
