import emailjs from "emailjs-com";
import SocialButtons from "./components/SocialButtons";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // used for animating headings

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_rxikuhi",
      "template_789012345678901234567890",
      e.target,
      "YOUR_PUBLIC_KEY"
    );

    alert("Message Sent 🚀");
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-white via-pink-50 to-red-50 dark:from-gray-900 dark:via-pink-900 dark:to-red-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-300 dark:bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "3s" }}></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Have a question or want to work together? Let me know!
        </p>

        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          <div>
            <input
              name="user_email"
              placeholder="Your Email"
              type="email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg h-40 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">Or connect with me on:</p>
          <SocialButtons className="justify-center" />
        </div>
      </div>
    </section>
  );
}
