'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASimpleProps {
  headline: string
  subtext?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export default function CTASimple({ headline, subtext, primaryCTA, secondaryCTA }: CTASimpleProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Accent bar */}
          <div
            className="inline-block w-12 h-[3px] rounded-full mb-10"
            style={{ background: 'linear-gradient(90deg, #454ADE, #B14AED)' }}
          />

          <h2
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
            style={{ color: '#0D0D0D' }}
          >
            {headline}
          </h2>

          {subtext && (
            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              {subtext}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: '#454ADE' }}
            >
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-200 hover:border-[#454ADE] hover:text-[#454ADE]"
                style={{ borderColor: '#E5E7EB', color: '#0D0D0D' }}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
