import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import { Phone, Calendar, Sparkles } from "lucide-react";

interface FeaturedCTAProps {
  onOpenBooking: () => void;
}

export const FeaturedCTA: React.FC<FeaturedCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#EFE7D8] overflow-hidden border-y-2 border-[#B89A63]/30">
      {/* Background soft ambient radial luminescence */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F7F3EA] rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#B89A63]/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-4 bg-white/70 px-3.5 py-1.5 rounded-full border border-[#B89A63]/30">
          <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
          <span>PERSONALIZED CONSULTATION · SOLAR CITRINE RADIANCE</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight leading-snug mb-6">
          Sometimes, the first step is simply understanding what you're going through.
        </h2>

        <p className="text-lg sm:text-xl text-[#2E2923] font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          Begin with a personalised consultation with Dr. Dipenti Merchant and discover which form of guidance—Astrology, Numerology, Tarot, Vastu or Crystal harmonisation—is most appropriate for your life situation.
        </p>

        {/* Citrine & Clear Quartz Harmony Note */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/80 border border-[#B89A63]/35 shadow-sm mb-9 text-xs sm:text-sm text-[#2E2923] font-semibold">
          <img
            src="/images/citrine.jpg"
            alt="Citrine"
            className="w-6 h-6 rounded-md object-cover border border-amber-300"
          />
          <span>Infused with uplifting Citrine motivation & Clear Quartz mental clarity</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            type="button"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-md shadow-[#9B7C3E]/25 active:scale-[0.98] inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Book a Consultation</span>
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#1A1714] hover:text-[#9B7C3E] border-2 border-[#9B7C3E]/50 hover:border-[#9B7C3E] bg-white transition-all rounded inline-flex items-center justify-center gap-2.5 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#9B7C3E]" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
