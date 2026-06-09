import clients from '../data/clients'
import styles from '../styles/Clients.module.css'

function initials(name) {
  const parts = name.split(' ')
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function ClientCard({ name, project, description, links }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.avatar} aria-hidden="true">
          <span className={styles.avatarInitials}>{initials(name)}</span>
        </div>
        <div className={styles.identity}>
          <span className={styles.clientName}>{name}</span>
          <span className={styles.projectName}>{project}</span>
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.links}>
        {links.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.link}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11L11 2M11 2H5M11 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default function Clients() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Currently Building For</span>
          <h2 className={styles.heading}>Clients I&apos;m working with</h2>
          <p className={styles.sub}>
            Live projects I&apos;m actively developing right now.
          </p>
        </header>

        <div className={styles.grid}>
          {clients.map(client => (
            <ClientCard key={client.id} {...client} />
          ))}
        </div>

      </div>
    </section>
  )
}
