'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow?: string
  headline: React.ReactNode
  subtext?: string
  centered?: boolean
}

export default function PageHero({ eyebrow, headline, subtext, centered = true }: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 bg-white relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E5E7EB 1.5px, transparent 0)`,
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(69,74,222,0.06) 0%, transparent 65%)',
        }}
      />

      <div className={`relative z-10 max-w-7xl mx-auto px-6 ${centered ? 'text-center' : ''}`}>
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#454ADE' }}
            >
              {eyebrow}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className={`text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-[#0D0D0D] ${centered ? 'max-w-4xl mx-auto' : ''}`}
        >
          {headline}
        </motion.h1>

        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className={`text-xl leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
            style={{ color: '#6B7280' }}
          >
            {subtext}
          </motion.p>
        )}
      </div>
    </section>
  )
}
