import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  Code,
  Sparkles,
} from "lucide-react";
import { googleColors } from "@/data/googleColors";
import Image from "next/image";
import profilePic from "@/assets/profile3.png";

export default function Hero() {
  return (
    <section
      id="início"
      className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Google Colors Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: googleColors.blue }}
        ></div>
        <div
          className="absolute bottom-40 right-32 w-24 h-24 rounded-full opacity-10"
          style={{ backgroundColor: googleColors.red }}
        ></div>
        <div
          className="absolute top-60 right-20 w-16 h-16 rounded-full opacity-10"
          style={{ backgroundColor: googleColors.yellow }}
        ></div>
        <div
          className="absolute bottom-20 left-40 w-20 h-20 rounded-full opacity-10"
          style={{ backgroundColor: googleColors.green }}
        ></div>

        {/* Google Colors Gradient Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${googleColors.blue}15 0%, transparent 50%), 
                       radial-gradient(circle at 80% 80%, ${googleColors.red}15 0%, transparent 50%),
                       radial-gradient(circle at 40% 60%, ${googleColors.yellow}15 0%, transparent 50%),
                       radial-gradient(circle at 60% 40%, ${googleColors.green}15 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[85vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold leading-tight">
                  <span
                    className="block mb-2"
                    style={{ color: googleColors.blue }}
                  >
                    Olá!{" "}
                    <span style={{ color: googleColors.yellow }}>
                      Meu nome é
                    </span>
                  </span>
                  <span className="block">
                    <span style={{ color: googleColors.red }}>Vitilio</span>{" "}
                    <span style={{ color: googleColors.green }}>Sousa</span>
                  </span>
                </h1>
                <div className="flex items-center gap-4 mt-6">
                  <div
                    className="h-2 w-16 rounded-full"
                    style={{ backgroundColor: googleColors.yellow }}
                  />
                  <p className="text-xl md:text-2xl font-bold">
                    <span style={{ color: googleColors.blue }}>
                      Desenvolvedor
                    </span>{" "}
                    <span style={{ color: googleColors.red }}>Full-Stack</span>
                  </p>
                  <div
                    className="h-2 w-16 rounded-full"
                    style={{ backgroundColor: googleColors.green }}
                  />
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Recém-formado em{" "}
                <strong style={{ color: googleColors.blue }}>
                  Engenharia Informática
                </strong>
                , especializado em{" "}
                <strong style={{ color: googleColors.red }}>
                  React/Next.js
                </strong>{" "}
                e <strong style={{ color: googleColors.green }}>Node.js</strong>.
                Sempre buscando aprender e aplicar{" "}
                <strong style={{ color: googleColors.yellow }}>
                  novas tecnologias
                </strong>
                .
              </p>
            </div>

            {/* Google-themed CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="group px-8 py-4 rounded-full text-white hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: googleColors.blue }}
              >
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                <span className="text-sm">Falar Comigo</span>
              </a>
              <a
                href="#projetos"
                className="px-8 py-4 border-3 rounded-full transition-all duration-200 flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  borderColor: googleColors.red,
                  color: googleColors.red,
                  backgroundColor: googleColors.red + "10",
                  borderWidth: "3px",
                }}
              >
                <Code size={22} />
                <span className="text-sm">Ver Projetos</span>
              </a>
            </div>

            {/* Google-themed Social Links */}
            <div className="flex items-center gap-6">
              <span
                className="text-lg font-bold"
                style={{ color: googleColors.blue }}
              >
                Conecte-se:
              </span>
              {[
                {
                  icon: Github,
                  color: googleColors.blue,
                  href: "https://github.com/vitiliosousa",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  color: googleColors.red,
                  href: "https://linkedin.com/in/vitilio-sousa",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  color: googleColors.green,
                  href: "mailto:vitiliodesousa@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, color, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full hover:scale-110 transition-all duration-200 relative shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: color }}
                  title={label}
                >
                  <Icon size={18} className="text-white" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span
                      className="text-sm font-bold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-white"
                      style={{ backgroundColor: color }}
                    >
                      {label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image with Google Colors */}
          <div className="relative flex justify-center">
            <div className="relative flex items-center justify-center flex-col space-y-4">
              {/* Google Colors Ring */}
              <div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center overflow-hidden relative group p-2"
                style={{
                  background: `conic-gradient(${googleColors.blue} 0deg 90deg, ${googleColors.red} 90deg 180deg, ${googleColors.yellow} 180deg 270deg, ${googleColors.green} 270deg 360deg)`,
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                  <Image
                    src={profilePic}
                    alt="Vitilio Sousa - Desenvolvedor Full-Stack"
                    className="rounded-full object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    width={384}
                    height={384}
                    priority
                  />
                </div>
              </div>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-lg border-2 border-gray-100">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: googleColors.green }}
                />
                <MapPin size={16} style={{ color: googleColors.blue }} />
                <span
                  className="text-xs font-semibold"
                  style={{ color: googleColors.red }}
                >
                  Maputo, Moçambique
                </span>
                <Sparkles size={16} style={{ color: googleColors.yellow }} />
              </div>
            </div>
            <div
              className="absolute top-8 -right-4 p-5 rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-default border-2"
              style={{
                backgroundColor: googleColors.blue,
                borderColor: "white",
              }}
            />
            <div
              className="absolute bottom-28 -left-6 p-5 rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-default border-2"
              style={{
                backgroundColor: googleColors.green,
                borderColor: "white",
              }}
            />
            <div
              className="absolute top-3 -left-10 p-5 rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-default border-2"
              style={{
                backgroundColor: googleColors.red,
                borderColor: "white",
              }}
            />
            <div
              className="absolute bottom-8 -right-6 p-5 rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-default border-2"
              style={{
                backgroundColor: googleColors.yellow,
                borderColor: "white",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
