import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LaptopIcon from '../icons/LaptopIcon';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import '../index.css';
import { AuthProvider, useAuth } from './AuthContext';
import Dashboard from './Dashboard';

const AuthStatus: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-white">
        {user ? `Hello, ${user.email}` : 'Not logged in'}
      </span>
      {user ? (
        <button onClick={handleLogout} className="text-white hover:text-green-300 font-mono">
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" className="hover:text-green-300 font-mono text-white">
            Login
          </Link>
          <Link to="/register" className="hover:text-green-300 font-mono text-white">
            Register
          </Link>
        </>
      )}
    </div>
  );
};
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
const RouterLink: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(window.scrollY > 0);
      }, 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <nav className={`sticky top-0  w-screen transition-opacity duration-150 ${isVisible ? 'bg-black p-4 border-b-2 z-40 border-dashed border-green-500 opacity-100' : 'bg-gradient-to-r z-40 from-gray-900 via-blue-800 to-blue-500 p-4 mb-0 opacity-100'}`}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <LaptopIcon />
              <Link to="/" className={`hover:text-green-300 font-mono ${isVisible ? 'text-green-500' : 'text-white hover:text-shadow-neon2'}`}>JServis</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <AuthStatus />
            </div>
            <div className="md:hidden pe-4">
              <button onClick={toggleSidebar} className={`${isVisible ? 'text-green-500' : 'text-white'}`}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
          <div className={`fixed top-0 right-0 w-64 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-150 ease-in-out ${isVisible ? 'bg-black' : 'bg-gradient-to-r from-gray-900 via-blue-800 to-blue-500'}`}>
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className={`${isVisible ? 'text-green-500' : 'text-white'}`}>
                <FaTimes size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center mt-8 space-y-4">
              <Link to="/" className={`text-lg font-mono ${isVisible ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Home</Link>
              <Link to="/dashboard" className={`text-lg font-mono ${isVisible ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Dashboard</Link>
              <Link to="/login" className={`text-lg font-mono ${isVisible ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Login</Link>
              <Link to="/register" className={`text-lg font-mono ${isVisible ? 'text-green-500 hover:text-green-300' : 'text-white hover:text-shadow-neon2'}`} onClick={toggleSidebar}>Register</Link>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto mt-10">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default RouterLink;


