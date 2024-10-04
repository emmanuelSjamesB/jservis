import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold mb-6 text-white">Contáctanos</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-lg">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-white text-lg">Teléfono</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">Enviar</button>
    </form>
        
  );
};

export default ContactForm;
