import { googleColors } from "@/data/googleColors";

import bug from "@/assets/bug.png"
import cyber from "@/assets/cyber.png"
import girl from "@/assets/girl.png"
import laisher from "@/assets/laisher.png"
import xbox from "@/assets/xbox.png"
import tesla from "@/assets/tesla.png"
import jordan from "@/assets/jordan.png"

export const projectsData = [
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
      status: "Concluido",
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
    {
      id: 5,
      title: "Xbox",
      description: "Landing page de uma pagina ficticia da xbox.",
      tech: ["React", "Vite", "TailwindCSS"],
      color: googleColors.blue,
      status: "Concluído",
      demo: "https://xbox-five-iota.vercel.app/",
      image: xbox,
      github:"https://github.com/vitiliosousa/Xbox"
    },
    {
      id: 6,
      title: "Jordan",
      description: "Landing page de uma pagina ficticia de venda de jordans.",
      tech: ["React", "Vite", "TailwindCSS"],
      color: googleColors.red,
      status: "Concluído",
      demo: "https://jordan-three.vercel.app/",
      image: jordan,
      github:"https://github.com/vitiliosousa/Jordan"
    },
    {
      id: 7,
      title: "Tesla Bank",
      description: "Landing page de uma pagina ficticia de um banco.",
      tech: ["React", "Vite", "TailwindCSS"],
      color: googleColors.yellow,
      status: "Concluído",
      demo: "https://tesla-bank-nu.vercel.app/",
      image: tesla,
    },
];
