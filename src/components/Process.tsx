'use client'
import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";

const steps = [
  { title: "Perceber", text: "Começo pelo problema e pelas pessoas que vão usar o sistema, antes de pensar em tecnologia.", tag: "// requisitos" },
  { title: "Desenhar", text: "Fluxos, dados e interface alinhados antes de escrever a primeira linha de código.", tag: "// fluxos e dados" },
  { title: "Construir", text: "Entregas pequenas e frequentes, com código limpo, testado e com atenção à segurança.", tag: "// iterações" },
  { title: "Entregar", text: "Deploy, documentação e acompanhamento depois do lançamento.", tag: "// produção" },
];

const TOP = 112; // px abaixo do header onde o primeiro cartão fica preso
const GAP = 22;

export default function Process() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      cards.current.forEach((el, i) => {
        const next = cards.current[i + 1];
        if (!el || !next) return;
        const h = el.offsetHeight;
        const stuck = TOP + i * GAP;
        const k = Math.min(Math.max((stuck + h - next.getBoundingClientRect().top) / h, 0), 1);
        el.style.transform = `scale(${1 - 0.05 * k})`;
        el.style.filter = `brightness(${1 - 0.5 * k})`;
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
    <section id="processo" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Processo"
          lines={["Como trabalho,", <span key="b" className="text-accent-gradient">em quatro passos.</span>]}
          className="mb-14"
        />

        <div>
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="sticky mb-6 last:mb-0"
              style={{ top: TOP + i * GAP, zIndex: i }}
            >
              <div
                ref={(n) => { cards.current[i] = n; }}
                className="glass !bg-[#181818] origin-top p-8 md:p-12 min-h-[16rem] grid md:grid-cols-[8rem_1fr_auto] gap-6 md:gap-12 items-center will-change-transform"
              >
                <span className="text-7xl md:text-8xl font-semibold text-accent-gradient leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">{s.text}</p>
                </div>
                <span className="font-mono text-sm text-[#a6d85a] md:text-right">{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
