import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // navbar only visible on small screens; sidebar handles larger
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 md:hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo / name */}
            <div>
              <Link to="/" className="flex items-center py-5 px-2 text-gray-700 dark:text-gray-200">
                <span className="font-bold">Amandeep</span>
              </Link>
            </div>

          </div>
          {/* secondary nav */}
          <div className="flex items-center space-x-3">
            <a href="https://github.com/Amanking0124" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/amandeep-singh-ab56ba291/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
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
          <Link to="/" className="block py-2 px-4 text-sm">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-sm">About</Link>
          <Link to="/projects" className="block py-2 px-4 text-sm">Projects</Link>
          <Link to="/skills" className="block py-2 px-4 text-sm">Skills</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm">Contact</Link>
          <Link to="/resume" className="block py-2 px-4 text-sm">Resume</Link>
        </div>
      )}
    </nav>
  );
}
