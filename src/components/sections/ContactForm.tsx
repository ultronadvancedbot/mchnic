'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const services = [
  'AI Engine Build',
  'Workflow Automation',
  'AI Chatbots & Assistants',
  'Data Intelligence',
  'AI Integration',
  'Not sure yet',
]

interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl p-12 text-center border" style={{ background: '#ffffff', borderColor: '#E5E7EB' }}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(69,74,222,0.08)' }}
        >
          <CheckCircle2 className="w-8 h-8" style={{ color: '#454ADE' }} />
        </div>
        <h3 className="text-2xl font-black mb-3" style={{ color: '#0D0D0D' }}>
          We&apos;ll be in touch.
        </h3>
        <p className="text-base" style={{ color: '#6B7280' }}>
          Thanks, {form.name.split(' ')[0]}. Expect a response within 24 hours. We review every
          submission personally before responding.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 border"
      style={{ background: '#ffffff', borderColor: '#E5E7EB' }}
    >
      <h2 className="text-2xl font-black mb-6" style={{ color: '#0D0D0D' }}>
        Tell us about your project
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0D0D0D' }}>
            Full name <span style={{ color: '#454ADE' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              border: '1.5px solid #E5E7EB',
              color: '#0D0D0D',
              background: '#FAFAFA',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#454ADE')}
            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0D0D0D' }}>
            Email <span style={{ color: '#454ADE' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              border: '1.5px solid #E5E7EB',
              color: '#0D0D0D',
              background: '#FAFAFA',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#454ADE')}
            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0D0D0D' }}>
          Company
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Corp"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
          style={{
            border: '1.5px solid #E5E7EB',
            color: '#0D0D0D',
            background: '#FAFAFA',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#454ADE')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0D0D0D' }}>
          Service interested in
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
          style={{
            border: '1.5px solid #E5E7EB',
            color: form.service ? '#0D0D0D' : '#9CA3AF',
            background: '#FAFAFA',
          }}
        >
          <option value="" disabled>Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mb-7">
        <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0D0D0D' }}>
          What are you trying to automate or solve? <span style={{ color: '#454ADE' }}>*</span>
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your biggest operational challenge or the workflow you want to automate..."
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
          style={{
            border: '1.5px solid #E5E7EB',
            color: '#0D0D0D',
            background: '#FAFAFA',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#454ADE')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 disabled:opacity-60"
        style={{ background: '#454ADE' }}
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Send Message <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}
