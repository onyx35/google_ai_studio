import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

interface TherapyQuizProps {
  onOpenBooking: (serviceId?: string) => void;
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: { label: string; scoreCategory: string; hint?: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "What has been feeling most challenging or persistent recently?",
    subtitle: "Select the area that resonates closest with your day-to-day experience.",
    options: [
      { label: "Overwhelming worry, racing thoughts, panic sensations, or restlessness", scoreCategory: "anxiety", hint: "Anxiety & Panic" },
      { label: "Persistent low mood, exhaustion, loss of joy, feeling numb or stuck", scoreCategory: "depression", hint: "Depression & Low Mood" },
      { label: "Flashbacks, physical tension from past distressing memories or trauma", scoreCategory: "trauma", hint: "Trauma & PTSD Recovery" },
      { label: "Repeated conflict, emotional disconnect, or trust breakdown with partner", scoreCategory: "couples", hint: "Couples & Relationship Counselling" },
      { label: "School pressure, identity struggles, or adolescent emotional distress", scoreCategory: "adolescent", hint: "Young People Support (13-17)" },
      { label: "Compassion fatigue, burnout, or clinical oversight in my caring work", scoreCategory: "supervision", hint: "Clinical Supervision" }
    ]
  },
  {
    id: 2,
    title: "How long has this been affecting your daily life and peace of mind?",
    subtitle: "Every timeline is valid—therapy is not reserved only for crises.",
    options: [
      { label: "Recently (within the last few weeks following a specific trigger)", scoreCategory: "recent" },
      { label: "A few months—it's steadily beginning to drain my energy", scoreCategory: "moderate" },
      { label: "Over a year or on-and-off for as long as I can remember", scoreCategory: "chronic" },
      { label: "It comes in intense sudden waves that leave me exhausted", scoreCategory: "episodic" }
    ]
  },
  {
    id: 3,
    title: "What would the most comforting first step look like for you?",
    subtitle: "We believe in meeting you at your exact level of readiness.",
    options: [
      { label: "A gentle, confidential 15-minute phone call to see how it feels", scoreCategory: "call" },
      { label: "A structured, quiet in-person session in Oadby, Leicester", scoreCategory: "in-person" },
      { label: "A discreet video session from the comfort of my own home", scoreCategory: "online" },
      { label: "I'm still nervous, but I know I need someone impartial to talk to", scoreCategory: "exploring" }
    ]
  }
];

export const TherapyQuiz: React.FC<TherapyQuizProps> = ({ onOpenBooking }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [step: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (category: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: category }));
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  // Determine recommendation
  const primaryCategory = answers[0] || 'anxiety';
  let recommendedServiceId = 'adult-counselling';
  let titleSuggestion = 'Individual Adult Counselling & Psychotherapy';
  let focusAdvice = 'Your responses suggest you have been carrying significant emotional weight. In our sessions, we will focus on pacing, nervous system regulation, and giving you an unhurried, safe container to unpack feelings without judgment.';

  if (primaryCategory === 'couples') {
    recommendedServiceId = 'couples-therapy';
    titleSuggestion = 'Couples & Relationship Therapy';
    focusAdvice = 'Relational stress is deeply exhausting. Our couples work will help both of you slow down reactive communication cycles, explore unmet emotional needs, and rebuild genuine safety and understanding.';
  } else if (primaryCategory === 'adolescent') {
    recommendedServiceId = 'young-people';
    titleSuggestion = 'Young Person Counselling (Ages 13–17)';
    focusAdvice = 'Being a teenager or supporting a young person through emotional distress requires deep empathy and creative, non-pressuring dialogue. We help adolescents navigate pressure and build lasting self-worth.';
  } else if (primaryCategory === 'supervision') {
    recommendedServiceId = 'clinical-supervision';
    titleSuggestion = 'Professional Clinical Supervision';
    focusAdvice = 'Providing care for others while carrying heavy caseloads takes a high toll. Our consultative supervision provides you with an ethical, restorative space grounded in Hawkins & Shohet’s Seven-Eyed Model.';
  } else if (primaryCategory === 'trauma') {
    recommendedServiceId = 'adult-counselling';
    titleSuggestion = 'Trauma-Informed Adult Psychotherapy';
    focusAdvice = 'Working through past distressing experiences requires safety first. We never force you to recount memories before your nervous system has established strong grounding and stabilization tools.';
  }

  return (
    <section id="quiz" className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Gentle 60-Second Self-Reflection
          </div>
          <h2 className="text-3xl font-normal text-stone-900 font-serif-display mb-3">
            Is counselling right for you?
          </h2>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Answer 3 quiet questions to receive personalized insight into how our practice can support you.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-9 border border-stone-200 shadow-sm relative">
          {!showResult ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs text-stone-500 mb-4 font-medium">
                <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Complete</span>
              </div>
              <div className="w-full h-1.5 bg-stone-100 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-emerald-800 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 font-serif-display mb-2">
                {QUESTIONS[currentStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-6">
                {QUESTIONS[currentStep].subtitle}
              </p>

              {/* Options */}
              <div className="space-y-2.5">
                {QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.scoreCategory)}
                    className="w-full text-left p-4 rounded-xl border border-stone-200 hover:border-emerald-700/60 hover:bg-emerald-50/40 text-stone-800 text-sm font-medium transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
                <ShieldCheck className="w-4 h-4" /> Recommended Therapeutic Pathway
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 font-serif-display mb-4">
                {titleSuggestion}
              </h3>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-sm leading-relaxed mb-6">
                <p className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>{focusAdvice}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-stone-600">
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Free 15-Minute Intro Call Available</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>In-Person (Oadby) or Online Video</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking(recommendedServiceId)}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free 15-Min Intro for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-600 text-sm font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
