import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
        <img
          src={profilePic}
          alt="Amandeep Singh"
          className="rounded-full w-32 h-32 object-cover"
        />
        <h1 className="text-2xl font-bold text-center mt-4">Amandeep Singh</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          IoT & Arduino Enthusiast
        </p>
        <nav className="mt-8 w-full">
          <ul className="space-y-2 text-center">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-blue-500 hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/skills" className="text-blue-500 hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-blue-500 hover:underline">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow bg-white dark:bg-black p-6">
        {children}
      </main>
    </div>
  );
}
