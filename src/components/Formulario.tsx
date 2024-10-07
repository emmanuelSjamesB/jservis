import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';



const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_FORM, form.current)
        .then(() => {
          
          alert('Correo enviado exitosamente');
        }, (_error) => {
          
          alert('Error al enviar el correo');
        });
    }
  };

  return (
    <section id="contact" className="py-16 bg-black w-screen font-sans">
        <div className="container mx-auto text-center">
          
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-black text-green-500 p-8 rounded shadow-lg font-mono">
    <h2 className="text-3xl font-bold mb-6 font-sans">Contáctanos</h2>
      <input type="hidden" name="contact_number" value="697483" />
      <div className="mb-4">
        <label className="block  text-green-500 text-sm font-bold mb-2">Nombre</label>
        <input type="text" name="user_name" className=" bg-black border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label className="block text-green-500 text-sm font-bold mb-2">Email</label>
        <input type="email" name="user_email" className=" bg-black border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label className="block text-green-500 text-sm font-bold mb-2">Mensaje</label>
        <textarea name="message" className=" bg-black border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className=" items-center justify-between">
        
        <button type="submit" value="Enviar"className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
      </div>
    </form>
    </div>
    </section>
  );
};
//<input type="submit" value="Enviar" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
export default ContactForm;
