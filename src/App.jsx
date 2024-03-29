import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import ParticlesBackground from "./Components/ParticlesBackground";
import React from "react";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App w-full overflow-hidden font-[Roboto] ">
      <ParticlesBackground id="tsparticles" />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
