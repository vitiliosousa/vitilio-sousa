'use client'
import { useEffect, useRef } from "react";

/** Grid of dots that ripples gently and gets pushed away / lit up by the cursor. */
export default function DotField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GAP = 30;
    const REACH = 190;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      const time = t / 1000;
      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          const wave = reduce ? 0 : (Math.sin(x * 0.011 + time * 0.9) + Math.sin(y * 0.014 - time * 0.7)) * 0.5;
          const dx = x - mouse.x, dy = y - mouse.y;
          const d = Math.hypot(dx, dy);
          const k = d < REACH ? Math.pow(1 - d / REACH, 2) : 0;
          const push = k * 14;
          const px = d > 0 ? x + (dx / d) * push : x;
          const py = d > 0 ? y + (dy / d) * push : y;
          const r = 1 + wave * 0.35 + k * 2.4;
          if (k > 0.02) ctx.fillStyle = `rgba(190, 230, 100, ${0.15 + k * 0.85})`;
          else ctx.fillStyle = `rgba(255, 255, 255, ${0.09 + wave * 0.05})`;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect();
      removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      style={{
        maskImage: "radial-gradient(ellipse 75% 70% at 55% 45%, #000 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 55% 45%, #000 30%, transparent 100%)",
      }}
    />
  );
}
