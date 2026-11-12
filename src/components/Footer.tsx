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
    <footer className="px-6 md:px-10 pt-16 pb-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <nav className="flex gap-8">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="caps hover:!text-white transition-colors">{l.name}</a>
          ))}
        </nav>
        <div className="flex gap-5">
          {socials.map(({ name, icon: Icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-white/60 hover:text-[#ff3b2f] transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-16 flex items-center justify-center gap-4 text-center caps !text-white/70 !tracking-[0.6em]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff3b2f]" />
        Vitilio Sousa
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff3b2f]" />
      </p>
      <p className="mt-4 text-center caps !text-[0.55rem]">© {new Date().getFullYear()}</p>
    </footer>
  );
}
