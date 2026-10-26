import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/vitiliosousa" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/vitilio-sousa" },
  { name: "Email", icon: Mail, href: "mailto:vitiliodesousa@gmail.com" },
];

const links = [
  { name: "Sobre", href: "/#sobre" },
  { name: "Projectos", href: "/#projetos" },
  { name: "Skills", href: "/#skills" },
  { name: "Contacto", href: "/#contato" },
];

export default function Footer() {
  return (
    <footer className="px-4 pt-10 pb-8 overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <nav className="flex gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-foreground transition-colors">{l.name}</a>
          ))}
        </nav>
        <div className="flex gap-3">
          {socials.map(({ name, icon: Icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
              className="p-2.5 rounded-full border border-white/15 hover:bg-white/10 transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <p
        aria-hidden
        className="mt-10 flex justify-center font-semibold tracking-tighter leading-none text-[14vw] md:text-[10rem] select-none"
      >
        {"VitilioSousa".split("").map((l, i) => (
          <span
            key={i}
            className="inline-block cursor-default bg-gradient-to-b from-white/30 to-white/0 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-4 hover:from-[#ecd94c] hover:to-[#9bd160]/20"
          >
            {l}
          </span>
        ))}
      </p>

      <p className="max-w-6xl mx-auto mt-4 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Vitilio Sousa</span>
        <span>Feito em Maputo</span>
      </p>
    </footer>
  );
}
