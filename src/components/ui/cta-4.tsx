'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const checklist = [
  'Full Business Operations Audit',
  'Automation Opportunity Matrix',
  'Prioritized Implementation Roadmap',
  'Recommended Tech Stack',
  'Delivered in 5–7 Business Days',
]

export default function CTA4() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          style={{ border: '1px solid #E5E7EB' }}
        >
          {/* Left — dark offer panel */}
          <div className="p-10 lg:p-14" style={{ background: '#1B1F3B' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 block"
                style={{ color: 'rgba(107,112,232,0.85)' }}
              >
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                Start with an
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6B70E8 0%, #B14AED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AI Diagnostic
                </span>
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We audit your entire business, identify every automation opportunity, and hand you a prioritized roadmap to implement it all.
              </p>
              <span
                className="inline-block text-sm font-bold px-4 py-2 rounded-full mb-8"
                style={{ background: 'rgba(69,74,222,0.2)', color: '#6B70E8' }}
              >
                Starting at $1,500
              </span>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: '#454ADE' }}
                >
                  Book Your AI Diagnostic
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — checklist */}
          <div className="p-10 lg:p-14" style={{ background: '#F8F8FF' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-8"
                style={{ color: '#6B7280' }}
              >
                What&apos;s included
              </p>
              <ul className="space-y-5">
                {checklist.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.18 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#454ADE' }}
                    />
                    <span className="text-base font-medium" style={{ color: '#0D0D0D' }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
