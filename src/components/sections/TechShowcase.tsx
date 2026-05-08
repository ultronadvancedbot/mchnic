'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discover & Audit',
    description: 'We map every manual process, data flow, and decision point in your business to identify the highest-value automation opportunities.',
  },
  {
    number: '02',
    title: 'Architect the System',
    description: 'Our engineers design a tailored AI architecture using the optimal stack — from LLMs to vector databases to custom APIs — for your specific use case.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description: 'We build production-ready systems, fully integrated with your existing tools. No workarounds. No bolt-on solutions. Clean, scalable implementation.',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'We deploy, monitor, and continuously improve your AI systems. Performance dashboards, usage analytics, and ongoing optimization included.',
  },
]

const metrics = [
  { value: '2–16 wks', label: 'Typical Build Time' },
  { value: '40+ hrs/wk', label: 'Time Reclaimed' },
  { value: '60–90 days', label: 'Average ROI Window' },
]

export default function TechShowcase() {
  return (
    <section className="py-28" style={{ background: '#1B1F3B' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(69,74,222,0.8)' }}
          >
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            From discovery to deployed
            <br />
            <span style={{ color: '#6B70E8' }}>in weeks, not years.</span>
          </h2>
        </motion.div>

        {/* 4-step flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative rounded-2xl p-7"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="text-4xl font-black mb-4"
                style={{ color: 'rgba(69,74,222,0.4)' }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(69,74,222,0.15) 0%, rgba(177,74,237,0.1) 100%)',
                border: '1px solid rgba(69,74,222,0.25)',
              }}
            >
              <div
                className="text-4xl font-black mb-2"
                style={{ color: '#6B70E8' }}
              >
                {m.value}
              </div>
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
