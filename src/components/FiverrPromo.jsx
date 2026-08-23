import styles from '../styles/FiverrPromo.module.css'

const FIVERR_URL = 'https://www.fiverr.com/s/aexa74Q'

export default function FiverrPromo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.content}>
            <span className={styles.eyebrow}>Also on Fiverr</span>
            <h2 className={styles.heading}>Prefer to hire through Fiverr?</h2>
            <p className={styles.sub}>
              Browse my gig, message me, and pay securely through Fiverr&apos;s buyer
              protection — same work, same process, just through their platform.
            </p>
            <a
              href={FIVERR_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.btn}
            >
              View My Fiverr Gig
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className={styles.badge} aria-hidden="true">
            <span className={styles.badgeMark}>fiverr<span className={styles.badgeDot}>.</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
