"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Projects', path: '#projects' },
    { title: 'Education', path: '#education' },
    { title: 'Volunteer', path: '#volunteer' }, // <-- Link baru ditambahkan
    { title: 'Contact', path: 'mailto:naufalaschafitz@gmail.com' }, // <-- Link diubah
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm shadow-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Nama Anda di Kiri */}
        <a href="#" className="text-xl font-bold text-white hover:text-sky-400 transition-colors">
          Naufal
        </a>
         {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.title} href={link.path} className="text-gray-300 hover:text-sky-400 transition-colors">
              {link.title}
            </a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
        {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden px-6 pb-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.path} 
              className="text-gray-300 hover:text-sky-400 text-center py-2"
              onClick={() => setIsOpen(false)} // Menutup menu setelah link diklik
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;