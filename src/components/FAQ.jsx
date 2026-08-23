import { useState } from 'react'
import { faqs } from '../data/faq'
import { useLang } from '../context/LanguageContext'
import { t } from '../data/translations'
import styles from '../styles/FAQ.module.css'

function FAQItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <span className={styles.question}>{question}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${id}`}
        className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}
        role="region"
      >
        <div className={styles.answerInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const { lang } = useLang()

  function handleToggle(id) {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className="eyebrow">{t.sections.faqEyebrow[lang]}</span>
          <h2 className={styles.heading}>{t.sections.faqHeading[lang]}</h2>
        </div>

        <div className={styles.list}>
          {faqs.map(faq => (
            <FAQItem
              key={faq.id}
              {...faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
