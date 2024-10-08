import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LaptopIcon from '../icons/LaptopIcon';
import '../index.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-black p-4 border-b-2 z-40 border-dashed border-green-500' : 'bg-gradient-to-r z-40 from-gray-900 via-blue-800 to-blue-500 p-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LaptopIcon />
          <div className={`hidden md:block text-lg font-bold ml-2 ${isScrolled ? 'text-green-500 font-mono' : 'text-white text-shadow-neonblack'}`}>JServis</div>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#services" className={`hover:text-green-300 font-mono ${isScrolled ? 'text-green-500' : 'text-white hover:text-shadow-neon2'}`}>Servicios</a>
          <a href="#about" className={`hover:text-green-300 font-mono ${isScrolled ? 'text-green-500' : 'text-white hover:text-shadow-neon2'}`}>Nosotros</a>
          <a href="#contact" className={`hover:text-green-300 font-mono ${isScrolled ? 'text-green-500' : 'text-white hover:text-shadow-neon2'}`}>Contacto</a>
        </div>
        <div className="md:hidden pe-4">
          <button onClick={toggleSidebar} className={`${isScrolled ? 'text-green-500' : 'text-white'}`}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`fixed top-0 right-0 w-64 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out ${isScrolled ? 'bg-black' : 'bg-gradient-to-r from-gray-900 via-blue-800 to-blue-500'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className={`${isScrolled ? 'text-green-500' : 'text-white'}`}>
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-4">
          <a href="#services" className={`text-lg font-mono ${isScrolled ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Servicios</a>
          <a href="#about" className={`text-lg font-mono ${isScrolled ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Nosotros</a>
          <a href="#contact" className={`text-lg font-mono ${isScrolled ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


