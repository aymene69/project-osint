import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-400' : 'text-gray-300 hover:text-white';
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm py-4 border-b border-white/10">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">Guide OSINT</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors duration-300 ${isActive('/')}`}>
              Accueil
            </Link>
            <Link to="/outils" className={`transition-colors duration-300 ${isActive('/outils')}`}>
              Outils
            </Link>
            <Link to="/enquete" className={`transition-colors duration-300 ${isActive('/enquete')}`}>
              Enquête
            </Link>
            <Link to="/securite" className={`transition-colors duration-300 ${isActive('/securite')}`}>
              Sécurité
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar