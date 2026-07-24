import { Link } from 'react-router-dom'
import { services } from '../data/services'
import styles from '../styles/Services.module.css'

const WHATSAPP_URL = `https://wa.me/255786000551?text=${encodeURIComponent(
  "Hi Erasmus, I'd like to get a quote for a project."
)}`

const ICONS = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 9h18M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  mobile: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  hosting: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 7h.01M7 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  graphics: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.8.7-1.5 1.5-1.5H16a4 4 0 004-4c0-5.5-4.5-10-8-10z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor"/>
      <circle cx="9.5" cy="7.5" r="1" fill="currentColor"/>
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor"/>
    </svg>
  ),
}

function CategoryCard({ category, icon, tagline, items }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconBadge} aria-hidden="true">
        {ICONS[icon]}
      </div>

      <h3 className={styles.cardHeading}>{category}</h3>
      <p className={styles.tagline}>{tagline}</p>

      <ul className={styles.included}>
        {items.map(item => (
          <li key={item} className={styles.includedItem}>
            <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="rgba(16,185,129,0.15)"/>
              <path d="M5 8l2 2 4-4" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Services</span>
          <h2 className={styles.heading}>What I Can Build For You</h2>
          <p className={styles.sub}>
            From concept to launch — websites, apps, hosting, and branding, all under one roof.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map(service => (
            <CategoryCard key={service.category} {...service} />
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/quote" className={styles.btnQuote}>
            Get a Free Quote
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.btnWhatsApp}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
