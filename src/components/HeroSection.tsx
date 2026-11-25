import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AmbientCanvas3D } from "./AmbientCanvas3D";
import { useWhatsApp } from "../config/whatsapp";

export const HeroSection: React.FC = () => {
  const { whatsappUrl } = useWhatsApp();
  const prefersReducedMotion = useReducedMotion();

  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      id="inicio"
      className="relative min-h-[88vh] w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-between pt-28 pb-12 lg:pt-32 lg:pb-14"
    >
      {/* Background atmospheric depth & 3D architectural installation */}
      <div className="pointer-events-none absolute inset-0 skale-grid-dark opacity-50" />
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: easeCurve }}
        className="pointer-events-none absolute inset-0"
      >
        <AmbientCanvas3D mode="hero" />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,18,18,0.18)_0%,rgba(194,1,0,0.08)_42%,transparent_72%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050505] to-transparent"
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 my-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: easeCurve }}
            className="mb-7 flex items-center gap-4 text-xs font-medium tracking-[0.14em] text-neutral-400 uppercase"
          >
            <span className="inline-block h-[1px] w-8 bg-[#C20100]" />
            <span>Skale Internet Marketing</span>
            <span aria-hidden="true" className="text-neutral-600">
              ·
            </span>
            <span className="text-neutral-300">Rio Verde, GO</span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: easeCurve }}
            className="text-balance text-[2.25rem] sm:text-[3.2rem] lg:text-[4.35rem] xl:text-[4.85rem] font-bold leading-[1.04] tracking-[-0.035em] text-white"
          >
            Sua empresa não precisa apenas aparecer.{" "}
            <span className="block mt-2">
              Precisa ser{" "}
              <span className="relative inline-block text-white">
                <span className="relative z-10 bg-gradient-to-r from-[#FF1212] via-[#FF3838] to-[#C20100] bg-clip-text text-transparent">
                  escolhida.
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF1212] via-[#C20100] to-transparent"
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: easeCurve }}
            className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-neutral-300"
          >
            Unimos tráfego pago no Meta e Google, criação de criativos,
            implementação de CRM e treinamento comercial para atrair clientes
            qualificados e converter oportunidades em vendas.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease: easeCurve }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href={whatsappUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-sm bg-[#C20100] px-8 py-4 text-xs sm:text-[13px] font-bold tracking-[0.08em] text-white uppercase whitespace-nowrap transition-all duration-200 hover:bg-[#FF1212] hover:shadow-[0_0_36px_rgba(255,18,18,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              <span>Quero crescer com a Skale</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={whatsappUrl("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/[0.03] px-7 py-4 text-xs sm:text-[13px] font-semibold tracking-[0.08em] text-neutral-100 uppercase whitespace-nowrap transition-all duration-200 hover:border-[#C20100] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212]"
            >
              <span>Conversar com um especialista</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Scroll Horizon */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.09] pt-5 text-xs text-neutral-400">
          <span className="text-neutral-200 font-medium">
            Marketing que entrega. Estratégias que impulsionam negócios.
          </span>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
          >
            <span className="tracking-[0.12em] uppercase text-[11px]">
              Ver soluções
            </span>
            <span className="h-[1px] w-6 bg-[#C20100]" />
          </a>
        </div>
      </div>
    </section>
  );
};
