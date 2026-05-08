'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const metrics = [
  { value: 73, suffix: '%', label: 'Average reduction in operational overhead' },
  { value: 3, suffix: 'x', label: 'Average increase in team output capacity' },
  { value: 90, suffix: '%', label: 'Tasks that previously required human review' },
  { value: 47, suffix: '%', label: 'Average cost reduction in targeted workflows' },
]

const outcomes = [
  {
    industry: 'Legal Firm',
    before: 'Paralegals spent 20+ hours per week manually reviewing contracts and extracting key clauses',
    after: 'AI contract review system processes 200+ documents per day with 97% accuracy — paralegals now focus on strategy',
    metric: '94% time reduction',
  },
  {
    industry: 'E-Commerce Brand',
    before: 'Customer support team overwhelmed with 500+ daily tickets, 48-hour average response time',
    after: 'AI assistant handles 78% of inquiries autonomously, with 4-minute average response time for all tickets',
    metric: '78% ticket deflection',
  },
  {
    industry: 'Real Estate Agency',
    before: 'Agents manually qualifying leads, scheduling showings, and following up — losing deals to faster competitors',
    after: 'Automated lead qualification, instant scheduling, and personalized follow-up sequences running 24/7',
    metric: '3.2x more closed deals',
  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const increment = target / (2000 / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

export default function ResultsSection() {
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
            Results
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight"
            style={{ color: '#0D0D0D' }}
          >
            Numbers that speak.
            <br />
            <span style={{ color: '#454ADE' }}>Outcomes that last.</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 text-center border"
              style={{ background: '#FAFAFA', borderColor: '#E5E7EB' }}
            >
              <div
                className="text-4xl md:text-5xl font-black mb-2"
                style={{ color: '#454ADE' }}
              >
                <CountUp target={m.value} suffix={m.suffix} />
              </div>
              <p className="text-sm leading-snug" style={{ color: '#6B7280' }}>
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before / After cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.industry}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="px-6 pt-6 pb-4" style={{ background: '#FAFAFA' }}>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#454ADE' }}
                >
                  {outcome.industry}
                </span>
              </div>
              <div className="px-6 py-4" style={{ borderTop: '1px solid #E5E7EB' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#6B7280' }}>
                  Before
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#0D0D0D' }}>
                  {outcome.before}
                </p>
              </div>
              <div className="px-6 py-4" style={{ background: 'rgba(69,74,222,0.04)', borderTop: '1px solid #E5E7EB' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#454ADE' }}>
                  After
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#0D0D0D' }}>
                  {outcome.after}
                </p>
                <span
                  className="inline-block text-sm font-bold px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(69,74,222,0.1)', color: '#454ADE' }}
                >
                  {outcome.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
