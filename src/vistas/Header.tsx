import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500
 w-full">
      <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl w-full max-w-screen-xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 mix-blend-overlay">Servicio de Mantenimiento de PC y Redes</h1>
          <p className="text-lg mb-8 mix-blend-overlay">Soluciones rápidas y efectivas para tus necesidades tecnológicas.</p>
          <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded mix-blend-lighten">Contáctanos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
