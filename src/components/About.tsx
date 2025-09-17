import { googleColors } from "@/data/googleColors";
import { Code, Database, Shield, Trophy, BookOpen, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Desenvolvimento Full-Stack",
      value: "Foco Principal",
      color: googleColors.blue,
      description: "Especialização em React, Next.js e tecnologias web modernas com base sólida em backend",
    },
    {
      icon: Database,
      title: "Análise de Dados",
      value: "Competência Complementar",
      color: googleColors.green,
      description: "Python, SQL e ferramentas de visualização para insights orientados a dados",
    },
    {
      icon: Trophy,
      title: "Projectos",
      value: "10+ Concluídos",
      color: googleColors.red,
      description: "Projetos que demonstram capacidade de resolver problemas reais com tecnologia",
    },
  ];

  const qualities = [
    {
      icon: BookOpen,
      title: "Aprendizagem Contínua",
      description: "Sempre atualizado com as últimas tecnologias e melhores práticas do mercado",
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Experiência em projetos colaborativos e metodologias ágeis",
    },
    {
      icon: Shield,
      title: "Qualidade & Segurança",
      description: "Foco em código limpo, testes e práticas seguras de desenvolvimento",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span style={{ color: googleColors.blue }}>Sobre</span>{" "}
            <span style={{ color: googleColors.red }}>Mim</span>
          </h2>
        </div>
        {/* Main Highlights */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="p-3 rounded-xl group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color + '15' }}
                  >
                    <IconComponent size={24} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div 
                      className="font-bold"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Skills & Qualities */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              O que me <span style={{ color: googleColors.yellow }}>destaca</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {qualities.map((quality, idx) => {
              const IconComponent = quality.icon;
              return (
                <div key={idx} className="p-8 text-center group hover:bg-gray-50 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 group-hover:bg-gray-200 transition-colors mb-4">
                    <IconComponent size={28} className="text-gray-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{quality.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{quality.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-gray-200">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Pronto para contribuir com sua equipe!
              </p>
              <p className="text-gray-600">
                Vamos conversar sobre como posso agregar valor aos seus projetos.
              </p>
            </div>
            <div className="flex gap-3">
              <a 
                href="#contato" 
                className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: googleColors.blue }}
              >
                Entre em Contato
              </a>
              <a 
                href="#projetos" 
                className="px-6 py-3 border-2 rounded-xl font-semibold transition-all hover:scale-105 hover:bg-gray-50"
                style={{ 
                  borderColor: googleColors.blue,
                  color: googleColors.blue 
                }}
              >
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}