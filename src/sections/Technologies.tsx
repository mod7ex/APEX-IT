import { useTranslation } from "react-i18next";
import { Cpu, Terminal, Cloud, Server, Box, Flame, Shield, Compass, Brain } from "lucide-react";
import { motion } from "motion/react";

export function Technologies() {
  const { t } = useTranslation();

  const techs = [
    { name: "Node.js", category: "Engine / Server-side", icon: Terminal, color: "text-green-500 bg-green-500/5 hover:border-green-500/20" },
    { name: "Docker", category: "Microservices / Container", icon: Box, color: "text-blue-400 bg-blue-400/5 hover:border-blue-400/20" },
    { name: "AWS", category: "Sovereign / Cloud Staging", icon: Cloud, color: "text-amber-500 bg-amber-500/5 hover:border-amber-500/20" },
    { name: "Linux", category: "Core OS Security", icon: Server, color: "text-[#7D7D7D] bg-white/5 hover:border-white/20" },
    { name: "Cisco", category: "Network Enterprise Core", icon: Compass, color: "text-blue-500 bg-blue-500/5 hover:border-blue-500/20" },
    { name: "Firebase", category: "Fast Client / Identity", icon: Flame, color: "text-orange-500 bg-orange-500/5 hover:border-orange-500/20" },
    { name: "TailwindCSS", category: "Aesthetic Rendering Engine", icon: Cpu, color: "text-cyan-400 bg-cyan-400/5 hover:border-cyan-400/20" },
    { name: "Claude", category: "Deep AI Copilot LLM", icon: Brain, color: "text-amber-600 bg-amber-600/5 hover:border-amber-600/20" },
    { name: "Dahua", category: "CCTV Physical Security Optic", icon: Shield, color: "text-red-500 bg-red-500/5 hover:border-red-500/20" }
  ];

  return (
    <section
      id="technologies"
      className="py-20 md:py-24 px-6 md:px-12 bg-neutral-950/40 relative border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Grid */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F7B600] mb-3 block">
            {t("techs.tag")}
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-medium text-white tracking-tight">
            {t("techs.title")}
          </h2>
        </div>

        {/* Dynamic sliding line of techs, or a fine line grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {techs.map((tech, i) => {
            const TechIcon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl border border-white/5 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 bg-black/40 ${tech.color}`}
              >
                <div className="p-2.5 rounded-lg border border-white/5 bg-neutral-900/50 mb-3">
                  <TechIcon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-white leading-none mb-1">
                  {tech.name}
                </h3>
                <p className="text-[10px] text-gray-500 font-sans tracking-wide">
                  {tech.category}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
