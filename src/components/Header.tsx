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
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center w-1/2 max-w-[50%] shrink-0">
          <a href="#home" className="group flex items-center w-full">
            <img
              src={PRACTICE_INFO.images.logo}
              alt="Talk Aid Counselling Services Logo"
              className="w-full sm:w-[48vw] md:w-[46vw] max-w-[480px] h-auto object-contain transition-transform group-hover:scale-[1.01]"
            />
          </a>
        </div>

        {/* Center Mode Switcher (Website View vs Growth Audit View) */}
        <div className="hidden lg:flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200">
          <button
            onClick={() => setActiveView('website')}
            className={`flex items-center gap-2 py-1.5 px-3.5 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'website'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layout className="w-3.5 h-3.5 text-emerald-700" />
            <span>Enhanced Practice Website</span>
          </button>
          <button
            onClick={() => setActiveView('growth-audit')}
            className={`flex items-center gap-2 py-1.5 px-3.5 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'growth-audit'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Web Visibility & SEO Strategy</span>
            <span className="bg-emerald-700 text-emerald-100 text-[10px] px-1.5 py-0.2 rounded font-mono">
              Action Plan
            </span>
          </button>
        </div>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          {activeView === 'website' ? (
            <div className="flex items-center gap-3">
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
                className="py-2 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Free 15-Min Intro</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setActiveView('website')}
              className="py-2 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-stone-500" />
              <span>Preview Live Client Site</span>
            </button>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setActiveView(activeView === 'website' ? 'growth-audit' : 'website')}
            className="text-xs px-2.5 py-1.5 rounded-lg bg-stone-100 font-medium text-stone-800"
          >
            {activeView === 'website' ? 'View SEO Audit' : 'View Website'}
          </button>
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
