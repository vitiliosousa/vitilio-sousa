import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const steps = [
  { title: "Perceber", text: "Começo pelo problema e pelas pessoas que vão usar o sistema, antes de pensar em tecnologia." },
  { title: "Desenhar", text: "Fluxos, dados e interface alinhados antes de escrever a primeira linha de código." },
  { title: "Construir", text: "Entregas pequenas e frequentes, com código limpo, testado e com atenção à segurança." },
  { title: "Entregar", text: "Deploy, documentação e acompanhamento depois do lançamento." },
];

export default function Process() {
  return (
    <section id="processo" className="px-3 md:px-5 py-6 md:py-10">
      <div className="frame overflow-hidden p-8 md:p-16">
        <SectionTitle
          eyebrow="Processo"
          lines={["Como trabalho,", <span key="b" className="text-accent-gradient">em quatro passos.</span>]}
          className="mb-14 md:mb-20"
        />

        <div className="dimmer grid md:grid-cols-4 border-t border-white/10">
          {steps.map((s, i) => (
            <div key={s.title} className="dim-item md:border-r last:md:border-r-0 border-white/10 border-b md:border-b-0">
              <Reveal delay={i * 90}>
                <div className="group h-full px-0 md:px-7 py-8 first:md:pl-0 last:md:pr-0">
                  <span className="display contorno block text-8xl md:text-9xl group-hover:[--o-fill:#fff] group-hover:[--o-stroke:#fff]">
                    {i + 1}
                  </span>
                  <h3 className="caps !text-white !text-xs mt-8">{s.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
