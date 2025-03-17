import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative z-0">
        <Hero />
      </div>
      <div className="relative z-10 bg-white">11a
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;