'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CORNER_POSITIONS = [
  'top-0 left-0 -translate-x-[7px] -translate-y-[10px]',
  'top-0 right-0 translate-x-[7px] -translate-y-[10px]',
  'bottom-0 left-0 -translate-x-[7px] translate-y-[10px]',
  'bottom-0 right-0 translate-x-[7px] translate-y-[10px]',
]

export default function CTA3() {
  return (
    <section className="py-24" style={{ background: '#1B1F3B' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Outer bordered container */}
        <div
          className="relative rounded-2xl overflow-visible"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {/* Corner + signs */}
          {CORNER_POSITIONS.map((pos, i) => (
            <span
              key={i}
              className={`absolute ${pos} text-2xl font-black leading-none select-none pointer-events-none z-10`}
              style={{ color: '#454ADE' }}
            >
              +
            </span>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed"
            style={{ '--tw-divide-opacity': 1, borderColor: 'rgba(255,255,255,0.1)' } as React.CSSProperties}
          >
            {/* Left — headline */}
            <div className="p-10 lg:p-14">
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
                  Let&apos;s Build Together
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-5">
                  Let your operations
                  <br />
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #6B70E8 0%, #B14AED 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    shape the future.
                  </span>
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Every manual task is an opportunity. We find them all — and build the AI systems that eliminate them permanently.
                </p>
              </motion.div>
            </div>

            {/* Right — CTA */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-5"
              >
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Book a free discovery call. We&apos;ll map your biggest automation opportunity live — no pitch, no pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: '#454ADE' }}
                  >
                    Book a Discovery Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/process"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-white/10"
                    style={{
                      border: '1.5px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.75)',
                    }}
                  >
                    See How It Works
                  </Link>
                </div>

                {/* Trust signal */}
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  Free 30-min call · No commitment · Results within 5–7 days
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
