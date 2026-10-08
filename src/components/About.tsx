import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import { ArrowRight, Sparkles } from "lucide-react";

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const expertiseList = [
    "Vastu Shastra (Residential, Commercial & Industrial)",
    "Numerology & Name Correction",
    "Tarot Card Reading & Intuitive Reflection",
    "Reiki Healing & Energy Balancing",
    "Astrology & Grah-Dasha Analysis",
    "Gemstone & Crystal-Related Guidance",
    "Negative Energy Removal & Space Cleansing",
    "Spiritual & Holistic Personal Guidance",
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#F7F3EA] overflow-hidden border-t-2 border-[#B89A63]/25">
      {/* Background soft ambient luminescence */}
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#EFE7D8]/70 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-[#B89A63]/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. ABOUT THE FOUNDER Eyebrow Indicator */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E]">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>ABOUT THE FOUNDER</span>
          </div>
        </div>

        {/* 
          2. COSMIC HEALER CONSULTATION SANCTUARY IMAGE SECTION
          Positioned above "Meet Dr. Dipenti Merchant" and below "ABOUT THE FOUNDER",
          strictly without any text overlaid on top of the image
        */}
        <div className="mb-14">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#B89A63]/40 bg-white shadow-xl group max-w-5xl mx-auto">
            {/* Elegant luxury corner brackets for editorial aesthetics */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#9B7C3E] z-10 pointer-events-none opacity-90" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#9B7C3E] z-10 pointer-events-none opacity-90" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#9B7C3E] z-10 pointer-events-none opacity-90" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#9B7C3E] z-10 pointer-events-none opacity-90" />

            {/* Pristine Image without any text on top */}
            <img
              src={BUSINESS_CONFIG.sanctuaryImage}
              alt="Cosmic Healer Consultation Sanctuary · Santacruz West, Mumbai"
              className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* 3. MEET DR. DIPENTI MERCHANT HEADLINE & INTRO */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            Meet Dr. Dipenti Merchant
          </h2>

          <p className="text-xl sm:text-2xl text-[#9B7C3E] font-serif italic font-semibold max-w-2xl mx-auto leading-relaxed">
            Guidance rooted in ancient wisdom, personalised for modern life.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-5 text-[#2E2923] text-base sm:text-lg leading-relaxed">
            <p className="text-lg sm:text-xl text-[#1A1714] font-semibold leading-relaxed">
              <strong className="text-[#9B7C3E] font-bold">Cosmic Healer</strong>,
              established in 2018 in Mumbai, is a holistic healing centre offering a
              diverse range of solutions designed to support individuals on their personal
              journey.
            </p>
            <p>
              With deep expertise across Vastu Shastra, Numerology, Tarot Card reading, Reiki Healing,
              and Vedic astrology, Dr. Dipenti Merchant guides clients in creating harmonious
              environments by blending ancient traditions and modern insights.
            </p>
            <p>
              Whether it is residential, commercial, or industrial Vastu, accurate numerological name correction,
              or Tarot card readings, Cosmic Healer provides tailored guidance and practical remedies to
              promote positive energy, purposeful clarity, success, and spiritual growth.
            </p>
            <p className="text-[#3E3830] font-medium">
              Every consultation is delivered with empathy, confidentiality, and utmost patience—ensuring
              you receive actionable advice that integrates seamlessly into your daily life.
            </p>

            <div className="pt-3">
              <button
                onClick={() => {
                  const el = document.getElementById("services");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                type="button"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-[#9B7C3E] hover:text-[#7A5F26] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B7C3E] py-2 cursor-pointer"
              >
                <span>Discover How We Can Help</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Key Areas of Practice Card */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#B89A63]/35 shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#9B7C3E] mb-5">
              Key Areas of Practice & Guidance
            </h3>
            <div className="space-y-4">
              {expertiseList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base font-semibold text-[#1A1714]">
                  <span className="text-[#9B7C3E] mt-0.5 text-lg font-bold leading-none">✦</span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t-2 border-[#EFE7D8] flex items-center justify-between text-xs sm:text-sm font-bold text-[#2E2923]">
              <span>In-Person Santacruz & Online</span>
              <span className="text-[#9B7C3E] font-extrabold">Est. 2018 · Mumbai</span>
            </div>
          </div>
        </div>

        {/* Rose Quartz & Clear Quartz Sanctuary Philosophy Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FBF9F4] border-2 border-[#B89A63]/30 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B7C3E]">
                ✦ The Sanctuary Touch · Rose Quartz & Clear Quartz
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1714]">
                A Space Consecrated for Emotional Softness & Pure Clarity
              </h3>
              <p className="text-sm sm:text-base text-[#2E2923] leading-relaxed">
                At our Santacruz sanctuary, Dr. Dipenti Merchant pairs natural Rose Quartz to foster a calm, non-judgmental atmosphere of warmth and empathy, alongside Clear Quartz crystal points to bring crystalline stillness to intense life decisions.
              </p>
            </div>
            <div className="md:col-span-4 flex items-center justify-end gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-rose-300 shadow-sm shrink-0">
                <img
                  src="/images/rose-quartz.jpg"
                  alt="Rose Quartz for compassion and heart healing"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-amber-300 shadow-sm shrink-0">
                <img
                  src="/images/clear-quartz.jpg"
                  alt="Clear Quartz for pure clarity and focus"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <button
                onClick={onOpenBooking}
                type="button"
                className="px-4 py-3 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-colors whitespace-nowrap shadow cursor-pointer ml-1"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
