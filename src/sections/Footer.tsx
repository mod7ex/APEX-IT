import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Layers, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Footer() {
  const { t, i18n } = useTranslation();
  const [showFooterLang, setShowFooterLang] = useState(false);
  
  const currentLang = i18n.language || "fr";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowFooterLang(false);
  };

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.whyUs"), href: "#why-us" },
    { name: t("nav.industries"), href: "#industries" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" }
  ];

  const categories = [
    "services.categories.security",
    "services.categories.networking",
    "services.categories.software",
    "services.categories.business",
    "services.categories.cybersecurity",
    "services.categories.aiAutomation",
    "services.categories.digital"
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Visual background lines */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#1434CB]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          
          {/* Logo and Slogan */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#1434CB] to-[#F7B600] p-[1px] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <div className="w-full h-full rounded-[8px] bg-black flex items-center justify-center">
                  <Layers className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                APEX<span className="text-[#1434CB] group-hover:text-[#F7B600] transition-colors">-IT</span>
              </span>
            </a>

            <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm">
              {t("footer.slogan")}
            </p>

            <span className="text-[10px] text-gray-600 font-mono tracking-wider">
              PARIS &middot; TOULOUSE &middot; BRUXELLES
            </span>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F7B600] mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Categories shorthand list */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1434CB] mb-6">
              Expertises
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-gray-400">
              {categories.map((catKey) => (
                <li key={catKey}>
                  <a href="#services" className="hover:text-white transition-colors duration-200">
                    {t(`${catKey}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections & language switcher */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-6">
                Changement de Langue
              </h4>
              
              {/* Language switcher box */}
              <div className="relative">
                <button
                  onClick={() => setShowFooterLang(!showFooterLang)}
                  className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl hover:text-white hover:border-white/25 transition-all w-28 grow-0"
                >
                  <Globe className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-left flex-1 font-sans">{currentLang === "fr" ? "Français" : "English"}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                </button>

                <AnimatePresence>
                  {showFooterLang && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setShowFooterLang(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-11 left-0 w-28 rounded-xl bg-neutral-900 border border-white/10 p-1 z-20 shadow-lg"
                      >
                        <button
                          onClick={() => changeLanguage("fr")}
                          className={`w-full text-left px-2.5 py-2 text-xs font-medium rounded-lg transition-colors ${
                            currentLang === "fr"
                              ? "bg-[#1434CB] text-white"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          Français
                        </button>
                        <button
                          onClick={() => changeLanguage("en")}
                          className={`w-full text-left px-2.5 py-2 text-xs font-medium rounded-lg transition-colors mt-0.5 ${
                            currentLang === "en"
                              ? "bg-[#1434CB] text-white"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          English
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Social credentials branding list */}
            <div className="flex gap-4 items-center mt-6 lg:mt-0 text-gray-500">
              <a href="#" className="hover:text-white transition-colors text-xs font-mono">LINKEDIN</a>
              <a href="#" className="hover:text-white transition-colors text-xs font-mono">GITHUB</a>
              <a href="#" className="hover:text-white transition-colors text-xs font-mono">TWITTER</a>
            </div>
          </div>

        </div>

        <div className="h-[1px] bg-white/5 w-full mb-8" />

        {/* Legal copyrights details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-sans text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} APEX-IT Solutions. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Mentions Légales / Legal</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Confidentialité / Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
