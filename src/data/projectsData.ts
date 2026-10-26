import type { StaticImageData } from "next/image";

import bug from "@/assets/bug.png"
import cyber from "@/assets/cyber.png"
import girl from "@/assets/girl.png"
import laisher from "@/assets/laisher.png"

export type Project = {
  slug: string;
  title: string;
  /** Preencher com o ano de cada projecto; só aparece se existir. */
  year?: string;
  description: string;
  tech: string[];
  status: string;
  demo?: string;
  github?: string;
  image?: StaticImageData;
  /** Campos opcionais: se existirem, a página do projecto mostra as secções correspondentes. */
  role?: string;
  duration?: string;
  overview?: string;
  features?: { title: string; text: string }[];
  challenge?: string;
  result?: string;
  gallery?: StaticImageData[];
};

export const projectsData: Project[] = [
  // EXEMPLO FICTÍCIO: serve só para ver a página preenchida. Apagar quando houver dados reais.
  {
    slug: "projecto-de-exemplo",
    title: "Plataforma de Exemplo",
    year: "2025",
    description: "Plataforma web de gestão de pedidos e equipas, com painel em tempo real, perfis de acesso e relatórios exportáveis.",
    overview: "Este é um projecto fictício, criado para mostrar como a página de um projecto fica quando está completa. A plataforma permite a uma equipa receber pedidos, atribuí-los a responsáveis, acompanhar o estado de cada um em tempo real e gerar relatórios para a gestão. O objectivo foi substituir folhas de cálculo dispersas por um único sítio claro, rápido e seguro.",
    role: "Full-stack developer",
    duration: "4 meses",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    status: "Concluído",
    demo: "https://example.com",
    github: "https://github.com/vitiliosousa",
    image: cyber,
    features: [
      { title: "Painel em tempo real", text: "Estado dos pedidos actualizado sem recarregar a página, com filtros por equipa e prioridade." },
      { title: "Perfis e permissões", text: "Cada utilizador vê e faz apenas o que o seu perfil permite, com registo de todas as acções." },
      { title: "Fluxo de aprovação", text: "Pedidos passam por vários níveis de aprovação antes de serem executados." },
      { title: "Relatórios exportáveis", text: "Resumos por período e por equipa, exportáveis para PDF e Excel." },
    ],
    challenge: "Os pedidos chegavam por canais diferentes e sem estrutura, o que tornava difícil saber quem estava a tratar de quê e quanto tempo cada pedido demorava.",
    result: "A equipa passou a ter uma única fonte de verdade: menos pedidos perdidos, tempos de resposta visíveis e relatórios prontos em segundos.",
    gallery: [bug, girl, laisher],
  },
  {
    slug: "cyber-space",
    title: "Cyber Space",
    description: "Plataforma de Bug Bounty para a comunidade de cibersegurança onde as empresas poderão avaliar submeter os seus sistemas e hackers farão testes de penetração.",
    tech: ["Next.js", "TailwindCSS", "Motion"],
    status: "Em Desenvolvimento",
    demo: "https://cyber-space.vercel.app",
    image: bug,
  },
  {
    slug: "mozcyber",
    title: "MozCyber",
    description: "Website institucional da comunidade MozCyber, com informações sobre eventos, workshops e integração com membros.",
    tech: ["Next.js", "TailwindCSS", "Supabase"],
    status: "Concluído",
    demo: "https://mozcyber.org",
    image: cyber,
  },
  {
    slug: "code-like-a-girl",
    title: "Code Like a Girl",
    description: "Website com os projectos apresentados pelas participantes no Code Like a Girl.",
    tech: ["HTML", "CSS"],
    status: "Concluído",
    demo: "https://clg-ana-mogas.vercel.app",
    image: girl,
    github: "https://github.com/vitiliosousa/clg-ana-mogas",
  },
  {
    slug: "laisher",
    title: "Laisher",
    description: "Website institucional da laisher, uma empresa de arquitectura e engenharia.",
    tech: ["Next.js", "TailwindCSS", "Supabase"],
    status: "Concluído",
    demo: "https://laisher.co.mz",
    image: laisher,
  },
  {
    slug: "sistema-de-requisicoes-bancarias",
    title: "Sistema de Requisições Bancárias",
    description: "Plataforma interna de um banco para gerir requisições de ponta a ponta: do requisitante, por vários níveis de aprovação, até ao director financeiro. Requisições de valor elevado seguem para um comité que vota qual deve avançar para o procurement.",
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    status: "Concluído",
  },
  {
    slug: "mozcyber-gestao-de-projectos",
    title: "MozCyber – Gestão de Projectos",
    description: "Sistema de gestão de projectos da MozCyber. Permite criar projectos e tarefas, acompanhar durações, ver o estado das tarefas de cada utilizador e organizar o trabalho em quadro Kanban.",
    tech: ["Next.js", "Go", "PostgreSQL"],
    status: "Concluído",
  },
  {
    slug: "supremogo",
    title: "SupremoGo",
    description: "Aplicação de mobilidade urbana com integração de mapas, desenvolvida de raiz, da app móvel ao backend.",
    tech: ["Flutter", "NestJS", "Google Maps"],
    status: "Concluído",
  },
  {
    slug: "gestao-de-eventos",
    title: "Gestão de Eventos",
    description: "Sistema para uma empresa de eventos que cobre todo o ciclo: desde o lead inicial até à realização do evento.",
    tech: ["NestJS", "Next.js", "PostgreSQL"],
    status: "Concluído",
  },
];

export const getProject = (slug: string) => projectsData.find((p) => p.slug === slug);
