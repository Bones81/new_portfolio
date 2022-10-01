// import { useEffect } from 'react'
// import axios from 'axios'

import icon from './favicon.ico'
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Nav from './components/nav'
import Projects from './components/projects'
import Resume from './components/resume'
import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects/>
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}

export default App