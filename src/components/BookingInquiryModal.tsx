import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Clock, MapPin, Video, Phone } from 'lucide-react';
import { SERVICES, PRACTICE_INFO } from '../data/counsellingData';

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingInquiryModal: React.FC<BookingInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [selectedService, setSelectedService] = useState(preselectedServiceId || 'adult-counselling');
  const [type, setType] = useState<'free-consultation' | 'full-session'>('free-consultation');
  const [format, setFormat] = useState<'in-person' | 'online'>('in-person');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleDay = (day: string) => {
    setPreferredDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto"
        role="dialog"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-stone-900 font-serif-display mb-2">
              Inquiry Received
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you for reaching out, {fullName || 'there'}. Taking this first step can feel daunting, but you are in safe, respectful hands. We will review your request and get back to you via your preferred contact within 24 hours.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-left max-w-md mx-auto mb-6 text-xs text-stone-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Service:</span>
                <span className="font-medium text-stone-900">
                  {SERVICES.find(s => s.id === selectedService)?.title || selectedService}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Format:</span>
                <span className="font-medium text-stone-900">
                  {format === 'in-person' ? 'In-Person (Oadby, Leicester)' : 'Secure Online Video (Zoom)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Direct Contact:</span>
                <span className="font-medium text-stone-900">{PRACTICE_INFO.phone}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="py-2.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-sm transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-1">
                <Shield className="w-3.5 h-3.5" /> Confidential Self-Referral
              </div>
              <h2 className="text-2xl font-bold text-stone-900 font-serif-display">
                Request a Consultation
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Start with a free, no-obligation 10-minute phone call or request your initial session.
              </p>
            </div>

            {/* Type Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-xl mb-5">
              <button
                type="button"
                onClick={() => setType('free-consultation')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  type === 'free-consultation'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-emerald-700" /> Free 10-Min Intro Call
              </button>
              <button
                type="button"
                onClick={() => setType('full-session')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  type === 'full-session'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-700" /> First Full Session
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Select */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Area of Support
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-sm rounded-xl border border-stone-300 py-2.5 px-3 bg-white text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.fee})
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance Mode */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  How would you prefer to attend?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormat('in-person')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                      format === 'in-person'
                        ? 'border-emerald-700 bg-emerald-50/60 text-emerald-950 font-semibold'
                        : 'border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-left">In-Person (Oadby, LE2)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('online')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                      format === 'online'
                        ? 'border-emerald-700 bg-emerald-50/60 text-emerald-950 font-semibold'
                        : 'border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <Video className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-left">Online Video (UK Wide)</span>
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Mitchell"
                    className="w-full text-sm rounded-xl border border-stone-300 py-2 px-3 text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.co.uk"
                    className="w-full text-sm rounded-xl border border-stone-300 py-2 px-3 text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Telephone Number (for introductory call or SMS confirmation) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07xxx xxxxxx"
                  className="w-full text-sm rounded-xl border border-stone-300 py-2 px-3 text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                />
              </div>

              {/* Preferred Days */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Preferred Time / Days (Select any)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Saturday Mornings'].map((slot) => {
                    const isSelected = preferredDays.includes(slot);
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => toggleDay(slot)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-emerald-800 text-white border-emerald-800 font-medium'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Brief Note (Optional — what brings you to therapy?)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share as little or as much as you feel comfortable with..."
                  className="w-full text-sm rounded-xl border border-stone-300 py-2 px-3 text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  {type === 'free-consultation' ? 'Request Free 10-Minute Intro Call' : 'Submit Consultation Request'}
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1">
                <Shield className="w-3 h-3 text-emerald-700" />
                All inquiries are strictly confidential & governed by BACP ethical standards.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
