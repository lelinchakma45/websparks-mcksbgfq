import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-indigo-600">WebSparks</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-indigo-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
