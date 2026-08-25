import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const projects = [
  {
    title: 'File Compression / Decompression System',
    description:
      'Utilizes the Huffman algorithm in C++ to compress large text files by ~45–50% of their original size. Built with various data structures, such as priority queue, binary trees, and hash tables, etc. Supports lossless decompression to restore original files with full data integrity.',
    tags: ['C++', 'OOP', 'Data Structures'],
    repo: 'https://github.com/AravCS/Huffman-Encoding',
  },
  {
    title: 'MoodReel',
    description:
      'A full-stack movie/TV recommendation app that translates natural-language mood input into structured search parameters via the Anthropic API, then surfaces personalized results using the TMDB API. Covered by route-validation and mocked-API tests in a GitHub Actions CI pipeline, deployed with React on Vercel and Express on Render.',
    tags: ['React.js', 'Express.js', 'Anthropic API', 'TMDB API'],
    repo: 'https://github.com/AravCS/MoodReel',
  },
]

function Projects() {
  const [ref, inView] = useReveal()

  return (
    <section id="projects" className={`projects reveal ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05</span>
          <h2>Projects</h2>
        </div>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <div className="project__card" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project__top">
                <h3 className="project__title">{project.title}</h3>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  {/* Arrow icon */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <p className="project__desc">{project.description}</p>
              <div className="project__tags">
                {project.tags.map(tag => (
                  <span className="project__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
