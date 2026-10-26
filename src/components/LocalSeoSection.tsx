import React from 'react';
import { PRACTICE_INFO } from '../data/counsellingData';
import { MapPin, Navigation, Car, Bus, Video, Clock } from 'lucide-react';
import { LocalReachMap } from './LocalReachMap';

export const LocalSeoSection: React.FC = () => {
  const nearbyAreas = [
    { name: "Oadby Town Centre", travelTime: "3 mins drive / 10 mins walk" },
    { name: "Wigston & South Wigston", travelTime: "6 mins drive" },
    { name: "Knighton & Stoneygate", travelTime: "5 mins drive" },
    { name: "Leicester City Centre", travelTime: "12 mins drive / direct bus" },
    { name: "Great Glen & Kibworth", travelTime: "8 mins drive via A6" },
    { name: "Blaby & Countesthorpe", travelTime: "12 mins drive" },
    { name: "Market Harborough", travelTime: "20 mins drive" },
    { name: "Nationwide UK", travelTime: "Instant via Encrypted Video" }
  ];

  return (
    <section id="location" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            Practice Location & Accessibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
            Quiet, discreet therapy in Oadby, Leicester.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Finding a therapy room where you feel safe, unobserved, and comfortable is vital. Our practice is situated on a quiet residential street with free on-street parking and easy transport access.
          </p>
        </div>

        {/* Visualized Stylized Reach Map Graphic */}
        <div className="mb-10">
          <LocalReachMap />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address and Access Notes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="flex items-start gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-base font-serif-display">
                    {PRACTICE_INFO.name}
                  </h3>
                  <p className="text-sm text-stone-700 mt-1">
                    {PRACTICE_INFO.address.line1}, {PRACTICE_INFO.address.town}
                  </p>
                  <p className="text-sm font-medium text-stone-900">
                    {PRACTICE_INFO.address.city}, {PRACTICE_INFO.address.postcode}
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-stone-600 border-t border-stone-200 pt-4">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Parking: </span>
                    <span>Free and easy on-street parking directly outside the premises on Highcroft Avenue without restrictions.</span>
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

            {/* Nationwide Online Therapy Box */}
            <div className="bg-emerald-900/5 rounded-2xl p-6 border border-emerald-900/15 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900 text-sm">Online Therapy Across the UK</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  If you reside outside Leicestershire or prefer attending from your home or office, we offer encrypted online sessions via Zoom, offering full parity of therapeutic care.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Local Catchment Area Grid */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  <Navigation className="w-4 h-4" /> Catchment & Proximity
                </div>
                <span className="text-[11px] text-stone-400">Local Area Map</span>
              </div>

              <p className="text-xs text-stone-600 mb-5">
                Conveniently positioned for clients living or working across South Leicestershire and the East Midlands:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {nearbyAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-between gap-2"
                  >
                    <div>
                      <p className="font-medium text-xs text-stone-900">{area.name}</p>
                      <p className="text-[11px] text-stone-500">{area.travelTime}</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-600/70 shrink-0" />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-stone-100/70 border border-stone-200 text-center">
                <p className="text-xs text-stone-600">
                  Ready to visit or have a question about reaching our room?
                </p>
                <a
                  href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-block mt-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-2"
                >
                  Call 07983 680550 for Directions & Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
