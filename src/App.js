import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'
import TypeWriterEffect from 'react-typewriter-effect'
import About2 from './components/About2'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
