import { useEffect, useState } from 'react'
import ricoImg from '../images/rico.jpg'
import './Hero.css'

export default function Hero() {

  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)


  const titles = [
    "Full-Stack Developer", 
    "Web Developer", 
    "UI/UX Designer"
  ]
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 120)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, titles])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">

      <div className="container hero__content">
        <div className="hero__text">
          <h1 className="hero__name fade-up" style={{ animationDelay: '0.25s' }}>
            Hi, I'm <br/>
            <span className="hero__name-highlight">
              Rico D. Gervero
            </span>
          </h1>
          <p className="hero__title fade-up" style={{ animationDelay: '0.4s' }}>
            {text}
            <span className="hero__cursor">|</span>
          </p>
          <p className="hero__desc fade-up" style={{ animationDelay: '0.55s' }}>
            BS Information Technology student at Western Institute of Technology, 
            passionate about web development and software technologies.
          </p>
          <div className="hero__cta fade-up" style={{ animationDelay: '0.7s' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
              View Projects →
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero__image-wrapper fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="hero__img-container">

            <img src={ricoImg} alt="Rico D. Gervero" className="hero__img" />
          
            <div className="hero__img-ring" />
          </div>
        </div>
      </div>
      <div className="hero__orb" aria-hidden="true" />
    </section>
  )
}