import Image from "next/image";
import type { Project } from "@/data/projectsData";

/** Project screenshot, or a branded placeholder until one is added. */
export default function ProjectCover({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 bg-[#1a1a1a] overflow-hidden"
      style={{ backgroundImage: "radial-gradient(rgb(255 255 255 / 0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
    >
      <div className="absolute -top-1/4 -right-1/4 w-3/4 aspect-square rounded-full bg-gradient-to-br from-[#ecd94c]/25 to-[#9bd160]/10 blur-3xl" />
      <div className="absolute -bottom-1/3 -left-1/4 w-2/3 aspect-square rounded-full bg-[#3f8f86]/20 blur-3xl" />
      <span className="absolute inset-0 flex items-center justify-center font-mono text-5xl md:text-6xl text-white/20">
        {"</>"}
      </span>
    </div>
  );
}
