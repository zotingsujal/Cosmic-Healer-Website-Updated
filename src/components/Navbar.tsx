import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/content";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Crystals", href: "#crystal-sanctuary" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F0]/95 backdrop-blur-md py-3.5 border-b-2 border-[#B89A63]/30 shadow-md shadow-[#1A1714]/5"
          : "bg-[#F7F3EA]/90 backdrop-blur-sm py-4 border-b border-[#B89A63]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Logo and brand wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B7C3E]"
            aria-label="Cosmic Healer by Dr. Dipenti Merchant"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#B89A63]/50 bg-white shrink-0 p-0.5 shadow-sm group-hover:border-[#9B7C3E] transition-all">
              <img
                src={BUSINESS_CONFIG.logoImage}
                alt="Cosmic Healer Sacred Compass & Tree Logo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = BUSINESS_CONFIG.logoSvg;
                }}
              />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#1A1714] group-hover:text-[#9B7C3E] transition-colors whitespace-nowrap">
              COSMIC HEALER
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-bold tracking-wide text-[#1A1714]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#9B7C3E] transition-colors relative py-1 focus:outline-none focus-visible:text-[#9B7C3E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#1A1714] hover:text-[#9B7C3E] transition-colors px-2 py-1 font-bold"
            >
              <Phone className="w-4 h-4 text-[#9B7C3E]" />
              <span className="tabular-nums font-bold">{BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              type="button"
              className="relative px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-sm shadow-[#9B7C3E]/25 hover:shadow-md active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B7C3E] cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-[#1A1714] hover:text-[#9B7C3E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B7C3E]"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F4] border-b-2 border-[#B89A63]/30 px-6 py-6 space-y-4 shadow-xl transition-all">
          <nav className="flex flex-col space-y-3.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-bold text-[#1A1714] hover:text-[#9B7C3E] transition-colors py-2 border-b-2 border-[#EFE7D8]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="w-full text-center py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-colors rounded shadow-sm"
            >
              Book Consultation
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#1A1714] border-2 border-[#B89A63]/40 rounded hover:border-[#9B7C3E] transition-colors tracking-wide bg-white"
            >
              <Phone className="w-4 h-4 text-[#9B7C3E]" />
              <span>Direct Call: {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
