import { useTranslation } from "react-i18next";
import { ArrowUpRight, ShieldCheck, Cpu, Terminal, Layers } from "lucide-react";
import { motion } from "motion/react";

export function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "item1",
      imageStyle: "network" as const,
      color: "border-[#1434CB]/10 shadow-[#1434CB]/5 focus-within:border-[#1434CB]/30"
    },
    {
      id: "item2",
      imageStyle: "security" as const,
      color: "border-[#F7B600]/10 shadow-[#F7B600]/5 focus-within:border-[#F7B600]/30"
    },
    {
      id: "item3",
      imageStyle: "dashboard" as const,
      color: "border-white/10 shadow-white/5 focus-within:border-white/30"
    },
    {
      id: "item4",
      imageStyle: "terminal" as const,
      color: "border-[#1434CB]/10 shadow-[#1434CB]/5 focus-within:border-[#1434CB]/30"
    }
  ];

  // Helper component to render ultra premium custom CSS/SVG mockups
  const RenderMockup = ({ style }: { style: "terminal" | "security" | "network" | "dashboard" }) => {
    switch (style) {
      case "network":
        return (
          <div className="absolute inset-0 bg-neutral-950 p-5 flex flex-col justify-between font-mono text-[9px] text-[#1434CB] border-b border-white/5 select-none overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex justify-between items-center opacity-60">
              <span className="flex items-center gap-1.5"><Cpu className="w-3 h-3 animate-pulse" /> NETWORK TOPOLOGY</span>
              <span className="text-[8px] bg-[#1434CB]/20 px-1.5 py-0.5 rounded text-white font-mono">10 Gbps</span>
            </div>
            
            {/* Visual SVG schematic network */}
            <div className="my-auto flex items-center justify-around relative py-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center p-1 bg-black z-10 flex-col">
                <span className="text-[7px] text-gray-500">CORE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              
              {/* Connection lines */}
              <div className="absolute inset-x-12 h-[1px] bg-gradient-to-r from-green-500/50 via-[#1434CB]/50 to-amber-500/50" />
              
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center p-1 bg-black z-10 flex-col">
                <span className="text-[6px] text-gray-500">EDGE</span>
                <span className="w-1 h-1 rounded-full bg-[#1434CB]" />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center p-1 bg-black z-10 flex-col">
                <span className="text-[6px] text-gray-500">CLOUD</span>
                <span className="w-1 h-1 rounded-full bg-[#F7B600]" />
              </div>
            </div>

            <div className="flex justify-between items-center text-gray-500 text-[8px]">
              <span>Ping: 1.2ms</span>
              <span>Uptime: 100%</span>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="absolute inset-0 bg-neutral-950 grid grid-cols-2 gap-0.5 p-0.5 border-b border-white/5 select-none overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Cam Feed 1 */}
            <div className="relative bg-[#050505] p-2 flex flex-col justify-between font-mono text-[8px] text-gray-500">
              <span className="absolute top-2 left-2 flex items-center gap-1 text-red-500"><span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> CAM 01</span>
              <span className="absolute top-2 right-2">IA MOTION DETECT</span>
              <div className="m-auto border border-[#F7B600]/30 w-16 h-10 rounded-md flex items-center justify-center bg-[#F7B600]/5 text-[#F7B600] text-[6px] uppercase tracking-wider font-bold animate-pulse">
                Target Active
              </div>
            </div>
            {/* Cam Feed 2 */}
            <div className="bg-[#050505] p-2 flex flex-col justify-between font-mono text-[8px] text-gray-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5 text-green-500" /> CAM 02</span>
              <span className="m-auto text-green-500/80 uppercase font-bold text-[7px]">Secure Shield</span>
            </div>
            {/* Cam Feed 3 */}
            <div className="bg-[#050505] p-2 flex flex-col justify-between font-mono text-[8px] text-gray-500">
              <span>CAM 03</span>
              <span className="m-auto text-[6px]">Zone 03 Clear</span>
            </div>
            {/* Cam Feed 4 */}
            <div className="bg-[#050505] p-2 flex flex-col justify-between font-mono text-[8px] text-gray-500">
              <span>CAM 04</span>
              <span className="m-auto text-[6px]">IR Mode Activated</span>
            </div>
          </div>
        );

      case "dashboard":
        return (
          <div className="absolute inset-0 bg-neutral-900 border-b border-white/5 p-4 flex flex-col justify-between select-none overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Micro mock dashboard layout */}
            <div className="flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              <div className="h-3.5 w-24 bg-neutral-800 rounded-sm" />
            </div>
            
            {/* Visual metrics bar charts built in pure tailwind CSS */}
            <div className="flex gap-4 items-end justify-center my-3 h-16 px-4">
              <div className="w-2 bg-[#1434CB]/80 rounded-t h-[60%] animate-pulse" />
              <div className="w-2 bg-[#1434CB] rounded-t h-[85%]" />
              <div className="w-2 bg-[#F7B600] rounded-t h-[35%]" />
              <div className="w-2 bg-neutral-700 rounded-t h-[50%]" />
              <div className="w-2 bg-[#1434CB]/60 rounded-t h-[75%] animate-pulse" />
            </div>

            <div className="flex justify-between text-[7px] text-gray-500 font-mono">
              <span>DB Sync Status: OK</span>
              <span>Ver: 2.15.0</span>
            </div>
          </div>
        );

      case "terminal":
        return (
          <div className="absolute inset-0 bg-black font-mono text-[8px] text-gray-400 p-4 border-b border-white/5 select-none overflow-hidden group-hover:scale-105 transition-transform duration-500 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2 text-gray-500">
              <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> CLAUDE_AGENT.SH</span>
              <span className="bg-neutral-800 px-1 py-0.2 rounded text-[7px] text-emerald-400">Executing</span>
            </div>
            <div className="flex flex-col gap-1 text-left flex-1 justify-center leading-normal">
              <p className="text-gray-500 font-mono">[08:44:12] Initializing LLM engine...</p>
              <p className="text-emerald-400 font-mono">[08:44:13] Model loaded: anthropic/claude-3-5-sonnet</p>
              <p className="text-amber-500 font-mono">[08:44:14] Workflow active: routing email 14 to sales ledger</p>
            </div>
            <p className="text-[7px] text-gray-600 border-t border-white/5 pt-1.5">Apex Auto System 1.0</p>
          </div>
        );
    }
  };

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950/40 relative border-t border-white/5 overflow-hidden"
    >
      {/* Background abstract radial gradient */}
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-[#1434CB]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono font-bold tracking-widest text-[#F7B600] mb-4 uppercase">
            {t("portfolio.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-none mb-6">
            {t("portfolio.title")}
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-2xl leading-relaxed">
            {t("portfolio.desc")}
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, index) => {
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`rounded-2xl bg-neutral-900/40 border p-0 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden hover:scale-[1.01] group ${proj.color}`}
              >
                
                {/* Custom animated simulated mockup container */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-white/5">
                  <RenderMockup style={proj.imageStyle} />
                </div>

                {/* Sub info text container */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Tags row */}
                    <div className="flex gap-2 flex-wrap mb-4">
                      {t(`portfolio.${proj.id}.tags`, { returnObjects: true }) &&
                        (t(`portfolio.${proj.id}.tags`, { returnObjects: true }) as string[]).map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono font-medium border border-white/10 px-2 py-0.5 rounded-full text-gray-400 bg-white/2"
                          >
                            {tag}
                          </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-display font-medium text-white mb-3 tracking-tight group-hover:text-[#F7B600] transition-colors">
                      {t(`portfolio.${proj.id}.title`)}
                    </h3>

                    <p className="text-xs text-gray-400 font-sans leading-relaxed mb-6">
                      {t(`portfolio.${proj.id}.desc`)}
                    </p>
                  </div>

                  {/* Micro interaction */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1434CB] hover:text-[#F7B600] transition-colors mt-auto group/arrow"
                  >
                    <span>{t("nav.cta")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
