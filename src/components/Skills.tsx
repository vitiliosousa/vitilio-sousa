'use client'
import { useState } from "react";
import {
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiPostgresql, SiMysql, SiMongodb,
  SiSpringboot, SiFigma, SiGit, SiHtml5, SiCss, SiTailwindcss, SiSupabase, SiTypescript,
  SiDocker, SiFlutter, SiNestjs, SiFastapi, SiVercel, SiClaude, SiLinux, SiMacos, SiOwasp, SiAngular, SiVite,
} from "react-icons/si";
import { FaJava, FaAws, FaWindows } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { BarChart3, LayoutDashboard, ShieldCheck, KeyRound } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Icon = React.ComponentType<{ size?: number; className?: string }>;
type Tech = { name: string; note: string; icon: Icon };

const areas: { id: string; title: string; text: string; tech: Tech[] }[] = [
  {
    id: "frontend",
    title: "Frontend",
    text: "Interfaces rápidas, acessíveis e agradáveis de usar.",
    tech: [
      { name: "React", note: "Interfaces por componentes", icon: SiReact },
      { name: "Next.js", note: "Aplicações web full-stack", icon: SiNextdotjs },
      { name: "Angular", note: "Aplicações web empresariais", icon: SiAngular },
      { name: "Vite", note: "Tooling rápido para frontend", icon: SiVite },
      { name: "TypeScript", note: "JavaScript com tipos", icon: SiTypescript },
      { name: "JavaScript", note: "A base da web", icon: SiJavascript },
      { name: "TailwindCSS", note: "Estilos utilitários", icon: SiTailwindcss },
      { name: "HTML", note: "Estrutura e semântica", icon: SiHtml5 },
      { name: "CSS", note: "Layout e animação", icon: SiCss },
      { name: "Figma", note: "Desenho de interfaces", icon: SiFigma },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    text: "Serviços sólidos, com regras de negócio claras.",
    tech: [
      { name: "Node.js", note: "Servidores e APIs", icon: SiNodedotjs },
      { name: "NestJS", note: "APIs bem estruturadas", icon: SiNestjs },
      { name: "FastAPI", note: "APIs rápidas em Python", icon: SiFastapi },
      { name: "Python", note: "Serviços, scripts e dados", icon: SiPython },
      { name: "Java", note: "Aplicações backend", icon: FaJava },
      { name: "Spring Boot", note: "Serviços empresariais", icon: SiSpringboot },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    text: "Apps multiplataforma, ligadas ao backend.",
    tech: [
      { name: "Flutter", note: "Apps para Android e iOS", icon: SiFlutter },
      { name: "React Native", note: "Apps com React", icon: SiReact },
    ],
  },
  {
    id: "dados",
    title: "Dados & BI",
    text: "Modelação, consultas e dashboards para decidir com informação fiável.",
    tech: [
      { name: "PostgreSQL", note: "Base de dados relacional", icon: SiPostgresql },
      { name: "MySQL", note: "Base de dados relacional", icon: SiMysql },
      { name: "MongoDB", note: "Base de dados de documentos", icon: SiMongodb },
      { name: "Supabase", note: "Backend como serviço", icon: SiSupabase },
      { name: "Tableau", note: "Visualização de dados", icon: LayoutDashboard },
      { name: "Power BI", note: "Dashboards e relatórios", icon: BarChart3 },
    ],
  },
  {
    id: "seguranca",
    title: "Segurança",
    text: "Pensada desde o desenho, não acrescentada no fim.",
    tech: [
      { name: "Segurança de aplicações", note: "Boas práticas desde o início", icon: ShieldCheck },
      { name: "Autenticação e acessos", note: "Sessões, perfis e permissões", icon: KeyRound },
      { name: "OWASP", note: "Referência de vulnerabilidades web", icon: SiOwasp },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    text: "Do código à produção, sem surpresas.",
    tech: [
      { name: "AWS", note: "Serviços cloud", icon: FaAws },
      { name: "Docker", note: "Contentores", icon: SiDocker },
      { name: "Git", note: "Controlo de versões", icon: SiGit },
      { name: "Vercel", note: "Deploy de aplicações web", icon: SiVercel },
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas",
    text: "À vontade em qualquer ambiente de trabalho.",
    tech: [
      { name: "Linux", note: "Servidores e terminal", icon: SiLinux },
      { name: "macOS", note: "Ambiente de desenvolvimento", icon: SiMacos },
      { name: "Windows", note: "Ambiente de desenvolvimento", icon: FaWindows },
    ],
  },
  {
    id: "ia",
    title: "IA no desenvolvimento",
    text: "Assistentes de código integrados no fluxo de trabalho.",
    tech: [
      { name: "Claude Code", note: "Agente de código no terminal", icon: SiClaude },
      { name: "Codex", note: "Agente de código da OpenAI", icon: TbBrandOpenai },
    ],
  },
];

export default function Skills() {
  const [focus, setFocus] = useState<string | null>(null);
  const toggle = (id: string) => setFocus((f) => (f === id ? null : id));

  return (
    <section id="skills" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Skills" lines={["Tecnologias", <span key="b" className="text-accent-gradient">com que trabalho.</span>]} className="mb-10" />

        {/* Filtros: nada fica escondido, só realçado */}
        <Reveal className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => setFocus(null)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              focus === null ? "btn-accent border-transparent" : "border-white/15 text-muted-foreground hover:text-foreground hover:border-white/30"
            }`}
          >
            Tudo
          </button>
          {areas.map((a) => (
            <button
              key={a.id}
              onClick={() => toggle(a.id)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                focus === a.id
                  ? "border-[#a6d85a] bg-[#a6d85a]/10 text-foreground"
                  : "border-white/15 text-muted-foreground hover:text-foreground hover:border-white/30"
              }`}
            >
              {a.title}
            </button>
          ))}
        </Reveal>

        <div className="border-t border-white/10">
          {areas.map((a) => {
            const dim = focus !== null && focus !== a.id;
            return (
              <Reveal key={a.id}>
                <div
                  className={`grid lg:grid-cols-[15rem_1fr] gap-6 lg:gap-10 py-8 border-b border-white/10 transition-all duration-500 ${
                    dim ? "opacity-25 scale-[0.99] blur-[1px]" : ""
                  }`}
                >
                  <button onClick={() => toggle(a.id)} className="text-left group self-start">
                    <span className="flex items-baseline gap-3">
                      <span className="text-xl font-semibold group-hover:text-[#a6d85a] transition-colors">{a.title}</span>
                      <span className="font-mono text-xs text-[#a6d85a]">{String(a.tech.length).padStart(2, "0")}</span>
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground leading-snug">{a.text}</span>
                  </button>

                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                    {a.tech.map(({ name, note, icon: Icon }) => (
                      <div key={name} className="glass lift group p-4 !rounded-2xl">
                        <Icon size={24} className="text-muted-foreground group-hover:text-[#a6d85a] group-hover:scale-110 transition-all duration-300" />
                        <p className="mt-4 font-semibold text-sm">{name}</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-snug">{note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
