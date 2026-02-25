import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo / name */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 dark:text-gray-200">
                <span className="font-bold">Amandeep</span>
              </a>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Home</a>
              <a href="#about" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#projects" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <a href="#contact" className="py-5 px-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Contact</a>
            </div>
          </div>
          {/* secondary nav */}
          <div className="flex items-center space-x-3">
            <a href="https://github.com/Amanking0124" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin size={20} />
            </a>
            {/* mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setOpen(!open)}>
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
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
        <div className="md:hidden bg-white dark:bg-gray-800">
          <a href="#home" className="block py-2 px-4 text-sm">Home</a>
          <a href="#about" className="block py-2 px-4 text-sm">About</a>
          <a href="#projects" className="block py-2 px-4 text-sm">Projects</a>
          <a href="#contact" className="block py-2 px-4 text-sm">Contact</a>
        </div>
      )}
    </nav>
  );
}
