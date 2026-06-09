import { useState } from 'react'
import { services } from '../data/services'
import styles from '../styles/Services.module.css'

const TIER_META = {
  Starter:      { color: 'var(--color-muted)',  label: 'Starter' },
  Professional: { color: 'var(--color-accent)', label: 'Professional' },
  Enterprise:   { color: '#a78bfa',             label: 'Enterprise' },
  'Add-ons':    { color: 'var(--color-cta)',    label: 'Add-ons' },
}

function ServiceCard({ name, price, usd, desc, included, timeline, whatsapp_msg, isOpen, onToggle }) {
  const waUrl = `https://wa.me/255753437557?text=${encodeURIComponent(whatsapp_msg)}`

  function handleGetQuote(e) {
    e.stopPropagation()
    window.dispatchEvent(new CustomEvent('preselect-service', { detail: { service: name, message: whatsapp_msg } }))
  }

  return (
    <article
      className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
      onClick={onToggle}
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle() } }}
      aria-expanded={isOpen}
    >
      <div className={styles.itemTop}>
        <h3 className={styles.itemName}>{name}</h3>
        <div className={styles.pricing}>
          <span className={styles.priceTsh}>{price}</span>
          <span className={styles.priceUsd}>{usd}</span>
        </div>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

      <p className={styles.itemDesc}>{desc}</p>

      <div className={`${styles.expandWrap} ${isOpen ? styles.expandOpen : ''}`}>
        <div className={styles.expandInner}>
          <div className={styles.expandContent}>
            <ul className={styles.included}>
              {included.map(feature => (
                <li key={feature} className={styles.includedItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="8" fill="rgba(16,185,129,0.15)"/>
                    <path d="M5 8l2 2 4-4" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className={styles.timelineRow}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Est. delivery:</span>
              <strong className={styles.timelineValue}>{timeline}</strong>
            </div>

            <div className={styles.cardActions} onClick={e => e.stopPropagation()}>
              <a
                href="#contact"
                className={styles.btnQuote}
                onClick={handleGetQuote}
              >
                Get a Quote
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.btnWhatsApp}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  const [openKey, setOpenKey] = useState(null)

  function toggle(key) {
    setOpenKey(prev => prev === key ? null : key)
  }

  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.heading}>Services &amp; Rates</h2>
          <p className={styles.sub}>
            Transparent pricing in Tanzanian Shillings with USD equivalents.
            All projects include a free consultation.
          </p>
        </header>

        <div className={styles.tiers}>
          {services.map(({ tier, items }) => {
            const meta = TIER_META[tier] ?? { color: 'var(--color-muted)', label: tier }
            return (
              <div key={tier} className={styles.tier}>
                <div className={styles.tierLabel} style={{ '--tier-color': meta.color }}>
                  <span className={styles.tierDot} aria-hidden="true" />
                  {meta.label}
                </div>
                <div className={styles.grid}>
                  {items.map((item, i) => {
                    const key = `${tier}-${i}`
                    return (
                      <ServiceCard
                        key={item.name}
                        {...item}
                        isOpen={openKey === key}
                        onToggle={() => toggle(key)}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <p className={styles.note}>
          Prices are starting rates. Final quote depends on scope.{' '}
          <a href="#contact" className={styles.noteLink}>Get a free estimate &rarr;</a>
        </p>

      </div>
    </section>
  )
}
