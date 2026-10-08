import React, { useState } from "react";
import { TESTIMONIALS, TestimonialItem } from "../data/content";
import { Star, Quote, Sparkles, Pause, Play } from "lucide-react";

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<"normal" | "slow">("normal");

  // Duplicate testimonials for an infinite seamless scrolling loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-28 bg-[#F7F3EA] overflow-hidden border-t-2 border-[#B89A63]/25"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#EFE7D8]/60 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>WORDS FROM OUR CLIENTS · ROSE QUARTZ COMPASSION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            Words From Our Clients
          </h2>

          <p className="text-base sm:text-lg text-[#2E2923] font-medium leading-relaxed max-w-2xl mx-auto">
            Real experiences and gratitude from individuals who have sought clarity, emotional reassurance, and guidance with Dr. Dipenti Merchant.
          </p>

          {/* Interactive Carousel Control Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-[#1A1714]">
            <button
              onClick={() => setIsPaused(!isPaused)}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#B89A63]/40 hover:border-[#9B7C3E] text-[#1A1714] transition-all cursor-pointer shadow-sm text-xs sm:text-sm font-bold"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-[#9B7C3E] text-[#9B7C3E]" />
                  <span>Resume Auto-Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-[#9B7C3E] text-[#9B7C3E]" />
                  <span>Pause Carousel</span>
                </>
              )}
            </button>

            <button
              onClick={() => setSpeed(speed === "normal" ? "slow" : "normal")}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#B89A63]/40 hover:border-[#9B7C3E] text-[#1A1714] transition-all cursor-pointer shadow-sm text-xs sm:text-sm font-bold"
            >
              <span>Speed: {speed === "normal" ? "Standard (55s)" : "Gentle Slow (80s)"}</span>
            </button>

            <span className="text-xs sm:text-sm text-[#2E2923] font-semibold hidden sm:inline">
              · Hover or touch cards to pause anytime
            </span>
          </div>
        </div>

        {/* Automatic Smooth Side Scrolling Carousel Viewport */}
        <div
          className="relative max-w-[100vw] overflow-hidden py-4 -mx-4 sm:mx-0 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle Side Vignette Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F7F3EA] via-[#F7F3EA]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F7F3EA] via-[#F7F3EA]/90 to-transparent z-20 pointer-events-none" />

          {/* Continuous Smooth Scrolling Track */}
          <div
            className="animate-smooth-carousel"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: speed === "slow" ? "80s" : "55s",
            }}
          >
            {duplicatedTestimonials.map((review: TestimonialItem, idx: number) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[310px] sm:w-[390px] lg:w-[430px] flex-shrink-0 px-3"
              >
                <div className="h-full flex flex-col justify-between rounded-2xl bg-white border-2 border-[#B89A63]/30 p-7 sm:p-8 shadow-md hover:border-[#9B7C3E] hover:shadow-xl transition-all duration-300 relative group/card select-none">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-[#9B7C3E]/20 pointer-events-none" />

                  <div>
                    {/* Rating Stars & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#9B7C3E] text-[#9B7C3E]"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#1A1714] tracking-wider uppercase bg-[#F7F3EA] px-3 py-1 rounded-md border border-[#B89A63]/35">
                        {review.badge || "Verified Client"}
                      </span>
                    </div>

                    {/* Review Highlight */}
                    {review.highlight && (
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1714] mb-3 leading-snug">
                        “{review.highlight}”
                      </h3>
                    )}

                    {/* Review Text - Clear, high contrast font */}
                    <div className="text-sm sm:text-base text-[#1A1714] font-normal leading-relaxed whitespace-pre-line max-h-[220px] overflow-y-auto pr-2 custom-review-scroll">
                      {review.text}
                    </div>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-5 mt-6 border-t-2 border-[#EFE7D8] flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg sm:text-xl font-bold text-[#1A1714]">
                        {review.name}
                      </p>
                      <p className="text-xs sm:text-sm text-[#2E2923] font-semibold">
                        {review.location ? `${review.location} · ` : ""}Cosmic Healer Client
                      </p>
                    </div>

                    <div className="text-right text-xs sm:text-sm text-[#9B7C3E] font-bold tracking-wide">
                      Google Review
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1714] mb-4">
            Ready to Begin Your Consultation?
          </p>
          <button
            onClick={onOpenBooking}
            type="button"
            className="px-9 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-md shadow-[#9B7C3E]/25 hover:shadow-lg active:scale-[0.98] cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
