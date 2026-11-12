import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import CodeCard from "./CodeCard";

export default function About() {
  return (
    <section id="sobre" className="px-3 md:px-5 py-6 md:py-10">
      <div className="frame overflow-hidden p-8 md:p-16 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center min-h-[80svh]">
        <span aria-hidden className="display contorno pointer-events-none select-none absolute -bottom-[0.18em] -left-[0.04em] text-[18vw] opacity-40 [--o-stroke:rgb(255_255_255/0.12)]">
          Sobre
        </span>

        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-14 bg-gradient-to-r from-[#ff8a2a] to-[#e5251b]" />
              <p className="caps">Sobre</p>
            </div>
          </Reveal>
          <WordReveal
            className="text-3xl md:text-[2.7rem] font-bold leading-[1.15] tracking-tight"
            text="Desenvolvo produtos completos, da interface à API, da ideia ao deploy. Cada projecto é pensado para ser claro de usar, seguro por desenho e simples de manter."
          />
        </div>

        <Reveal delay={150} className="relative">
          <CodeCard />
        </Reveal>
      </div>
    </section>
  );
}
