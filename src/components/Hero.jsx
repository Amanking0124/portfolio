// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // hero section animation

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Amandeep Singh
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
          IoT Enthusiast | Full Stack Developer
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Building innovative solutions at the intersection of web development and IoT. Passionate about creating responsive applications and smart hardware projects.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
