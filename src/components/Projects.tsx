import { googleColors } from "@/data/googleColors";
import { projectsData as projects } from "@/data/projectsData";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título e descrição */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: googleColors.red }}>Meus</span>{" "}
            <span style={{ color: googleColors.yellow }}>Projetos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Projetos acadêmicos, pessoais e voluntários, demonstrando habilidades em desenvolvimento web, mobile, análise de dados e design de interfaces.
          </p>
        </div>

        {/* Cards de projetos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              {/* Imagem do projeto */}
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    fill
                  />
                  <div 
                    className="absolute bottom-3 left-3 px-4 py-1 rounded-full text-white font-semibold"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.title}
                  </div>
                </div>
              )}

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: project.color + '15',
                      color: project.color
                    }}
                  >
                    {project.status || "Acadêmico"}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 6).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">
                      +{project.tech.length - 6} outras
                    </span>
                  )}
                </div>

                {/* Botão para visualizar */}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: project.color }}
                  >
                    <ExternalLink size={16} className="inline-block mr-2" />
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
