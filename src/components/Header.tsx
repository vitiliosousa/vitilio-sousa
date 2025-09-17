'use client'
import { useState, useEffect } from "react";
import { X, Menu, Download, ExternalLink } from "lucide-react";
import { googleColors } from "@/data/googleColors";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('início');

  // Detect scroll for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section for highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['início', 'sobre', 'projetos', 'skills', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#início', color: googleColors.blue },
    { name: 'Sobre', href: '#sobre', color: googleColors.red },
    { name: 'Projetos', href: '#projetos', color: googleColors.yellow },
    { name: 'Skills', href: '#skills', color: googleColors.green },
    { name: 'Contacto', href: '#contato', color: googleColors.blue },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Google Colors */}
          <Link 
            href="#início" 
            className="group flex items-center space-x-1 hover:scale-105 transition-transform"
          >
            <div className="text-2xl font-bold tracking-tight">
              <span 
                style={{color: googleColors.yellow}} 
                className="group-hover:scale-110 inline-block transition-transform"
              >
                {"<"}
              </span>
              <span 
                style={{color: googleColors.blue}} 
                className="group-hover:scale-105 inline-block transition-transform"
              >
                Vitilio
              </span>
              <span 
                style={{color: googleColors.red}}
                className="group-hover:scale-105 inline-block transition-transform"
              >
                Sousa
              </span>
              <span 
                style={{color: googleColors.green}}
                className="group-hover:scale-110 inline-block transition-transform"
              >
                {"/>"}
              </span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`relative text-sm px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeSection === item.href.substring(1) ? item.color : 'transparent',
                  ...(activeSection !== item.href.substring(1) && {
                    ':hover': { backgroundColor: item.color + '15' }
                  })
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.href.substring(1)) {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = item.color + '15';
                    target.style.color = item.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.href.substring(1)) {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#374151';
                  }
                }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'white' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <a
              href="/cv-vitilio-sousa.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              style={{ backgroundColor: googleColors.green }}
            >
              <Download size={16} />
              <span className="text-sm">Download CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-full transition-all ${
                isMenuOpen 
                  ? 'bg-red-500 text-white scale-110 shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`flex items-center justify-between p-4 rounded-xl font-semibold transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:scale-105'
                }`}
                style={{
                  backgroundColor: activeSection === item.href.substring(1) 
                    ? item.color 
                    : item.color + '10',
                  border: `2px solid ${item.color}20`
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                <ExternalLink size={16} />
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <a
              href="/cv-vitilio-sousa.pdf"
              download
              className="flex items-center justify-center gap-3 p-4 rounded-xl text-white font-bold shadow-lg hover:scale-105 transition-all mt-4"
              style={{ backgroundColor: googleColors.green }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  ) 
}