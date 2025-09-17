'use client'

import { googleColors } from "@/data/googleColors";
import { projectsData as projects } from "@/data/projectsData";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
       
          <h2 className="text-4xl font-bold mb-6">
            <span style={{ color: googleColors.red }}>Meus</span>{" "}
            <span style={{ color: googleColors.yellow }}>Projetos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma seleção de alguns dos meus trabalhos que tem a componente visual.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image Container */}
              {project.image ? (
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    fill
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                      style={{ backgroundColor: project.color + 'CC' }}
                    >
                      {project.status || "Acadêmico"}
                    </span>
                  </div>
                  
                  {/* Quick action on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
                      >
                        <ExternalLink size={16} className="inline mr-2" />
                        Ver Demo
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                // Placeholder para projetos sem imagem
                <div 
                  className="h-56 flex items-center justify-center relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`
                  }}
                >
                  <Code2 
                    size={64} 
                    style={{ color: project.color }} 
                    className="opacity-40"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.status || "Acadêmico"}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 
                    className="text-xl font-bold mb-2 group-hover:underline transition-all"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors hover:scale-105"
                        style={{
                          backgroundColor: project.color + '10',
                          color: project.color,
                          border: `1px solid ${project.color}20`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: project.color }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Ver Projeto</span>
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all hover:scale-105"
                      title="Ver código no GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}