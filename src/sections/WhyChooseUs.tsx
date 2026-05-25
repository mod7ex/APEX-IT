import { useTranslation } from "react-i18next";
import { Check, ShieldAlert, Award, Radio } from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseUs() {
  const { t } = useTranslation();

  const metrics = [
    {
      id: "projects",
      icon: Award,
      accent: "text-[#1434CB] border-[#1434CB]/10 bg-[#1434CB]/5",
      title: t("whyUs.stats.projects.label"),
      value: t("whyUs.stats.projects.value"),
      desc: t("whyUs.stats.projects.desc")
    },
    {
      id: "satisfaction",
      icon: Check,
      accent: "text-[#F7B600] border-[#F7B600]/10 bg-[#F7B600]/5",
      title: t("whyUs.stats.satisfaction.label"),
      value: t("whyUs.stats.satisfaction.value"),
      desc: t("whyUs.stats.satisfaction.desc")
    },
    {
      id: "support",
      icon: Radio,
      accent: "text-white border-white/10 bg-white/5",
      title: t("whyUs.stats.support.label"),
      value: t("whyUs.stats.support.value"),
      desc: t("whyUs.stats.support.desc")
    },
    {
      id: "security",
      icon: ShieldAlert,
      accent: "text-[#1434CB] border-[#1434CB]/10 bg-[#1434CB]/5",
      title: t("whyUs.stats.security.label"),
      value: t("whyUs.stats.security.value"),
      desc: t("whyUs.stats.security.desc")
    }
  ];

  return (
    <section
      id="why-us"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950/40 relative border-t border-white/5 overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F7B600]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F7B600] mb-4 block">
              {t("whyUs.tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
              {t("whyUs.title")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed">
              {t("whyUs.desc")}
            </p>
          </div>
        </div>

        {/* Stats Grid Layout resembling Nvidia / Apple site */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="rounded-2xl bg-neutral-900/40 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual grid accent inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-transparent to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className={`p-3 rounded-xl inline-flex items-center justify-center border mb-6 ${metric.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Glowing Value */}
                  <div className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4 flex items-baseline">
                    <span>{metric.value}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-display font-bold text-gray-200 uppercase tracking-wider mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
