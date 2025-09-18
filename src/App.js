import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import React from "react";
import Herosection from "./components/Herosection";
import Projects from "./components/projet";
import Carrousels from "./components/Carrousel";
import Navbars from "./components/layouts/Navbar";
import Footer from "./components/layouts/footer";
import About from "./components/About";
import Acceuil from "./components/Acceuil";
import Apropos from "./components/Apropos";
import InfiniteLogoSlider from "./components/InfiniteLogoSlider";



function App() {
  return (
      <>
      
      <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/About" element={<Apropos />} />
        <Route path="/Contact" element={<Apropos />} />
        
      </Routes>
      <InfiniteLogoSlider />
      <Footer />
    </Router>
      
      
      
    </>
  );
}

export default App;
