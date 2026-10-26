import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";
import { getProject, projectsData } from "@/data/projectsData";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projectsData.findIndex((p) => p.slug === slug);
  const next = projectsData[(index + 1) % projectsData.length];

  const meta = [
    ["Ano", project.year],
    ["Papel", project.role],
    ["Duração", project.duration],
    ["Estado", project.status],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/#projetos" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Projectos
          </Link>

          <h1 className="revelar mt-10 text-4xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
            {project.title}
          </h1>

          <dl className="subir mt-10 flex flex-wrap gap-x-12 gap-y-5 border-y border-white/10 py-6" style={{ animationDelay: "200ms" }}>
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="mt-1">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="subir relative mt-12 aspect-[16/9] overflow-hidden rounded-[var(--radius)] border border-white/10" style={{ animationDelay: "300ms" }}>
            <ProjectCover project={project} priority sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>

          {/* Resumo + lateral */}
          <div className="mt-16 grid md:grid-cols-[1.6fr_1fr] gap-12">
            <Reveal>
              <p className="eyebrow mb-5">Resumo</p>
              <p className="text-xl md:text-2xl leading-relaxed">{project.description}</p>
              {project.overview && (
                <p className="mt-6 text-muted-foreground leading-relaxed">{project.overview}</p>
              )}
            </Reveal>

            <Reveal delay={120} className="space-y-8">
              <div>
                <p className="eyebrow mb-4">Tecnologias</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/15 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.demo || project.github) && (
                <div className="flex flex-col items-start gap-3">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-accent px-6 py-3 text-sm inline-flex items-center gap-2">
                      Ver online <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-[#a6d85a] transition-colors">
                      <Github size={16} /> Código no GitHub
                    </a>
                  )}
                </div>
              )}
            </Reveal>
          </div>

          {/* Funcionalidades */}
          {project.features && (
            <section className="mt-24">
              <Reveal>
                <p className="eyebrow mb-8">Funcionalidades</p>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-5">
                {project.features.map((f, i) => (
                  <Reveal key={f.title} delay={(i % 2) * 100}>
                    <div className="glass lift p-7 h-full">
                      <span className="font-mono text-sm text-[#a6d85a]">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          {/* Desafio e resultado */}
          {(project.challenge || project.result) && (
            <section className="mt-24 grid md:grid-cols-2 gap-5">
              {project.challenge && (
                <Reveal>
                  <div className="h-full border-t border-white/15 pt-6">
                    <p className="eyebrow mb-4">O desafio</p>
                    <p className="text-lg leading-relaxed">{project.challenge}</p>
                  </div>
                </Reveal>
              )}
              {project.result && (
                <Reveal delay={120}>
                  <div className="h-full border-t border-[#a6d85a]/50 pt-6">
                    <p className="eyebrow mb-4">O resultado</p>
                    <p className="text-lg leading-relaxed">{project.result}</p>
                  </div>
                </Reveal>
              )}
            </section>
          )}

          {/* Galeria */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="mt-24">
              <Reveal>
                <p className="eyebrow mb-8">Galeria</p>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-5">
                {project.gallery.map((img, i) => (
                  <Reveal key={i} delay={(i % 2) * 100} className={i === 0 ? "sm:col-span-2" : ""}>
                    <div className={`group relative overflow-hidden rounded-[var(--radius)] border border-white/10 ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                      <Image
                        src={img}
                        alt={`${project.title}, imagem ${i + 1}`}
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          <Link
            href={`/projetos/${next.slug}`}
            className="group glass lift mt-24 flex items-center justify-between gap-6 p-8"
          >
            <div>
              <p className="eyebrow mb-2">Próximo projecto</p>
              <p className="text-2xl md:text-3xl font-semibold">{next.title}</p>
            </div>
            <ArrowRight className="shrink-0 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
