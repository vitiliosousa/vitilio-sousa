import { googleColors } from "@/data/googleColors";

import bug from "@/assets/bug.png"
import cyber from "@/assets/cyber.png"
import girl from "@/assets/girl.png"
import laisher from "@/assets/laisher.png"

export const projectsData = [
    {
      id: 5,
      title: "Sistema de Requisições Bancárias",
      description: "Plataforma interna de um banco para gerir requisições de ponta a ponta: do requisitante, por vários níveis de aprovação, até ao director financeiro. Requisições de valor elevado seguem para um comité que vota qual deve avançar para o procurement.",
      tech: ["Next.js", "FastAPI", "PostgreSQL"],
      color: googleColors.blue,
      status: "Concluído",
    },
    {
      id: 6,
      title: "MozCyber – Gestão de Projectos",
      description: "Sistema de gestão de projectos da MozCyber. Permite criar projectos e tarefas, acompanhar durações, ver o estado das tarefas de cada utilizador e organizar o trabalho em quadro Kanban.",
      tech: ["Next.js", "Go", "PostgreSQL"],
      color: googleColors.red,
      status: "Concluído",
    },
    {
      id: 7,
      title: "SupremoGo",
      description: "Aplicação de mobilidade urbana com integração de mapas, desenvolvida de raiz, da app móvel ao backend.",
      tech: ["Flutter", "NestJS", "Google Maps"],
      color: googleColors.yellow,
      status: "Concluído",
    },
    {
      id: 8,
      title: "Gestão de Eventos",
      description: "Sistema para uma empresa de eventos que cobre todo o ciclo: desde o lead inicial até à realização do evento.",
      tech: ["NestJS", "Next.js", "PostgreSQL"],
      color: googleColors.green,
      status: "Concluído",
    },
    {
      id: 1,
      title: "Cyber Space",
      description: "Plataforma de Bug Bounty para a comunidade de cibersegurança onde as empresas poderão avaliar submeter os seus sistemas e hackers farão testes de penetração.",
      tech: ["Next.js", "TailwindCSS", "Motion"],
      color: googleColors.blue,
      status: "Em Desenvolvimento",
      demo: "https://cyber-space.vercel.app",
      image: bug,
    },
    {
      id: 2,
      title: "MozCyber",
      description: "Website institucional da comunidade MozCyber, com informações sobre eventos, workshops e integração com membros.",
      tech: ["Next.js", "TailwindCSS", "Supabase"],
      color: googleColors.red,
      status: "Concluído",
      demo: "https://mozcyber.org",
      image: cyber,
    },
    {
      id: 3,
      title: "Code Like a Girl",
      description: "Website com os projectos apresentados pelas participantes no Code Like a Girl.",
      tech: ["HTML", "CSS"],
      color: googleColors.yellow,
      status: "Concluído",
      demo: "https://clg-ana-mogas.vercel.app",
      image: girl,
      github:"https://github.com/vitiliosousa/clg-ana-mogas"
    },
    {
      id: 4,
      title: "Laisher",
      description: "Website institucional da laisher, uma empresa de arquitectura e engenharia.",
      tech: ["Next.js", "TailwindCSS", "Supabase"],
      color: googleColors.green,
      status: "Concluído",
      demo: "https://laisher.co.mz",
      image: laisher,
    },
];
