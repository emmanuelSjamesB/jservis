import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const AboutSection: React.FC = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ['a ofrecer soluciones tecnológicas de alta calidad.'],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
        pauseFor: 2000,
      });
    }
  }, []);

  return (
    <section id="about" className="py-16 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 animate-gradient">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Sobre Nosotros</h2>
        <div className="text-lg">
          <p className="inline-block">
            Somos un equipo de profesionales dedicados 
          </p>
          <span ref={typewriterRef} className="inline-block"></span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;




