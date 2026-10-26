import React from 'react';
import { AlertCircle, Phone, HeartHandshake, ShieldAlert, X } from 'lucide-react';

interface CrisisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CrisisModal: React.FC<CrisisModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative overflow-hidden"
        role="dialog"
        aria-labelledby="crisis-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 id="crisis-title" className="text-lg font-bold text-stone-900">Immediate Mental Health Support</h3>
            <p className="text-xs text-stone-500">Free, confidential 24/7 UK crisis services</p>
          </div>
        </div>

        <p className="text-sm text-stone-600 mb-5 leading-relaxed">
          Talk Aid Counselling Services is an outpatient practice and does not offer an acute 24-hour crisis line. If you, or someone you know, is in immediate distress or at risk of harm, please contact these services immediately:
        </p>

        <div className="space-y-3 mb-6">
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-stone-900 text-sm">Emergency Services</p>
              <p className="text-xs text-stone-600">Immediate danger to life or severe medical emergency</p>
            </div>
            <a 
              href="tel:999" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shrink-0"
            >
              <Phone className="w-3.5 h-3.5" /> Call 999
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-stone-900 text-sm">Leicestershire Mental Health Central Access Point</p>
              <p className="text-xs text-stone-600">Local 24/7 NHS support for urgent mental health help</p>
            </div>
            <a 
              href="tel:08088003302" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shrink-0"
            >
              <Phone className="w-3.5 h-3.5" /> 0808 800 3302
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-stone-900 text-sm">Samaritans (UK Wide)</p>
              <p className="text-xs text-stone-600">Confidential, compassionate listening anytime, day or night</p>
            </div>
            <a 
              href="tel:116123" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold shrink-0"
            >
              <HeartHandshake className="w-3.5 h-3.5" /> Call 116 123
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-stone-900 text-sm">Shout Crisis Text Line</p>
              <p className="text-xs text-stone-600">Free, confidential 24/7 text support on your mobile</p>
            </div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-stone-200 text-stone-800 text-xs font-medium shrink-0">
              Text SHOUT to 85258
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-sm font-medium transition-colors"
        >
          Return to Website
        </button>
      </div>
    </div>
  );
};
