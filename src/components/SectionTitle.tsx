'use client'
import { useEffect, useRef, useState } from "react";

/** Etiqueta com linha que se desenha, e título gigante cujas linhas entram por corte. */
export default function SectionTitle({
  eyebrow,
  lines,
  className = "",
}: {
  eyebrow: string;
  lines: React.ReactNode[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div className="flex items-center gap-4 mb-7">
        <span
          className="h-px bg-gradient-to-r from-[#ff8a2a] to-[#e5251b] transition-all duration-700 ease-out"
          style={{ width: on ? "3.5rem" : "0rem" }}
        />
        <p className="caps">{eyebrow}</p>
      </div>
      <h2 className="display text-5xl sm:text-6xl md:text-8xl">
        {lines.map((l, i) => (
          <span
            key={i}
            className={`block ${on ? "revelar" : "opacity-0"}`}
            style={{ animationDelay: `${150 + i * 150}ms` }}
          >
            {l}
          </span>
        ))}
      </h2>
    </div>
  );
}
