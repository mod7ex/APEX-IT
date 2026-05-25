import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, MessageCircle, Send, Plus, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const services = (t("contact.servicesList", { returnObjects: true }) as string[]) || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real database integration / mail send
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950/60 relative border-t border-white/5 overflow-hidden"
    >
      {/* Background glowing overlays */}
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-[#1434CB]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-[#F7B600]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F7B600] mb-4 block">
                {t("contact.tag")}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-6">
                {t("contact.title")}
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed mb-10 text-sm md:text-base">
                {t("contact.desc")}
              </p>

              {/* Contact Credentials Card stack */}
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1434CB]/10 border border-[#1434CB]/20 rounded-xl text-[#1434CB]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">
                      {t("contact.info.address")}
                    </h4>
                    <p className="text-sm font-sans font-medium text-gray-200">
                      {t("contact.info.office")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#7D7D7D]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">
                      {t("contact.info.phone")}
                    </h4>
                    <p className="text-sm font-sans font-medium text-gray-200">
                      +33 1 45 67 89 00
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1434CB]/10 border border-[#1434CB]/20 rounded-xl text-[#1434CB]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">
                      {t("contact.info.email")}
                    </h4>
                    <p className="text-sm font-sans font-medium text-gray-200">
                      operations@apex-it.solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Dark Vector Maps Placeholder */}
            <div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-5 mt-auto relative overflow-hidden h-48 flex flex-col justify-between">
              
              {/* Grid abstract mapping wires */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Radial signal wave */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#1434CB] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1434CB]" />
              </div>
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[9px] font-mono text-gray-500">LIVE GEOLOCALISATION</span>
                <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ONLINE
                </span>
              </div>
              
              <div className="relative z-10 font-mono text-[10px] text-gray-400 text-left">
                <p className="text-xs font-bold text-white mb-0.5">GPS COORDINATES</p>
                <p>LAT: 48.8566&deg; N &middot; LON: 2.3522&deg; E</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-neutral-900/25 border border-white/5 p-8 md:p-12 shadow-2xl glass-panel relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                          {t("contact.fields.name")} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1434CB] transition-colors"
                          placeholder="Jean Dupont"
                        />
                      </div>

                      {/* Business Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                          {t("contact.fields.email")} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1434CB] transition-colors"
                          placeholder="jean@entreprise.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                          {t("contact.fields.company")}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1434CB] transition-colors"
                          placeholder="Mycorp Inc."
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                          {t("contact.fields.phone")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1434CB] transition-colors"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>

                    {/* Sector Selector */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                        {t("contact.fields.service")} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1434CB] transition-colors"
                      >
                        <option value="" disabled className="bg-black">
                          -- Sélectionner un pôle --
                        </option>
                        {services.map((srv) => (
                          <option key={srv} value={srv} className="bg-neutral-900">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                        {t("contact.fields.message")} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1434CB] transition-colors resize-none"
                        placeholder="Quels sont vos besoins d'infrastructure ou de développement ?"
                      />
                    </div>

                    {/* Submit and external CTAs */}
                    <div className="flex flex-col gap-5 mt-4">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl text-sm font-bold bg-[#1434CB] hover:bg-[#0f279d] text-white transition-colors duration-300 uppercase tracking-widest flex items-center justify-center gap-2 font-display cursor-pointer hover:shadow-lg hover:shadow-[#1434CB]/10"
                      >
                        <Send className="w-4 h-4" />
                        {t("contact.fields.submit")}
                      </button>

                      <div className="h-[1px] bg-white/10 w-full my-1" />

                      {/* Direct External Dialog Channels (WhatsApp / Direct Mail) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a
                          href="https://wa.me/33145678900"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide transition-colors"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          {t("contact.info.ctaWhatsapp")}
                        </a>
                        <a
                          href="mailto:operations@apex-it.solutions"
                          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#1434CB]/20 bg-[#1434CB]/5 hover:bg-[#1434CB]/10 text-gray-300 text-xs font-semibold tracking-wide transition-colors"
                        >
                          <Mail className="w-4 h-4 text-[#1434CB]" />
                          {t("contact.info.ctaEmail")}
                        </a>
                      </div>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-16 px-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6">
                      <CheckCircle2 className="w-8 h-8 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-3">
                      {t("contact.fields.success")}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-sm mb-8 leading-relaxed">
                      {t("contact.fields.successSub")}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          phone: "",
                          service: "",
                          message: ""
                        });
                      }}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Refaire une autre demande
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
