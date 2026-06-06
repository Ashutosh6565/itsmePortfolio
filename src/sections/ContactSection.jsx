import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Send } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { Button } from '../components/ui/Button'
import { profile, socialLinks } from '../data/portfolio'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactSection = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const configured = Boolean(serviceId && templateId && publicKey)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!configured) {
      setStatus('fallback')
      setMessage(`EmailJS is not configured yet. Send the message directly to ${profile.email}.`)
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(serviceId, templateId, form, publicKey)
      setForm(initialForm)
      setStatus('success')
      setMessage('Message sent. Ashutosh will get back to you soon.')
    } catch (error) {
      setStatus('error')
      setMessage(error?.text || 'Message delivery failed. Please use the direct email link.')
    }
  }

  return (
    <section id="contact" className="section-wrap section-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Have a web app, API, or portfolio-grade interface to build?"
            description="Send a short brief with the goal, timeline, and preferred stack. The form supports EmailJS when Vite environment credentials are configured."
          />

          <div data-reveal className="mt-8 grid gap-4">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail className="h-5 w-5" />
              <span>{profile.email}</span>
            </a>
            <div className="contact-link">
              <MapPin className="h-5 w-5" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div data-reveal className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.055] text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        <form data-reveal onSubmit={handleSubmit} className="contact-form">
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Project or hiring inquiry" />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about the work, timeline, and what success should look like."
            />
          </label>

          <Button type="submit" disabled={status === 'sending'}>
            <Send className="h-4 w-4" />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>

          {message && (
            <p className={status === 'success' ? 'text-sm text-emerald-200' : 'text-sm text-amber-200'} role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactSection
