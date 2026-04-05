import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('home')

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={e => handleLinkClick(e, '#home')}
        >
          Rico D. Gervero
        </a>

        {/* Desktop nav */}
    <nav className="navbar__links" aria-label="Primary navigation">
        {NAV_LINKS.map(link => (
        <a
        key={link.href}
        href={link.href}
        className={`navbar__link ${active === link.href.slice(1) ? 'navbar__link--active' : ''}`}
        onClick={e => handleLinkClick(e, link.href)}
        >
        {link.label}
        </a>
        ))}

        {/* Hidden for future use:
        <a
          href="/resume.pdf"
          className="btn btn-outline navbar__resume"
          target="_blank"
          rel="noopener noreferrer">
          Resume ↗
        </a>
        */}
    </nav>

        {/* Hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__drawer-link ${active === link.href.slice(1) ? 'navbar__drawer-link--active' : ''}`}
            onClick={e => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem', alignSelf: 'flex-start' }}
        >
          Resume ↗
        </a>
      </div>
    </header>
  )
}