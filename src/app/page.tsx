
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import { googleColors} from '@/data/googleColors';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>      
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
};
