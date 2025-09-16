import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User, LogIn, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white rounded-lg p-2">
              <Search size={24} />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Teach<span className="text-yellow-500">Connect</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/mentors" className="text-gray-700 hover:text-blue-600 transition-colors">
              Trouver un mentor
            </Link>
            <Link to="/become-mentor" className="text-gray-700 hover:text-blue-600 transition-colors">
              Devenir mentor
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tarifs
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/connexion" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              <LogIn size={18} />
              <span>Connexion</span>
            </Link>
            <Link to="/inscription" className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <UserPlus size={18} />
              <span>S'inscrire</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/mentors" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Trouver un mentor
              </Link>
              <Link to="/become-mentor" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Devenir mentor
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Tarifs
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/connexion" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  <LogIn size={18} />
                  <span>Connexion</span>
                </Link>
                <Link to="/inscription" className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  <UserPlus size={18} />
                  <span>S'inscrire</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;