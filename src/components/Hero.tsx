import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import {
  ArrowDown,
  Sparkles,
  Calendar,
  Compass,
  ShieldCheck,
  ChevronRight,
  MapPin,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F6F1E8]"
    >
      {/* FULL HERO BACKGROUND IMAGE: Editorial Photography of Natural Amethyst & Crystals on Stone */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img
          src={BUSINESS_CONFIG.heroBackgroundImage}
          alt="Cosmic Healer authentic Amethyst and healing crystal sanctuary arrangement"
          className="w-full h-full object-cover object-[80%_center] sm:object-[72%_center] lg:object-center filter brightness-[1.02] contrast-[1.02]"
          loading="eager"
          fetchPriority="high"
        />

        {/* Sophisticated Ivory Gradient Wash: Keeps left-side text 100% bold, legible and high-contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E8] via-[#F6F1E8]/95 to-[#F6F1E8]/50 sm:via-[#F6F1E8]/88 lg:from-[#F6F1E8] lg:via-[#F6F1E8]/90 lg:to-transparent lg:w-[65%]" />

        {/* Soft bottom transition gradient */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F6F1E8] to-transparent" />

        {/* Subtle celestial atmosphere & warm golden aura */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-purple-300/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-12 right-12 w-[380px] h-[380px] bg-[#B89A63]/15 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Editorial Narrative & CTAs (Strictly left-aligned on mobile and desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E]">
              <Sparkles className="w-4 h-4 text-[#9B7C3E] shrink-0" />
              <span>COSMIC HEALER · EST. 2018 · MUMBAI</span>
            </div>

            {/* Main Headline with High-Contrast Typography */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1A1714] leading-[1.15] mb-5 max-w-2xl text-left">
              Clarity for Your Journey.{" "}
              <span className="italic font-bold text-[#9B7C3E]">
                Guidance for Your Life.
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-lg sm:text-xl text-[#1A1714] font-semibold leading-relaxed mb-4 max-w-xl text-left">
              Ancient Vedic wisdom, intuitive guidance and sacred crystal harmonisation for a grounded, balanced and purposeful life.
            </p>

            {/* Introduction Copy */}
            <p className="text-sm sm:text-base text-[#2E2923] font-medium leading-relaxed mb-8 max-w-xl text-left">
              Led by Dr. Dipenti Merchant, Cosmic Healer provides compassionate, one-to-one consultations that combine time-honoured traditions, intuitive readings, and natural mineral frequencies into practical solutions for life, relationships, and spatial peace.
            </p>

            {/* High-Impact CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 w-full sm:w-auto mb-9">
              <button
                onClick={onOpenBooking}
                type="button"
                className="px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-md shadow-[#9B7C3E]/25 hover:shadow-lg active:scale-[0.98] text-center whitespace-nowrap inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Consultation</span>
              </button>

              <a
                href="#crystal-sanctuary"
                className="px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-wider text-[#1A1714] hover:text-[#9B7C3E] border-2 border-[#9B7C3E]/50 hover:border-[#9B7C3E] transition-all rounded text-center whitespace-nowrap inline-flex items-center justify-center gap-2.5 bg-white/95 backdrop-blur-sm shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#9B7C3E]" />
                <span>Explore Crystal Sanctuary</span>
              </a>
            </div>

            {/* Trust Line (Disciplines with clean dots) */}
            <div className="pt-5 border-t-2 border-[#B89A63]/30 w-full max-w-xl">
              <div className="flex flex-wrap items-center justify-start gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm tracking-wider uppercase text-left">
                <span className="text-[#1A1714] font-bold">Astrology</span>
                <span className="text-[#9B7C3E] font-extrabold text-base">·</span>
                <span className="text-[#1A1714] font-bold">Numerology</span>
                <span className="text-[#9B7C3E] font-extrabold text-base">·</span>
                <span className="text-[#1A1714] font-bold">Tarot</span>
                <span className="text-[#9B7C3E] font-extrabold text-base">·</span>
                <span className="text-[#1A1714] font-bold">Vastu</span>
                <span className="text-[#9B7C3E] font-extrabold text-base">·</span>
                <span className="text-[#1A1714] font-bold">Healing</span>
                <span className="text-[#9B7C3E] font-extrabold text-base">·</span>
                <span className="text-[#1A1714] font-bold">Crystals</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Atmospheric Crystal Showcase Badge (Unobstructed View of Hero Background Photography) */}
          <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end justify-center">
            {/* Elegant Floating Badge Highlighting Natural Minerals & Santacruz Sanctuary */}
            <div className="bg-white/90 backdrop-blur-md border-2 border-[#B89A63]/50 rounded-2xl p-5 sm:p-6 shadow-xl max-w-sm text-left">
              <div className="flex items-center gap-2 mb-2 text-[#9B7C3E]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  Santacruz West Sanctuary
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A1714] mb-1.5">
                Authentic Healing Crystals
              </h3>
              <p className="text-xs sm:text-sm text-[#2E2923] font-medium leading-relaxed mb-4">
                Natural Amethyst, Clear Quartz, Rose Quartz, Citrine & Black Tourmaline curated for energetic harmony.
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-[#B89A63]/25 text-xs">
                <div className="flex items-center gap-1.5 text-[#1A1714] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#9B7C3E]" />
                  <span>Mumbai & Online</span>
                </div>
                <a
                  href="#crystal-sanctuary"
                  className="inline-flex items-center gap-1 font-bold text-[#9B7C3E] hover:text-[#836730] transition-colors"
                >
                  <span>View Crystals</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Over 8 Years Dedicated Practice Seal */}
            <div className="mt-3 bg-white/90 backdrop-blur-md border border-[#B89A63]/40 rounded-xl px-4 py-2 shadow-md hidden sm:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9B7C3E]" />
              <span className="text-xs font-bold text-[#1A1714]">
                Over 8 Years Dedicated Practice
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Explore indicator linking down to about section */}
      <a
        href="#about"
        aria-label="Scroll down to explore"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] text-[#1A1714] font-bold hover:text-[#9B7C3E] transition-colors"
      >
        <span>Explore More</span>
        <ArrowDown className="w-4 h-4 text-[#9B7C3E] animate-bounce" />
      </a>
    </section>
  );
};
