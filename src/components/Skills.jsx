import { useEffect, useRef } from 'react'
import { skills } from '../data/skills'
import './Skills.css'

function CategoryIcon({ type, color }) {
  const props = {
    width: '22', height: '22', viewBox: '0 0 24 24',
    fill: 'none', stroke: color,
    strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round',
  }
  switch (type) {
    case 'frontend':
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    case 'backend':
      return <svg {...props}><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="6" cy="5.5" r="1" fill={color} stroke="none"/><circle cx="6" cy="12.5" r="1" fill={color} stroke="none"/><circle cx="6" cy="19.5" r="1" fill={color} stroke="none"/></svg>
    case 'code':
      return <svg {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="4" x2="12" y2="20" strokeDasharray="2 2"/></svg>
    case 'frameworks':
      return <svg {...props}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    case 'database':
      return <svg {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>
    case 'tools':
      return <svg {...props}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
    default: return null
  }
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skills__animate').forEach((el, i) => {
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

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label skills__animate"></p>
        <h2 className="section-title skills__animate">My <span>Skill</span> Set</h2>
        <hr className="section-divider skills__animate" />

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__card skills__animate">
              <div className="skills__card-header">
                <div
                  className="skills__icon-wrap"
                  style={{
                    background: `${group.color}18`,
                    border: `1px solid ${group.color}33`,
                  }}
                >
                  <CategoryIcon type={group.icon} color={group.color} />
                </div>
                <h3 className="skills__category">{group.category}</h3>
              </div>

              <div className="skills__divider" style={{ background: group.color }} />

              <ul className="skills__list">
                {group.items.map(skill => (
                  <li key={skill} className="skills__badge" style={{ '--badge-color': group.color }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}