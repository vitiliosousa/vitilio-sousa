import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header/>
      <SideNav/>      
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
