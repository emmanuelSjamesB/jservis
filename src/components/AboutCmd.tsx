import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const AboutSection: React.FC = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ['Soluciones tecnológicas de alta calidad.'],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
        pauseFor: 2000,
      });
    }
  }, []);
//  Somos un equipo de profesionales dedicados a 
  return (
    <section id="about" className="py-16 w-screen bg-black text-green-500">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-ibm">Sobre Nosotros</h2>
        <div className="text-lg flex justify-center items-center">
          <p className="inline-block font-mono">
          
          </p>
          <span ref={typewriterRef} className="inline-block font-mono"></span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
