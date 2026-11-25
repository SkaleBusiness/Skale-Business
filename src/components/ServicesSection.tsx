import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Database,
  Play,
  Search,
  Target,
  Users,
} from "lucide-react";
import { SERVICES, type ServiceItem } from "../data/skaleContent";
import { useWhatsApp } from "../config/whatsapp";

const ServiceVisual: React.FC<{ type: ServiceItem["visualType"] }> = ({
  type,
}) => {
  if (type === "traffic") {
    return (
      <div className="relative h-full min-h-[320px] rounded-sm border border-white/[0.1] bg-[#050505] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,18,18,0.18)_0%,transparent_70%)]" />
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-neutral-400 uppercase">
              Meta Ads · Instagram e Facebook
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Arquitetura de Tráfego Pago
            </p>
          </div>
          <Target className="h-5 w-5 text-[#FF1212]" />
        </div>

        <div className="my-6 space-y-3.5">
          {[
            {
              channel: "Captação Direta",
              stage: "Anúncios para WhatsApp e CRM",
              width: "w-[90%]",
            },
            {
              channel: "Segmentação Regional",
              stage: "Público comprador qualificado",
              width: "w-[78%]",
            },
            {
              channel: "Remarketing",
              stage: "Retomada de interessados",
              width: "w-[66%]",
            },
          ].map((row) => (
            <div
              key={row.channel}
              className="rounded-sm border border-white/[0.06] bg-[#101010] p-4"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-white">{row.channel}</span>
                <span className="text-neutral-400">{row.stage}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className={`h-full ${row.width} bg-gradient-to-r from-[#650000] via-[#C20100] to-[#FF1212]`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-[11px] text-neutral-400">
          <span>Segmentação · Testes · Otimização</span>
          <span className="text-neutral-300">Estrutura ilustrativa</span>
        </div>
      </div>
    );
  }

  if (type === "creatives") {
    return (
      <div className="relative h-full min-h-[320px] rounded-sm border border-white/[0.1] bg-[#050505] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-neutral-400 uppercase">
              Vídeos &amp; Peças de Anúncio
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Criação dos Criativos
            </p>
          </div>
          <Play className="h-5 w-5 text-[#FF1212]" />
        </div>

        <div className="my-6 flex items-center justify-center gap-3.5">
          <div className="w-24 aspect-[9/16] rounded-sm border border-white/10 bg-[#121212] p-3 flex flex-col justify-between opacity-75">
            <span className="text-[9px] font-mono text-neutral-400">GANCHO</span>
            <div className="space-y-1.5">
              <div className="h-1 w-full bg-white/15" />
              <div className="h-1 w-4/5 bg-white/15" />
            </div>
          </div>

          <div className="w-32 aspect-[9/16] rounded-sm border border-[#C20100]/65 bg-gradient-to-b from-[#191919] to-[#080808] p-3.5 flex flex-col justify-between shadow-[0_0_36px_rgba(194,1,0,0.22)]">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#FF1212]">
              <span>AD 9:16</span>
              <span>REC</span>
            </div>
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#C20100] text-white">
              <Play className="h-3.5 w-3.5 fill-white ml-0.5" />
            </div>
            <div>
              <div className="h-1 w-full bg-[#C20100] mb-1.5" />
              <p className="text-[10px] font-semibold text-white">
                Criativo de conversão
              </p>
            </div>
          </div>

          <div className="w-24 aspect-[9/16] rounded-sm border border-white/10 bg-[#121212] p-3 flex flex-col justify-between opacity-75">
            <span className="text-[9px] font-mono text-neutral-400">CHAMADA</span>
            <div className="space-y-1.5">
              <div className="h-1 w-full bg-white/15" />
              <div className="h-1 w-3/4 bg-[#C20100]" />
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-white/[0.08] pt-4">
          <div className="flex gap-1.5 h-1.5">
            <div className="w-1/4 rounded-xs bg-[#650000]" />
            <div className="w-2/5 rounded-xs bg-[#C20100]" />
            <div className="flex-1 rounded-xs bg-white/15" />
          </div>
          <div className="flex justify-between text-[11px] text-neutral-400">
            <span>Roteiro · Direção · Edição e Design</span>
            <span className="text-neutral-300">Foco em CTR e lead</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "google") {
    return (
      <div className="relative h-full min-h-[320px] rounded-sm border border-white/[0.1] bg-[#050505] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-neutral-400 uppercase">
              Rede de Pesquisa · Intenção Ativa
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Tráfego Pago no Google
            </p>
          </div>
          <Search className="h-5 w-5 text-[#FF1212]" />
        </div>

        <div className="my-6 space-y-4">
          {/* Simulated Google search bar */}
          <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-[#101010] px-4 py-3">
            <Search className="h-4 w-4 text-[#FF1212] shrink-0" />
            <span className="text-xs sm:text-sm text-neutral-200">
              serviço ou produto na sua cidade
            </span>
          </div>

          {/* Highlighted Sponsored Result */}
          <div className="rounded-sm border border-[#C20100]/55 bg-[#141414] p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold text-[#FF1212] uppercase">
                Patrocinado · Topo da busca
              </span>
              <span className="text-[10px] text-neutral-400">Exemplo</span>
            </div>
            <p className="text-sm font-bold text-white">
              Sua Empresa em Destaque na Primeira Posição
            </p>
            <p className="text-xs text-neutral-400">
              Atendimento imediato via WhatsApp para clientes com alta intenção
              de contratação.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-[11px] text-neutral-400">
          <span>Palavras-chave · Negativação · Extensões</span>
          <span className="text-neutral-300">Captura de demanda</span>
        </div>
      </div>
    );
  }

  if (type === "crm") {
    return (
      <div className="relative h-full min-h-[320px] rounded-sm border border-white/[0.1] bg-[#050505] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-neutral-400 uppercase">
              Organização de Pipeline
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Implementação de CRM
            </p>
          </div>
          <Database className="h-5 w-5 text-[#FF1212]" />
        </div>

        <div className="my-6 grid grid-cols-3 gap-2.5">
          {[
            { stage: "Novo Lead", sub: "Entrada automática" },
            { stage: "Em Atendimento", sub: "Follow-up ativo" },
            { stage: "Fechamento", sub: "Proposta e venda" },
          ].map((col, idx) => (
            <div
              key={col.stage}
              className={`rounded-sm border p-3 space-y-2.5 ${
                idx === 2
                  ? "border-[#C20100]/60 bg-[#650000]/25"
                  : "border-white/[0.08] bg-[#101010]"
              }`}
            >
              <div>
                <p className="text-[11px] font-bold text-white">{col.stage}</p>
                <p className="text-[10px] text-neutral-400">{col.sub}</p>
              </div>
              <div className="space-y-1.5">
                <div className="h-7 rounded-xs border border-white/10 bg-[#050505]" />
                <div className="h-7 rounded-xs border border-white/10 bg-[#050505]" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-[11px] text-neutral-400">
          <span>Etapas claras · Origem do lead · Controle</span>
          <span className="text-neutral-300">Funil ilustrativo</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[320px] rounded-sm border border-white/[0.1] bg-[#050505] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.12em] text-neutral-400 uppercase">
            Capacitação &amp; Conversão
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Treinamento do seu Comercial
          </p>
        </div>
        <Users className="h-5 w-5 text-[#FF1212]" />
      </div>

      <div className="my-6 space-y-3">
        {[
          { step: "01", title: "Tempo de resposta e abordagem inicial" },
          { step: "02", title: "Qualificação consultiva e condução de objeções" },
          { step: "03", title: "Cadência de acompanhamento até o fechamento" },
        ].map((item) => (
          <div
            key={item.step}
            className="flex items-center gap-4 rounded-sm border border-white/[0.08] bg-[#101010] px-4 py-3.5"
          >
            <span className="font-mono text-xs font-semibold text-[#FF1212] tabular-nums">
              {item.step}
            </span>
            <p className="text-xs sm:text-sm font-medium text-neutral-200">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-[11px] text-neutral-400">
        <span>Scripts · Playbook · Integração Marketing + Vendas</span>
        <span className="text-neutral-300">Treinamento prático</span>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { whatsappUrl } = useWhatsApp();
  const prefersReducedMotion = useReducedMotion();

  const activeService = SERVICES[activeIndex];

  return (
    <section
      id="solucoes"
      className="relative bg-[#101010] text-white py-20 lg:py-28 overflow-hidden border-t border-white/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(194,1,0,0.16)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-[#FF1212] uppercase">
              <span className="h-[1px] w-6 bg-[#FF1212]" />
              <span>Nossas soluções</span>
            </div>
            <h2 className="text-balance text-[2rem] sm:text-[2.65rem] lg:text-[3.25rem] font-bold leading-[1.06] tracking-[-0.03em] text-white">
              Do anúncio ao fechamento.{" "}
              <span className="block text-neutral-400 font-medium mt-1">
                Estrutura completa para vender mais.
              </span>
            </h2>
          </div>

          <p className="lg:col-span-5 text-base leading-relaxed text-neutral-300">
            Atuamos exclusivamente no que gera demanda e prepara sua operação
            para converter: tráfego pago, criativos, Google Ads, CRM e
            treinamento comercial.
          </p>
        </div>

        {/* Asymmetric Interactive Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Rail */}
          <div className="lg:col-span-5 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {SERVICES.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left py-5 px-4 transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 ${
                    isActive ? "bg-[#191919]/90" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs tabular-nums pt-1 ${
                        isActive
                          ? "text-[#FF1212] font-semibold"
                          : "text-neutral-500"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3
                        className={`text-lg font-bold tracking-[-0.02em] transition-colors ${
                          isActive ? "text-white" : "text-neutral-300"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-400 line-clamp-2">
                        {service.headline}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`mt-1.5 h-2 w-2 rounded-full shrink-0 transition-all ${
                      isActive ? "bg-[#FF1212]" : "bg-white/10"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Stage */}
          <motion.div
            key={activeService.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-sm border border-white/[0.09] bg-[#141414]/90 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
              <div className="xl:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#FF1212] tracking-[0.1em] uppercase">
                    <span>Serviço {activeService.number}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-400">
                      {activeService.title}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold leading-tight tracking-[-0.02em] text-white">
                    {activeService.headline}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300">
                    {activeService.description}
                  </p>

                  <ul className="mt-5 pt-5 border-t border-white/[0.08] space-y-2 text-sm text-neutral-200">
                    {activeService.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="h-[1px] w-3 bg-[#C20100] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={whatsappUrl(activeService.intent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-sm bg-[#C20100] px-6 py-3.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase whitespace-nowrap transition-all duration-200 hover:bg-[#FF1212] hover:shadow-[0_0_24px_rgba(255,18,18,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212]"
                  >
                    <span>{activeService.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className="xl:col-span-6">
                <ServiceVisual type={activeService.visualType} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
