'use client'
import { useEffect, useRef } from "react";

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export default function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const start = innerHeight * 0.85;
      const end = innerHeight * 0.35;
      const p = reduce ? 1 : Math.min(Math.max((start - r.top) / (start - end + r.height * 0.6), 0), 1);
      const lit = p * spans.length;
      spans.forEach((s, i) => {
        const k = Math.min(Math.max(lit - i, 0), 1);
        s.style.opacity = String(0.22 + 0.78 * k);
        s.style.color = k > 0.5 ? "var(--foreground)" : "";
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} data-w className="transition-[opacity,color] duration-300" style={{ opacity: 0.22 }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
