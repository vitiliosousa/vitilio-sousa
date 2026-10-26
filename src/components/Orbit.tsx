'use client'
import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import { SiReact, SiNextdotjs, SiFlutter, SiDocker, SiPostgresql, SiNestjs, SiTypescript, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si";

const icons: { Icon: IconType; name: string }[] = [
  { Icon: SiReact, name: "React" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiFlutter, name: "Flutter" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiNestjs, name: "NestJS" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiTailwindcss, name: "TailwindCSS" },
];

/** Tech icons circling the subject on a tilted ellipse, passing in front of and behind them. */
export default function Orbit() {
  const box = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const { width, height } = el.getBoundingClientRect();
      const rx = width * 0.62, ry = height * 0.13;
      const tilt = (-9 * Math.PI) / 180;
      const base = reduce ? 0 : t / 1000 * 0.38;
      nodes.current.forEach((n, i) => {
        if (!n) return;
        const a = base + (i * Math.PI * 2) / icons.length;
        const ex = Math.cos(a) * rx, ey = Math.sin(a) * ry;
        const x = ex * Math.cos(tilt) - ey * Math.sin(tilt);
        const y = ex * Math.sin(tilt) + ey * Math.cos(tilt);
        const depth = Math.sin(a); // -1 behind, 1 in front
        const s = 0.8 + 0.25 * depth;
        n.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${s})`;
        n.style.opacity = String(0.55 + 0.45 * ((depth + 1) / 2));
        n.style.zIndex = depth > 0 ? "30" : "0";
      });
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  return (
    <div ref={box} aria-hidden className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-[60%] w-0 h-0">
        {icons.map(({ Icon, name }, i) => (
          <div
            key={name}
            ref={(n) => { nodes.current[i] = n; }}
            className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center bg-[#1c1c1c]/80 border border-white/15 backdrop-blur text-[#e8e4d8] shadow-lg"
            title={name}
          >
            <Icon size={18} />
          </div>
        ))}
      </div>
    </div>
  );
}
