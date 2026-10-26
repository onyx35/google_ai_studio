import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Pause, Play, HeartHandshake } from 'lucide-react';

interface Testimonial {
  id: string;
  clientIdentifier: string;
  location: string;
  serviceType: string;
  rating: number;
  duration: string;
  quote: string;
  keyOutcome: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientIdentifier: 'S.M.',
    location: 'Oadby, Leicester',
    serviceType: 'Individual Adult Counselling',
    rating: 5,
    duration: '10 Sessions · In-Person',
    quote: 'Before finding Talk Aid, I was having daily panic attacks and dreaded leaving the house for work. From our very first session in the Oadby room, I felt an overwhelming sense of safety. I was never rushed or judged. For the first time in three years, I have my life back.',
    keyOutcome: 'Overcame debilitating panic loops & restored work-life balance'
  },
  {
    id: 'test-2',
    clientIdentifier: 'David & Rachel',
    location: 'Wigston, Leicestershire',
    serviceType: 'Couples & Relationship Therapy',
    rating: 5,
    duration: '8 Sessions · Joint Therapy',
    quote: 'We were trapped in circular arguments where neither of us felt heard. The calm, balanced space created at Talk Aid stopped us attacking each other. We learned to understand each other’s triggers and reconnect with tenderness. It genuinely saved our marriage.',
    keyOutcome: 'De-escalated destructive conflict & rebuilt emotional intimacy'
  },
  {
    id: 'test-3',
    clientIdentifier: 'M.P.',
    location: 'Leicester (Online Video)',
    serviceType: 'Trauma & PTSD Recovery',
    rating: 5,
    duration: '14 Sessions · Secure Zoom',
    quote: 'I had carried childhood trauma for decades and had given up on finding a therapist who truly understood complex PTSD. The pacing was extraordinary—we established grounding techniques before touching painful memories. I finally sleep without chronic terror.',
    keyOutcome: 'Processed long-term trauma with nervous system stabilization'
  },
  {
    id: 'test-4',
    clientIdentifier: 'Mother of 16-year-old',
    location: 'Knighton, South Leicester',
    serviceType: 'Young Person Counselling',
    rating: 5,
    duration: '12 Sessions · In-Person',
    quote: 'My daughter was shutting herself away, struggling with intense GCSE anxiety and low self-worth. The rapport built with her was gentle and respectful of her privacy. She now has confidence, speaks openly about feelings, and is excited about college.',
    keyOutcome: 'Adolescent emotional resilience & reduction in social withdrawal'
  },
  {
    id: 'test-5',
    clientIdentifier: 'Qualified Counsellor MBACP',
    location: 'East Midlands',
    serviceType: 'Clinical Supervision',
    rating: 5,
    duration: 'Monthly Ongoing Supervision',
    quote: 'As a practicing therapist with a heavy trauma caseload, finding consultative, ethically rigorous supervision is essential. Talk Aid provides insightful, reflective oversight using the Seven-Eyed Model that protects my wellbeing and sharpens my practice.',
    keyOutcome: 'Ethical excellence & vicarious trauma prevention'
  },
  {
    id: 'test-6',
    clientIdentifier: 'H.T.',
    location: 'Blaby, Leicestershire',
    serviceType: 'Grief & Bereavement Support',
    rating: 5,
    duration: '6 Sessions · In-Person',
    quote: 'After losing my husband suddenly, the world became a blur of overwhelming sadness. Having this quiet, confidential room to weep, remember, and talk without being told to "cheer up" was my lifeline. I am learning to carry the loss with gentle strength.',
    keyOutcome: 'Navigated acute bereavement & discovered continuing bonds'
  }
];

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation every 7 seconds
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 7000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleSelectDot = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
              Client Experiences & Clinical Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
              Words from those who once stood where you are.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Therapy is a deeply personal journey. Read reflections from individuals, couples, and supervisees who found clarity, relief, and renewed strength through our work together.
            </p>
          </div>

          {/* Social Proof & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            {/* Trust metric without pills */}
            <div className="text-left sm:text-right">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-stone-900 ml-1.5 font-mono">5.0 / 5.0</span>
              </div>
              <div className="text-xs text-stone-500">
                <span>Verified Client Outcomes</span>
                <span className="mx-1.5" aria-hidden="true">·</span>
                <span>Oadby & Online</span>
              </div>
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-lg bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-8 h-8 rounded-lg bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                aria-label={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
                title={isAutoPlaying ? 'Pause auto-play' : 'Play auto-play'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-stone-500" /> : <Play className="w-3.5 h-3.5 text-emerald-800" />}
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-lg bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Showcase Card */}
        <div 
          className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-stone-200/90 shadow-sm relative transition-all duration-300"
          onMouseEnter={() => setIsAutoPlaying(false)}
        >
          {/* Subtle watermarked quote icon */}
          <div className="absolute top-6 right-8 text-stone-100 pointer-events-none hidden sm:block">
            <Quote className="w-20 h-20 text-emerald-950/5" />
          </div>

          <div className="relative z-10 max-w-4xl">
            {/* Top Stars & Service Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Clean unboxed metadata with separators */}
              <div className="text-xs text-stone-500 flex items-center flex-wrap gap-2 font-medium">
                <span className="text-emerald-800 font-semibold">{current.serviceType}</span>
                <span aria-hidden="true">·</span>
                <span>{current.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{current.location}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-stone-900 font-serif-display leading-relaxed mb-8 italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Bottom Outcome & Author */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-stone-900 text-sm tracking-tight">
                  {current.clientIdentifier}
                </p>
                <p className="text-xs text-emerald-800 font-medium mt-0.5">
                  {current.keyOutcome}
                </p>
              </div>

              {/* Navigation dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectDot(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? 'w-6 bg-emerald-800'
                        : 'w-2 bg-stone-200 hover:bg-stone-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Grid of Supporting Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleSelectDot(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'bg-emerald-50/50 border-emerald-700/40 shadow-xs'
                  : 'bg-white border-stone-200/80 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-stone-400 font-mono">0{idx + 1}</span>
              </div>
              <p className="text-xs text-stone-700 font-medium line-clamp-3 mb-3 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="text-[11px] text-stone-500 flex items-center justify-between pt-2 border-t border-stone-100">
                <span className="font-semibold text-stone-800">{item.clientIdentifier}</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Confidentiality Notice & CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
            <p>
              <strong className="text-stone-900">BACP Ethical Compliance:</strong> In accordance with UK professional confidentiality standards, all identifying details and full names have been anonymized or initialized with explicit consent.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Begin Your Story</span>
          </button>
        </div>
      </div>
    </section>
  );
};
