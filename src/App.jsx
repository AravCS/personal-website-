import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './styles/global.css'

function App() {
  return (
    <>
      <StarField />
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
