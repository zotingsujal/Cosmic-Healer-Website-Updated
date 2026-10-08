import React from "react";
import { BUSINESS_CONFIG } from "../data/content";
import { Phone, Calendar } from "lucide-react";

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#FBF9F4]/98 backdrop-blur-md border-t-2 border-[#B89A63]/35 px-4 py-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3 items-center">
        {/* Call button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="h-12 rounded-lg border-2 border-[#B89A63]/50 text-[#1A1714] hover:text-[#9B7C3E] bg-white flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors active:scale-[0.98] shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#9B7C3E]" />
          <span>Call Now</span>
        </a>

        {/* Book Consultation button */}
        <button
          onClick={onOpenBooking}
          type="button"
          className="h-12 rounded-lg bg-[#9B7C3E] text-white hover:bg-[#836730] flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors shadow-sm shadow-[#9B7C3E]/30 active:scale-[0.98] cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Session</span>
        </button>
      </div>
    </div>
  );
};
