'use client'
import { useEffect, useRef } from "react";

/** Anel luminoso que segue o rato com um pequeno atraso e cresce sobre elementos clicáveis. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ring.current;
    if (!el || !matchMedia("(pointer: fine)").matches) return;
    let x = -100, y = -100, tx = -100, ty = -100, raf = 0, big = false;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      el.style.opacity = "1";
      big = !!(e.target as HTMLElement).closest("a, button, [data-cursor]");
    };
    const onLeave = () => { el.style.opacity = "0"; };
    const tick = () => {
      raf = requestAnimationFrame(tick);
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${big ? 1.9 : 1})`;
    };
    raf = requestAnimationFrame(tick);
    addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-7 w-7 rounded-full border-2 border-[#ff3b2f] opacity-0 transition-[opacity] duration-300 [@media(pointer:fine)]:block"
      style={{ boxShadow: "0 0 18px rgb(255 59 47 / 0.7), inset 0 0 10px rgb(255 59 47 / 0.4)" }}
    />
  );
}
