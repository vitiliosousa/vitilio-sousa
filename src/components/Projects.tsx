import { projectsData } from "@/data/projectsData";
import ProjectGallery from "./ProjectGallery";

export default function Projects() {
  return (
    <section id="projetos" className="px-3 md:px-5 py-6 md:py-10">
      <ProjectGallery projects={projectsData} />
    </section>
  );
}
