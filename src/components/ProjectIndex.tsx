'use client'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projectsData";
import ProjectCover from "./ProjectCover";
import Reveal from "./Reveal";

/** Índice de projectos: títulos gigantes e uma pré-visualização que segue o cursor. */
export default function ProjectIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string | null>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el || !matchMedia("(pointer: fine)").matches) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      raf = requestAnimationFrame(tick);
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      el.style.transform = `translate(${x + 32}px, ${y - 130}px)`;
    };
    raf = requestAnimationFrame(tick);
    addEventListener("pointermove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); removeEventListener("pointermove", onMove); };
  }, []);

  return (
    <>
      <ul className="dimmer border-t border-white/10">
        {projects.map((p, i) => (
          <li key={p.slug} className="dim-item">
            <Reveal delay={(i % 4) * 60}>
              <Link
                href={`/projetos/${p.slug}`}
                data-cursor
                onPointerEnter={() => setActive(p.slug)}
                onPointerLeave={() => setActive(null)}
                className="group grid grid-cols-[2.2rem_1fr_auto] md:grid-cols-[4rem_1fr_9rem_3rem] items-center gap-x-4 md:gap-x-8 border-b border-white/10 py-6 md:py-9 transition-all duration-300 hover:pl-4"
              >
                <span className="caps !text-[#ff3b2f]">{String(i + 1).padStart(2, "0")}</span>
                <span className="display contorno text-3xl sm:text-4xl md:text-6xl group-hover:[--o-fill:#fff] group-hover:[--o-stroke:#fff]">
                  {p.title}
                </span>
                <span className="caps hidden md:block text-right">{p.year ?? p.status}</span>
                <ArrowUpRight className="justify-self-end text-white/40 transition-all group-hover:text-[#ff3b2f] group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Pré-visualização que acompanha o cursor */}
      <div
        ref={box}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-[15rem] w-[20rem] overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-opacity duration-300 [@media(pointer:fine)]:block"
        style={{ opacity: active ? 1 : 0 }}
      >
        {projects.map((p) => (
          <div key={p.slug} className="absolute inset-0 transition-opacity duration-300" style={{ opacity: active === p.slug ? 1 : 0 }}>
            <ProjectCover project={p} sizes="320px" />
          </div>
        ))}
      </div>
    </>
  );
}
