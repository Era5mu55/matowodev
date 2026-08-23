import { useState } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'
import CaseStudyModal from './CaseStudyModal'
import styles from '../styles/Projects.module.css'

const HOME_LIMIT = 6

export function ProjectCard({ project, onViewCaseStudy }) {
  const { title, description, tags, image, imageAlt, liveUrl, repoUrl, caseStudy } = project
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={imageAlt || `${title} — project built by Matowo Dev`}
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
          {caseStudy && (
            <button onClick={onViewCaseStudy} className={styles.linkGhost}>
              Case Study →
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeStudy, setActiveStudy] = useState(null)
  const visibleProjects = projects.slice(0, HOME_LIMIT)

  return (
    <section id="work" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <header className={styles.header}>
          <span className="eyebrow">Portfolio</span>
          <h2 className={styles.heading}>Recent Work</h2>
          <p className={styles.sub}>
            A selection of projects I&apos;ve built for clients and personal use.
          </p>
        </header>

        <div className={styles.grid}>
          {visibleProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={() => setActiveStudy(project)}
            />
          ))}
        </div>

        {projects.length > HOME_LIMIT && (
          <div className={styles.cta}>
            <Link to="/projects" className={styles.ctaBtn}>
              See all {projects.length} projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}

      </div>

      {activeStudy && (
        <CaseStudyModal
          project={activeStudy}
          onClose={() => setActiveStudy(null)}
        />
      )}
    </section>
  )
}
