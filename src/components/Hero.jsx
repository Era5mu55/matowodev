import { useState, useEffect, useRef } from 'react'
import heroData from '../data/hero'
import { useLang } from '../context/LanguageContext'
import { t } from '../data/translations'
import styles from '../styles/Hero.module.css'

const ROLES = heroData.roles

function useTypewriter() {
  const [text, setText] = useState('')
  const wordIdx  = useRef(0)
  const charIdx  = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timer
    function tick() {
      const word = ROLES[wordIdx.current]
      if (!deleting.current) {
        charIdx.current++
        setText(word.slice(0, charIdx.current))
        if (charIdx.current === word.length) {
          deleting.current = true
          timer = setTimeout(tick, 1800)
        } else {
          timer = setTimeout(tick, 80)
        }
      } else {
        charIdx.current--
        setText(word.slice(0, charIdx.current))
        if (charIdx.current === 0) {
          deleting.current = false
          wordIdx.current = (wordIdx.current + 1) % ROLES.length
          timer = setTimeout(tick, 400)
        } else {
          timer = setTimeout(tick, 40)
        }
      }
    }
    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, [])

  return text
}

export default function Hero() {
  const typedText = useTypewriter()
  const { bio, seoText, cta, available, identity } = heroData
  const { lang } = useLang()

  return (
    <section className={styles.hero} id="home" aria-label="Introduction">
      <div className={styles.bg} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.cols}>
        <div className={styles.content}>

          {available && (
            <span className={styles.badge}>
              <span className={styles.dot} aria-hidden="true" />
              {t.hero.badge[lang]}
            </span>
          )}

          <p className={styles.identity}>
            {(() => {
              const [name, rest] = identity.split(' — ')
              return <><strong className={styles.identityName}>{name}</strong>{' — '}{rest}</>
            })()}
          </p>

          <h1 className={styles.headline} aria-live="polite" aria-atomic="true">
            {t.hero.headline[lang]}{' '}
            <span className={styles.typed}>{typedText}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </h1>

          <p className={styles.subtitle}>{t.hero.subtitle[lang]}</p>

          <p className={styles.bio}>{t.hero.bio[lang]}</p>

          <div className={styles.actions}>
            <a href={cta.primary.href} className={styles.btnPrimary}>
              {t.hero.viewWork[lang]}
            </a>
            <a href={cta.secondary.href} className={styles.btnCta}>
              {t.hero.getQuote[lang]}
            </a>
            <a href={cta.tertiary.href} className={styles.btnOutline}>
              {t.hero.letsTalk[lang]}
            </a>
          </div>

          <p className={styles.seoText}>{seoText}</p>

        </div>

        <div className={styles.sideCol}>
          <div className={styles.photoGlow} aria-hidden="true" />
          <div className={styles.ctaCard}>
            <span className={styles.ctaCardEyebrow}>Free &amp; instant</span>
            <h3 className={styles.ctaCardHeading}>Get a project estimate in 60 seconds</h3>
            <p className={styles.ctaCardText}>
              Answer a few quick questions and see a live price — no calls, no back-and-forth.
            </p>
            <a href={cta.secondary.href} className={styles.ctaCardBtn}>
              {t.hero.getQuote[lang]}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <ul className={styles.ctaCardList}>
              <li>Live pricing in USD, TZS, KES &amp; UGX</li>
              <li>No obligation</li>
              <li>Reply within 1 business day</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      <a href="#work" className={styles.scrollIndicator} aria-label="Scroll to work">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  )
}
