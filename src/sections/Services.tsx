import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import {
  Camera,
  Home,
  Wifi,
  Cloud,
  Smartphone,
  Globe,
  Monitor,
  CreditCard,
  Wrench,
  ShieldCheck,
  Bot,
  RefreshCw,
  Megaphone,
  Paintbrush,
  ChevronRight,
  Sparkles
} from "lucide-react";

type ServiceItemKey =
  | "cctv"
  | "smartSpace"
  | "wifi"
  | "serverCloud"
  | "mobileApp"
  | "webApp"
  | "desktopApp"
  | "pos"
  | "support"
  | "cyber"
  | "chatbot"
  | "workflow"
  | "marketing"
  | "design";

interface ServiceData {
  id: ServiceItemKey;
  icon: any;
  color: string;
}

interface CategoryData {
  id: string;
  translationKey: string;
  items: ServiceData[];
}

export function Services() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>("security");

  const categories: CategoryData[] = [
    {
      id: "security",
      translationKey: "services.categories.security",
      items: [
        { id: "cctv", icon: Camera, color: "text-[#1434CB] bg-[#1434CB]/5" },
        { id: "smartSpace", icon: Home, color: "text-[#F7B600] bg-[#F7B600]/5" }
      ]
    },
    {
      id: "networking",
      translationKey: "services.categories.networking",
      items: [
        { id: "wifi", icon: Wifi, color: "text-[#1434CB] bg-[#1434CB]/5" },
        { id: "serverCloud", icon: Cloud, color: "text-white bg-white/5" }
      ]
    },
    {
      id: "software",
      translationKey: "services.categories.software",
      items: [
        { id: "mobileApp", icon: Smartphone, color: "text-[#1434CB] bg-[#1434CB]/5" },
        { id: "webApp", icon: Globe, color: "text-white bg-white/5" },
        { id: "desktopApp", icon: Monitor, color: "text-[#F7B600] bg-[#F7B600]/5" }
      ]
    },
    {
      id: "business",
      translationKey: "services.categories.business",
      items: [
        { id: "pos", icon: CreditCard, color: "text-white bg-white/5" },
        { id: "support", icon: Wrench, color: "text-[#1434CB] bg-[#1434CB]/5" }
      ]
    },
    {
      id: "cybersecurity",
      translationKey: "services.categories.cybersecurity",
      items: [
        { id: "cyber", icon: ShieldCheck, color: "text-[#F7B600] bg-[#F7B600]/5" }
      ]
    },
    {
      id: "aiAutomation",
      translationKey: "services.categories.aiAutomation",
      items: [
        { id: "chatbot", icon: Bot, color: "text-[#1434CB] bg-[#1434CB]/5" },
        { id: "workflow", icon: RefreshCw, color: "text-white bg-white/5" }
      ]
    },
    {
      id: "digital",
      translationKey: "services.categories.digital",
      items: [
        { id: "marketing", icon: Megaphone, color: "text-[#F7B600] bg-[#F7B600]/5" },
        { id: "design", icon: Paintbrush, color: "text-[#1434CB] bg-[#1434CB]/5" }
      ]
    }
  ];

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-12 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Decorative Light grids */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] rounded-full bg-[#1434CB]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Block */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#1434CB]/20 bg-[#1434CB]/5 text-xs font-mono font-bold tracking-wider text-[#1434CB] mb-4 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {t("services.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-none mb-6">
            {t("services.title")}
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-2xl leading-relaxed">
            {t("services.desc")}
          </p>
        </div>

        {/* Master switcher grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left selectors (Sidebar on desktop / Horizontal bar on mobile) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none snap-x h-full">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`snap-center shrink-0 flex items-center justify-between text-left px-5 py-4 rounded-xl border transition-all duration-300 w-auto lg:w-full min-w-[200px] font-display font-medium text-sm ${
                    isSelected
                      ? "bg-[#1434CB]/10 border-[#1434CB]/30 text-white shadow-md shadow-[#1434CB]/5"
                      : "bg-neutral-900/30 border-white/5 text-gray-400 hover:text-white hover:bg-neutral-900/50"
                  }`}
                >
                  <span>{t(`${cat.translationKey}.title`)}</span>
                  <ChevronRight
                    className={`hidden lg:block w-4 h-4 text-gray-500 transition-transform ${
                      isSelected ? "translate-x-1 text-white" : ""
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right active cards grid */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {activeCategory.items.map((srv) => {
                  const SrvIcon = srv.icon;
                  return (
                    <motion.div
                      key={srv.id}
                      whileHover={{ y: -6 }}
                      className="rounded-2xl bg-neutral-900/30 border border-white/5 p-8 flex flex-col items-start hover:border-white/10 transition-all duration-300 group"
                    >
                      <div className={`p-4 rounded-xl border border-white/5 mb-6 ${srv.color} transition-transform duration-300 group-hover:scale-105`}>
                        <SrvIcon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-white mb-3">
                        {t(`services.items.${srv.id}.title`)}
                      </h3>
                      
                      <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                        {t(`services.items.${srv.id}.desc`)}
                      </p>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#1434CB] hover:text-[#F7B600] transition-colors mt-auto group/link"
                      >
                        {t("nav.cta")}
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
