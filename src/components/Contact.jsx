import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const links = [
  { label: 'Email', href: 'mailto:arav.shah@berkeley.edu', display: 'arav.shah@berkeley.edu' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arav-shah', display: 'linkedin.com/in/arav-shah' },
  { label: 'GitHub', href: 'https://github.com/AravCS', display: 'github.com/AravCS' },
]

function Contact() {
  const [ref, inView] = useReveal()

  return (
    <section id="contact" className={`contact reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06</span>
          <h2>Contact</h2>
        </div>
        <ul className="contact__list">
          {links.map((link, i) => (
            <li key={link.label} className="contact__item" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="contact__label">{link.label}</span>
              <a href={link.href} target="_blank" rel="noreferrer" className="contact__link">
                {link.display}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="contact__arrow">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <p className="contact__footer">
          © {new Date().getFullYear()} Arav Shah
        </p>
      </div>
    </section>
  )
}

export default Contact
