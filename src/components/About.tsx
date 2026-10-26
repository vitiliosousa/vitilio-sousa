import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import CodeCard from "./CodeCard";

export default function About() {
  return (
    <section id="sobre" className="py-28 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-16 items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Sobre</p>
          </Reveal>

          <WordReveal
            className="text-3xl md:text-[2.6rem] font-medium leading-[1.25] tracking-tight"
            text="Desenvolvo produtos completos, da interface à API, da ideia ao deploy. Cada projecto é pensado para ser claro de usar, seguro por desenho e simples de manter."
          />
        </div>

        <Reveal delay={150}>
          <CodeCard />
        </Reveal>
      </div>
    </section>
  );
}
