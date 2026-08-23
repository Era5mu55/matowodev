const BRAND = {
  bg: '#0A0F1E',
  surface: '#111827',
  accent: '#4F46E5',
  cta: '#10B981',
  text: '#F8F7F3',
  muted: '#94A3B8',
  border: 'rgba(255,255,255,0.08)',
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function shell({ eyebrow, heading, bodyHtml }) {
  return `
  <div style="background-color:${BRAND.bg};padding:32px 16px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background-color:${BRAND.surface};border:1px solid ${BRAND.border};border-radius:14px;overflow:hidden;">
      <div style="padding:28px 32px 20px;border-bottom:1px solid ${BRAND.border};">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:700;color:${BRAND.text};letter-spacing:0.02em;">
          Matowo <span style="color:${BRAND.accent};">Dev</span>
        </div>
      </div>
      <div style="padding:28px 32px;">
        <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.cta};">${escapeHtml(eyebrow)}</p>
        <h1 style="margin:0 0 20px;font-size:22px;line-height:1.3;color:${BRAND.text};">${escapeHtml(heading)}</h1>
        ${bodyHtml}
      </div>
      <div style="padding:18px 32px;border-top:1px solid ${BRAND.border};">
        <p style="margin:0;font-size:12px;color:${BRAND.muted};">Sent automatically from the contact form at matowodev.com</p>
      </div>
    </div>
  </div>`
}

function row(label, value) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 0;font-size:13px;color:${BRAND.muted};vertical-align:top;width:140px;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;font-size:14px;color:${BRAND.text};">${escapeHtml(value)}</td>
    </tr>`
}

/**
 * Used by both the Consultation/Footer popup and the main Contact form.
 * `projectType` is omitted for the popup (name/email/message only).
 */
export function buildEnquiryEmail({ name, email, projectType, message, source }) {
  const heading = source === 'consultation' ? 'New consultation request' : 'New contact form message'
  const eyebrow = source === 'consultation' ? 'Free Consultation' : 'Contact Form'

  const bodyHtml = `
    <table role="presentation" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
      ${row('Name', name)}
      ${row('Email', email)}
      ${row('Project type', projectType)}
    </table>
    <div>
      <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.muted};">Message</p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:${BRAND.text};white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `

  return {
    subject: source === 'consultation'
      ? `New consultation request — ${name}`
      : `New contact form message — ${name}`,
    html: shell({ eyebrow, heading, bodyHtml }),
  }
}

/**
 * Used by the /quote page's full pricing configurator.
 */
export function buildQuoteEmail({
  name, email, phone, projectType, addons, pages, timeline,
  currency, subtotal, urgentPremium, total, monthlyRecurring, notes,
}) {
  const bodyHtml = `
    <table role="presentation" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
      ${row('Name', name)}
      ${row('Email', email)}
      ${row('Phone', phone)}
      ${row('Project type', projectType)}
      ${row('Add-ons', addons)}
      ${row('Pages', pages)}
      ${row('Timeline', timeline)}
    </table>
    <div style="background-color:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:10px;padding:18px 20px;margin-bottom:20px;">
      <p style="margin:0 0 10px;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.muted};">Price breakdown (${escapeHtml(currency)})</p>
      <table role="presentation" style="width:100%;border-collapse:collapse;">
        ${row('Subtotal', subtotal)}
        ${row('Rush surcharge', urgentPremium)}
        ${row('Monthly recurring', monthlyRecurring)}
      </table>
      <p style="margin:14px 0 0;font-size:20px;font-weight:700;color:${BRAND.cta};">${escapeHtml(total)}</p>
    </div>
    ${notes ? `
    <div>
      <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.muted};">Notes</p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:${BRAND.text};white-space:pre-wrap;">${escapeHtml(notes)}</p>
    </div>` : ''}
  `

  return {
    subject: `New quote request — ${name} (${total})`,
    html: shell({ eyebrow: 'Instant Quote', heading: 'New quote request', bodyHtml }),
  }
}
