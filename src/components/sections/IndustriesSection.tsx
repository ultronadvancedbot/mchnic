'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  { name: 'Healthcare', emoji: '🏥' },
  { name: 'Legal', emoji: '⚖️' },
  { name: 'Real Estate', emoji: '🏢' },
  { name: 'Finance', emoji: '📈' },
  { name: 'E-Commerce', emoji: '🛍️' },
  { name: 'Hospitality', emoji: '🏨' },
  { name: 'Insurance', emoji: '🛡️' },
  { name: 'HR & Recruiting', emoji: '👥' },
  { name: 'Marketing', emoji: '📣' },
  { name: 'Manufacturing', emoji: '🏭' },
  { name: 'Logistics', emoji: '🚚' },
  { name: 'Education', emoji: '🎓' },
  { name: 'Restaurants', emoji: '🍽️' },
  { name: 'Professional Services', emoji: '💼' },
  { name: 'Construction', emoji: '🔨' },
  { name: 'Non-Profit', emoji: '🤝' },
]

export default function IndustriesSection() {
  return (
    <section className="py-28" style={{ background: '#F8F8FF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#454ADE' }}
          >
            Industries
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight"
            style={{ color: '#0D0D0D' }}
          >
            AI works everywhere.
            <br />
            <span style={{ color: '#454ADE' }}>We&apos;ve proven it.</span>
          </h2>
          <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            We&apos;ve built AI systems across 16+ industries. Every vertical has unique workflows —
            we know them all.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Link
                href="/industries"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:border-[#454ADE] hover:text-[#454ADE] hover:bg-white"
                style={{ background: '#ffffff', borderColor: '#E5E7EB', color: '#0D0D0D' }}
              >
                <span>{industry.emoji}</span>
                {industry.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:opacity-80"
            style={{ color: '#454ADE' }}
          >
            See industry-specific automations <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
