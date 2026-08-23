import { Link } from 'react-router-dom'
import styles from '../styles/PageBanner.module.css'

export default function PageBanner({ eyebrow, title, subtitle, backLabel = 'Back to home', backTo = '/' }) {
  return (
    <div className={styles.banner}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.divider} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Link to={backTo} className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {backLabel}
        </Link>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  )
}
