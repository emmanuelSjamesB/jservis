import './App.css';

import React from 'react';
import Navbar from './components/NavCmd';
import ContactForm from './components/ContactForm';
import Header from './components/HeaderCmd';
import ServicesSection from './components/ServicioCmd';
import AboutSection from './components/AboutCmd';
import VideoHeader from './components/VideoHeader';
import GaleriaCmd from './components/GaleriaCmd';
import CodeMatrix from './components/CodeMatrix';
import Formulario from './components/Formulario';



const App: React.FC = () => {
  return (
    <>      
      <Navbar />
      <VideoHeader />
      <Header />                  
      <ServicesSection />      
      <AboutSection /> 
      <GaleriaCmd />     
      <ContactForm /> 
      <CodeMatrix />
      <Formulario />   
    </>
  );
};

export default App;

