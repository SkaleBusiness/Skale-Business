import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AmbientCanvas3D } from "./AmbientCanvas3D";
import { useWhatsApp } from "../config/whatsapp";

export const FinalCtaSection: React.FC = () => {
  const { whatsappUrl } = useWhatsApp();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contato"
      className="relative min-h-[72vh] w-full overflow-hidden bg-[#050505] text-white flex items-center py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(194,1,0,0.48)_0%,rgba(101,0,0,0.34)_42%,rgba(5,5,5,0.96)_84%)]"
      />
      <AmbientCanvas3D mode="cta" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF1212]/45 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 w-full text-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-5 text-xs font-medium tracking-[0.16em] text-white/80 uppercase">
            Próximo passo
          </p>

          <h2 className="text-balance text-[2.15rem] sm:text-[3.1rem] lg:text-[4.1rem] font-bold leading-[1.04] tracking-[-0.035em] text-white">
            O próximo passo do seu negócio começa com uma decisão.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white/85">
            Fale com a equipe da Skale no WhatsApp e estruture tráfego pago,
            criativos, CRM e treinamento comercial para sua empresa crescer.
          </p>

          <div className="mt-10 flex flex-col items-center">
            <motion.a
              href={whatsappUrl("final")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="group relative inline-flex items-center justify-center gap-4 rounded-sm bg-white px-10 py-5 sm:px-14 sm:py-6 text-xs sm:text-sm font-bold tracking-[0.1em] text-[#050505] uppercase whitespace-nowrap shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-200 hover:bg-[#050505] hover:text-white hover:ring-1 hover:ring-[#FF1212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Quero falar com a Skale</span>
              <ArrowUpRight className="h-5 w-5 text-[#C20100] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF1212]" />
            </motion.a>

            <p className="mt-5 text-xs sm:text-sm text-white/75">
              Atendimento direto pelo WhatsApp oficial: +55 64 99943-8948
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
