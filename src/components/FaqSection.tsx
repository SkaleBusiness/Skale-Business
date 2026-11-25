import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "../data/skaleContent";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative bg-white text-[#050505] py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-[#C20100] uppercase">
              <span className="h-[1px] w-6 bg-[#C20100]" />
              <span>Perguntas frequentes</span>
            </div>
            <h2 className="text-balance text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#050505]">
              Suas dúvidas, respondidas.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
              Entenda como integramos tráfego pago, criativos, CRM e treinamento
              comercial para acelerar suas vendas.
            </p>
          </div>

          {/* Right Accessible Accordion */}
          <div className="lg:col-span-8 divide-y divide-neutral-200 border-y border-neutral-200">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;

              return (
                <div key={item.question} className="py-1">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#C20100] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C20100] cursor-pointer"
                    >
                      <span
                        className={`text-base sm:text-lg font-semibold tracking-[-0.01em] transition-colors ${
                          isOpen ? "text-[#050505]" : "text-neutral-800"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                          isOpen
                            ? "border-[#C20100] bg-[#C20100] text-white"
                            : "border-neutral-300 bg-neutral-100 text-neutral-700"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={`overflow-hidden transition-all duration-200 ${
                      isOpen ? "pb-5" : ""
                    }`}
                  >
                    <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
