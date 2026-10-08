import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import { MapPin, Clock, Phone, Navigation, Globe, Sparkles } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-20 lg:py-28 bg-[#FBF9F4] border-t-2 border-[#B89A63]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>LOCATION & TIMINGS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            Visit Cosmic Healer in Santacruz West
          </h2>
          <p className="text-base sm:text-lg text-[#2E2923] leading-relaxed font-medium">
            Conveniently situated along Swami Vivekanand Road in Mumbai, welcoming clients for in-person consultations by appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details: Single Unified Centre Address & Hours Card */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-9 rounded-2xl bg-white border-2 border-[#B89A63]/30 shadow-md space-y-6">
              {/* Address Box */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#9B7C3E] mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1714] font-bold mb-2">
                    Centre Address
                  </h3>
                  <p className="text-base text-[#1A1714] font-medium leading-relaxed">
                    {BUSINESS_CONFIG.address}
                  </p>
                  <p className="text-sm text-[#9B7C3E] mt-2 font-bold">
                    Landmark: Above Hyundai Showroom · Next to Santacruz Bus Depot
                  </p>
                </div>
              </div>

              {/* Physical Centre Hours directly inside this card */}
              <div className="pt-5 border-t-2 border-[#EFE7D8] space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#9B7C3E] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm uppercase tracking-wider text-[#9B7C3E] font-bold mb-1">
                      Physical Centre Hours
                    </h4>
                    <p className="text-base sm:text-lg text-[#1A1714] font-bold">
                      Mon–Sat 11:30 AM–7:30 PM <span className="text-[#7A746B] font-semibold text-sm">(Sunday Closed)</span>
                    </p>
                  </div>
                </div>

                {/* Online Consultations Availability */}
                <div className="flex items-center justify-between bg-[#F7F3EA] p-3.5 rounded-xl border border-[#B89A63]/30">
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-5 h-5 text-[#9B7C3E]" />
                    <span className="text-sm font-bold text-[#1A1714]">
                      Online Consultations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-sm text-[#9B7C3E] font-extrabold">
                      Available 24 Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-5 border-t-2 border-[#EFE7D8] flex items-center justify-between">
                <a
                  href={BUSINESS_CONFIG.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9B7C3E] hover:text-[#7A5F26] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A1714] hover:text-[#9B7C3E] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#9B7C3E]" />
                  <span className="tabular-nums font-bold">{BUSINESS_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual / Map Area */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border-2 border-[#B89A63]/35 bg-white shadow-xl relative min-h-[440px] flex flex-col justify-between">
              <iframe
                title="Cosmic Healer Santacruz West Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.828652932378!2d72.83750847520525!3d19.08226065217435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9103e680a6b%3A0xe5a3632cb320f78d!2sVikas%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-[360px] sm:h-[400px] border-0 contrast-[1.05] opacity-95 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Location Bar */}
              <div className="p-5 bg-[#F7F3EA] border-t-2 border-[#B89A63]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-wider text-[#9B7C3E] font-bold">
                    Vikas Center · Santacruz West
                  </p>
                  <p className="text-xs sm:text-sm text-[#1A1714] font-medium">
                    Easy access via Western Railway (Santacruz Station) & SV Road
                  </p>
                </div>

                <a
                  href={BUSINESS_CONFIG.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-colors rounded shadow-sm whitespace-nowrap"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
