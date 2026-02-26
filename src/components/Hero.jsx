// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // hero section animation

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Animated background with gradient */}
      <div className="absolute inset-0 gradient-shift" style={{
        backgroundImage: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "200% 200%",
      }}></div>

      {/* Animated blobs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{ animationDelay: "4s" }}></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl px-4 text-center text-white"
      >
        {/* animate each letter from random offscreen position into place */}
        {/** build variants outside render to avoid re-creating? ok here for simplicity **/}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg inline-block">
          {"Amandeep Singh".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              custom={i}
              variants={{
                hidden: (index) => ({
                  opacity: 0,
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                  rotate: (Math.random() - 0.5) * 360,
                  scale: 0,
                }),
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: i * 0.08,
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-xl md:text-2xl font-semibold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          IoT Enthusiast | Full Stack Developer
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md opacity-95"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Building innovative solutions at the intersection of web development and IoT. Passionate about creating responsive applications and smart hardware projects.
        </motion.p>
        <div className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-colors"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
