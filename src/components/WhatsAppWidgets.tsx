import React from "react";
import { MessageCircle, X } from "lucide-react";
import { useWhatsApp } from "../config/whatsapp";
import { BRAND_INFO } from "../data/skaleContent";

export const WhatsAppFloatingButton: React.FC = () => {
  const { whatsappUrl } = useWhatsApp();

  return (
    <a
      href={whatsappUrl("geral")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Skale Marketing pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#C20100] text-white shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-all duration-200 hover:scale-105 hover:bg-[#FF1212] hover:shadow-[0_0_24px_rgba(255,18,18,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
};

export const PrivacyPolicyModal: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm border border-white/15 bg-[#101010] p-6 sm:p-8 text-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar Política de Privacidade"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 text-neutral-400 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-medium tracking-[0.12em] text-[#FF1212] uppercase">
          Documento institucional
        </p>
        <h3
          id="privacy-modal-title"
          className="mt-2 text-2xl font-bold tracking-[-0.02em] text-white"
        >
          Política de Privacidade
        </h3>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
          <p>
            A <strong>{BRAND_INFO.legalName}</strong> (CNPJ{" "}
            <span className="font-mono">{BRAND_INFO.cnpj}</span>), sediada em{" "}
            {BRAND_INFO.location}, respeita a privacidade de seus visitantes e
            clientes e conduz o tratamento de dados pessoais em conformidade com
            a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
          <p>
            <strong>1. Coleta e finalidade:</strong> Este site institucional não
            coleta dados automaticamente em formulários ocultos. O contato
            comercial ocorre voluntariamente quando o visitante opta por iniciar
            uma conversa pelo WhatsApp oficial da agência.
          </p>
          <p>
            <strong>2. Uso das informações:</strong> As informações fornecidas
            pelo interessado durante o atendimento são utilizadas exclusivamente
            para compreender o perfil da empresa, elaborar propostas comerciais e
            prestar os serviços contratados.
          </p>
          <p>
            <strong>3. Compartilhamento e segurança:</strong> Não comercializamos
            nem cedemos informações de contatos comerciais a terceiros sem
            autorização ou base legal aplicável.
          </p>
          <p>
            <strong>4. Direitos do titular:</strong> Você pode solicitar
            esclarecimentos, atualização ou exclusão de informações de contato a
            qualquer momento diretamente pelos canais oficiais da Skale
            Marketing ({BRAND_INFO.instagramHandle}).
          </p>
        </div>

        <div className="mt-8 flex justify-end border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm bg-[#C20100] px-6 py-2.5 text-xs font-bold tracking-[0.08em] text-white uppercase hover:bg-[#FF1212] transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
