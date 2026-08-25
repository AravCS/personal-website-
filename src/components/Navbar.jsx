import { useState } from 'react'
import './Navbar.css'

const links = ['about', 'education', 'experience', 'skills', 'projects', 'contact']

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <span className="navbar__logo">Arav Shah</span>

        {/* Desktop links */}
        <ul className="navbar__links">
          {links.map(link => (
            <li key={link}><a href={`#${link}`}>{link}</a></li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`navbar__hamburger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'open' : ''}`}>
        <div className="navbar__drawer-inner">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={closeMenu}
              style={{ transitionDelay: open ? `${i * 0.05}s` : '0s' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
