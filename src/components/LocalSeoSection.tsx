import React from 'react';
import { PRACTICE_INFO } from '../data/counsellingData';
import { MapPin, Car, Bus, Video, Clock } from 'lucide-react';

export const LocalSeoSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            Practice Location & Accessibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
            Quiet, discreet therapy in Oadby, Leicester.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Finding a therapy room where you feel safe, unobserved, and comfortable is vital. Our practice is situated on a quiet residential street with free on-street parking and easy transport access.
          </p>
        </div>

        {/* Centered Location & Access Details */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-2xs">
            <div className="relative aspect-16/9 w-full overflow-hidden">
              <img
                src={PRACTICE_INFO.images.room1}
                alt="Talkaid Counselling Services quiet room in Oadby"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-3 text-white text-[11px] font-medium">
                Peaceful, confidential therapy setting in Oadby
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-base font-serif-display">
                    {PRACTICE_INFO.name}
                  </h3>
                  <p className="text-xs text-emerald-800 font-medium">
                    {PRACTICE_INFO.practitionerName} · Registered Member MBACP
                  </p>
                  <p className="text-sm text-stone-700 mt-1">
                    {PRACTICE_INFO.address.line1}, {PRACTICE_INFO.address.town}
                  </p>
                  <p className="text-sm text-stone-700">
                    {PRACTICE_INFO.address.city}, {PRACTICE_INFO.address.postcode}
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-base sm:text-lg text-stone-600 border-t border-stone-200 pt-4">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Parking: </span>
                    <span>Free on-premise when available, and easy on-street parking without restrictions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Bus className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Public Transport: </span>
                    <span>Frequent bus routes (Arriva 31 / 31A) run regularly from Leicester City Centre and Railway Station to Oadby Parade.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Flexible Hours: </span>
                    <span>{PRACTICE_INFO.openingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nationwide Online Therapy Box */}
          <div className="bg-emerald-900/5 rounded-2xl p-6 border border-emerald-900/15 flex items-start gap-3.5 text-base sm:text-lg">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 text-base sm:text-lg">Online Therapy Across the UK</h4>
              <p className="text-base sm:text-lg text-stone-600 mt-1 leading-relaxed">
                If you reside outside Leicestershire or prefer attending from your home or office, we offer encrypted online sessions via Microsoft Teams, offering full parity of therapeutic care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
