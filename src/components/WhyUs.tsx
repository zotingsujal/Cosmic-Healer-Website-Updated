import React from "react";
import { WHY_CHOOSE_US } from "../data/content";
import {
  Fingerprint,
  Layers,
  Award,
  CheckCircle,
  Globe,
  Feather,
  Sparkles,
} from "lucide-react";

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Fingerprint":
        return <Fingerprint className="w-5 h-5 text-[#9B7C3E]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#9B7C3E]" />;
      case "Award":
        return <Award className="w-5 h-5 text-[#9B7C3E]" />;
      case "CheckCircle":
        return <CheckCircle className="w-5 h-5 text-[#9B7C3E]" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-[#9B7C3E]" />;
      case "Feather":
      default:
        return <Feather className="w-5 h-5 text-[#9B7C3E]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-[#F7F3EA] border-t-2 border-[#B89A63]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>PRINCIPLES & COMMITMENT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            Why Clients Choose Cosmic Healer
          </h2>
          <p className="text-base sm:text-lg text-[#2E2923] leading-relaxed font-medium">
            A grounded, compassionate approach to holistic spiritual advisory, rooted in authenticity and personal attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border-2 border-[#B89A63]/30 hover:border-[#9B7C3E] transition-all duration-300 flex flex-col items-start shadow-sm hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F7F3EA] border-2 border-[#B89A63]/35 flex items-center justify-center mb-5 shadow-inner">
                {getIcon(item.iconName)}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1714] mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#2E2923] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
