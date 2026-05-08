'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bot, Brain, BarChart3, Plug, Workflow } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Engine Build',
    description:
      'Custom AI models trained on your data. Proprietary knowledge bases, fine-tuned LLMs, and intelligent decision engines built specifically for your business context.',
    price: 'From $8,000',
    featured: true,
    href: '/services#ai-engine',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'End-to-end process automation that eliminates manual work. From data ingestion to multi-system orchestration — we map, build, and deploy complete workflows.',
    price: 'From $3,500',
    featured: false,
    href: '/services#workflow',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    description:
      'Conversational AI that handles customer service, sales qualification, internal support, and lead capture — trained on your products, voice, and processes.',
    price: 'From $2,500',
    featured: false,
    href: '/services#chatbots',
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence',
    description:
      'Turn raw data into strategic advantage. Automated reporting, predictive analytics, anomaly detection, and executive dashboards that update in real time.',
    price: 'From $4,000',
    featured: false,
    href: '/services#data',
  },
  {
    icon: Plug,
    title: 'AI Integration',
    description:
      'Connect your existing tools — CRM, ERP, support desk, accounting — with AI layers that make them smarter. No rip-and-replace. Intelligent enhancement.',
    price: 'From $2,000',
    featured: false,
    href: '/services#integration',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-28" style={{ background: '#F8F8FF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#454ADE' }}
          >
            What We Build
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight leading-tight"
              style={{ color: '#0D0D0D' }}
            >
              Five capabilities.
              <br />
              <span style={{ color: '#454ADE' }}>Infinite applications.</span>
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold transition-colors hover:opacity-80"
              style={{ color: '#454ADE' }}
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`rounded-2xl p-8 flex flex-col ${
                  service.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={
                  service.featured
                    ? { background: 'linear-gradient(135deg, #454ADE 0%, #B14AED 100%)' }
                    : { background: '#ffffff', border: '1px solid #E5E7EB' }
                }
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={
                    service.featured
                      ? { background: 'rgba(255,255,255,0.15)' }
                      : { background: 'rgba(69,74,222,0.08)' }
                  }
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: service.featured ? '#ffffff' : '#454ADE' }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: service.featured ? '#ffffff' : '#0D0D0D' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: service.featured ? 'rgba(255,255,255,0.8)' : '#6B7280' }}
                >
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: service.featured ? 'rgba(255,255,255,0.7)' : '#6B7280' }}
                  >
                    {service.price}
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{ color: service.featured ? '#ffffff' : '#454ADE' }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
