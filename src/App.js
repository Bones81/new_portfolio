import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Nav from './components/nav'
import Projects from './components/projects'
import Resume from './components/resume'

const App = () => {

  return (
    <>
      <h1>App component - Nate Codes</h1>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App