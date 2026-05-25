import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronDown, CheckCircle, Database } from "lucide-react";
import { GridCanvas } from "../components/GridCanvas";
import { motion } from "motion/react";

export function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-black"
    >
      {/* Dynamic Grid Canvas Background */}
      <GridCanvas />

      {/* Futuristic color blur gradients behind text */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-[#1434CB]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-[#F7B600]/8 blur-[100px] pointer-events-none" />

      {/* Decorative Top Line Grid Accents (IBM style) */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute left-[15%] inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute right-[15%] inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      {/* Central Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tag badge with small gold detail */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 glass-panel-light text-xs font-mono font-medium tracking-wider text-gray-300 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F7B600] animate-pulse" />
            {t("hero.badge")}
          </motion.div>

          {/* Heading with sophisticated gradients */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Supporting tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-gray-400 font-sans max-w-2xl leading-relaxed mb-10"
          >
            {t("hero.tagline")}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-16"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wider bg-[#1434CB] hover:bg-[#0f279d] text-white transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1434CB]/20 group"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wider bg-transparent hover:bg-white/5 border border-white/10 text-white transition-all hover:scale-105 duration-300 flex items-center justify-center"
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>

          {/* Sub stats on bottom banner */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 justify-center items-center py-4 px-8 rounded-2xl glass-panel-light border border-white/5 bg-black/40 shadow-xl"
          >
            <div className="flex items-center gap-2 font-sans">
              <CheckCircle className="w-5 h-5 text-[#F7B600]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 leading-none">{t("hero.statClients")}</p>
                <p className="text-sm font-mono font-bold text-white">450+ Enterprise Partners</p>
              </div>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2 font-sans">
              <Database className="w-5 h-5 text-[#1434CB]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 leading-none">{t("hero.statUptime")}</p>
                <p className="text-sm font-mono font-bold text-white">99.997% SLA Verified</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Arrow Down element */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <a href="#services" className="pointer-events-auto p-2" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-gray-500 hover:text-white transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
