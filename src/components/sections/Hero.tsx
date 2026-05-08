'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

const stats = [
  { value: 500, suffix: '+', label: 'Automations Deployed' },
  { value: 40, suffix: 'hrs', label: 'Avg Weekly Time Saved' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 60, suffix: ' days', label: 'Avg ROI Timeline' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
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
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E5E7EB 1.5px, transparent 0)`,
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
        }}
      />
      {/* Primary glow orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(69,74,222,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8"
            style={{
              background: 'rgba(69,74,222,0.07)',
              border: '1px solid rgba(69,74,222,0.18)',
              color: '#454ADE',
            }}
          >
            <Zap className="w-3.5 h-3.5" />
            AI-Powered Business Transformation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tight leading-[1.02] text-[#0D0D0D] mb-6"
        >
          We Install the
          <br />
          <span style={{ color: '#454ADE' }}>Future.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          We design, build, and deploy custom AI systems that automate your operations,
          reduce overhead, and unlock new revenue streams.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#454ADE' }}
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-200 hover:border-[#454ADE] hover:text-[#454ADE]"
            style={{ borderColor: '#E5E7EB', color: '#0D0D0D' }}
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
          style={{ borderTop: '1px solid #E5E7EB' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div
                className="text-3xl md:text-4xl font-black mb-1"
                style={{ color: '#454ADE' }}
              >
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm font-medium" style={{ color: '#6B7280' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
