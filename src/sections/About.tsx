import { useTranslation } from "react-i18next";
import { Server, Shield, Code, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Server,
      color: "text-[#1434CB] border-[#1434CB]/20",
      title: t("about.philosophy.infra.title"),
      desc: t("about.philosophy.infra.desc")
    },
    {
      icon: Shield,
      color: "text-[#F7B600] border-[#F7B600]/20",
      title: t("about.philosophy.security.title"),
      desc: t("about.philosophy.security.desc")
    },
    {
      icon: Code,
      color: "text-white border-white/20",
      title: t("about.philosophy.software.title"),
      desc: t("about.philosophy.software.desc")
    },
    {
      icon: Sparkles,
      color: "text-[#1434CB] border-[#1434CB]/20",
      title: t("about.philosophy.ai.title"),
      desc: t("about.philosophy.ai.desc")
    }
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950/60 relative border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient circular overlay */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-[#1434CB]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block: Description with spacious typography */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F7B600] mb-4">
              {t("about.tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white tracking-tight leading-[1.15] mb-6">
              {t("about.title")}
            </h2>
            <p className="text-gray-400 font-sans leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-gray-500 text-sm font-sans leading-relaxed mb-8">
              {t("about.p2")}
            </p>

            {/* Micro branding detail */}
            <div className="flex gap-4 items-center pl-4 border-l-2 border-[#1434CB]">
              <span className="font-display font-medium text-xs tracking-wider text-gray-400 uppercase">
                Apex-IT Solutions Group
              </span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-500 font-mono">
                Estd 2018
              </span>
            </div>
          </div>

          {/* Right Block: Bento Grid of philosophies */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.15)" }}
                  className="rounded-2xl bg-neutral-900/40 border border-white/5 p-8 flex flex-col items-start transition-all duration-300"
                >
                  <div className={`p-4 rounded-xl glass-panel-light mb-6 ${card.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
