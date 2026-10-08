import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import { Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#EAE2D2] border-t-2 border-[#B89A63]/30 pt-16 pb-12 text-[#2E2923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b-2 border-[#B89A63]/25">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#B89A63]/50 bg-white shrink-0 p-0.5 shadow-md">
                <img
                  src={BUSINESS_CONFIG.logoImage}
                  alt="Cosmic Healer Sacred Compass & Tree Logo"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BUSINESS_CONFIG.logoSvg;
                  }}
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#1A1714] block">
                COSMIC HEALER
              </span>
            </div>
            <p className="font-serif italic text-base text-[#9B7C3E] font-semibold">
              “Guidance • Healing • Spiritual Well-being”
            </p>
            <p className="text-sm text-[#2E2923] leading-relaxed max-w-sm pt-2 font-normal">
              A holistic consultation sanctuary established in 2018 by Dr. Dipenti Merchant, providing personalized astrology, numerology, tarot, Vastu, and spiritual counsel.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1714] mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <a href="#hero" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1714] mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Astrology Guidance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Numerology & Name Correction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Tarot Card Reading
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Vastu Shastra Consultation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Reiki & Energy Healing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Negative Energy Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B7C3E] transition-colors text-[#2E2923]">
                  Crystal & Gemstone Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1714] mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 text-[#2E2923] hover:text-[#9B7C3E] transition-colors font-normal"
              >
                <Phone className="w-4 h-4 text-[#2E2923]" />
                <span className="tabular-nums font-normal">{BUSINESS_CONFIG.phone}</span>
              </a>

              <div className="flex items-start gap-2 leading-relaxed text-[#2E2923] font-normal">
                <MapPin className="w-4 h-4 text-[#2E2923] mt-1 shrink-0" />
                <span>
                  1st Floor, Vikas Center, Swami Vivekanand Rd, Santacruz West, Mumbai 400054
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-[#2E2923] space-y-1 font-normal">
              <p>Physical Hours: Mon–Sat 11:30 AM–7:30 PM</p>
              <p>Online: 24 Hours Worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#2E2923] font-semibold gap-4">
          <p>© 2026 Cosmic Healer by Dr. Dipenti Merchant. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Santacruz West, Mumbai</span>
            <span>·</span>
            <span>In-Person & Online Consultations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
