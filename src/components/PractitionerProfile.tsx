import React, { useState } from 'react';
import { PRACTICE_INFO } from '../data/counsellingData';
import { Shield, CheckCircle, Heart, Lock, BookOpen, Award, ExternalLink, Image as ImageIcon } from 'lucide-react';

export const PractitionerProfile: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>(PRACTICE_INFO.images.room1);

  const roomPhotos = [
    { src: PRACTICE_INFO.images.room1, title: 'Main Consulting Area', subtitle: 'Calm, comfortable armchairs' },
    { src: PRACTICE_INFO.images.room2, title: 'Confidential Space', subtitle: 'Private, quiet room in Oadby' },
    { src: PRACTICE_INFO.images.room3, title: 'Therapeutic Corner', subtitle: 'Tranquil & unhurried setting' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            Meet Your Therapist & Clinical Supervisor
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
            Raksha Patel
          </h2>
          <p className="text-emerald-900 font-medium text-sm sm:text-base">
            Qualified Counsellor, Psychotherapist & Clinical Supervisor · Registered Member MBACP
          </p>
        </div>

        {/* First Row: Bio & Consultation Room Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Biography & Ethos */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              At Talk Aid Counselling Services, I believe entering therapy is an act of genuine courage. Whether you are dealing with chronic anxiety that impacts your daily life, working through painful trauma or abuse, navigating marriage difficulties, or seeking clinical supervision, you are met with warmth, empathy, and unconditional respect.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              My clinical approach is integrative—drawing collaboratively from Humanistic, Psychodynamic, and Cognitive Behavioural traditions. Rather than imposing rigid frameworks, we work at a pace that honours your emotional safety and personal values.
            </p>

            {/* Unboxed Credentials List */}
            <div className="space-y-2.5 pt-3 border-t border-stone-200">
              {PRACTICE_INFO.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="font-medium">{cred}</span>
                </div>
              ))}
            </div>

            {/* Verified Accreditation Links */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-800" />
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Accredited Professional Verification
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <a
                  href={PRACTICE_INFO.verificationLinks.bacp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-stone-800">BACP Register</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800" />
                </a>

                <a
                  href={PRACTICE_INFO.verificationLinks.psychologyToday}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-stone-800">Psychology Today</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800" />
                </a>

                <a
                  href={PRACTICE_INFO.verificationLinks.counsellingDirectory}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-stone-800">Counselling Dir</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Photos from talkaid website */}
          <div className="lg:col-span-5">
            <div className="bg-stone-50 rounded-3xl p-5 border border-stone-200/90 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <ImageIcon className="w-4 h-4" /> The Consulting Space
                </div>
                <span className="text-[11px] text-stone-500">19 Highcroft Ave, Oadby</span>
              </div>

              {/* Main Photo Display */}
              <div className="relative rounded-2xl overflow-hidden mb-3 border border-stone-200 aspect-4/3 group">
                <img
                  src={selectedPhoto}
                  alt="Talk Aid Counselling Services Therapy Room in Oadby"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs">
                  <p className="font-medium drop-shadow-xs">Private consulting room with free on-street parking</p>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-3 gap-2">
                {roomPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPhoto(photo.src)}
                    className={`relative rounded-xl overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer ${
                      selectedPhoto === photo.src
                        ? 'border-emerald-700 shadow-xs'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: What Happens In Session 1 Walkthrough */}
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
