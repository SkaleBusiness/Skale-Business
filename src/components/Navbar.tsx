import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SkaleLogo } from "./SkaleLogo";
import { useWhatsApp } from "../config/whatsapp";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { whatsappUrl } = useWhatsApp();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 lg:h-20 max-w-[1440px] items-center justify-between gap-8 px-6 lg:px-12">
        {/* Zone 1: Brand mark */}
        <a
          href="#inicio"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212] rounded-sm shrink-0"
        >
          <SkaleLogo size="md" />
        </a>

        {/* Zone 2: Minimalist single-line navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-[0.01em] text-neutral-300"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF1212] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary WhatsApp CTA + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-[#C20100] px-5 py-2.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#FF1212] hover:shadow-[0_0_24px_rgba(255,18,18,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            Falar com um especialista
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-[#C20100] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1212]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#050505]/98 backdrop-blur-xl px-6 py-6">
          <nav aria-label="Menu mobile" className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="py-2 text-base font-medium text-neutral-200 border-b border-white/[0.06] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl("geral")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 inline-flex w-full items-center justify-center rounded-sm bg-[#C20100] px-5 py-3.5 text-xs font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#FF1212]"
            >
              Falar com um especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
