import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className=" flex items-center justify-center h-screen bg-black w-screen ">
      <div className="p-5 text-2xl text-green-500 bg-black  rounded-xl w-screen  mx-auto font-mono">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 rounded border border-green-500 transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Mantenimiento de PC</h3>
              <p>Reparación y optimización de equipos de escritorio y portátiles.</p>
            </div>
            <div className="p-4 border rounded border-green-500 transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Soporte Técnico</h3>
              <p>Asistencia remota y presencial para resolver problemas técnicos.</p>
            </div>
            <div className="p-4 border rounded border-green-500 transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Instalación de Redes</h3>
              <p>Configuración y mantenimiento de redes domésticas y empresariales.</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default ServicesSection;
