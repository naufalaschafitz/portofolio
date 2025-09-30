// components/HeroSection.js

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-950 z-0" />
      
      {/* Di sini perubahannya: 'lg:' menjadi 'md:' */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        
        {/* Kolom Kiri: Foto Profil */}
        <div className="flex justify-center md:col-span-2">
          <Image
            src="/images/profile.jpg"
            alt="Foto Profil"
            width={300}
            height={300}
            className="rounded-full border-8 border-gray-800 shadow-lg"
          />
        </div>

        {/* Kolom Kanan: Teks & CTA */}
        <div className="text-center md:text-left md:col-span-3">
          <h1 className="text-4xl sm:text-4xl font-bold text-white leading-tight">
            NAUFAL MAKARIM ASCHAFITZ
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mt-4 font-medium">
            Fresh Information System Graduate | Data Enthusiast
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="bg-sky-500 text-white font-bold px-6 py-3 rounded-full hover:bg-sky-600 transition-transform duration-300 hover:scale-105"
            >
              View My Projects
            </a>
            <a 
              href="/Naufal_Aschafitz_CV.pdf"
              target="_blank" 
              className="border border-gray-400 text-gray-300 font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a href="https://www.linkedin.com/in/naufalmakarimaschafitz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/naufalaschafitz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="https://www.instagram.com/naufalaschafitz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
              <FaInstagram size={28} />
            </a>
            <a href="mailto:naufalaschafitz@gmail.com" className="text-gray-300 hover:text-red-400 transition-colors">
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;