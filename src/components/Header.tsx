'use client'
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { googleColors } from "@/data/googleColors";
import Link from "next/link";

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span style={{color: googleColors.yellow}}>{"<"}</span>
              <span style={{color: googleColors.blue}}>Vitilio</span>
              <span style={{color: googleColors.red}}>Sousa</span>
              <span style={{color: googleColors.green}}>{"/>"}</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Início', 'Sobre', 'Projetos', 'Skills', 'Contato'].map((item, idx) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:opacity-80 transition-opacity font-medium"
                  style={{color: Object.values(googleColors)[idx % 4]}}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              {['Início', 'Sobre', 'Projetos', 'Skills', 'Contato'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    ) 
}