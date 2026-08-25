import { useReveal } from '../hooks/useReveal'
import './Education.css'

/* Each entry has: school, degree, location, date, gpa (optional), courses (optional) */
const education = [
  {
    school: 'University of California, Berkeley',
    degree: 'B.A. in Computer Science',
    location: 'Berkeley, CA',
    date: 'Aug 2026 – May 2028',
    note: 'Expected Graduation: May 2028',
  },
  {
    school: 'Ohlone Community College',
    degree: 'A.S. in Computer Science & Mathematics',
    location: 'Fremont, CA',
    date: 'Aug 2023 – May 2026',
    gpa: '4.0 GPA',
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Discrete Structures',
      'Linear Algebra',
      'Differential Equations',
      'Calculus I, II, III',
      'Physics I & II',
      'Assembly Language Programming',
    ],
    note: 'Activities: NASA Community College Aerospace Scholars (NCAS)',
  },
]

function Education() {
  const [ref, inView] = useReveal()

  return (
    <section id="education" className={`education reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02</span>
          <h2>Education</h2>
        </div>
        <div className="edu__list">
          {education.map((edu, i) => (
            <div className="edu__item" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="edu__header">
                <div>
                  <h3 className="edu__school">{edu.school}</h3>
                  <p className="edu__degree">{edu.degree}</p>
                </div>
                <div className="edu__meta">
                  <span className="edu__date">{edu.date}</span>
                  {edu.gpa && <span className="edu__gpa">{edu.gpa}</span>}
                </div>
              </div>
              {edu.courses && (
                <div className="edu__courses">
                  {edu.courses.map(c => (
                    <span className="edu__tag" key={c}>{c}</span>
                  ))}
                </div>
              )}
              {edu.note && <p className="edu__note">{edu.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
