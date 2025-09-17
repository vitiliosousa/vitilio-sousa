'use client';
import { googleColors } from "@/data/googleColors";
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contato' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/vitiliosousa',
      color: googleColors.blue,
      description: 'Meus projetos e código'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/vitilio-sousa',
      color: googleColors.red,
      description: 'Perfil profissional'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:vitiliodesousa@gmail.com',
      color: googleColors.green,
      description: 'Entre em contato'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: googleColors.blue }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full" style={{ backgroundColor: googleColors.red }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full" style={{ backgroundColor: googleColors.yellow }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full" style={{ backgroundColor: googleColors.green }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 group cursor-pointer" onClick={scrollToTop}>
              <span 
                style={{ color: googleColors.yellow }} 
                className="group-hover:scale-110 inline-block transition-transform"
              >
                {"<"}
              </span>
              <span 
                style={{ color: googleColors.blue }} 
                className="group-hover:scale-105 inline-block transition-transform"
              >
                Vitilio
              </span>
              <span 
                style={{ color: googleColors.red }}
                className="group-hover:scale-105 inline-block transition-transform"
              >
                Sousa
              </span>
              <span 
                style={{ color: googleColors.green }}
                className="group-hover:scale-110 inline-block transition-transform"
              >
                {"/>"}
              </span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Desenvolvedor <span style={{ color: googleColors.blue }}>Full-Stack</span> apaixonado 
              por criar soluções digitais inovadoras e centradas no usuário.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} style={{ color: googleColors.yellow }} />
                <span>Maputo, Moçambique</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} style={{ color: googleColors.green }} />
                <a 
                  href="mailto:vitilio@example.com" 
                  className="hover:text-white transition-colors"
                  style={{ color: googleColors.green }}
                >
                  vitiliodesousa@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ color: googleColors.blue }}
            >
              Navegação
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = Object.values(googleColors)[idx % 4];
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#d1d5db';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ color: googleColors.red }}
            >
              Conecte-se
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-800 transition-all hover:scale-105"
                  >
                    <div 
                      className="p-2 rounded-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: social.color + '20' }}
                    >
                      <IconComponent size={20} style={{ color: social.color }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{social.name}</div>
                      <div className="text-sm text-gray-400">{social.description}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>© {currentYear} VitilioSousa. Feito com</span>
              <Heart size={16} style={{ color: googleColors.red }} className="animate-pulse" />
              <span>e com todos os direitos reservados 😎.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                Desenvolvido com{" "}
                <span style={{ color: googleColors.blue }}>React</span> & {" "}
                <span style={{ color: googleColors.green }}>Next.js</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-3 rounded-full hover:scale-110 transition-all shadow-lg hover:shadow-xl"
                style={{ backgroundColor: googleColors.blue }}
                title="Voltar ao topo"
              >
                <ArrowUp size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}