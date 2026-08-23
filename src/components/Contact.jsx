import { useState, useEffect } from 'react'
import { services } from '../data/services'
import { useLang } from '../context/LanguageContext'
import { t } from '../data/translations'
import styles from '../styles/Contact.module.css'

const INITIAL_FORM = { name: '', email: '', projectType: '', message: '' }

const SERVICE_OPTIONS = services.flatMap(({ category, items }) =>
  items.map(item => ({ value: item, label: `${item} (${category})` }))
)

export default function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    function handlePreselect(e) {
      setForm(prev => ({ ...prev, projectType: e.detail.service, message: e.detail.message }))
    }
    window.addEventListener('preselect-service', handlePreselect)
    return () => window.removeEventListener('preselect-service', handlePreselect)
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: form.name,
          email: form.email,
          projectType: form.projectType || 'Not specified',
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'
  const { lang } = useLang()

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.info}>
          <span className="eyebrow">{t.sections.contactEyebrow[lang]}</span>
          <h2 className={styles.heading}>{t.sections.contactHeading[lang]}</h2>
          <p className={styles.sub}>{t.sections.contactSub[lang]}</p>

          <ul className={styles.details}>
            <li className={styles.detail}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:info@matowodev.com" className={styles.detailLink}>
                info@matowodev.com
              </a>
            </li>
            <li className={styles.detail}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Response within 1 business day</span>
            </li>
          </ul>
        </div>

        <div className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.successBox} role="status">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I&apos;ll be in touch shortly.</p>
              <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                Send another
              </button>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="projectType" className={styles.label}>
                  Project type <span className={styles.optional}>(optional)</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className={`${styles.input} ${styles.select}`}
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a project type…</option>
                  {SERVICE_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMsg} role="alert">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSending}
                aria-busy={isSending}
              >
                {isSending ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    {t.sections.contactSending[lang]}
                  </>
                ) : (
                  t.sections.contactSubmit[lang]
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
