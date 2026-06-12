import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LanguageContext'
import { t } from '../data/translations'
import styles from '../styles/Navbar.module.css'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()

  const navLinks = [
    { label: t.nav.work[lang],     href: '/#work' },
    { label: t.nav.services[lang], href: '/#services' },
    { label: t.nav.blog[lang],     href: '/blog', isRoute: true },
    { label: t.nav.contact[lang],  href: '/#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="/" className={styles.logo} onClick={closeMenu}>
          Matowo <span className={styles.logoAccent}>Dev</span>
        </a>

        <ul
          className={`${styles.links} ${menuOpen ? styles.open : ''}`}
          role="list"
        >
          {/* Mobile: theme + lang toggles */}
          <li>
            <div className={styles.mobileToggles}>
              <button
                className={styles.iconToggle}
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                className={styles.iconToggle}
                onClick={toggleLang}
                aria-label={`Switch to ${lang === 'en' ? 'Swahili' : 'English'}`}
              >
                {lang === 'en' ? 'SW' : 'EN'}
              </button>
            </div>
          </li>

          {navLinks.map(({ label, href, isRoute }) => (
            <li key={href}>
              {isRoute
                ? <Link to={href} className={styles.link} onClick={closeMenu}>{label}</Link>
                : <a href={href} className={styles.link} onClick={closeMenu}>{label}</a>
              }
            </li>
          ))}

          <li className={styles.ctaMobileItem}>
            <Link to="/quote" className={styles.quoteBtn} onClick={closeMenu}>
              {t.nav.getQuote[lang]}
            </Link>
          </li>
          <li className={styles.ctaMobileItem}>
            <a href="/#contact" className={styles.cta} onClick={closeMenu}>
              {t.nav.hireMe[lang]}
            </a>
          </li>
        </ul>

        <div className={styles.ctaGroup}>
          <button
            className={styles.iconToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={styles.iconToggle}
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'en' ? 'Swahili' : 'English'}`}
          >
            {lang === 'en' ? 'SW' : 'EN'}
          </button>
          <Link to="/quote" className={styles.quoteBtn}>
            {t.nav.getQuote[lang]}
          </Link>
          <a href="/#contact" className={styles.cta}>
            {t.nav.hireMe[lang]}
          </a>
        </div>

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
