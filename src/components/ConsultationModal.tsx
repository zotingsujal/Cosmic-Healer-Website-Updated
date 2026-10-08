import React, { useState } from "react";
import { BUSINESS_CONFIG, SERVICES } from "../data/content";
import { X, CheckCircle, Send, Phone, MessageSquare, Sparkles } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Consultation",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: defaultService || "Consultation",
    consultationType: "In-Person",
    preferredDay: "",
    preferredTime: "Afternoon",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.phone.trim() || formData.phone.replace(/[^0-9]/g, "").length < 8) {
      errs.phone = "Please enter a valid phone number.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FBF9F4] border-2 border-[#B89A63]/40 shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close booking modal"
          className="absolute top-5 right-5 p-2 text-[#1A1714] hover:text-[#9B7C3E] transition-colors focus:outline-none cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F7F3EA] border-2 border-[#9B7C3E] text-[#9B7C3E] mx-auto flex items-center justify-center shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1714] font-bold">
              Booking Request Received
            </h3>
            <p className="text-base text-[#2E2923] max-w-md mx-auto leading-relaxed font-medium">
              Thank you, <strong className="text-[#1A1714]">{formData.fullName}</strong>. Dr. Dipenti Merchant’s team will contact you shortly on <strong className="text-[#9B7C3E]">{formData.phone}</strong> to confirm your slot.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] rounded shadow-sm"
              >
                Call Now: {BUSINESS_CONFIG.phone}
              </a>
              <button
                onClick={onClose}
                type="button"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#1A1714] border-2 border-[#9B7C3E] rounded hover:bg-[#F7F3EA] bg-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9B7C3E] mb-1">
                <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
                <span>COSMIC HEALER · APPOINTMENTS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1714] font-bold">
                Reserve Your Consultation
              </h2>
              <p className="text-sm text-[#2E2923] mt-1 font-medium">
                Personalised sessions with Dr. Dipenti Merchant in Santacruz West or Online worldwide.
              </p>
            </div>

            {/* Quick Call Out Banner */}
            <div className="mb-6 p-4 rounded-xl bg-[#F7F3EA] border-2 border-[#B89A63]/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-[#1A1714] font-bold">
                <Phone className="w-4 h-4 text-[#9B7C3E]" />
                <span>Prefer to call directly?</span>
              </div>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="text-sm font-extrabold text-[#9B7C3E] hover:underline tabular-nums"
              >
                {BUSINESS_CONFIG.phone}
              </a>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-1.5">
                    Your Name <span className="text-[#9B7C3E]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Full name"
                    className="w-full px-3.5 py-3 rounded-lg bg-white border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium focus:outline-none focus:border-[#9B7C3E]"
                  />
                  {errors.fullName && (
                    <p className="text-xs sm:text-sm text-rose-600 mt-1 font-bold">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-1.5">
                    Phone Number <span className="text-[#9B7C3E]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="98200 XXXXX"
                    className="w-full px-3.5 py-3 rounded-lg bg-white border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium focus:outline-none focus:border-[#9B7C3E]"
                  />
                  {errors.phone && (
                    <p className="text-xs sm:text-sm text-rose-600 mt-1 font-bold">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-1.5">
                    Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3.5 py-3 rounded-lg bg-white border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium focus:outline-none focus:border-[#9B7C3E]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-white text-[#1A1714] font-medium">
                        {s.number} — {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-1.5">
                    Mode
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, consultationType: "In-Person" })
                      }
                      className={`py-3 text-sm font-bold rounded-lg border-2 transition-colors cursor-pointer ${
                        formData.consultationType === "In-Person"
                          ? "bg-[#9B7C3E] border-[#9B7C3E] text-white"
                          : "bg-white border-[#B89A63]/30 text-[#1A1714] hover:border-[#9B7C3E]"
                      }`}
                    >
                      In-Person
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, consultationType: "Online" })
                      }
                      className={`py-3 text-sm font-bold rounded-lg border-2 transition-colors cursor-pointer ${
                        formData.consultationType === "Online"
                          ? "bg-[#9B7C3E] border-[#9B7C3E] text-white"
                          : "bg-white border-[#B89A63]/30 text-[#1A1714] hover:border-[#9B7C3E]"
                      }`}
                    >
                      Online
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-1.5">
                  Message / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us what you'd like guidance on..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium focus:outline-none focus:border-[#9B7C3E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-base font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Submit Request</span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-sm font-bold text-[#2E2923]">
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
