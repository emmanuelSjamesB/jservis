import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const whatsapp = import.meta.env.VITE_WHATSAPP;
const facebook = import.meta.env.VITE_FACEBOOK;
const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center p-4 border-t border-green-500 bg-black text-green-500 relative bottom-0 w-full">
      <div className="ml-2">
        jservis copyride
      </div>
      <div className="flex space-x-4 mr-2">
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300">
          <FaWhatsapp size={24} />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300">
          <FaFacebook size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
