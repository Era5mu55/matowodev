import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

const NAV_LINKS = [
  { label: 'Work',     href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#" className={styles.logo} onClick={closeMenu}>
          Matowo <span className={styles.logoAccent}>Dev</span>
        </a>

        <ul
          className={`${styles.links} ${menuOpen ? styles.open : ''}`}
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
          <li className={styles.ctaMobileItem}>
            <a href="#contact" className={styles.cta} onClick={closeMenu}>
              Hire Me
            </a>
          </li>
        </ul>

        <a href="#contact" className={`${styles.cta} ${styles.ctaDesktop}`}>
          Hire Me
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
