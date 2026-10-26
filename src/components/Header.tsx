'use client'
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: 'Início', href: '/#inicio' },
  { name: 'Sobre', href: '/#sobre' },
  { name: 'Projectos', href: '/#projetos' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Processo', href: '/#processo' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const pathname = usePathname();
  const onHome = pathname === '/';

  useEffect(() => {
    const sections = ['inicio', 'sobre', 'projetos', 'skills', 'processo', 'contato'];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const position = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= position) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMenuOpen
          ? 'bg-[#141414]/80 backdrop-blur-xl border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 h-16">
        <Link href="/#inicio" className="group font-mono text-base tracking-tight">
          <span className="text-[#a6d85a] group-hover:text-[#ecd94c] transition-colors">&lt;</span>
          vitiliosousa
          <span className="text-[#a6d85a] group-hover:text-[#ecd94c] transition-colors">/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const active = onHome && activeSection === item.href.substring(2);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm py-1 transition-colors ${
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-gradient-to-r from-[#ecd94c] to-[#9bd160] transition-all duration-300 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <Link href="/#contato" className="hidden md:inline-block btn-accent text-sm px-5 py-2">
          Contacto
        </Link>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col">
          {[...menuItems, { name: 'Contacto', href: '/#contato' }].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-muted-foreground hover:text-foreground border-t border-white/5"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
