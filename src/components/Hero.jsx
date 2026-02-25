// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // hero section animation

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center"
      >
        Hi, I'm Amandeep 👋
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-lg md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-xl"
      >
        I'm a developer building responsive, accessible, and delightful user interfaces using modern web technologies.
      </motion.p>
      <a
        href="#projects"
        className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors"
      >
        See My Work
      </a>
    </section>
  );
}
