import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown, Globe, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const currentLang = i18n.language || "fr";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLangMenu(false);
  };

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.whyUs"), href: "#why-us" },
    { name: t("nav.industries"), href: "#industries" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1434CB] to-[#F7B600] p-[1.5px] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
            <div className="w-full h-full rounded-[7px] bg-black flex items-center justify-center">
              <Layers className="w-5 h-5 text-white transition-colors group-hover:text-[#F7B600]" />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            APEX<span className="text-[#1434CB] group-hover:text-[#F7B600] transition-colors">-IT</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans font-medium text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-white/20" />

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4 text-gray-400" />
              <span>{currentLang === "fr" ? "Français" : "English"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowLangMenu(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-40 rounded-lg bg-neutral-900 border border-white/10 p-1.5 z-20 shadow-xl"
                  >
                    <button
                      onClick={() => changeLanguage("fr")}
                      className={`w-full text-left px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                        currentLang === "fr"
                          ? "bg-[#1434CB] text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      Français (FR)
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`w-full text-left px-3 py-2 text-xs font-medium rounded-md transition-colors mt-0.5 ${
                        currentLang === "en"
                          ? "bg-[#1434CB] text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      English (EN)
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Header button */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider bg-[#1434CB] hover:bg-[#0f279d] text-white transition-all hover:scale-105 duration-300 uppercase shadow-md shadow-[#1434CB]/10"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile menu and Language toggle buttons combined */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Quick Language Toggle on Mobile */}
          <button
            onClick={() => changeLanguage(currentLang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-full"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase font-mono font-medium">
              {currentLang === "fr" ? "EN" : "FR"}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans font-medium text-lg text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/10 my-1" />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-5 py-3 rounded-full text-sm font-bold bg-[#1434CB] hover:bg-[#0f279d] text-white tracking-widest uppercase transition-all duration-300"
              >
                {t("nav.cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
