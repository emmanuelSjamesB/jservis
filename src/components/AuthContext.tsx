import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

interface AuthContextProps {
  user: User | null;
  logout: () => Promise<void>; // Añadir la firma de la función logout
}

const AuthContext = createContext<AuthContextProps>({ user: null, logout: async () => {} });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra sesión usando Firebase
      setUser(null); // Opcional: actualizar el estado local
    } catch (error) {
      console.error('Error logging out:', error); // Manejo de errores
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
