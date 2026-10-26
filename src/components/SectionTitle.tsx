'use client'
import { useEffect, useRef, useState } from "react";

/** Eyebrow with a line that draws itself, then title lines that wipe in when scrolled into view. */
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
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div className="flex items-center gap-4 mb-6">
        <span
          className="h-px bg-gradient-to-r from-[#ecd94c] to-[#9bd160] transition-all duration-700 ease-out"
          style={{ width: on ? "3rem" : "0rem" }}
        />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
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
