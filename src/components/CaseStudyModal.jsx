import { useEffect } from 'react'
import styles from '../styles/CaseStudyModal.module.css'

export default function CaseStudyModal({ project, onClose }) {
  const { title, caseStudy } = project

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} case study`}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close case study">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Case Study</span>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.duration}>{caseStudy.duration}</span>
        </div>

        <div className={styles.body}>
          <div className={styles.block}>
            <h3 className={styles.blockHeading}>The Problem</h3>
            <p className={styles.text}>{caseStudy.problem}</p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockHeading}>The Solution</h3>
            <p className={styles.text}>{caseStudy.solution}</p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockHeading}>Results</h3>
            <ul className={styles.results}>
              {caseStudy.results.map((r, i) => (
                <li key={i} className={styles.result}>
                  <span className={styles.checkmark} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="var(--color-cta)" opacity="0.15"/>
                      <path d="M4 7l2 2 4-4" stroke="var(--color-cta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.techRow}>
            {caseStudy.tech.map(t => (
              <span key={t} className={styles.techTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
