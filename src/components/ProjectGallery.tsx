'use client'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projectsData";
import ProjectCover from "./ProjectCover";
import SectionTitle from "./SectionTitle";

const clamp = (n: number, a = 0, b = 1) => Math.min(Math.max(n, a), b);

/**
 * Galeria horizontal. Em ecrãs largos a secção fica fixa e o scroll vertical
 * desliza os cartões de lado; em ecrãs pequenos é um carrossel com o dedo.
 */
export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const view = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = matchMedia("(min-width: 768px)");
    let dist = 0;
    let raf = 0;

    const update = () => {
      raf = 0;
      const w = wrap.current, t = track.current;
      if (!w || !t) return;

      let best = 0, bestK = -1;
      cards.current.forEach((c, i) => {
        if (!c) return;
        const r = c.getBoundingClientRect();
        const off = r.left + r.width / 2 - innerWidth / 2;
        const k = 1 - clamp(Math.abs(off) / (innerWidth * 0.55));
        c.style.transform = mq.matches ? `scale(${0.9 + 0.1 * k})` : "";
        c.style.opacity = mq.matches ? String(0.4 + 0.6 * k) : "";
        const img = c.querySelector<HTMLElement>("[data-par]");
        if (img) img.style.transform = `translate3d(${clamp(-off * 0.03, -20, 20)}px,0,0) scale(1.06)`;
        if (k > bestK) { bestK = k; best = i; }
      });
      setActive(best);

      if (mq.matches) {
        const total = w.offsetHeight - innerHeight;
        const p = total > 0 ? clamp(-w.getBoundingClientRect().top / total) : 0;
        t.style.transform = `translate3d(${-p * dist}px,0,0)`;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      } else {
        t.style.transform = "";
      }
    };

    const measure = () => {
      const w = wrap.current, v = view.current, t = track.current;
      if (!w || !v || !t) return;
      if (mq.matches) {
        t.style.transform = "";
        dist = Math.max(t.scrollWidth - v.clientWidth, 0);
        w.style.height = `${dist + innerHeight}px`;
      } else {
        w.style.height = "";
      }
      update();
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", measure);
    view.current?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", measure);
      view.current?.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrap} className="relative">
      <div className="md:sticky md:top-5">
        <div className="frame overflow-hidden py-10 md:py-0 md:h-[calc(100svh-2.5rem)] flex flex-col justify-center">
          <div ref={view} className="no-scrollbar overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none">
            <div ref={track} className="flex w-max items-center gap-5 md:gap-8 px-6 md:px-16 will-change-transform">
              {/* Título */}
              <div className="w-[82vw] md:w-[max(50vw,44rem)] shrink-0 snap-start scroll-ml-6 pr-4">
                <SectionTitle
                  eyebrow="Selecção"
                  lines={["Projectos", <span key="b" className="text-accent-gradient">em destaque.</span>]}
                />
                <p className="mt-8 text-sm text-muted-foreground md:hidden">Desliza para o lado →</p>
              </div>

              {projects.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/projetos/${p.slug}`}
                  data-cursor
                  ref={(n) => { cards.current[i] = n; }}
                  className="group relative block shrink-0 snap-center scroll-mx-6 overflow-hidden rounded-3xl border border-white/10 transition-[border-color] duration-300 hover:border-[#ff3b2f]/70 w-[82vw] aspect-[4/3] md:w-[min(52vw,720px)] md:aspect-[16/10]"
                >
                  <div data-par className="absolute inset-0 transition-transform duration-300 ease-out">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <ProjectCover project={p} sizes="(min-width: 768px) 720px, 82vw" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

                  <span className="caps absolute left-6 top-6 !text-white">{String(i + 1).padStart(2, "0")}</span>
                  <span className="absolute right-6 top-6 rounded-full bg-white p-2.5 text-black opacity-0 -translate-y-1 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    {p.year && <p className="caps !text-[#ff8a2a]">{p.year}</p>}
                    <h3 className="display text-2xl md:text-4xl">{p.title}</h3>
                  </div>
                </Link>
              ))}

              <div className="w-4 md:w-16 shrink-0" aria-hidden />
            </div>
          </div>

          {/* Progresso */}
          <div className="mt-8 hidden items-center gap-5 px-16 md:flex">
            <span className="caps !text-white">{String(active + 1).padStart(2, "0")}</span>
            <span className="relative h-px flex-1 bg-white/15">
              <span ref={bar} className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#ff8a2a] to-[#e5251b]" />
            </span>
            <span className="caps">{String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
