import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* logo / name */}
            <div>
              <a href="#home" className="flex items-center py-5 px-2 text-gray-900 dark:text-white font-bold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span>AS</span>
              </a>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</a>
              <a href="#about" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">About</a>
              <a href="#experience" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Experience</a>
              <a href="#skills" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Skills</a>
              <a href="#projects" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Projects</a>
              <a href="#certifications" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Certs</a>
              <a href="#contact" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Contact</a>
            </div>
          </div>
          {/* secondary nav */}
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Amanking0124" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/amandeep-singh-ab56ba291/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin size={22} />
            </a>
            {/* mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setOpen(!open)} className="text-gray-700 dark:text-gray-200">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <a href="#home" onClick={() => setOpen(false)} className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">About</a>
          <a href="#experience" onClick={() => setOpen(false)} className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Experience</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Projects</a>
          <a href="#certifications" onClick={() => setOpen(false)} className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Certifications</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}
