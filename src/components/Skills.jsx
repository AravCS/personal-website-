import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'ARMv7 Assembly'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vitest'],
  },
  {
    label: 'Tools & Technologies',
    skills: ['Git', 'GitHub Actions', 'PostgreSQL', 'mypy'],
  },
]

function Skills() {
  const [ref, inView] = useReveal()

  return (
    <section id="skills" className={`skills reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04</span>
          <h2>Skills</h2>
        </div>
        <div className="skills__groups">
          {skillGroups.map(group => (
            <div className="skills__group" key={group.label}>
              <p className="skills__group-label">{group.label}</p>
              <div className="skills__pills">
                {group.skills.map((skill, i) => (
                  <span className="skills__pill" key={skill} style={{ transitionDelay: `${i * 0.04}s` }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
