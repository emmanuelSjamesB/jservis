import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-custom-img-4 w-full">
      <div className="p-5 text-2xl text-white bg-white-300 bg-opacity-50 rounded-xl w-full max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-shadow-neonyellow">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-4 rounded shadow-neon border transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-shadow-neonblack">Mantenimiento de PC</h3>
              <p className="text-shadow-neonpurple">Reparación y optimización de equipos de escritorio y portátiles.</p>
            </div>
            
            <div className="p-4 border rounded shadow-neon-purple transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-shadow-neongreen">Soporte Técnico</h3>
              <p className="text-shadow-neonpurple">Asistencia remota y presencial para resolver problemas técnicos.</p>
            </div>
            <div className="p-4 border rounded  shadow-neon-blue transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-shadow-neon">Instalación de Redes</h3>
              <p className="text-shadow-neonpurple">Configuración y mantenimiento de redes domésticas y empresariales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
