import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'
import { ProjectCard } from '../components/Projects'
import CaseStudyModal from '../components/CaseStudyModal'
import styles from '../styles/AllProjectsPage.module.css'

export default function AllProjectsPage() {
  const [activeStudy, setActiveStudy] = useState(null)

  useEffect(() => {
    document.title = 'All Projects | Matowo Dev — Tanzania'
    const metaDesc = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Browse all web apps and websites built by Erasmus Matowo — job platforms, hiring tools, property rentals, financial calculators, and more.')
    if (canonical) canonical.setAttribute('href', 'https://matowodev.com/projects')
    return () => {
      if (metaDesc) metaDesc.setAttribute('content', 'Erasmus Matowo is a professional web developer based in Arusha, Tanzania. Specialising in web apps, business websites, e-commerce, landing pages and blogs for startups across Tanzania, Kenya, Uganda and East Africa. From TSH 400,000.')
      if (canonical) canonical.setAttribute('href', 'https://matowodev.com/')
    }
  }, [])

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>

        <header className={styles.pageHeader}>
          <Link to="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>
          <span className={styles.eyebrow}>Portfolio</span>
          <h1 className={styles.heading}>All Projects</h1>
          <p className={styles.sub}>
            Every web app and website I&apos;ve built — from job platforms to insurance calculators.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={() => setActiveStudy(project)}
            />
          ))}
        </div>

      </div>

      {activeStudy && (
        <CaseStudyModal
          project={activeStudy}
          onClose={() => setActiveStudy(null)}
        />
      )}
    </div>
  )
}
