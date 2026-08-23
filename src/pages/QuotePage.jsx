import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useExchangeRates, useCurrencyPref, formatPrice } from '../utils/currency'
import { useWhatsAppMessage } from '../context/WhatsAppContext'
import CurrencySwitcher from '../components/CurrencySwitcher'
import PageBanner from '../components/PageBanner'
import styles from '../styles/QuotePage.module.css'

const PROJECT_TYPES = [
  { id: 'landing',              label: 'Landing Page',          baseUsd: 150  },
  { id: 'blog',                 label: 'Blog / WordPress',      baseUsd: 200  },
  { id: 'portfolio',            label: 'Portfolio Website',     baseUsd: 600  },
  { id: 'corporate',            label: 'Business Website',      baseUsd: 750  },
  { id: 'ecommerce-basic',      label: 'E-Commerce (Basic)',    baseUsd: 1200 },
  { id: 'webapp',               label: 'Web Application',       baseUsd: 1700 },
  { id: 'ecommerce-advanced',   label: 'E-Commerce (Advanced)', baseUsd: 1900 },
]

const ADDONS = [
  { id: 'logo',        label: 'Logo Design',            baseUsd: 40 },
  { id: 'hosting',     label: 'Hosting & Domain Setup', baseUsd: 40 },
  { id: 'maintenance', label: 'Monthly Maintenance',    baseUsd: 60, monthly: true },
]

const FREE_PAGES = 5
const PER_EXTRA_PAGE_USD = 20

