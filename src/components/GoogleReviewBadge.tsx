import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import { Star, Phone, ExternalLink } from "lucide-react";

export const GoogleReviewBadge: React.FC = () => {
  return (
    <section className="relative py-12 bg-[#EFE7D8] border-y-2 border-[#B89A63]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#9B7C3E] text-[#9B7C3E]"
                />
              ))}
              <span className="text-sm font-bold text-[#1A1714] ml-2">
                5.0 Rated Client Satisfaction
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1714]">
              Have You Experienced Cosmic Healer?
            </h3>
            <p className="text-sm sm:text-base text-[#2E2923] mt-1 font-medium">
              Read real community testimonials or reach out to start your own journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded inline-flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call for Consultation</span>
            </a>

            <a
              href={BUSINESS_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#1A1714] hover:text-[#9B7C3E] border-2 border-[#9B7C3E]/50 hover:border-[#9B7C3E] transition-all rounded inline-flex items-center gap-2 bg-white shadow-sm"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#9B7C3E]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
