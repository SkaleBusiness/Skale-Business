import React, { createContext, useContext } from "react";

/**
 * Variável central obrigatória com o número oficial de WhatsApp da Skale Marketing.
 * Formato internacional: +55 64 99943-8948 -> 5564999438948
 */
export const WHATSAPP_NUMBER: string = (
  import.meta.env.VITE_WHATSAPP_NUMBER || "5564999438948"
).replace(/\D/g, "");

export type WhatsAppIntent =
  | "hero"
  | "trafego"
  | "criativos"
  | "google"
  | "crm"
  | "comercial"
  | "metodologia"
  | "depoimentos"
  | "final"
  | "geral";

export const WHATSAPP_MESSAGES: Record<WhatsAppIntent, string> = {
  hero: "Olá! Conheci a Skale Marketing pelo site e gostaria de conversar com um especialista sobre estratégias para minha empresa.",
  trafego:
    "Olá! Conheci a Skale pelo site e gostaria de saber como funciona a gestão de tráfego pago (Meta Ads) para minha empresa.",
  criativos:
    "Olá! Tenho interesse na criação de criativos estratégicos para os anúncios da minha empresa.",
  google:
    "Olá! Gostaria de saber como funciona o tráfego pago no Google Ads para atrair clientes para minha empresa.",
  crm:
    "Olá! Gostaria de conversar sobre a implementação de CRM e estruturação do funil comercial da minha empresa.",
  comercial:
    "Olá! Tenho interesse no treinamento do time comercial da Skale para converter mais leads em vendas.",
  metodologia:
    "Olá! Gostaria de conhecer a metodologia da Skale na prática e entender como aplicar na minha empresa.",
  depoimentos:
    "Olá! Vi os depoimentos da Skale e gostaria de conversar sobre estratégias para minha empresa.",
  final:
    "Olá! Conheci a Skale Marketing pelo site e quero falar com a equipe sobre o próximo passo da minha empresa.",
  geral:
    "Olá! Conheci a Skale Marketing pelo site e gostaria de conversar com um especialista.",
};

export function buildWhatsAppUrl(
  intent: WhatsAppIntent = "geral",
  number: string = WHATSAPP_NUMBER
): string {
  const cleanDigits = number.replace(/\D/g, "");
  const normalized = cleanDigits.startsWith("55")
    ? cleanDigits
    : `55${cleanDigits}`;
  const message = WHATSAPP_MESSAGES[intent] || WHATSAPP_MESSAGES.geral;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

interface WhatsAppContextValue {
  whatsappUrl: (intent?: WhatsAppIntent) => string;
  openWhatsApp: (intent?: WhatsAppIntent) => void;
}

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

export const WhatsAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const whatsappUrl = (intent: WhatsAppIntent = "geral") =>
    buildWhatsAppUrl(intent, WHATSAPP_NUMBER);

  const openWhatsApp = (intent: WhatsAppIntent = "geral") => {
    const url = whatsappUrl(intent);
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return React.createElement(
    WhatsAppContext.Provider,
    { value: { whatsappUrl, openWhatsApp } },
    children
  );
};

export function useWhatsApp(): WhatsAppContextValue {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) {
    throw new Error("useWhatsApp deve ser utilizado dentro de WhatsAppProvider");
  }
  return ctx;
}
