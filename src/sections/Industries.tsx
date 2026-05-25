import { useTranslation } from "react-i18next";
import { Utensils, GraduationCap, Dumbbell, ShoppingBag, Building2, Rocket, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Industries() {
  const { t } = useTranslation();

  const verticals = [
    { id: "restaurants", icon: Utensils, border: "hover:border-[#F7B600]/30 hover:shadow-[#F7B600]/2", color: "text-[#F7B600]" },
    { id: "schools", icon: GraduationCap, border: "hover:border-[#1434CB]/30 hover:shadow-[#1434CB]/2", color: "text-[#1434CB]" },
    { id: "gyms", icon: Dumbbell, border: "hover:border-white/20 hover:shadow-white/2", color: "text-white" },
    { id: "retail", icon: ShoppingBag, border: "hover:border-[#F7B600]/30 hover:shadow-[#F7B600]/2", color: "text-[#F7B600]" },
    { id: "offices", icon: Building2, border: "hover:border-[#1434CB]/30 hover:shadow-[#1434CB]/2", color: "text-[#1434CB]" },
    { id: "startups", icon: Rocket, border: "hover:border-white/20 hover:shadow-white/2", color: "text-white" }
  ];

  return (
    <section
      id="industries"
      className="py-24 md:py-32 px-6 md:px-12 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Background visual depth */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-[#1434CB]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Group */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono font-bold tracking-widest text-[#F7B600] mb-4 uppercase">
            {t("industries.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-none mb-6">
            {t("industries.title")}
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-2xl leading-relaxed">
            {t("industries.desc")}
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((vert, index) => {
            const Icon = vert.icon;
            return (
              <motion.div
                key={vert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl bg-neutral-900/40 border border-white/5 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl ${vert.border} group`}
              >
                <div>
                  {/* Icon with glowing shadow on hover */}
                  <div className={`p-4 rounded-xl glass-panel-light inline-flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${vert.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {t(`industries.list.${vert.id}.title`)}
                  </h3>
                  
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {t(`industries.list.${vert.id}.desc`)}
                  </p>
                </div>

                {/* Sub-CTA decorative dot */}
                <div className="flex items-center gap-2 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`w-1.5 h-1.5 rounded-full ${vert.id === 'restaurants' || vert.id === 'retail' ? 'bg-[#F7B600]' : vert.id === 'schools' || vert.id === 'offices' ? 'bg-[#1434CB]' : 'bg-white'}`} />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                    {t("nav.cta")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
