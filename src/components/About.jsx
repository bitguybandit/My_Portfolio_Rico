import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.about__animate').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.15}s`
            el.classList.add('fade-up')
            el.style.opacity = '1'
          })
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title about__animate" style={{ marginBottom: '3rem' }}>
  About <span>Me</span>
</h2>
    <div className="about__grid about__animate"></div>

        <div className="about__grid">
          <div className="about__left">
            <div className="about__info-block about__animate">
              <div className="about__icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <div className="about__info-content">
                <h3>Who I Am</h3>
                <p>
                  I am a BS Information Technology student at Western Institute of Technology. I’m not just focused on academics—I’m focused on mastering how systems actually work. I take on leadership roles naturally, leading projects with a balance of technical direction, decision-making, and execution. I value clarity, efficiency, and building things that don’t just function, but solve real problems.
                </p>
              </div>
            </div>

            <div className="about__info-block about__animate">
              <div className="about__icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div className="about__info-content">
                <h3>My Passion</h3>
                <p>
                  I am deeply interested in building web-based systems that create real-world impact. I don’t just want to code—I want to understand the full picture: from frontend experience to backend logic and data flow. I’m currently developing projects like Localis, a location-based community alert platform, which reflects my goal of using technology to solve practical, everyday problem.
                </p>
              </div>
            </div>
            {/*
            <div className="about__animate" style={{ marginTop: '1rem' }}>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline about__btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                View CV
              </a>
            </div>*/}
            
          </div> 
          <div className="about__right about__animate">
            <div className="about__card">
              
              <div className="about__card-header">
                <div className="about__icon-wrap about__icon-wrap--solid">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                </div>
                <h3>Education</h3>
              </div>

              <div className="about__card-body">

                <div className="about__list-item">
                  <svg className="about__list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  <div>
                    <h4 className="about__highlight">Bachelor of Science in Information Technology</h4>
                    <p>Western Institute of Technology</p>
                    <span className="about__date">🗓  2024 -  2028</span>
                  </div>
                </div>

                

                {/* future usew for capstone
                <div className="about__list-item">
                  <svg className="about__list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  <div>
                    <p className="about_capstone">
                      
                    </p>
                  </div>
                </div>*/}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}