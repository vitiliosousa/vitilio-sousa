'use client'
import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projectos" },
  { id: "skills", label: "Skills" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contacto" },
];

/** Pontos de navegação fixos à direita, como um índice do poster. */
export default function SideNav() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Secções" className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-5 md:flex">
      {sections.map((s) => {
        const on = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} aria-label={s.label} className="group relative flex items-center justify-end">
            <span className="caps !text-[0.55rem] !text-white mr-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              {s.label}
            </span>
            <span
              className={`block rounded-full border transition-all duration-300 ${
                on ? "h-2.5 w-2.5 border-[#ff3b2f] bg-[#ff3b2f] shadow-[0_0_12px_#ff3b2f]" : "h-2 w-2 border-white/60 group-hover:border-white"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
