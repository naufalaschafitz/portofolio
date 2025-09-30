import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-950 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center text-gray-400">
        {/* Ikon Sosial Media */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/username-anda" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/username-anda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/username-anda" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>
        {/* Copyright */}
        <p>&copy; {currentYear} Naufal. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;