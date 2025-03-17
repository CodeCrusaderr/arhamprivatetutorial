import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-[#0a192f] bg-opacity-90'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GraduationCap className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Arham Private Tutorials
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'} transition-colors`}>Home</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'} transition-colors`}>About</a>
            <a href="#services" className={`${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'} transition-colors`}>Services</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'} transition-colors`}>Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-gray-600' : 'text-white'}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2 ${isScrolled ? 'bg-white shadow-lg' : 'bg-[#0a192f] bg-opacity-90'
              }`}>
              <a href="#home" className={`block px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'}`}>Home</a>
              <a href="#about" className={`block px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'}`}>About</a>
              <a href="#services" className={`block px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'}`}>Services</a>
              <a href="#contact" className={`block px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'}`}>Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;