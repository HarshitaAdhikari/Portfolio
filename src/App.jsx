import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;