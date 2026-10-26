'use client'
import { useEffect, useRef, useState } from "react";

type Tok = [string, ("k" | "s" | "p" | "c")?];

const lines: Tok[][] = [
  [["const ", "k"], ["sobre", "p"], [" = {"]],
  [["  nome", "p"], [": "], ['"Vitilio Sousa"', "s"], [","]],
  [["  foco", "p"], [": ["], ['"web"', "s"], [", "], ['"mobile"', "s"], [", "], ['"backend"', "s"], ["],"]],
  [["  principios", "p"], [": ["]],
  [["    "], ['"código limpo"', "s"], [","]],
  [["    "], ['"segurança desde o início"', "s"], [","]],
  [["    "], ['"boa experiência de utilização"', "s"], [","]],
  [["  ],"]],
  [["  base", "p"], [": "], ['"Maputo, Moçambique"', "s"], [","]],
  [["};"]],
];

const color = { k: "text-[#a6d85a]", s: "text-[#ecd94c]", p: "text-[#d9e8b0]", c: "text-muted-foreground" } as const;

/** Code window whose lines type in one after the other when it scrolls into view. */
export default function CodeCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#f26b5b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ecd94c]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#a6d85a]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">sobre.ts</span>
      </div>
      <pre className="p-6 font-mono text-[0.8rem] sm:text-sm leading-7 overflow-x-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            className={shown ? "subir" : "opacity-0"}
            style={{ animationDelay: `${i * 180}ms` }}
          >
            {line.map(([t, c], j) => (
              <span key={j} className={c ? color[c] : "text-foreground"}>{t}</span>
            ))}
            {i === lines.length - 1 && <span className="cursor text-[#a6d85a]"> ▍</span>}
          </div>
        ))}
      </pre>
    </div>
  );
}
