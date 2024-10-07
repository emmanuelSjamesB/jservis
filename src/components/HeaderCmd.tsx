import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center h-screen  bg-black w-screen sm:w-full md:w-1/2">
      <div className="p-5 text-3xl text-green-500 bg-black bg-opacity-50 rounded-xl w-screen  mx-auto font-mono">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Servicio de Mantenimiento de PC y Redes</h1>
          <p className="text-lg mb-8">Soluciones rápidas y efectivas para tus necesidades tecnológicas.</p>
          <a href="#contact" className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">Contáctanos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
