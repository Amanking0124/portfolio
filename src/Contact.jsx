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
    <section className="p-10 max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Get in Touch
      </motion.h2>

      <form onSubmit={sendEmail} className="space-y-4">
        <input
          name="user_name"
          placeholder="Name"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="user_email"
          placeholder="Email"
          type="email"
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 w-full rounded h-32"
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Send
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="mb-2">You can also find me on:</p>
        <SocialButtons className="justify-center" />
      </div>
    </section>
  );
}
