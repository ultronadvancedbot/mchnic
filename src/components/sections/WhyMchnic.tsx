'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

const features = [
  'Custom-built for your business',
  'Production-ready on day one',
  'Full-stack AI expertise',
  'Integrates with existing tools',
  'Transparent pricing',
  'Dedicated build team',
  'Ongoing optimization',
  'Measurable ROI guarantee',
]

const columns = [
  { label: 'MCHNIC', highlight: true },
  { label: 'In-House Team', highlight: false },
  { label: 'Other Vendors', highlight: false },
]

const matrix: Record<string, boolean[]> = {
  'Custom-built for your business': [true, true, false],
  'Production-ready on day one': [true, false, false],
  'Full-stack AI expertise': [true, false, false],
  'Integrates with existing tools': [true, true, false],
  'Transparent pricing': [true, false, true],
  'Dedicated build team': [true, true, false],
  'Ongoing optimization': [true, false, false],
  'Measurable ROI guarantee': [true, false, false],
}

export default function WhyMchnic() {
  return (
    <section className="py-28" style={{ background: '#F8F8FF' }}>
      <div className="max-w-5xl mx-auto px-6">
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
            Why MCHNIC
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight"
            style={{ color: '#0D0D0D' }}
          >
            We&apos;re not a tool.
            <br />
            <span style={{ color: '#454ADE' }}>We&apos;re your AI team.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: '#E5E7EB', background: '#ffffff' }}
        >
          {/* Header */}
          <div className="grid grid-cols-4 border-b" style={{ borderColor: '#E5E7EB' }}>
            <div className="p-5" />
            {columns.map((col) => (
              <div
                key={col.label}
                className="p-5 text-center"
                style={{
                  background: col.highlight
                    ? 'linear-gradient(135deg, #454ADE 0%, #6B70E8 100%)'
                    : '#FAFAFA',
                  borderLeft: '1px solid #E5E7EB',
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: col.highlight ? '#ffffff' : '#6B7280' }}
                >
                  {col.label}
                </span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {features.map((feature, i) => (
            <div
              key={feature}
              className="grid grid-cols-4"
              style={{
                borderBottom: i < features.length - 1 ? '1px solid #E5E7EB' : 'none',
              }}
            >
              <div className="p-4 flex items-center">
                <span className="text-sm font-medium" style={{ color: '#0D0D0D' }}>
                  {feature}
                </span>
              </div>
              {matrix[feature].map((has, j) => (
                <div
                  key={j}
                  className="p-4 flex items-center justify-center"
                  style={{
                    borderLeft: '1px solid #E5E7EB',
                    background: j === 0 ? 'rgba(69,74,222,0.03)' : 'transparent',
                  }}
                >
                  {has ? (
                    <CheckCircle2 className="w-5 h-5" style={{ color: j === 0 ? '#454ADE' : '#22C55E' }} />
                  ) : (
                    <X className="w-5 h-5" style={{ color: '#D1D5DB' }} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
