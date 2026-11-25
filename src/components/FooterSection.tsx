import React from "react";
import { SkaleLogo } from "./SkaleLogo";
import { BRAND_INFO } from "../data/skaleContent";
import { useWhatsApp } from "../config/whatsapp";

interface FooterSectionProps {
  onOpenPrivacy: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenPrivacy,
}) => {
  const { whatsappUrl } = useWhatsApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <SkaleLogo size="lg" />
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              Skale Marketing — Estratégia, tráfego pago, criativos, CRM e
              treinamento comercial para impulsionar negócios.
            </p>
          </div>

          {/* Institutional Info */}
          <div className="md:col-span-4 space-y-2 text-sm text-neutral-400">
            <p className="text-xs font-medium tracking-[0.12em] text-neutral-500 uppercase mb-3">
              Informações institucionais
            </p>
            <p className="font-medium text-neutral-200">
              {BRAND_INFO.legalName}
            </p>
            <p className="font-mono text-xs tabular-nums">
              CNPJ: {BRAND_INFO.cnpj}
            </p>
            <p>{BRAND_INFO.location}</p>
            <p>
              Instagram:{" "}
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-[#FF1212] transition-colors"
              >
                {BRAND_INFO.instagramHandle}
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.12em] text-neutral-500 uppercase mb-3">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="hover:text-white transition-colors"
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  className="hover:text-white transition-colors"
                >
                  Metodologia
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <a
                  href={whatsappUrl("geral")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF1212] font-medium hover:text-white transition-colors"
                >
                  Contato via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} {BRAND_INFO.legalName} Todos os direitos reservados.
          </p>
          <p>{BRAND_INFO.brand}</p>
        </div>
      </div>
    </footer>
  );
};
