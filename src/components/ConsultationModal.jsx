import { useState, useEffect } from 'react'
import styles from '../styles/ConsultationModal.module.css'

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!open) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

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
        body: JSON.stringify({ type: 'consultation', ...form }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => setStatus('idle'), 300)
  }

  const isSending = status === 'sending'

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Book a free consultation"
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {status === 'success' ? (
          <div className={styles.successBox} role="status">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Request sent!</h3>
            <p>Thanks for reaching out — I&apos;ll reply within one business day.</p>
            <button className={styles.resetBtn} onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className={styles.eyebrow}>Free Consultation</span>
            <h2 className={styles.heading}>Book a free consultation</h2>
            <p className={styles.sub}>
              Tell me a bit about your project and I&apos;ll reply within one business day.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="modal-name" className={styles.label}>Name</label>
                <input
                  id="modal-name"
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
                <label htmlFor="modal-email" className={styles.label}>Email</label>
                <input
                  id="modal-email"
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

              <div className={styles.field}>
                <label htmlFor="modal-message" className={styles.label}>Message</label>
                <textarea
                  id="modal-message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell me about your project, timeline, and budget…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
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
                    Sending…
                  </>
                ) : (
                  'Send Request'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
