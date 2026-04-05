import './Footer.css'

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com'  },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter',  href: 'https://twitter.com'  },
]

const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <p>© 2026 Rico D. Gervero. All rights reserved.</p>
      {/* Scroll to top */}
      <button
        className="footer__scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  )
}