export default function QuotePage() {
  const [params] = useSearchParams()
  const presel = PROJECT_TYPES.find(p => p.id === params.get('service')) ?? null

  const [selectedType, setSelectedType] = useState(presel)
  const [selectedAddons, setSelectedAddons] = useState([])
  const [pages, setPages] = useState(FREE_PAGES)
  const [urgent, setUrgent] = useState(false)
  const [currency, setCurrency] = useCurrencyPref()
  const { rates, isLive } = useExchangeRates()

  useEffect(() => {
    document.title = 'Get an Instant Website Quote | Matowo Dev — Tanzania'
    const metaDesc = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Get an instant price estimate for your website in seconds. Web apps, business sites, landing pages — with live pricing in USD, TZS, KES and UGX. Based in Arusha, Tanzania.')
    if (canonical) canonical.setAttribute('href', 'https://matowodev.com/quote')
    return () => {
      if (metaDesc) metaDesc.setAttribute('content', 'Erasmus Matowo is a professional web developer based in Arusha, Tanzania. Specialising in web apps, business websites, e-commerce, landing pages and blogs for startups across Tanzania, Kenya, Uganda and East Africa. From TSH 400,000.')
      if (canonical) canonical.setAttribute('href', 'https://matowodev.com/')
    }
  }, [])

  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const baseUsd = selectedType?.baseUsd ?? 0
  const addonsUsd = selectedAddons.reduce((sum, id) => {
    return sum + (ADDONS.find(a => a.id === id)?.baseUsd ?? 0)
  }, 0)
  const monthlyRecurringUsd = selectedAddons.reduce((sum, id) => {
    const a = ADDONS.find(x => x.id === id)
    return a?.monthly ? sum + a.baseUsd : sum
  }, 0)
  const extraPages = Math.max(0, pages - FREE_PAGES)
  const pagesUsd = extraPages * PER_EXTRA_PAGE_USD
  const subtotalUsd = baseUsd + addonsUsd + pagesUsd
  const urgentSurchargeUsd = urgent ? Math.round(subtotalUsd * 0.2) : 0
  const totalUsd = subtotalUsd + urgentSurchargeUsd

  const fp = (usd) => formatPrice(usd, currency, rates)
  const addonLabels = selectedAddons
    .map(id => ADDONS.find(a => a.id === id)?.label)
    .filter(Boolean).join(', ') || 'None'

  function toggleAddon(id) {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  function handleInput(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!selectedType) { setError('Please select a project type first.'); return }
    setSending(true)
    setError('')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quote',
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          projectType: selectedType.label,
          addons: addonLabels,
          pages: String(pages),
          timeline: urgent ? 'Urgent (rush delivery)' : 'Standard',
          currency,
          subtotal: fp(subtotalUsd),
          urgentPremium: urgent ? fp(urgentSurchargeUsd) : 'N/A',
          total: fp(totalUsd),
          monthlyRecurring: monthlyRecurringUsd > 0 ? `${fp(monthlyRecurringUsd)}/mo` : 'None',
          notes: form.notes || 'No additional notes.',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again or reach out via WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  const waLines = selectedType ? [
    "Hi Erasmus! Here's my quote request:",
    '',
    '*PROJECT DETAILS*',
    `Project: ${selectedType.label}`,
    `Add-ons: ${addonLabels}`,
    `Pages: ${pages}`,
    `Timeline: ${urgent ? 'Urgent (rush delivery)' : 'Standard'}`,
    '',
    `*PRICE BREAKDOWN (${currency})*`,
    `Subtotal: ${fp(subtotalUsd)}`,
    ...(urgent ? [`Rush Surcharge (20%): ${fp(urgentSurchargeUsd)}`] : []),
    `Total: ${fp(totalUsd)}`,
    `Monthly Recurring: ${monthlyRecurringUsd > 0 ? `${fp(monthlyRecurringUsd)}/mo` : 'None'}`,
    ...(form.name || form.email || form.phone || form.notes ? [
      '',
      '*MY DETAILS*',
      ...(form.name  ? [`Name: ${form.name}`]   : []),
      ...(form.email ? [`Email: ${form.email}`] : []),
      ...(form.phone ? [`Phone: ${form.phone}`] : []),
      ...(form.notes ? [`Notes: ${form.notes}`] : []),
    ] : []),
    '',
    "Let's discuss!",
  ] : ["Hi Erasmus, I'd like to discuss a web project with you."]

  const waMessage = waLines.join('\n')
  const waUrl = `https://wa.me/255786000551?text=${encodeURIComponent(waMessage)}`

  const { setMessage } = useWhatsAppMessage()
  useEffect(() => {
    setMessage(waMessage)
    return () => setMessage(null)
  }, [waMessage, setMessage])

  return (
    <div className={styles.page}>
      <PageBanner
        title="Get an Instant Quote"
        subtitle="Configure your project and see a live estimate — no surprises, no commitment."
        backLabel="Back to portfolio"
      />

      <div className={`container ${styles.inner}`}>

        <div className={styles.layout}>

          <div className={styles.config}>

            <section className={styles.step}>
              <h2 className={styles.stepTitle}>
                <span className={`numberBadge ${styles.stepNum}`}>1</span>
                What are you building?
              </h2>
              <div className={styles.typeGrid}>
                {PROJECT_TYPES.map(pt => (
                  <button
                    key={pt.id}
                    type="button"
                    className={`${styles.typeCard} ${selectedType?.id === pt.id ? styles.typeCardActive : ''}`}
                    onClick={() => setSelectedType(pt)}
                  >
                    <span className={styles.typeLabel}>{pt.label}</span>
                    <span key={`${currency}-${pt.baseUsd}`} className={styles.typePrice}>
                      from {formatPrice(pt.baseUsd, currency, rates)}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className={styles.step}>
              <h2 className={styles.stepTitle}>
                <span className={`numberBadge ${styles.stepNum}`}>2</span>
                Add-ons
              </h2>
              <div className={styles.addonList}>
                {ADDONS.map(addon => {
                  const checked = selectedAddons.includes(addon.id)
                  return (
                    <label key={addon.id} className={`${styles.addonItem} ${checked ? styles.addonChecked : ''}`}>
                      <input
                        type="checkbox"
                        className={styles.addonCheck}
                        checked={checked}
                        onChange={() => toggleAddon(addon.id)}
                      />
                      <span className={styles.addonLabel}>{addon.label}</span>
                      <span key={`${currency}-${addon.baseUsd}`} className={styles.addonPrice}>
                        +{formatPrice(addon.baseUsd, currency, rates)}{addon.monthly ? '/mo' : ''}
                      </span>
                    </label>
                  )
                })}
              </div>
            </section>

            <section className={styles.step}>
              <h2 className={styles.stepTitle}>
                <span className={`numberBadge ${styles.stepNum}`}>3</span>
                How many pages?
                <span className={styles.stepNote}>
                  {FREE_PAGES} included free, +{formatPrice(PER_EXTRA_PAGE_USD, currency, rates)} per extra
                </span>
              </h2>
              <div className={styles.sliderRow}>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={pages}
                  onChange={e => setPages(Number(e.target.value))}
                  className={styles.slider}
                  aria-label="Number of pages"
                />
                <span className={styles.sliderVal}>{pages} page{pages !== 1 ? 's' : ''}</span>
              </div>
              {extraPages > 0 && (
                <p className={styles.sliderHint}>
                  +{extraPages} extra page{extraPages !== 1 ? 's' : ''} = +{formatPrice(pagesUsd, currency, rates)}
                </p>
              )}
            </section>

            <section className={styles.step}>
              <h2 className={styles.stepTitle}>
                <span className={`numberBadge ${styles.stepNum}`}>4</span>
                Timeline
              </h2>
              <div className={styles.timelineOptions}>
                <label className={`${styles.timelineOption} ${!urgent ? styles.timelineActive : ''}`}>
                  <input type="radio" name="timeline" checked={!urgent} onChange={() => setUrgent(false)} className={styles.radioHidden} />
                  <strong>Standard</strong>
                  <span>Normal delivery window</span>
                </label>
                <label className={`${styles.timelineOption} ${urgent ? styles.timelineActive : ''}`}>
                  <input type="radio" name="timeline" checked={urgent} onChange={() => setUrgent(true)} className={styles.radioHidden} />
                  <strong>Urgent</strong>
                  <span>Rush delivery +20%</span>
                </label>
              </div>
            </section>

            <section className={styles.step}>
              <h2 className={styles.stepTitle}>
                <span className={`numberBadge ${styles.stepNum}`}>5</span>
                Your preferred currency
              </h2>
              <CurrencySwitcher active={currency} onSelect={setCurrency} isLive={isLive} />
            </section>

            <section className={styles.step}>
              <h2 className={styles.stepTitle}>
                <span className={`numberBadge ${styles.stepNum}`}>6</span>
                Your contact details
              </h2>

              {sent ? (
                <div className={styles.successBox}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="rgba(16,185,129,0.15)" />
                    <path d="M8 12l3 3 5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p>Quote request sent! I'll get back to you within 24 hours.</p>
                  <Link to="/" className={styles.backLink}>Back to portfolio</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.formRow}>
                    <label className={styles.label}>
                      Full name *
                      <input name="name" value={form.name} onChange={handleInput} required placeholder="Your name" className={styles.input} />
                    </label>
                    <label className={styles.label}>
                      Email *
                      <input name="email" type="email" value={form.email} onChange={handleInput} required placeholder="your@email.com" className={styles.input} />
                    </label>
                  </div>
                  <label className={styles.label}>
                    Phone / WhatsApp (optional)
                    <input name="phone" value={form.phone} onChange={handleInput} placeholder="+255 7XX XXX XXX" className={styles.input} />
                  </label>
                  <label className={styles.label}>
                    Additional notes
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleInput}
                      rows={4}
                      placeholder="Tell me more about your project, goals, or any questions..."
                      className={styles.textarea}
                    />
                  </label>

                  {error && <p className={styles.errorMsg} role="alert">{error}</p>}

                  <div className={styles.formActions}>
                    <button type="submit" disabled={sending} className={styles.submitBtn}>
                      {sending ? 'Sending...' : 'Send Quote Request'}
                    </button>
                    <a href={waUrl} target="_blank" rel="noreferrer noopener" className={styles.waBtn}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                      WhatsApp instead
                    </a>
                  </div>
                </form>
              )}
            </section>

          </div>

          <aside className={styles.summary} aria-label="Price summary">
            <div className={styles.summarySticky}>
              <h2 className={styles.summaryTitle}>Your Estimate</h2>

              {!selectedType ? (
                <p className={styles.summaryEmpty}>Select a project type above to see your live estimate.</p>
              ) : (
                <>
                  <ul className={styles.summaryItems}>
                    <li className={styles.summaryItem}>
                      <span>{selectedType.label}</span>
                      <span>{formatPrice(baseUsd, currency, rates)}</span>
                    </li>
                    {extraPages > 0 && (
                      <li className={styles.summaryItem}>
                        <span>Extra pages &times;{extraPages}</span>
                        <span>{formatPrice(pagesUsd, currency, rates)}</span>
                      </li>
                    )}
                    {selectedAddons.map(id => {
                      const addon = ADDONS.find(a => a.id === id)
                      if (!addon) return null
                      return (
                        <li key={id} className={styles.summaryItem}>
                          <span>{addon.label}{addon.monthly ? ' (mo)' : ''}</span>
                          <span>{formatPrice(addon.baseUsd, currency, rates)}{addon.monthly ? '/mo' : ''}</span>
                        </li>
                      )
                    })}
                    {urgent && (
                      <li className={styles.summaryItem}>
                        <span>Rush surcharge (20%)</span>
                        <span>{formatPrice(urgentSurchargeUsd, currency, rates)}</span>
                      </li>
                    )}
                  </ul>

                  <div className={styles.summaryTotal}>
                    <span>Total estimate</span>
                    <span key={`${currency}-${totalUsd}`} className={styles.totalAmount}>
                      {formatPrice(totalUsd, currency, rates)}
                    </span>
                  </div>

                  <p className={styles.summaryNote}>
                    Starting price — final quote after scope discussion. All projects include a free consultation.
                  </p>
                </>
              )}
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
