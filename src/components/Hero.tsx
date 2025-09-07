import { Download, Github, Linkedin, Mail } from "lucide-react";
import { googleColors } from "@/data/googleColors";
import Image from "next/image";
import profilePic from "@/assets/profile3.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="início" className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="block">Olá! Eu sou um</span>
                <span style={{ color: googleColors.blue }}>
                  Engenheiro
                </span>{" "}
                <span style={{ color: googleColors.red }}>Informático</span>{" "}
                <span style={{ color: googleColors.yellow }}>e de</span>{" "}
                <span style={{ color: googleColors.green }}>
                  Telecomunicações
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Engenheiro Informático e de Telecomunicações com experiência em
                desenvolvimento de sistemas, design de interfaces, análise de
                dados e segurança da informação. Apaixonado por criar soluções
                digitais inovadoras e centradas no utilizador, sempre buscando
                aprender e aplicar novas tecnologias.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                style={{ backgroundColor: googleColors.blue }}
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                className="px-8 py-3 border-2 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                style={{
                  borderColor: googleColors.red,
                  color: googleColors.red,
                }}
              >
                Ver Projetos
              </button>
            </div>

            <div className="flex gap-6">
              {[
                { icon: Github, color: googleColors.blue },
                { icon: Linkedin, color: googleColors.red },
                { icon: Mail, color: googleColors.green },
              ].map(({ icon: Icon, color }, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="p-3 rounded-full hover:scale-110 transition-transform"
                  style={{ backgroundColor: color + "15", color }}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="w-80 h-80 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${googleColors.blue}15, ${googleColors.red}15, ${googleColors.yellow}15, ${googleColors.green}15)`,
              }}
            >
              <Image
                src={profilePic}
                alt="Vitilio Sousa"
                className="rounded-full object-cover"
                width={256}
                height={256}
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 p-3 bg-white rounded-lg shadow-lg">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: googleColors.blue }}
              ></div>
            </div>
            <div className="absolute bottom-20 left-10 p-3 bg-white rounded-lg shadow-lg">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: googleColors.red }}
              ></div>
            </div>
            <div className="absolute top-32 left-0 p-3 bg-white rounded-lg shadow-lg">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: googleColors.yellow }}
              ></div>
            </div>
            <div className="absolute bottom-10 right-20 p-3 bg-white rounded-lg shadow-lg">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: googleColors.green }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
