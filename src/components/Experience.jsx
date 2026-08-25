import { useReveal } from '../hooks/useReveal'
import './Experience.css'

const experience = [
  {
    role: 'Open-Source Software Engineer Intern',
    company: 'CodeDay Labs',
    location: 'Remote',
    date: 'Jun 2026 – Aug 2026',
    bullets: [
      "Proposed integrating a static type checking tool into VulnerableCode's CI pipeline, sparking maintainer discussion around org-wide adoption.",
      "Integrated mypy into VulnerableCode's GitHub Actions CI to incrementally enforce type safety on a large open-source Python codebase.",
      'Increased static analysis coverage by 24% by targeting high-leverage base classes, cascading type safety to dozens of downstream modules with minimal manual annotation.',
      'Accelerated CI development cycles by configuring Docker and act to simulate, test, and validate GitHub Actions workflows locally.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Sound of Earth',
    location: 'Remote',
    date: 'Jun 2026 – Aug 2026',
    bullets: [
      "Expanded PostgreSQL database schemas by engineering new relational tables and attributes to support partnered farmer's market data for a community-driven platform.",
      "Developed React UI components from Penpot mockups for a kids' game and community platform features.",
    ],
  },
  {
    role: 'Computer Science Tutor',
    company: 'Ohlone Community College',
    location: 'Fremont, CA',
    date: 'Aug 2025 – May 2026',
    bullets: [
      'Delivered targeted academic support to 15+ students weekly across CS-102, CS-116, and CS-124, strengthening core proficiency in C++ programming.',
      'Systematically debugged student code across 100+ sessions, teaching logical troubleshooting, memory management, and pointer mechanics to ensure project completion.',
      'Communicated and taught CS concepts, including OOP principles (polymorphism, encapsulation) and data structures (linked lists, BSTs), to bridge abstract theory with clean C++ implementation.',
    ],
  },
]

function Experience() {
  const [ref, inView] = useReveal()

  return (
    <section id="experience" className={`experience reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03</span>
          <h2>Experience</h2>
        </div>
        <div className="exp__list">
          {experience.map((job, i) => (
            <div className="exp__item" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">{job.role}</h3>
                  <p className="exp__company">{job.company} · {job.location}</p>
                </div>
                <span className="exp__date">{job.date}</span>
              </div>
              <ul className="exp__bullets">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
