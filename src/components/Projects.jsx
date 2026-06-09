import projects from '../data/projects'
import styles from '../styles/Projects.module.css'

function ProjectCard({ title, description, tags, image, liveUrl, repoUrl }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={`${title} screenshot`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <ul className={styles.tags} aria-label="Technologies used">
          {tags.map(tag => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.links}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.linkPrimary}
            >
              Live site
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.linkGhost}
            >
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h2 className={styles.heading}>Recent Work</h2>
          <p className={styles.sub}>
            A selection of projects I&apos;ve built for clients and personal use.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  )
}
