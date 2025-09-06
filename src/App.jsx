import React from "react";
import AboutMe from "./pages/AboutMe";
import Navbar from "./pages/Navbar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#130f18] text-slate-300 selection:bg-pink-500/30">
      <Navbar />
      <AboutMe />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <Contact />
      <footer className="border-t border-white/5 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} — Design and Developed by Mahi Jain.
      </footer>
    </div>
  );
}

export default App;
