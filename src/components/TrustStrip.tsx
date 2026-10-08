import React from "react";
import { TRUST_POINTS } from "../data/content";
import { Award, Sparkles, Layers, MapPin, Globe } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-[#9B7C3E]" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-[#9B7C3E]" />;
      case 2:
        return <Layers className="w-5 h-5 text-[#9B7C3E]" />;
      case 3:
        return <MapPin className="w-5 h-5 text-[#9B7C3E]" />;
      case 4:
      default:
        return <Globe className="w-5 h-5 text-[#9B7C3E]" />;
    }
  };

  return (
    <section
      id="trust-strip"
      className="relative z-20 py-10 sm:py-14 bg-[#F7F3EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {TRUST_POINTS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-[#B89A63]/30 shadow-sm hover:shadow-md hover:border-[#9B7C3E]/60 transition-all group"
            >
              {/* Refined Gold Icon Container */}
              <div className="w-11 h-11 rounded-full bg-[#F7F3EA] border border-[#B89A63]/35 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {getIcon(index)}
              </div>

              {/* Title */}
              <h3 className="font-serif text-base sm:text-lg text-[#1A1714] font-bold tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2E2923] font-medium mt-1 leading-snug">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
