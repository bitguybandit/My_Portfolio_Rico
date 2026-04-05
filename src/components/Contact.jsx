import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SOCIAL_LINKS = [
  { 
    label: 'GitHub', 
    href: 'https://github.com/bitguybandit', 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    )
  },
  { 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/rico-gervero-17590036b/', 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9H7.06v11.45zM5.31 7.47c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05 1.13 0 2.05.92 2.05 2.05 0 1.13-.92 2.05-2.05 2.05zm15.14 12.98h-3.5v-5.56c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.66h-3.5V9h3.36v1.55h.05c.47-.89 1.61-1.83 3.31-1.83 3.54 0 4.19 2.33 4.19 5.36v6.37z"/>
      </svg>
    ) 
  },
  { label: 'Email', href: 'mailto:ricodgervero@email.com', icon: '✉' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.contact__animate').forEach((el, i) => {
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

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      title: "Portfolio Inquiry"
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('error');
    });
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="section-label contact__animate"></p>
          <h2 className="section-title contact__animate">
            Let's <span>Work</span> Together
          </h2>
          <hr className="section-divider contact__animate" />

          <p className="contact__desc contact__animate">
            Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
          </p>

          <div className="contact__socials contact__animate">
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                aria-label={s.label}
              >
                <span className="contact__social-icon">{s.icon}</span>
                <span className="contact__social-label">{s.label}</span>
              </a>
            ))}
          </div>

          <a href="mailto:ricodgervero@email.com" className="contact__email contact__animate">
            ricodgervero@email.com ↗
          </a>
        </div>

        <form
          className="contact__form contact__animate"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="contact__field">
            <label className="contact__label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact__input"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__input"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact__input contact__textarea"
              placeholder="Your message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
            disabled={status === 'sending' || status === 'sent'}
          >
            {status === 'idle'    && 'Send Message →'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent'    && '✓ Message Sent!'}
            {status === 'error'   && 'Try Again'}
          </button>

          {status === 'sent' && (
            <p className="contact__success">
              Thanks! I'll get back to you within 24 hours.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}