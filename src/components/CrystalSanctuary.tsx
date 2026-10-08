import React, { useState } from "react";
import { PRIMARY_CRYSTALS, CrystalItem } from "../data/content";
import { Sparkles, ArrowRight, ShieldCheck, Info } from "lucide-react";

interface CrystalSanctuaryProps {
  onOpenBookingWithService?: (serviceName: string) => void;
}

export const CrystalSanctuary: React.FC<CrystalSanctuaryProps> = ({
  onOpenBookingWithService,
}) => {
  const [selectedCrystal, setSelectedCrystal] = useState<CrystalItem>(
    PRIMARY_CRYSTALS[0]
  );

  return (
    <section
      id="crystal-sanctuary"
      className="relative py-20 lg:py-28 bg-[#FBF9F4] border-t-2 border-[#B89A63]/25 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#EFE7D8] rounded-full blur-[140px] opacity-70" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#B89A63]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
            <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
            <span>THE CURATED CRYSTAL SYSTEM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight mb-4">
            Sacred Mineral Frequencies & Spiritual Balance
          </h2>
          <p className="text-base sm:text-lg text-[#2E2923] font-medium leading-relaxed">
            Five elemental crystals intentionally selected by Dr. Dipenti Merchant to support meditative focus, space cleansing, and energetic equilibrium.
          </p>
        </div>

        {/* Crystal Selection Nav Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {PRIMARY_CRYSTALS.map((crystal) => {
            const isSelected = selectedCrystal.id === crystal.id;
            return (
              <button
                key={crystal.id}
                onClick={() => setSelectedCrystal(crystal)}
                type="button"
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#9B7C3E] text-white shadow-md shadow-[#9B7C3E]/20 scale-[1.02]"
                    : "bg-white text-[#1A1714] border-2 border-[#B89A63]/30 hover:border-[#9B7C3E] hover:text-[#9B7C3E]"
                }`}
              >
                <span>✦</span>
                <span>{crystal.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card */}
        <div className="bg-white rounded-3xl border-2 border-[#B89A63]/35 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] bg-[#F7F3EA] overflow-hidden group">
              <img
                src={selectedCrystal.image}
                alt={`${selectedCrystal.name} natural healing crystal`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EFE7D8] block mb-1">
                  {selectedCrystal.colorName}
                </span>
                <h4 className="font-serif text-2xl font-bold text-white">
                  {selectedCrystal.name}
                </h4>
              </div>
            </div>

            {/* Narrative & Guidance Column */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9B7C3E]">
                    {selectedCrystal.role}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#F7F3EA] border border-[#B89A63]/30 text-[#1A1714]">
                    Hand-Selected Mineral
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1714] mb-4">
                  {selectedCrystal.headline}
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-[#2E2923] leading-relaxed mb-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#9B7C3E] mb-1">
                      Traditional Association
                    </h5>
                    <p>{selectedCrystal.traditionalAssociation}</p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#9B7C3E] mb-1">
                      Consultation & Space Role
                    </h5>
                    <p>{selectedCrystal.consultationRole}</p>
                  </div>

                  <div className="p-3.5 bg-[#F7F3EA] rounded-xl border border-[#B89A63]/25 flex items-start gap-2.5 text-xs text-[#524B40]">
                    <Info className="w-4 h-4 text-[#9B7C3E] shrink-0 mt-0.5" />
                    <p>{selectedCrystal.carefulNote}</p>
                  </div>
                </div>

                {/* Keyword Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedCrystal.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold text-[#1A1714] bg-[#F7F3EA] border border-[#B89A63]/30 px-3 py-1 rounded-md"
                    >
                      ✦ {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 border-t-2 border-[#EFE7D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={() => {
                    if (onOpenBookingWithService) {
                      onOpenBookingWithService("Crystal Guidance");
                    } else {
                      const el = document.getElementById("contact");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  type="button"
                  className="px-6 py-3.5 rounded text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-colors inline-flex items-center justify-center gap-2 shadow-md shadow-[#9B7C3E]/20 cursor-pointer"
                >
                  <span>Enquire About {selectedCrystal.name} Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-[#6F6A61] font-medium text-center sm:text-right">
                  Personalised matching with your Kundali & Space
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Crystal Quick Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {PRIMARY_CRYSTALS.map((crystal) => (
            <div
              key={crystal.id}
              onClick={() => setSelectedCrystal(crystal)}
              className={`p-4 rounded-2xl bg-white border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                selectedCrystal.id === crystal.id
                  ? "border-[#9B7C3E] shadow-lg ring-2 ring-[#9B7C3E]/20"
                  : "border-[#B89A63]/25 hover:border-[#9B7C3E]/60 shadow-sm"
              }`}
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-[#F7F3EA]">
                <img
                  src={crystal.image}
                  alt={crystal.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1A1714] leading-snug">
                {crystal.name}
              </h4>
              <p className="text-[11px] font-semibold text-[#9B7C3E] uppercase tracking-wider mt-0.5 line-clamp-1">
                {crystal.role}
              </p>
            </div>
          ))}
        </div>

        {/* Responsible Stewardship & Non-Guaranteed Disclaimer Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#EFE7D8]/60 border border-[#B89A63]/30 flex items-start gap-3 max-w-4xl mx-auto text-xs text-[#524B40] leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-[#9B7C3E] shrink-0 mt-0.5" />
          <p>
            <strong>Mindful Practice Note:</strong> Crystals and mineral frequencies are offered as complementary traditional aids for environmental ambiance, meditation, and personal mindfulness. They are not intended to diagnose, treat, cure, or prevent any medical condition, nor replace qualified medical or psychological counsel.
          </p>
        </div>
      </div>
    </section>
  );
};
