import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Instagram, X } from "lucide-react";
import {
  BRAND_INFO,
  INSTAGRAM_REELS_TESTIMONIALS,
} from "../data/skaleContent";
import { useWhatsApp } from "../config/whatsapp";

function getInstagramEmbedUrl(reelUrl: string): string | null {
  const match = reelUrl.match(/instagram\.com\/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/);
  if (!match) return null;
  return `https://www.instagram.com/reel/${match[1]}/embed/`;
}

export const TestimonialsSection: React.FC = () => {
  const { whatsappUrl } = useWhatsApp();
  const prefersReducedMotion = useReducedMotion();
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section
      id="depoimentos"
      className="relative bg-[#050505] text-white py-20 lg:py-28 overflow-hidden border-t border-white/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(194,1,0,0.12)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-[#FF1212] uppercase">
              <span className="h-[1px] w-6 bg-[#FF1212]" />
              <span>Depoimentos via Instagram Reels</span>
            </div>
            <h2 className="text-balance text-[2rem] sm:text-[2.65rem] lg:text-[3.25rem] font-bold leading-[1.06] tracking-[-0.03em] text-white">
              Quem confia na Skale.{" "}
              <span className="block text-neutral-400 font-medium mt-1">
                Relatos reais de nossos clientes.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <a
              href={BRAND_INFO.instagramReelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-sm border border-white/15 bg-white/[0.03] px-5 py-3 text-xs font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:border-[#C20100] hover:bg-white/[0.06]"
            >
              <Instagram className="h-4 w-4 text-[#FF1212]" />
              <span>Ver Reels em {BRAND_INFO.instagramHandle}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Real Instagram Reels Cover Cards */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {INSTAGRAM_REELS_TESTIMONIALS.map((item, idx) => {
            const isPlaying = playingId === item.id;
            const embedUrl = getInstagramEmbedUrl(item.reelUrl);

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-sm border border-white/[0.12] bg-[#101010] flex flex-col transition-all duration-300 hover:border-[#C20100] hover:shadow-[0_0_32px_rgba(194,1,0,0.18)]"
              >
                {/* 9:16 Cover or Inline Instagram Reel Embed */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#050505]">
                  {isPlaying && embedUrl ? (
                    <div className="relative h-full w-full">
                      <iframe
                        src={embedUrl}
                        title={item.title}
                        className="h-full w-full border-0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <button
                        type="button"
                        onClick={() => setPlayingId(null)}
                        aria-label="Voltar para capa do Reel"
                        className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 border border-white/20 text-white hover:bg-[#C20100] transition-colors cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingId(item.id)}
                      aria-label={`Reproduzir depoimento de ${item.clientLabel}`}
                      className="relative block h-full w-full cursor-pointer text-left focus-visible:outline-none"
                    >
                      <img
                        src={item.coverImage}
                        alt={`Capa do Reel — ${item.clientLabel}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent"
                      />
                      <div className="pointer-events-none absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-medium">
                        <span className="font-mono text-[#FF1212] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-white/90">
                          <Instagram className="h-3.5 w-3.5 text-[#FF1212]" />
                          <span>Instagram Reels</span>
                        </span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Clean Card Footer Bar */}
                <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] bg-[#101010] px-5 py-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-white">
                      {item.clientLabel}
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      {isPlaying ? "Reproduzindo Reel" : "Clique na capa para assistir"}
                    </p>
                  </div>

                  <a
                    href={item.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF1212] whitespace-nowrap shrink-0 hover:text-white transition-colors"
                  >
                    <span>Abrir no Instagram</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/[0.08] pt-8">
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
            Quer estruturar tráfego pago, criativos, CRM e treinamento comercial
            na sua empresa?
          </p>
          <a
            href={whatsappUrl("depoimentos")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#C20100] px-7 py-4 text-[11px] font-bold tracking-[0.08em] text-white uppercase whitespace-nowrap transition-all duration-200 hover:bg-[#FF1212] hover:shadow-[0_0_24px_rgba(255,18,18,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212]"
          >
            <span>Quero conversar sobre minha empresa</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
