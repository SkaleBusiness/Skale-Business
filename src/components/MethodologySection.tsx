import React, { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { METHODOLOGY_STEPS } from "../data/skaleContent";
import { useWhatsApp } from "../config/whatsapp";

export const MethodologySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { whatsappUrl } = useWhatsApp();
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.5"],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="relative bg-white text-[#050505] py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12">
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-[#C20100] uppercase">
              <span className="h-[1px] w-6 bg-[#C20100]" />
              <span>Como trabalhamos</span>
            </div>
            <h2 className="text-balance text-[2rem] sm:text-[2.65rem] lg:text-[3.25rem] font-bold leading-[1.06] tracking-[-0.03em] text-[#050505]">
              Do anúncio ao fechamento no comercial.{" "}
              <span className="block text-neutral-500 font-medium mt-1">
                Cada etapa conectada à venda.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-neutral-600">
              Alinhamos criativos, mídia paga, CRM e atendimento comercial em
              um único fluxo.
            </p>
          </div>
        </div>

        {/* Desktop Horizontal Timeline (5 steps) */}
        <div className="hidden lg:block relative mt-8">
          <div className="relative h-[2px] w-full bg-neutral-200 mb-10">
            <motion.div
              style={prefersReducedMotion ? { scaleX: 1 } : { scaleX: lineScaleX }}
              className="origin-left h-full w-full bg-gradient-to-r from-[#650000] via-[#C20100] to-[#FF1212]"
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <motion.button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative text-left pt-2 focus-visible:outline-none cursor-pointer"
                >
                  <span
                    className={`absolute -top-[47px] left-0 h-3 w-3 rounded-full border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-[#FF1212] bg-[#C20100] scale-125"
                        : "border-[#C20100] bg-white group-hover:bg-[#C20100]"
                    }`}
                  />

                  <span className="font-mono text-xs font-semibold tracking-[0.08em] text-[#C20100] tabular-nums">
                    {step.number}
                  </span>
                  <h3
                    className={`mt-2.5 text-lg font-bold tracking-[-0.02em] transition-colors ${
                      isSelected
                        ? "text-[#C20100]"
                        : "text-[#050505] group-hover:text-[#C20100]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-8 space-y-8 mt-6">
          <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-neutral-200">
            <motion.div
              style={prefersReducedMotion ? { scaleY: 1 } : { scaleY: lineScaleY }}
              className="origin-top h-full w-full bg-gradient-to-b from-[#650000] via-[#C20100] to-[#FF1212]"
            />
          </div>

          {METHODOLOGY_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[32px] top-1.5 h-3 w-3 rounded-full border-2 border-[#C20100] bg-white" />
              <span className="font-mono text-xs font-semibold text-[#C20100] tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-1 text-lg font-bold tracking-[-0.02em] text-[#050505]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-neutral-200 pt-8">
          <p className="text-sm sm:text-base font-medium text-neutral-700 max-w-xl">
            Quer aplicar essa estrutura integrada de mídia, CRM e vendas na
            sua empresa?
          </p>
          <a
            href={whatsappUrl("metodologia")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#050505] px-7 py-4 text-[11px] font-bold tracking-[0.08em] text-white uppercase whitespace-nowrap transition-all duration-200 hover:bg-[#C20100] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C20100]"
          >
            <span>Quero conhecer a metodologia na prática</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
