import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Nav from './components/nav'
import Projects from './components/projects'
import Resume from './components/resume'
import React from 'react'

const App = () => {
  const [projects, setProjects] = useState([])

  const getProjects = () => {
    axios.get('http://localhost:8000/api/projects')
    .then( (response) => {
      console.log(response.data)
    })
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects projects={projects}/>
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}

export default App