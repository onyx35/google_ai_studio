import React, { useState } from 'react';
import { SERVICES } from '../data/counsellingData';
import { Clock, ShieldCheck, MapPin, Video, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.id === activeTab);

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            Professional Practice Offerings
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-4 whitespace-nowrap">
            Therapy tailored to where you are right now.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you are wrestling with anxiety, processing old pain, navigating a struggling relationship, or seeking professional clinical supervision, every session is grounded in empathy, safety, and evidence-based practice.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl mb-8 max-w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-2 px-3.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Services
          </button>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`py-2 px-3.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === s.id
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-700/40 hover:bg-white transition-all shadow-xs group"
            >
              <div>
                {/* Meta header unboxed */}
                <div className="flex items-center justify-between gap-3 text-xs text-stone-500 mb-3">
                  <span className="flex items-center gap-1 font-medium text-emerald-800">
                    <Clock className="w-3.5 h-3.5" /> {service.duration}
                  </span>
                  <span className="font-semibold text-stone-900 text-sm">
                    {service.fee}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 font-serif-display mb-2 group-hover:text-emerald-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* What we address */}
                <div className="mb-5">
                  <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    Common Areas Addressed:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.commonIssues.map((issue, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery format */}
                <div className="flex items-center gap-4 text-xs text-stone-500 py-3 border-t border-stone-200/70">
                  {service.inPersonAvailable && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-600" /> In-person (Oadby, Leicester)
                    </span>
                  )}
                  {service.onlineAvailable && (
                    <span className="flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-stone-600" /> Online Video (UK)
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 mt-2">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-stone-300 hover:border-emerald-700 hover:bg-emerald-800 hover:text-white text-stone-800 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
