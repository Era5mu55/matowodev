import testimonials from '../data/testimonials'
import styles from '../styles/Testimonials.module.css'

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ quote, name, role, avatar, rating }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <Stars count={rating} />
        <svg
          className={styles.quoteIcon}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.333 21.333C7.467 21.333 6 20.8 4.933 19.733 3.867 18.667 3.333 17.2 3.333 15.333c0-1.955.64-3.733 1.92-5.333C6.533 8.4 8.267 7.2 10.453 6.4l1.214 1.867c-1.493.533-2.667 1.28-3.52 2.24-.853.96-1.28 1.92-1.28 2.88 0 .32.107.587.32.8.213.213.48.32.8.32h1.013c.96 0 1.76.347 2.4 1.04.64.693.96 1.52.96 2.48 0 1.013-.347 1.84-1.04 2.48-.693.64-1.573.96-2.64.96h-.347zm12.8 0c-1.867 0-3.333-.533-4.4-1.6-1.067-1.067-1.6-2.533-1.6-4.4 0-1.955.64-3.733 1.92-5.333C19.333 8.4 21.067 7.2 23.253 6.4l1.214 1.867c-1.493.533-2.667 1.28-3.52 2.24-.853.96-1.28 1.92-1.28 2.88 0 .32.107.587.32.8.213.213.48.32.8.32h1.013c.96 0 1.76.347 2.4 1.04.64.693.96 1.52.96 2.48 0 1.013-.347 1.84-1.04 2.48-.693.64-1.573.96-2.64.96h-.347z"/>
        </svg>
      </div>

      <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>

      <footer className={styles.author}>
        <div className={styles.avatarWrap} aria-hidden="true">
          <img
            src={avatar}
            alt=""
            className={styles.avatar}
            loading="lazy"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <span className={styles.initials}>{initials}</span>
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </footer>
    </article>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Social proof</span>
          <h2 className={styles.heading}>What Clients Say</h2>
          <p className={styles.sub}>
            Don&apos;t take my word for it — here&apos;s what people I&apos;ve worked with have to say.
          </p>
        </header>

        <div className={styles.grid}>
          {testimonials.map(t => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

      </div>
    </section>
  )
}
