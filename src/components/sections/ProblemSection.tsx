'use client'

import { motion } from 'framer-motion'

const pains = [
  {
    title: 'You\'re drowning in manual work',
    description:
      'Your team spends hours on repetitive tasks that should take seconds. Data entry, report generation, client follow-ups — all eating into the time that should drive growth.',
    accent: '#454ADE',
  },
  {
    title: 'Everyone\'s talking AI. Nobody\'s shipping.',
    description:
      'You\'ve read the articles, watched the demos, maybe even tried a few tools. But actually deploying AI that works inside your real operations? That\'s a different problem entirely.',
    accent: '#B14AED',
  },
  {
    title: 'The gap between potential and reality',
    description:
      'Generic SaaS tools give you features. Consultants give you slide decks. Neither gives you a working system. Meanwhile, your competitors are quietly automating everything.',
    accent: '#454ADE',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-28 bg-white">
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
            style={{ color: '#454ADE' }}
          >
            The Reality
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto"
            style={{ color: '#0D0D0D' }}
          >
            Most businesses know they need AI.
            <br />
            <span style={{ color: '#454ADE' }}>They just don&apos;t know how to install it.</span>
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Not tools. Not advice. Actual systems. Every capability we deliver is production-ready,
            fully integrated with your existing stack, and built to run without babysitting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl p-8 border"
              style={{
                background: '#ffffff',
                borderColor: '#E5E7EB',
                borderTopColor: pain.accent,
                borderTopWidth: 3,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg font-black"
                style={{ background: `${pain.accent}12`, color: pain.accent }}
              >
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0D0D0D' }}>
                {pain.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
