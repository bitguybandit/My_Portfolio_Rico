import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './Projectcard'
import './Projects.css'

export default function Projects() {
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.projects__animate').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`
            el.classList.add('fade-up')
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered =
    filter === 'featured'
      ? projects.filter(p => p.featured)
      : projects

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        
        <div className="projects__header">
          <div>
            <h2 className="section-title projects__animate">
               My <span>Projects</span>
            </h2>
            <hr className="section-divider projects__animate" />
          </div>

          <div className="projects__filters projects__animate">
            {['all', 'featured'].map(f => (
              <button
                key={f}
                className={`projects__filter-btn ${filter === f ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
             { /*  {f === 'all' ? 'All Projects' : '★ Featured'}*/}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="projects__footer projects__animate">
          <p className="projects__footer-text">
            More projects on GitHub →
          </p>
          <a
            href="https://github.com/bitguybandit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}