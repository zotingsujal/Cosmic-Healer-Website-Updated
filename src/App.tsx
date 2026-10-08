import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { CrystalSanctuary } from "./components/CrystalSanctuary";
import { FeaturedCTA } from "./components/FeaturedCTA";
import { WhyUs } from "./components/WhyUs";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { GoogleReviewBadge } from "./components/GoogleReviewBadge";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import { MobileActionBar } from "./components/MobileActionBar";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Consultation");

  const handleOpenBooking = (serviceName = "Consultation") => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#1A1714] flex flex-col font-sans selection:bg-[#9B7C3E] selection:text-white pb-16 lg:pb-0">
      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking("Consultation")} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section (Homepage section) */}
        <Hero onOpenBooking={() => handleOpenBooking("Consultation")} />

        {/* 2. Trust / Credential Strip */}
        <TrustStrip />

        {/* 3. About Dr. Dipenti Merchant (With replaceable photo below about founder, no text on image) */}
        <About onOpenBooking={() => handleOpenBooking("Consultation")} />

        {/* 4. Core Services Section */}
        <Services onSelectService={(srv) => handleOpenBooking(srv)} />

        {/* 4b. The Curated Crystal System Sanctuary Section */}
        <CrystalSanctuary onOpenBookingWithService={(srv) => handleOpenBooking(srv)} />

        {/* 5. Featured Service / Consultation CTA */}
        <FeaturedCTA onOpenBooking={() => handleOpenBooking("Consultation")} />

        {/* 6. Why Cosmic Healer */}
        <WhyUs />

        {/* 7. How It Works Timeline */}
        <HowItWorks />

        {/* 8. Client Testimonials Automatic Multi-Card Side-Scrolling Carousel */}
        <Testimonials onOpenBooking={() => handleOpenBooking("Consultation")} />

        {/* 9. Google Reviews Prompt */}
        <GoogleReviewBadge />

        {/* 10. Santacruz West Location & Hours */}
        <LocationSection />

        {/* 11. Lead Generation / Contact Form */}
        <ContactSection initialService={selectedService} />

        {/* 12. FAQ Accordion */}
        <FAQSection />

        {/* 13. Final CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking("Consultation")} />
      </main>

      {/* Multi-column Footer */}
      <Footer />

      {/* Booking / Consultation Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />

      {/* Mobile-first bottom action bar */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking("Consultation")} />
    </div>
  );
}
