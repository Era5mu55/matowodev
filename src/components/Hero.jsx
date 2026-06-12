import { useState, useEffect, useRef } from 'react'
import heroData from '../data/hero'
import { useLang } from '../context/LanguageContext'
import { t } from '../data/translations'
import useCountUp from '../utils/useCountUp'
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

function AnimatedStat({ target, suffix, label }) {
  const [display, ref] = useCountUp(target, suffix)
  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.statValue}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Hero() {
  const typedText = useTypewriter()
  const { bio, seoText, cta, available, stats, identity } = heroData
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

          <div className={styles.stats} aria-label="Quick stats">
            {stats.map(({ target, suffix, label }) => (
              <AnimatedStat key={label} target={target} suffix={suffix} label={label} />
            ))}
          </div>

          <p className={styles.seoText}>{seoText}</p>

        </div>

        <div className={styles.imageCol}>
          <img
            src="/images/erasmus.png"
            alt="Erasmus Matowo — Web Developer based in Arusha Tanzania"
            className={styles.photo}
            loading="eager"
          />
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
