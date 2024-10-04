
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LaptopIcon from '../icons/LaptopIcon';
import '../index.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-800 to-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LaptopIcon />
          <div className="hidden md:block text-white text-shadow-neonblack text-lg font-bold ml-2">JServis</div>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#services" className="text-white hover:text-shadow-neon2">Servicios</a>
          <a href="#about" className="text-white hover:text-shadow-neon2">Nosotros</a>
          <a href="#contact" className="text-white hover:text-shadow-neon2">Contacto</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-gray-900 via-blue-800 to-blue-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-4">
          <a href="#services" className="text-white text-lg hover:text-shadow-neon" onClick={toggleSidebar}>Servicios</a>
          <a href="#about" className="text-white text-lg hover:text-shadow-neon" onClick={toggleSidebar}>Nosotros</a>
          <a href="#contact" className="text-white text-lg hover:text-shadow-neon" onClick={toggleSidebar}>Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
