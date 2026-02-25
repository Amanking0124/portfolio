import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  // read user's theme preference from localStorage (or fallback to system)
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-theme");
      if (saved) return saved === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  return (
    <div className={
      dark
        ? "dark bg-black text-white flex flex-col min-h-screen"
        : "bg-white text-black flex flex-col min-h-screen"
    }>
      <Navbar />

      {/* theme toggle remains accessible */}
      <button
        onClick={() => {
          setDark((prev) => {
            const next = !prev;
            localStorage.setItem("preferred-theme", next ? "dark" : "light");
            return next;
          });
        }}
        className="fixed top-5 right-5 bg-gray-800 text-white px-4 py-2 rounded z-50"
      >
        {dark ? "Light" : "Dark"}
      </button>

      <main className="flex-grow">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
