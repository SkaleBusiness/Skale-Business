import type { WhatsAppIntent } from "../config/whatsapp";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  intent: WhatsAppIntent;
  visualType: "traffic" | "creatives" | "google" | "crm" | "sales";
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface InstagramReelTestimonial {
  id: string;
  reelUrl: string;
  coverImage: string;
  clientLabel: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BRAND_INFO = {
  name: "Skale Marketing",
  brand: "Skale Internet Marketing",
  commercialName: "Skale Business",
  legalName: "Skale Marketing LTDA.",
  cnpj: "54.323.287/0001-10",
  location: "Rio Verde — Goiás — Brasil",
  instagramHandle: "@skale.business",
  instagramUrl: "https://www.instagram.com/skale.business/",
  instagramReelsUrl: "https://www.instagram.com/skale.business/reels/",
  tagline: "Marketing que entrega. Estratégias que impulsionam negócios.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "trafego-pago",
    number: "01",
    title: "Tráfego Pago",
    headline:
      "Anúncios estratégicos no Instagram e Facebook para gerar demanda real.",
    description:
      "Planejamento, segmentação, monitoramento e otimização contínua de campanhas no Meta Ads para atrair potenciais clientes diretamente para o seu atendimento.",
    highlights: [
      "Segmentação precisa por perfil e região",
      "Campanhas focadas em conversas e leads",
      "Monitoramento e otimização semanal",
    ],
    ctaLabel: "QUERO ANUNCIAR NO META ADS",
    intent: "trafego",
    visualType: "traffic",
  },
  {
    id: "criacao-de-criativos",
    number: "02",
    title: "Criação dos Criativos",
    headline: "Roteiros, vídeos e peças publicitárias feitas para converter.",
    description:
      "Desenvolvemos criativos estratégicos — vídeos curtos, ganchos de atenção, copy persuasiva e design de alta performance — pensados especificamente para performar em tráfego pago.",
    highlights: [
      "Roteiros orientados à venda",
      "Vídeos e artes com foco em conversão",
      "Testes constantes de novos ângulos",
    ],
    ctaLabel: "QUERO CRIATIVOS DE ALTA CONVERSÃO",
    intent: "criativos",
    visualType: "creatives",
  },
  {
    id: "trafego-google",
    number: "03",
    title: "Tráfego Pago no Google",
    headline:
      "Sua empresa na frente de quem já está procurando pelo seu serviço.",
    description:
      "Estruturação de campanhas no Google Ads (Rede de Pesquisa e posicionamento local) para capturar clientes no momento exato da intenção de compra.",
    highlights: [
      "Captura de intenção ativa de busca",
      "Palavras-chave estratégicas e negativação",
      "Direcionamento direto para o comercial",
    ],
    ctaLabel: "QUERO ANUNCIAR NO GOOGLE",
    intent: "google",
    visualType: "google",
  },
  {
    id: "implementacao-crm",
    number: "04",
    title: "Implementação de CRM",
    headline: "Funil organizado para nenhuma oportunidade comercial se perder.",
    description:
      "Configuramos o CRM da sua operação com etapas claras, integração com os canais de entrada e organização dos leads para dar visibilidade total ao seu processo de vendas.",
    highlights: [
      "Estruturação personalizada do funil",
      "Rastreamento da origem dos contatos",
      "Padronização do atendimento e follow-up",
    ],
    ctaLabel: "QUERO IMPLEMENTAR CRM",
    intent: "crm",
    visualType: "crm",
  },
  {
    id: "treinamento-comercial",
    number: "05",
    title: "Treinamento do seu Comercial",
    headline:
      "Anúncio atrai o cliente. Seu time comercial preparado fecha a venda.",
    description:
      "Capacitamos sua equipe de vendas com abordagem consultiva, scripts estratégicos, condução de objeções e cadência de acompanhamento para multiplicar o aproveitamento dos leads.",
    highlights: [
      "Playbook e scripts de atendimento",
      "Treinamento prático para vendedores",
      "Integração total entre marketing e vendas",
    ],
    ctaLabel: "QUERO TREINAR MEU COMERCIAL",
    intent: "comercial",
    visualType: "sales",
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: "01",
    title: "Diagnóstico & Estratégia",
    description:
      "Analisamos sua oferta, público, processo comercial atual e definimos os canais prioritários.",
  },
  {
    number: "02",
    title: "Criação dos Criativos",
    description:
      "Roteirizamos e produzimos anúncios e mensagens desenhadas para despertar interesse qualificado.",
  },
  {
    number: "03",
    title: "Tráfego Pago (Meta & Google)",
    description:
      "Ativamos campanhas segmentadas para gerar fluxo constante de contatos no WhatsApp e funil.",
  },
  {
    number: "04",
    title: "CRM & Treinamento Comercial",
    description:
      "Estruturamos seu CRM e treinamos seu comercial para atender rápido, acompanhar e fechar.",
  },
  {
    number: "05",
    title: "Monitoramento & Otimização",
    description:
      "Acompanhamos métricas da mídia até a venda real para ajustar campanhas continuamente.",
  },
];

