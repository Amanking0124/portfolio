import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialButtons({ className = "" }) {
  return (
    <div className={`flex space-x-4 ${className}`}> 
      <a
        href="https://github.com/Amanking0124"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/amandeep-singh-ab56ba291/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
