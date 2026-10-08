import React from "react";
import { HOW_IT_WORKS } from "../data/content";
import { Sparkles } from "lucide-react";

export const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#EFE7D8] border-y-2 border-[#B89A63]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>THE PROCESS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#2E2923] font-medium">
            A seamless, considerate path from your first enquiry to your personalised session.
          </p>
        </div>

        {/* Timeline Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-24 right-24 h-[2px] bg-gradient-to-r from-[#B89A63]/20 via-[#9B7C3E] to-[#B89A63]/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
            {HOW_IT_WORKS.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-8 rounded-2xl border-2 border-[#B89A63]/30 shadow-md"
              >
                {/* Step badge */}
                <div className="w-14 h-14 rounded-full bg-[#F7F3EA] border-2 border-[#9B7C3E] flex items-center justify-center font-serif text-xl font-bold text-[#9B7C3E] mb-6 shadow-sm">
                  {step.step}
                </div>

                <h3 className="font-serif text-2xl text-[#1A1714] mb-3 font-bold">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[#2E2923] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
