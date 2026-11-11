'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const items = [
  { name: "Início", href: "/#inicio" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Projectos", href: "/#projetos" },
  { name: "Skills", href: "/#skills" },
  { name: "Processo", href: "/#processo" },
  { name: "Contacto", href: "/#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-10 pt-6 pointer-events-none">
        <Link href="/#inicio" className="pointer-events-auto border border-white/50 bg-black/40 backdrop-blur px-3 py-1.5 font-mono text-xs hover:border-[#ff3b2f] hover:text-[#ff3b2f] transition-colors">
          &lt;vitiliosousa/&gt;
        </Link>

        <Link href="/#inicio" aria-label="Início" className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden md:block">
          <span className="relative block h-5 w-5 rounded-full border-[3px] border-white">
            <span className="absolute left-1/2 top-[calc(100%+6px)] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white" />
          </span>
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="pointer-events-auto caps !text-white border border-white/40 bg-black/40 backdrop-blur rounded-full px-5 py-2.5 hover:border-[#ff3b2f] hover:text-[#ff3b2f] transition-colors"
        >
          Menu
        </button>
      </header>

      {/* Menu em ecrã inteiro */}
      <div
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button onClick={() => setOpen(false)} aria-label="Fechar" className="absolute right-6 md:right-10 top-6 caps !text-white inline-flex items-center gap-2 border border-white/40 rounded-full px-5 py-2.5 hover:border-[#ff3b2f]">
          <X size={14} /> Fechar
        </button>
        <nav className="h-full flex flex-col justify-center px-6 md:px-16 dimmer">
          {items.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="dim-item group flex items-baseline gap-5 py-2 md:py-3"
              style={{
                transform: open ? "none" : "translateY(40px)",
                opacity: open ? undefined : 0,
                transition: `transform 0.6s ${150 + i * 70}ms cubic-bezier(0.2,0.7,0.2,1), opacity 0.3s`,
              }}
            >
              <span className="caps !text-[0.6rem] text-[#ff3b2f]">{String(i + 1).padStart(2, "0")}</span>
              <span className="display contorno text-5xl sm:text-7xl md:text-8xl group-hover:[--o-fill:#fff] group-hover:[--o-stroke:#fff] group-hover:translate-x-3 transition-transform">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
