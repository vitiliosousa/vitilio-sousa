import { projectsData } from "@/data/projectsData";
import SectionTitle from "./SectionTitle";
import ProjectIndex from "./ProjectIndex";

export default function Projects() {
  return (
    <section id="projetos" className="px-3 md:px-5 py-6 md:py-10">
      <div className="frame overflow-hidden p-8 md:p-16">
        <SectionTitle
          eyebrow="Selecção"
          lines={["Projectos", <span key="b" className="text-accent-gradient">em destaque.</span>]}
          className="mb-14 md:mb-20"
        />
        <ProjectIndex projects={projectsData} />
      </div>
    </section>
  );
}
