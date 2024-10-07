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
    <section id="contact" className="py-16 bg-black w-screen font-sans">
        <div className="container mx-auto text-center">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-black text-green-500 p-8 rounded shadow-lg font-mono">
      <h2 className="text-3xl font-bold mb-6 font-sans">Contáctanos</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-green-500">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-green-500 bg-black text-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-green-500">Teléfono</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border border-green-500 bg-black text-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
    </form>
    </div>
      </section>
  );
};

export default ContactForm;

