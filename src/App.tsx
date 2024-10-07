import './App.css';

import React from 'react';
import Navbar from './components/NavCmd';
import Header from './components/HeaderCmd';
import ServicesSection from './components/ServicioCmd';
import AboutSection from './components/AboutCmd';
import VideoHeader from './components/VideoHeader';
import GaleriaCmd from './components/GaleriaCmd';

import Formulario from './components/Formulario';
import SocialBar from './components/SocialBar';



const App: React.FC = () => {
  return (
    <>      
      <Navbar />
      <VideoHeader />
      <Header />                  
      <ServicesSection />      
      <AboutSection /> 
      <GaleriaCmd />     
      <Formulario />
      <SocialBar /> 
      
         
    </>
  );
};

export default App;

