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
  return (
    <section id="skills" className="px-3 md:px-5 py-6 md:py-10">
      <div className="frame overflow-hidden p-8 md:p-16">
        <SectionTitle
          eyebrow="Skills"
          lines={["Tecnologias", <span key="b" className="text-accent-gradient">com que trabalho.</span>]}
          className="mb-14 md:mb-20"
        />

        <div className="dimmer border-t border-white/10">
          {areas.map((a, i) => (
            <div key={a.id} className="dim-item">
              <Reveal delay={(i % 3) * 60}>
                <div className="group grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-x-10 gap-y-5 border-b border-white/10 py-7 md:py-9">
                  <div className="flex items-baseline gap-4">
                    <span className="caps !text-[#ff3b2f]">{String(a.tech.length).padStart(2, "0")}</span>
                    <h3 className="display contorno text-3xl sm:text-4xl md:text-5xl group-hover:[--o-fill:#fff] group-hover:[--o-stroke:#fff]">
                      {a.title}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 md:justify-end">
                    {a.tech.map(({ name, note, icon: Icon }) => (
                      <li key={name} title={note} className="inline-flex items-center gap-2 text-sm font-medium text-white/55 hover:text-[#ff3b2f] transition-colors cursor-default">
                        <Icon size={16} />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
