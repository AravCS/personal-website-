import { useTypewriter } from '../hooks/useTypewriter'
import './Hero.css'

function Hero() {
  const { outputs, activeIndex, isDone } = useTypewriter(["Hi, I'm", 'Arav Shah'], {
    speed: 55,
    startDelay: 300,
    pauseBetween: 200,
  })

  return (
    <section className="hero">
      <div className="hero__orbit" aria-hidden="true">
        <span className="hero__ring hero__ring--one" />
        <span className="hero__ring hero__ring--two" />
        <span className="hero__planet" />
      </div>
      <div className="container">
        <p className="hero__greeting">
          <span className="hero__prompt">&gt;</span> {outputs[0]}
          {activeIndex === 0 && <span className="hero__cursor" />}
        </p>
        <h1 className="hero__name">
          <span className="text-gradient">{outputs[1]}</span>
          {activeIndex === 1 && <span className="hero__cursor hero__cursor--name" />}
        </h1>
        <p className={`hero__tagline${isDone ? ' fade-up' : ''}`}>
          CS student at UC Berkeley, passionate about computer science and software engineering.
        </p>
        <div className={`hero__links${isDone ? ' fade-up' : ''}`}>
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
