/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TherapyQuiz } from './components/TherapyQuiz';
import { PractitionerProfile } from './components/PractitionerProfile';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FeesAndBooking } from './components/FeesAndBooking';
import { LocalSeoSection } from './components/LocalSeoSection';
import { FaqSection } from './components/FaqSection';
import { AuditView } from './components/AuditView';
import { Footer } from './components/Footer';
import { BookingInquiryModal } from './components/BookingInquiryModal';
import { CrisisModal } from './components/CrisisModal';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { PRACTICE_INFO } from './data/counsellingData';

export default function App() {
  const [activeView, setActiveView] = useState<'website' | 'growth-audit'>('growth-audit');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCrisisModalOpen, setIsCrisisModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('adult-counselling');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    }
    setIsBookingModalOpen(true);
  };

  const handleScrollToQuiz = () => {
    setActiveView('website');
    setTimeout(() => {
      const el = document.getElementById('quiz');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* Sticky Header with view switcher and emergency hotline trigger */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenBooking={handleOpenBooking}
        onOpenCrisis={() => setIsCrisisModalOpen(true)}
      />

      {/* Main Content Area based on View Selection */}
      <main className="flex-1">
        {activeView === 'growth-audit' ? (
          <AuditView
            onSwitchToWebsite={() => {
              setActiveView('website');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={handleOpenBooking}
          />
        ) : (
          <div>
            {/* Live Enhanced Website for Talk Aid Counselling Services */}
            <Hero
              onOpenBooking={() => handleOpenBooking()}
              onExploreQuiz={handleScrollToQuiz}
              onSwitchToAudit={() => {
                setActiveView('growth-audit');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <ServicesSection
              onSelectService={(serviceId) => handleOpenBooking(serviceId)}
            />

            <SpecialtiesSection
              onOpenBooking={() => handleOpenBooking()}
            />

            <TherapyQuiz
              onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
            />

            <PractitionerProfile />

            <TestimonialsSection
              onOpenBooking={() => handleOpenBooking()}
            />

            <FeesAndBooking
              onOpenBookingModal={(serviceId) => handleOpenBooking(serviceId)}
            />

            <LocalSeoSection />

            <FaqSection
              onOpenBooking={() => handleOpenBooking()}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenCrisis={() => setIsCrisisModalOpen(true)}
        onSwitchToAudit={() => {
          setActiveView('growth-audit');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modals */}
      <BookingInquiryModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedServiceId={preselectedService}
      />

      <CrisisModal
        isOpen={isCrisisModalOpen}
        onClose={() => setIsCrisisModalOpen(false)}
      />

      {/* Mobile Floating Action Bar for instant conversion */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-2.5 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${PRACTICE_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 py-2.5 px-3 rounded-xl border border-stone-300 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-700" />
          <span>Call 07983 680550</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Free 15-Min Intro</span>
        </button>
      </div>
    </div>
  );
}
