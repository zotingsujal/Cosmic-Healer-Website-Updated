import React, { useState } from "react";
import { FAQS } from "../data/content";
import { ChevronDown, Sparkles } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#FBF9F4] border-t-2 border-[#B89A63]/25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>CLARITY & QUESTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#2E2923] font-medium">
            Everything you need to know about preparing for and booking your consultation with Cosmic Healer.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-[#B89A63]/30 overflow-hidden transition-colors shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B7C3E] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#1A1714] font-bold pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#F7F3EA] border-2 border-[#B89A63]/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#9B7C3E]" : "text-[#1A1714]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 font-bold" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 pt-2 text-base sm:text-lg text-[#2E2923] leading-relaxed border-t-2 border-[#EFE7D8] font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
