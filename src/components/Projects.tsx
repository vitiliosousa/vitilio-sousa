import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData as projects } from "@/data/projectsData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";
import ProjectCover from "./ProjectCover";

export default function Projects() {
  return (
    <section id="projetos" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Projectos"
          lines={["Projectos", <span key="b" className="text-accent-gradient">em destaque.</span>]}
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <TiltCard>
                <Link href={`/projetos/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] border border-white/10 group-hover:border-[#a6d85a]/40 transition-colors">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <ProjectCover project={p} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-4 right-4 p-2.5 rounded-full bg-white text-[#141414] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-lg leading-snug group-hover:text-[#a6d85a] transition-colors">
                      {p.title}
                    </h3>
                    {p.year && <span className="font-mono text-sm text-muted-foreground">{p.year}</span>}
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
