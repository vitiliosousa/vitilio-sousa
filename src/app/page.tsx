import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header/>      
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Process/>
      <Contact/>
      <Footer/>
    </div>
  );
};
