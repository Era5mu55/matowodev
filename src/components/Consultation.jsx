import styles from '../styles/Consultation.module.css'

const EMAIL = 'info@matowodev.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Project consultation request')}`

export default function Consultation() {
  return (
    <section id="consultation" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />

          <span className={styles.eyebrow}>Free Consultation</span>
          <h2 className={styles.heading}>Have a project in mind?</h2>
          <p className={styles.sub}>
            Book a free, no-obligation consultation to talk through your idea, timeline, and
            budget — I&apos;ll reply within one business day with clear next steps.
          </p>

          <a href={MAILTO} className={styles.btn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Book a Free Consultation
          </a>

          <ul className={styles.meta}>
            <li className={styles.metaItem}>
              <span className={styles.dot} aria-hidden="true" />
              No obligation
            </li>
            <li className={styles.metaItem}>
              <span className={styles.dot} aria-hidden="true" />
              Response within 1 business day
            </li>
            <li className={styles.metaItem}>
              <span className={styles.dot} aria-hidden="true" />
              {EMAIL}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
