import React from 'react';
import { PRACTICE_INFO } from '../data/counsellingData';
import { Shield, Phone, Mail, MapPin, HeartPulse, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenCrisis: () => void;
  onSwitchToAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenCrisis,
  onSwitchToAudit
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl inline-block shadow-xs">
                <img
                  src={PRACTICE_INFO.images.logo}
                  alt="Talk Aid Counselling Services Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white font-serif-display block">
                  Talk Aid Counselling
                </span>
                <span className="text-xs text-stone-400">
                  {PRACTICE_INFO.practitionerName} · MBACP
                </span>
              </div>
            </div>
            
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Professional, confidential counselling and psychotherapy for adults, couples, and adolescents in Oadby, Leicester and online UK. Providing a safe, non-judgmental space to heal.
            </p>

            <div className="pt-2 text-[11px] text-stone-400 space-y-1">
              <p className="flex items-center gap-1.5 text-stone-300 font-medium">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Registered Member MBACP
              </p>
              <p>Adhering to the BACP Ethical Framework for Good Practice</p>
              <p>Enhanced DBS Cleared · Fully Insured for Private Practice</p>
            </div>

            {/* Badges strip in footer */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={PRACTICE_INFO.verificationLinks.bacp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded-lg inline-block opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src={PRACTICE_INFO.images.bacpBadge}
                  alt="BACP Registered"
                  className="h-6 w-auto"
                />
              </a>
              <a
                href={PRACTICE_INFO.verificationLinks.psychologyToday}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded-lg inline-block opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src={PRACTICE_INFO.images.psychologyToday}
                  alt="Psychology Today"
                  className="h-6 w-auto"
                />
              </a>
              <a
                href={PRACTICE_INFO.verificationLinks.counsellingDirectory}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded-lg inline-block opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src={PRACTICE_INFO.images.counsellingDirectory}
                  alt="Counselling Directory"
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-stone-100 font-bold uppercase tracking-wider text-[11px]">
              Therapy Services
            </p>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#services" className="hover:text-white transition-colors">Adult Psychotherapy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Couples Counselling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Young People (13-17)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Clinical Supervision</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">Therapy Fit Quiz</a></li>
              <li><a href="#fees" className="hover:text-white transition-colors">Transparent Fees</a></li>
            </ul>
          </div>

          {/* Local Area Coverage */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-stone-100 font-bold uppercase tracking-wider text-[11px]">
              Catchment & Location
            </p>
            <p className="text-stone-400 text-xs">
              Discreet private consulting room:
            </p>
            <p className="text-stone-200 font-medium">
              {PRACTICE_INFO.address.line1}, {PRACTICE_INFO.address.town}, Leicester, {PRACTICE_INFO.address.postcode}
            </p>
            <p className="text-[11px] text-stone-400">
              Free on-street parking outside. Serving Oadby, Wigston, Knighton, Stoughton, Blaby, Leicester City & nationwide online.
            </p>
            <div className="pt-1">
              <button
                onClick={onSwitchToAudit}
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors text-[11px] font-semibold"
              >
                <Sparkles className="w-3 h-3" />
                <span>View Web Visibility & SEO Plan</span>
              </button>
            </div>
          </div>

          {/* Direct Contact & Opening */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-stone-100 font-bold uppercase tracking-wider text-[11px]">
              Direct Contact
            </p>
            <div className="space-y-2 text-stone-300">
              <a
                href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PRACTICE_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${PRACTICE_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{PRACTICE_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 text-stone-400 pt-1">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>{PRACTICE_INFO.openingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer text-center"
              >
                Book Free 15-Min Intro Call
              </button>
            </div>
          </div>
        </div>

        {/* Crisis Safeguard Banner */}
        <div className="my-8 p-4 rounded-xl bg-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400 text-xs">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-rose-400 shrink-0" />
            <span>
              If you or someone else is in immediate acute danger or experiencing a crisis, please call <strong>999</strong> or contact the <strong>Leicestershire Mental Health Access Point: 0808 800 3302</strong> or <strong>Samaritans: 116 123</strong>.
            </span>
          </div>
          <button
            onClick={onOpenCrisis}
            className="text-stone-300 hover:text-white underline whitespace-nowrap shrink-0 text-xs"
          >
            Emergency Contacts
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Talk Aid Counselling Services. All rights reserved. Registered Member MBACP.
          </div>
          <div className="flex items-center gap-4">
            <span>Confidentiality Charter</span>
            <span>·</span>
            <span>BACP Ethical Framework</span>
            <span>·</span>
            <span>GDPR Privacy Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
