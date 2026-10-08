import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import { Phone, Calendar, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F7F3EA] overflow-hidden text-[#1A1714] border-t-2 border-[#B89A63]/30">
      {/* Background ambient subtle luminescence */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#B89A63]/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-[#EFE7D8] rounded-full blur-[140px] opacity-70" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-4 bg-white/80 border border-[#B89A63]/30 px-3.5 py-1.5 rounded-full shadow-xs">
          <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
          <span>COSMIC HEALER · HARMONY & HIGHER CLARITY</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1A1714] tracking-tight leading-tight mb-6">
          Find Clarity. Move Forward With Intention.
        </h2>

        <p className="text-lg sm:text-xl text-[#2E2923] font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          Connect with Dr. Dipenti Merchant for compassionate, personalised guidance through Cosmic Healer in Mumbai or worldwide online.
        </p>

        {/* Crystalline Touch: Clear Quartz & Citrine Dual Accent */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-[#B89A63]/35 shadow-sm mb-10 text-xs sm:text-sm text-[#2E2923] font-semibold">
          <div className="flex -space-x-2">
            <img
              src="/images/clear-quartz.jpg"
              alt="Clear Quartz"
              className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
            />
            <img
              src="/images/citrine.jpg"
              alt="Citrine"
              className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
            />
          </div>
          <span>Grounded in Clear Quartz clarity and solar Citrine warmth</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            type="button"
            className="w-full sm:w-auto px-9 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-md shadow-[#9B7C3E]/25 hover:shadow-lg active:scale-[0.98] inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>Book a Consultation</span>
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-[#1A1714] hover:text-[#9B7C3E] border-2 border-[#9B7C3E]/50 hover:border-[#9B7C3E] bg-white transition-all rounded inline-flex items-center justify-center gap-2.5 shadow-sm"
          >
            <Phone className="w-5 h-5 text-[#9B7C3E]" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
