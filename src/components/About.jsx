import { useReveal } from '../hooks/useReveal'
import './About.css'

function About() {
  const [ref, inView] = useReveal()

  return (
    <section id="about" className={`about reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01</span>
          <h2>About</h2>
        </div>
        <div className="about__body">
          <p>
            I'm an incoming 3rd-year Computer Science student at UC Berkeley. I enjoy building things for the web,
            and currently exploring/learning more about full stack development and AI/Ml.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
