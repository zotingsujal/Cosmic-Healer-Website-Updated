import React, { useState } from "react";
import { BUSINESS_CONFIG, SERVICES } from "../data/content";
import { Phone, MessageSquare, CheckCircle, Send, Clock, MapPin, Sparkles } from "lucide-react";

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: initialService || "Consultation",
    consultationType: "In-Person",
    preferredDay: "",
    preferredTime: "Afternoon",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your name.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.service) {
      errs.service = "Please select a service.";
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
    <section id="contact" className="relative py-20 lg:py-28 bg-[#F7F3EA] border-t-2 border-[#B89A63]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Call & Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#9B7C3E] mb-3">
              <Sparkles className="w-4 h-4 text-[#9B7C3E]" />
              <span>CONSULTATION ENQUIRY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1714] tracking-tight leading-tight mb-4">
              Your Journey Begins With a Conversation
            </h2>

            <p className="text-base sm:text-lg text-[#2E2923] leading-relaxed mb-8 font-medium">
              Have a question or unsure which service is right for you? Get in touch with Cosmic Healer and discuss your consultation requirements.
            </p>

            {/* Direct Phone Highlight Card */}
            <div className="w-full p-7 rounded-2xl bg-white border-2 border-[#B89A63]/35 shadow-md mb-6">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-wider text-[#9B7C3E] font-bold mb-2">
                <Phone className="w-4 h-4 text-[#9B7C3E]" />
                <span>Direct Line For Appointments</span>
              </div>

              {/* Displayed in clean, normal text style */}
              <div className="mb-5">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="font-sans text-xl sm:text-2xl font-normal text-[#1A1714] hover:text-[#9B7C3E] transition-colors tracking-normal inline-block"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-sm text-center"
                >
                  Call Now
                </a>

                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-900 border-2 border-emerald-600/40 hover:border-emerald-600 bg-emerald-50 transition-colors rounded text-center inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Quick Summary of Operating Hours */}
            <div className="space-y-3.5 text-sm font-medium text-[#2E2923]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#9B7C3E]" />
                <span>Centre Hours: Mon–Sat 11:30 AM–7:30 PM (Sunday Closed)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#9B7C3E]" />
                <span>Vikas Center, Santacruz West, Mumbai</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-[#B89A63]/30 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F7F3EA] border-2 border-[#9B7C3E] text-[#9B7C3E] mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1714] font-bold">
                    Enquiry Received
                  </h3>
                  <p className="text-base text-[#2E2923] max-w-md mx-auto leading-relaxed font-medium">
                    Thank you, <strong className="text-[#1A1714]">{formData.fullName}</strong>. Dr. Dipenti Merchant’s team at Cosmic Healer will review your request and contact you at <strong className="text-[#9B7C3E]">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      type="button"
                      className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#9B7C3E] border-2 border-[#9B7C3E] rounded hover:bg-[#F7F3EA] cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1714] font-bold mb-1">
                    Request a Consultation
                  </h3>
                  <p className="text-sm text-[#2E2923] -mt-1 mb-6 font-medium">
                    Please share your details to reserve your preferred consultation time.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-2">
                        Full Name <span className="text-[#9B7C3E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-4 py-3 rounded-lg bg-[#FBF9F4] border-2 text-base text-[#1A1714] font-medium placeholder-[#7A746B] focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-[#B89A63]/30 focus:border-[#9B7C3E] focus:bg-white"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs sm:text-sm text-rose-600 mt-1 font-bold">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-2">
                        Phone Number <span className="text-[#9B7C3E]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 98200 XXXXX"
                        className={`w-full px-4 py-3 rounded-lg bg-[#FBF9F4] border-2 text-base text-[#1A1714] font-medium placeholder-[#7A746B] focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-[#B89A63]/30 focus:border-[#9B7C3E] focus:bg-white"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs sm:text-sm text-rose-600 mt-1 font-bold">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Interested In */}
                    <div>
                      <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-2">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-[#FBF9F4] border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium focus:outline-none focus:border-[#9B7C3E] focus:bg-white transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-white text-[#1A1714] font-medium">
                            {s.number} — {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Consultation Type */}
                    <div>
                      <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-2">
                        Consultation Mode
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              consultationType: "In-Person",
                            })
                          }
                          className={`py-3 text-sm font-bold rounded-lg border-2 transition-colors cursor-pointer ${
                            formData.consultationType === "In-Person"
                              ? "bg-[#9B7C3E] border-[#9B7C3E] text-white"
                              : "bg-[#FBF9F4] border-[#B89A63]/30 text-[#1A1714] hover:border-[#9B7C3E]"
                          }`}
                        >
                          In-Person
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              consultationType: "Online",
                            })
                          }
                          className={`py-3 text-sm font-bold rounded-lg border-2 transition-colors cursor-pointer ${
                            formData.consultationType === "Online"
                              ? "bg-[#9B7C3E] border-[#9B7C3E] text-white"
                              : "bg-[#FBF9F4] border-[#B89A63]/30 text-[#1A1714] hover:border-[#9B7C3E]"
                          }`}
                        >
                          Online
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Day */}
                    <div>
                      <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-2">
                        Preferred Day / Date
                      </label>
                      <input
                        type="text"
                        value={formData.preferredDay}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDay: e.target.value })
                        }
                        placeholder="e.g. This Thursday, or specific date"
                        className="w-full px-4 py-3 rounded-lg bg-[#FBF9F4] border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium placeholder-[#7A746B] focus:outline-none focus:border-[#9B7C3E] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-2">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-[#FBF9F4] border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium focus:outline-none focus:border-[#9B7C3E] focus:bg-white transition-colors"
                      >
                        <option value="Morning" className="bg-white">
                          Morning (11:30 AM – 1:30 PM)
                        </option>
                        <option value="Afternoon" className="bg-white">
                          Afternoon (1:30 PM – 4:30 PM)
                        </option>
                        <option value="Evening" className="bg-white">
                          Evening (4:30 PM – 7:30 PM)
                        </option>
                        <option value="OnlineFlexible" className="bg-white">
                          Flexible Online Slot (Anytime)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1A1714] font-bold mb-2">
                      Brief Message or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share what specific guidance or questions you would like addressed..."
                      className="w-full px-4 py-3 rounded-lg bg-[#FBF9F4] border-2 border-[#B89A63]/30 text-base text-[#1A1714] font-medium placeholder-[#7A746B] focus:outline-none focus:border-[#9B7C3E] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 text-base font-bold uppercase tracking-wider text-white bg-[#9B7C3E] hover:bg-[#836730] transition-all rounded shadow-md shadow-[#9B7C3E]/25 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Request a Consultation</span>
                  </button>

                  {/* Privacy note */}
                  <p className="text-xs sm:text-sm text-[#2E2923] text-center tracking-wide mt-3 font-semibold">
                    Your details are used only to respond to your consultation enquiry. We strictly respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
