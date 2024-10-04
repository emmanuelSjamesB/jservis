import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';



const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init('q6ziyJHHAmVKFmMGh');
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_jtzc24k', 'contact_form', form.current)
        .then(() => {
          //console.log('SUCCESS!');
          alert('Correo enviado exitosamente');
        }, (error) => {
          //console.log('FAILED...', error);
          alert('Error al enviar el correo');
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <input type="hidden" name="contact_number" value="697483" />
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
        <input type="text" name="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" name="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
        <textarea name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="flex items-center justify-between">
        <input type="submit" value="Enviar" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
      </div>
    </form>
  );
};

export default ContactForm;