export const INSTAGRAM_REELS_TESTIMONIALS: InstagramReelTestimonial[] = [
  {
    id: "reel-emiliano-arantes",
    reelUrl: "https://www.instagram.com/reel/Dd_yuv7IABq/",
    coverImage: "/assets/reels/reel_emiliano.jpg",
    clientLabel: "Dr. Emiliano Arantes",
    title: "Depoimento · Dr. Emiliano Arantes",
  },
  {
    id: "reel-klivia-finzer",
    reelUrl: "https://www.instagram.com/reel/DcqoF_xIk4e/",
    coverImage: "/assets/reels/reel_klivia.jpg",
    clientLabel: "Dra. Klivia Finzer",
    title: "Depoimento · Dra. Klivia Finzer",
  },
  {
    id: "reel-sandra-leao",
    reelUrl: "https://www.instagram.com/reel/DBbjk8Cu_VG/",
    coverImage: "/assets/reels/reel_sandra.jpg",
    clientLabel: "Sandra Leão",
    title: "Depoimento · Sandra Leão",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quais serviços a Skale oferece na prática?",
    answer:
      "Atuamos de ponta a ponta na geração e conversão de demanda: gestão de Tráfego Pago (Meta Ads e Google Ads), Criação dos Criativos para anúncios, Implementação de CRM e Treinamento do seu time Comercial.",
  },
  {
    question: "Vocês fazem apenas os anúncios ou também criam os criativos?",
    answer:
      "Criamos os criativos estratégicos — incluindo roteiros, orientação de captação, edição e peças visuais — focados em chamar atenção e gerar conversão nos anúncios.",
  },
  {
    question:
      "Por que implementar CRM e treinar meu comercial junto com o tráfego?",
    answer:
      "De nada adianta investir em anúncios se os leads se perdem no WhatsApp ou demoram para ser atendidos. Com CRM organizado e comercial treinado, você aproveita muito melhor cada real investido em mídia.",
  },
  {
    question: "O investimento nos anúncios (Google e Meta) está incluso?",
    answer:
      "O orçamento destinado às plataformas de anúncio é separado dos honorários da Skale. Definimos a recomendação de verba de forma transparente na proposta comercial.",
  },
  {
    question: "Vocês atendem empresas fora de Rio Verde?",
    answer:
      "Sim. A Skale é sediada em Rio Verde, Goiás, e atende empresas de diversas cidades e regiões do Brasil conforme a viabilidade de cada operação.",
  },
  {
    question: "Em quanto tempo começo a ver retorno nas campanhas?",
    answer:
      "Os resultados variam conforme segmento, oferta, verba de mídia e agilidade do atendimento comercial. Acompanhamos os indicadores desde os primeiros dias para otimizar campanhas e conversão.",
  },
];
