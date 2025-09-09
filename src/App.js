import React from "react";
import Herosection from "./components/Herosection";
import Projects from "./components/projet";
import Carrousels from "./components/Carrousel";
import Navbars from "./components/layouts/Navbar";
import Footer from "./components/layouts/footer";
import About from "./components/About";

function App() {
  return (
      <>
      <Navbars />
      <Carrousels />
      <Projects />
      <About />
      <Footer />
      
      
    </>
  );
}

export default App;
