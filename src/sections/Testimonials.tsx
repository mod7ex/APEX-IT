import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export function Testimonials() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  // Cast type or extract list from i18n safely
  const testimonials = (t("testimonials.list", { returnObjects: true }) as Testimonial[]) || [];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!testimonials || testimonials.length === 0) return null;

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 md:px-12 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Background visual depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#1434CB]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono font-bold tracking-widest text-[#F7B600] mb-4 uppercase">
            {t("testimonials.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Carousel Panel */}
        <div className="relative rounded-3xl bg-neutral-900/30 border border-white/5 p-8 md:p-14 shadow-2xl glass-panel relative overflow-hidden min-h-[300px] flex flex-col justify-between">
          
          {/* Decorative quotation backdrop watermark */}
          <Quote className="absolute -top-10 -right-10 w-44 h-44 text-white/2 pointer-events-none" />

          {/* Carousel main transitions */}
          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating review stars */}
                  <div className="flex gap-1 mb-8">
                    {Array.from({ length: active.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F7B600] fill-[#F7B600]" />
                    ))}
                  </div>

                  {/* Quote Paragraph */}
                  <blockquote className="text-lg md:text-2xl text-gray-200 font-sans leading-relaxed italic mb-8">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Credentials Panel */}
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <cite className="not-italic font-display font-semibold text-white block text-sm md:text-base">
                      {active.author}
                    </cite>
                    <span className="text-xs text-gray-400 font-sans block mt-1">
                      {active.role} &middot; <strong className="text-gray-300">{active.company}</strong>
                    </span>
                  </div>
                  
                  {/* Icon watermark in corner */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#1434CB] hidden sm:block">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Row */}
          <div className="flex items-center justify-between mt-10 md:mt-12">
            
            {/* Nav dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-[#1434CB]" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Nav arrows buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
