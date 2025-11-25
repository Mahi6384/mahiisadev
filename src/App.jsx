import React from "react";
import AboutMe from "./pages/AboutMe";
import Navbar from "./pages/Navbar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import MahiCoder from "./components/Mahicoder";

function App() {
  return (
    <div className="min-h-screen bg-[#130f18] text-slate-300 selection:bg-pink-500/30 ">
      {/* <MahiCoder /> */}
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
      <Footer />
    </div>
  );
}

export default App;
