'use client'
import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_/[]{}=+*^?#%&01";

/** Text that scrambles into place on load and again on hover. */
export default function Scramble({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [out, setOut] = useState(text);
  const raf = useRef(0);

  const run = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const DUR = 1000;
    const step = (now: number) => {
      const k = Math.min((now - start) / DUR, 1);
      setOut(
        text
          .split("")
          .map((c, i) => (i < k * text.length ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join("")
      );
      if (k < 1) raf.current = requestAnimationFrame(step);
      else setOut(text);
    };
    raf.current = requestAnimationFrame(step);
  }, [text]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(run, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf.current); };
  }, [run, delay]);

  return (
    <span className={`inline-grid cursor-default ${className}`} onPointerEnter={run}>
      <span className="col-start-1 row-start-1 invisible">{text}</span>
      <span className="col-start-1 row-start-1" aria-label={text}>{out}</span>
    </span>
  );
}
