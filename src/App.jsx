import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";

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
    <Router>
      <div className={
        dark
          ? "dark bg-black text-white flex flex-col min-h-screen"
          : "bg-white text-black flex flex-col min-h-screen"
      }>
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

        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Layout>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
