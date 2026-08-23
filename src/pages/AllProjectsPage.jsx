import { useState, useEffect } from 'react'
import projects from '../data/projects'
import { ProjectCard } from '../components/Projects'
import CaseStudyModal from '../components/CaseStudyModal'
import PageBanner from '../components/PageBanner'
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
      <PageBanner
        eyebrow="Portfolio"
        title="All Projects"
        subtitle="Every web app and website I've built — from job platforms to insurance calculators."
      />

      <div className={`container ${styles.inner}`}>

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
