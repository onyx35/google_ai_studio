import React, { useState } from 'react';
import { Phone, Shield, Sparkles, Layout, Compass, Menu, X, HeartPulse } from 'lucide-react';
import { PRACTICE_INFO } from '../data/counsellingData';

interface HeaderProps {
  activeView: 'website' | 'growth-audit';
  setActiveView: (view: 'website' | 'growth-audit') => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenCrisis: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  onOpenBooking,
  onOpenCrisis
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Reassurance & Quick Contact Bar */}
      <div className="bg-[#b4c271] text-stone-900 border-b border-[#9eb05b]/50 text-xs py-2 px-4 shadow-2xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-stone-950 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#34440e] animate-pulse"></span>
              Accepting New Clients
            </span>
            <span className="text-stone-700/60 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-stone-900 font-medium hidden sm:inline">
              Leicester (In-Person) & Globally Online
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-stone-950 hover:text-black transition-colors font-bold tracking-tight"
            >
              <Phone className="w-3.5 h-3.5 text-[#2f3d0a]" />
              <span>{PRACTICE_INFO.phone}</span>
            </a>
            <span className="text-stone-700/50" aria-hidden="true">|</span>
            <button
              onClick={onOpenCrisis}
              className="text-stone-900 hover:text-rose-950 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
              title="Urgent mental health support contacts"
            >
              <HeartPulse className="w-3.5 h-3.5 text-rose-800" />
              <span>Urgent Support</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 py-1.5 sm:py-2 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center shrink-0">
          <a href="#home" className="group flex items-center">
            <img
              src={PRACTICE_INFO.images.logo}
              alt="Talkaid Counselling Services Logo"
              className="w-auto h-auto max-w-[240px] max-h-14 sm:max-h-16 object-contain transition-transform group-hover:scale-[1.01]"
            />
          </a>
        </div>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          {activeView === 'website' ? (
            <div className="flex items-center gap-4">
              <nav className="flex items-center gap-5 text-xs font-medium text-stone-600 mr-2">
                <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
                <a href="#specialties" className="hover:text-stone-900 transition-colors">Issues</a>
                <a href="#quiz" className="hover:text-stone-900 transition-colors">Self-Quiz</a>
                <a href="#fees" className="hover:text-stone-900 transition-colors">Fees</a>
                <a href="#location" className="hover:text-stone-900 transition-colors">Oadby & Map</a>
                <a href="#faqs" className="hover:text-stone-900 transition-colors">FAQs</a>
              </nav>

              <button
                onClick={() => onOpenBooking()}
                className="py-2 px-4 rounded-xl bg-[#b4c271] hover:bg-[#a3b35a] text-stone-950 font-bold text-xs transition-all shadow-xs border border-[#9eb05b]/60 inline-flex items-center justify-center shrink-0 whitespace-nowrap cursor-pointer"
              >
                <span className="whitespace-nowrap">Free 15-Min Intro</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setActiveView('website')}
              className="py-2 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Compass className="w-3.5 h-3.5 text-stone-500" />
              <span>Preview Live Client Site</span>
            </button>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-xl mb-3">
            <button
              onClick={() => {
                setActiveView('website');
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-2 rounded-lg text-xs font-semibold text-center ${
                activeView === 'website' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
              }`}
            >
              Client Website
            </button>
            <button
              onClick={() => {
                setActiveView('growth-audit');
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-2 rounded-lg text-xs font-semibold text-center ${
                activeView === 'growth-audit' ? 'bg-emerald-900 text-white' : 'text-stone-600'
              }`}
            >
              SEO & Visibility Audit
            </button>
          </div>

          <nav className="flex flex-col space-y-2 text-sm text-stone-700 pb-2">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-50 rounded-lg"
            >
              Therapy Services
            </a>
            <a 
              href="#specialties" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-50 rounded-lg"
            >
              Issues & Conditions (Trauma, Anxiety, Grief)
            </a>
            <a 
              href="#quiz" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-50 rounded-lg"
            >
              Self-Assessment Quiz
            </a>
            <a 
              href="#fees" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-50 rounded-lg"
            >
              Fees & Booking
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-50 rounded-lg"
            >
              Location & Parking (Oadby)
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-50 rounded-lg"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-semibold text-center"
            >
              Request Free 15-Minute Intro Call
            </button>
            <a
              href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs font-semibold text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" /> Call {PRACTICE_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
