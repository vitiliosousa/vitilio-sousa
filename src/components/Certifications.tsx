'use client'
import { googleColors } from "@/data/googleColors";
import { certificationsData as certifications } from "@/data/certificationsData";
import { Award, Calendar } from "lucide-react";
import Image from "next/image";

export default function Certifications() {

  return (
    <section id="certificacoes" className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: googleColors.blue }}>Certificações</span>{" "}
            <span style={{ color: googleColors.red }}>&</span>{" "}
            <span style={{ color: googleColors.green }}>Cursos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compromisso com aprendizado contínuo em tecnologia, dados e desenvolvimento.
          </p>
        </div>

        {/* Certifications Grid - Mais compacto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border hover:scale-[1.02]"
              style={{ borderColor: cert.color + '20' }}
            >
              {/* Header - Layout horizontal compacto */}
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: cert.color + '15' }}
                >
                  {cert.logo ? (
                    <Image src={cert.logo} alt={cert.institution} width={20} height={20} />
                  ) : (
                    <Award size={18} style={{ color: cert.color }} />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base font-bold text-gray-900 line-clamp-2 leading-tight">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-600 font-medium truncate">
                      {cert.institution}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                      <Calendar size={12} />
                      <span className="text-xs">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Badge + Action - Linha compacta */}
              <div className="flex items-center justify-between mb-3">
                <span 
                  className="px-2 py-1 text-xs font-semibold rounded-md text-white"
                  style={{ backgroundColor: cert.color }}
                >
                  {cert.category}
                </span>
              </div>

              {/* Description - Mais compacta */}
              <p className="text-sm text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills - Layout mais compacto */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 3).map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-2 py-1 text-xs font-medium rounded border"
                    style={{
                      backgroundColor: cert.color + '08',
                      borderColor: cert.color + '30',
                      color: cert.color
                    }}
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                    +{cert.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>


        
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}