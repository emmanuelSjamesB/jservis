import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { useAuth } from './AuthContext'; // Importa el contexto de autenticación
import Header from './HeaderCmd';
import ServicesSection from './ServicioCmd';
import AboutSection from './AboutCmd';
import GaleriaCmd from './GaleriaCmd';
import Formulario from './Formulario';
import SocialBar from './SocialBar';
import Footer from './Footer';
import CodeMatrix from './CodeMatrix';

const Home: React.FC = () => {
    const { user } = useAuth(); // Obtén el usuario del contexto

    return (
        <>
            {/* Botón para ir a Dashboard, visible solo si hay un usuario autenticado */}
            {user && (
                <div className="flex justify-center my-4 ">
                    <Link to="/dashboard">
                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                            Ir a Dashboard
                        </button>
                    </Link>
                </div>
            )}
            <CodeMatrix />
            <Header />
            <SocialBar />
            <ServicesSection />
            <AboutSection />
            <GaleriaCmd />
            <Formulario />
            <Footer />
        </>
    );
};

export default Home;
