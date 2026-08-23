import { Resend } from 'resend'
import { buildEnquiryEmail, buildQuoteEmail } from './lib/email-templates.js'

const TO_EMAIL = 'info@matowodev.com'
const FROM_EMAIL = 'Matowo Dev <enquiries@matowodev.com>'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' })
    return
  }

  const body = req.body ?? {}
  const { type, name, email } = body

  if (!name || typeof name !== 'string' || !name.trim()) {
    res.status(400).json({ ok: false, error: 'Name is required' })
    return
  }
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: 'A valid email is required' })
    return
  }

  let template
  try {
    if (type === 'quote') {
      template = buildQuoteEmail(body)
    } else if (type === 'consultation' || type === 'contact') {
      if (!body.message || typeof body.message !== 'string' || !body.message.trim()) {
        res.status(400).json({ ok: false, error: 'Message is required' })
        return
      }
      template = buildEnquiryEmail({ ...body, source: type })
    } else {
      res.status(400).json({ ok: false, error: 'Unknown request type' })
      return
    }
  } catch {
    res.status(400).json({ ok: false, error: 'Invalid request' })
    return
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: template.subject,
      html: template.html,
    })

    if (error) {
      res.status(502).json({ ok: false, error: 'Failed to send email' })
      return
    }

    res.status(200).json({ ok: true })
  } catch {
    res.status(502).json({ ok: false, error: 'Failed to send email' })
  }
}
