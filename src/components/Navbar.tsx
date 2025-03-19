import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg">
      <div className="px-6 mx-auto max-w-5xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white">
            OSINT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/tools"
              className={`text-sm font-medium transition-colors ${
                isActive('/tools') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Outils
            </Link>
            <Link
              to="/investigation"
              className={`text-sm font-medium transition-colors ${
                isActive('/investigation') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Investigation
            </Link>
            <Link
              to="/security"
              className={`text-sm font-medium transition-colors ${
                isActive('/security') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Sécurité
            </Link>
            <Link
              to="/ethic"
              className={`text-sm font-medium transition-colors ${
                isActive('/ethic') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Ethique
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6">
            <div className="flex flex-col space-y-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/tools"
                className={`text-sm font-medium transition-colors ${
                  isActive('/tools') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Outils
              </Link>
              <Link
                to="/investigation"
                className={`text-sm font-medium transition-colors ${
                  isActive('/investigation') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Investigation
              </Link>
              <Link
                to="/security"
                className={`text-sm font-medium transition-colors ${
                  isActive('/security') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Sécurité
              </Link>
              <Link
                to="/ethic"
                className={`text-sm font-medium transition-colors ${
                  isActive('/ethic') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Ethique
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;