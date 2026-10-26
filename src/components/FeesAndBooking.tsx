import React, { useState } from 'react';
import { PRACTICE_INFO, SERVICES } from '../data/counsellingData';
import { Clock, Shield, CheckCircle, Calculator, CreditCard, Send, Lock } from 'lucide-react';

interface FeesAndBookingProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const FeesAndBooking: React.FC<FeesAndBookingProps> = ({ onOpenBookingModal }) => {
  const [selectedService, setSelectedService] = useState('adult-counselling');
  const [frequency, setFrequency] = useState<'weekly' | 'fortnightly'>('weekly');
  const [submittedInline, setSubmittedInline] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');

  // Fee calculation helper
  const getBaseFee = (serviceId: string): number => {
    switch (serviceId) {
      case 'young-people': return 60;
      case 'couples-therapy': return 90;
      case 'clinical-supervision': return 70;
      case 'adult-counselling':
      default: return 75; // midpoint of 60-90
    }
  };

  const perSession = getBaseFee(selectedService);
  const sessionsPerMonth = frequency === 'weekly' ? 4 : 2;
  const monthlyEstimate = perSession * sessionsPerMonth;

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedInline(true);
  };

  return (
    <section id="fees" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            Transparent Pricing & Budgeting
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 font-serif-display leading-tight mb-3">
            Clear, honest fees with no hidden costs.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Therapy is an essential investment in your wellbeing and peace of mind. We maintain clear and accessible session rates, with a free initial telephone consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Fees breakdown and calculator */}
          <div className="lg:col-span-7 space-y-6">
            {/* Rates table */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs">
              <h3 className="text-lg font-bold text-stone-900 font-serif-display mb-4">
                Current Standard Practice Rates
              </h3>

              <div className="divide-y divide-stone-100">
                <div className="py-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-stone-900">Introductory Consultation</p>
                    <p className="text-xs text-stone-500">15-minute phone or video conversation</p>
                  </div>
                  <span className="text-emerald-800 font-semibold text-sm">FREE</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-stone-900">Individual Adult Psychotherapy</p>
                    <p className="text-xs text-stone-500">50-minute 1-to-1 session</p>
                  </div>
                  <span className="text-stone-900 font-semibold text-sm">£60 – £90</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-stone-900">Couples & Relationship Counselling</p>
                    <p className="text-xs text-stone-500">60-minute joint session</p>
                  </div>
                  <span className="text-stone-900 font-semibold text-sm">£90</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-stone-900">Young People (Ages 13–17)</p>
                    <p className="text-xs text-stone-500">50-minute youth session</p>
                  </div>
                  <span className="text-stone-900 font-semibold text-sm">£60</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-stone-900">Clinical Supervision</p>
                    <p className="text-xs text-stone-500">60 to 90 minutes for therapists & care staff</p>
                  </div>
                  <span className="text-stone-900 font-semibold text-sm">£60 – £80</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
                <CreditCard className="w-3.5 h-3.5 text-stone-400" />
                <span>Payment accepted via online bank transfer or major debit/credit card. Invoices available for employer wellbeing schemes.</span>
              </div>
            </div>

            {/* Interactive Monthly Budget Estimator */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
                <Calculator className="w-4 h-4" /> Therapy Budget Estimator
              </div>
              <h4 className="text-base font-bold text-stone-900 font-serif-display mb-4">
                Plan your investment
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Select Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-xs rounded-xl border border-stone-300 py-2 px-3 bg-white text-stone-800 focus:outline-hidden focus:border-emerald-700"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Typical Cadence
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-100 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setFrequency('weekly')}
                      className={`py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                        frequency === 'weekly' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600'
                      }`}
                    >
                      Weekly (x4/mo)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('fortnightly')}
                      className={`py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                        frequency === 'fortnightly' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600'
                      }`}
                    >
                      Fortnightly (x2/mo)
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-stone-600">Estimated Monthly Commitment:</p>
                  <p className="text-xs text-stone-500">Based on ~£{perSession}/session ({frequency})</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-emerald-950 font-serif-display">
                    ~£{monthlyEstimate}
                  </span>
                  <span className="text-xs text-stone-500 block">per month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Confidential Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                <Lock className="w-3.5 h-3.5" /> Confidential Inquiry
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-serif-display mb-2">
                Send a Safe Message
              </h3>
              <p className="text-xs text-stone-500 mb-5 leading-relaxed">
                Take the pressure off. Leave your contact details and a brief note; we will contact you discreetly within 24 hours.
              </p>

              {submittedInline ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in">
                  <CheckCircle className="w-8 h-8 text-emerald-800 mx-auto mb-2" />
                  <p className="font-semibold text-stone-900 text-sm">Message Sent Successfully</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Thank you, {name}. We will reach out to you discreetly via {contact}.
                  </p>
                  <button
                    onClick={() => setSubmittedInline(false)}
                    className="mt-4 text-xs font-semibold text-emerald-800 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David or Anonymous"
                      className="w-full text-xs rounded-xl border border-stone-300 py-2 px-3 text-stone-900 focus:outline-hidden focus:border-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g. 07xxx xxxxxx or email"
                      className="w-full text-xs rounded-xl border border-stone-300 py-2 px-3 text-stone-900 focus:outline-hidden focus:border-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      What support are you looking for?
                    </label>
                    <textarea
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="e.g. In-person therapy for anxiety in Oadby..."
                      className="w-full text-xs rounded-xl border border-stone-300 py-2 px-3 text-stone-900 focus:outline-hidden focus:border-emerald-700 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Confidential Note</span>
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenBookingModal()}
                      className="text-xs text-stone-500 hover:text-stone-900 underline"
                    >
                      Or prefer to schedule a specific call time? Click here
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
