import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LaptopIcon from '../icons/LaptopIcon';
import '../index.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.scrollY > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full transition-opacity duration-300 ${isVisible ? 'bg-black p-4 border-b-2 z-30 border-dashed border-green-500 opacity-100' : 'bg-gradient-to-r z-40 from-gray-900 via-blue-800 to-blue-500 p-4 opacity-100'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LaptopIcon />
          <div className={`hidden md:block text-lg font-bold ml-2 ${isVisible ? 'text-green-500 font-mono' : 'text-white text-shadow-neonblack'}`}>JServis</div>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#services" className={`hover:text-green-300 font-mono ${isVisible ? 'text-green-500' : 'text-white hover:text-shadow-neon2'}`}>Servicios</a>
          <a href="#about" className={`hover:text-green-300 font-mono ${isVisible ? 'text-green-500' : 'text-white hover:text-shadow-neon2'}`}>Nosotros</a>
          <a href="#contact" className={`hover:text-green-300 font-mono ${isVisible ? 'text-green-500' : 'text-white hover:text-shadow-neon2'}`}>Contacto</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className={`${isVisible ? 'text-green-500' : 'text-white'}`}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`fixed top-0 right-0 w-64 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out ${isVisible ? 'bg-black' : 'bg-gradient-to-r from-gray-900 via-blue-800 to-blue-500'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className={`${isVisible ? 'text-green-500' : 'text-white'}`}>
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-4">
          <a href="#services" className={`text-lg font-mono ${isVisible ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Servicios</a>
          <a href="#about" className={`text-lg font-mono ${isVisible ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Nosotros</a>
          <a href="#contact" className={`text-lg font-mono ${isVisible ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

