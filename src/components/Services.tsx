import React, { useState } from "react";
import { SERVICES, ServiceItem } from "../data/content";
import {
  Compass,
  Binary,
  Layers,
  Home,
  Sun,
  Sparkles,
  Diamond,
  Shield,
  UserCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-[#9B7C3E]" />;
      case "Binary":
        return <Binary className="w-5 h-5 text-[#9B7C3E]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#9B7C3E]" />;
      case "Home":
        return <Home className="w-5 h-5 text-[#9B7C3E]" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-[#9B7C3E]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#9B7C3E]" />;
      case "Diamond":
        return <Diamond className="w-5 h-5 text-[#9B7C3E]" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-[#9B7C3E]" />;
      case "UserCheck":
      default:
        return <UserCheck className="w-5 h-5 text-[#9B7C3E]" />;
    }
  };

  const categories = [
    { id: "all", label: "All Services (9)" },
    { id: "cosmic", label: "Cosmic Guidance" },
    { id: "energy", label: "Energy & Crystals" },
    { id: "spaces", label: "Vastu & Sanctuary" },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "cosmic") {
      return ["astrology", "numerology", "tarot"].includes(service.id);
    }
    if (selectedCategory === "energy") {
      return ["healing", "negative-energy-removal", "crystal", "gemstone"].includes(service.id);
    }
    if (selectedCategory === "spaces") {
      return ["vastu", "consultation"].includes(service.id);
    }
    return true;
  });

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#FBF9F4] border-t-2 border-[#B89A63]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>OUR SACRED DISCIPLINES & SERVICES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            Guidance for Different Paths in Life
          </h2>
          <p className="text-base sm:text-lg text-[#2E2923] font-medium leading-relaxed max-w-2xl mx-auto">
            Explore personalized consultations and holistic services designed around your individual life journey, birth chart, and personal sanctuary.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer border ${
                  selectedCategory === cat.id
                    ? "bg-[#1A1714] text-[#EFE7D8] border-[#1A1714] shadow-md"
                    : "bg-white text-[#2E2923] border-[#B89A63]/30 hover:border-[#9B7C3E] hover:bg-[#FAF6EE]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border-2 border-[#B89A63]/30 hover:border-[#9B7C3E] transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-2xl overflow-hidden"
            >
              {/* Highlight top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89A63]/30 via-[#9B7C3E] to-[#B89A63]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div>
                {/* Professional Service Card Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F7F3EA]">
                  <img
                    src={service.image || "/images/sanctuary.jpg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle luxury gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/75 via-[#1A1714]/25 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="font-serif text-xs font-bold tracking-widest text-[#1A1714] bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#B89A63]/40 shadow-sm">
                      NO. {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-[#B89A63]/40 flex items-center justify-center shadow-md">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Subtitle bottom banner on image */}
                  {service.subtitle && (
                    <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                      <span className="inline-block text-xs font-medium text-[#FAF5EC] bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                        {service.subtitle}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  {/* Service Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#1A1714] group-hover:text-[#9B7C3E] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Crystal / Energy Association Highlights */}
                  {service.id === "astrology" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#F5F0FA] border border-purple-200">
                      <img
                        src="/images/amethyst.jpg"
                        alt="Amethyst"
                        className="w-7 h-7 rounded-md object-cover border border-purple-300 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Amethyst Spiritual Insight & Kundali Analysis
                      </span>
                    </div>
                  )}

                  {service.id === "numerology" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#FAF5EC] border border-amber-200">
                      <img
                        src="/images/citrine.jpg"
                        alt="Citrine"
                        className="w-7 h-7 rounded-md object-cover border border-amber-300 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Citrine Solar Vibrations & Name Harmony
                      </span>
                    </div>
                  )}

                  {service.id === "tarot" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#FBF9F4] border border-[#B89A63]/30">
                      <img
                        src="/images/clear-quartz.jpg"
                        alt="Clear Quartz"
                        className="w-7 h-7 rounded-md object-cover border border-[#B89A63]/40 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Clear Quartz Intuitive Focus & Card Reflection
                      </span>
                    </div>
                  )}

                  {service.id === "crystal" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#FAF5EC] border border-[#B89A63]/30">
                      <img
                        src="/images/clear-quartz.jpg"
                        alt="Clear Quartz"
                        className="w-7 h-7 rounded-md object-cover border border-[#B89A63]/40 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Clear Quartz & Amethyst Frequency Balancing
                      </span>
                    </div>
                  )}

                  {service.id === "negative-energy-removal" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#F2EFE9] border border-stone-300">
                      <img
                        src="/images/black-tourmaline.jpg"
                        alt="Black Tourmaline"
                        className="w-7 h-7 rounded-md object-cover border border-stone-400 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Black Tourmaline Grounding & Space Shielding
                      </span>
                    </div>
                  )}

                  {service.id === "healing" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#FDF6F7] border border-rose-200">
                      <img
                        src="/images/rose-quartz.jpg"
                        alt="Rose Quartz"
                        className="w-7 h-7 rounded-md object-cover border border-rose-300 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Rose Quartz Emotional Heart Harmonisation
                      </span>
                    </div>
                  )}

                  {service.id === "gemstone" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#FAF5EC] border border-amber-200">
                      <img
                        src="/images/citrine.jpg"
                        alt="Citrine"
                        className="w-7 h-7 rounded-md object-cover border border-amber-300 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Vedic Gemstones & Planetary Alignment
                      </span>
                    </div>
                  )}

                  {service.id === "vastu" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#F7F3EA] border border-[#B89A63]/30">
                      <CheckCircle2 className="w-5 h-5 text-[#9B7C3E] shrink-0" />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Non-Demolition Spatial Energy Alignment
                      </span>
                    </div>
                  )}

                  {service.id === "consultation" && (
                    <div className="mb-4 flex items-center gap-2 p-2 rounded-lg bg-[#FAF5EC] border border-[#B89A63]/30">
                      <CheckCircle2 className="w-5 h-5 text-[#9B7C3E] shrink-0" />
                      <span className="text-xs font-semibold text-[#1A1714]">
                        ✦ Confidential One-on-One Santacruz West Session
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#2E2923] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Discipline Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold text-[#1A1714] bg-[#F7F3EA] border border-[#B89A63]/35 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="px-6 sm:px-7 py-4 bg-[#FBF9F4] border-t-2 border-[#EFE7D8] flex items-center justify-between mt-auto">
                <button
                  onClick={() => onSelectService(service.title)}
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9B7C3E] group-hover:text-[#7A5F26] transition-colors cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs sm:text-sm text-[#2E2923] font-bold">
                  In-Person & Online
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
