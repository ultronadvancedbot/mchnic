'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAWithTextMarqueeProps {
  headline: string
  accentWord?: string
  subtext?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  marqueeItems: string[]
  direction?: 'vertical' | 'horizontal'
}

export default function CTAWithTextMarquee({
  headline,
  accentWord,
  subtext,
  primaryCTA,
  secondaryCTA,
  marqueeItems,
  direction = 'vertical',
}: CTAWithTextMarqueeProps) {
  const doubled = [...marqueeItems, ...marqueeItems]

  /* ── Horizontal version (Industries page) ─────────────── */
  if (direction === 'horizontal') {
    return (
      <section className="overflow-hidden" style={{ background: '#1B1F3B' }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 block"
              style={{ color: 'rgba(107,112,232,0.85)' }}
            >
              Your Vertical. Our Expertise.
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {headline}
              {accentWord && (
                <>
                  {' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #6B70E8 0%, #B14AED 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {accentWord}
                  </span>
                </>
              )}
            </h2>
            {subtext && (
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {subtext}
              </p>
            )}
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: '#454ADE' }}
            >
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal marquee strip */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '18px 0',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              animation: 'marquee 30s linear infinite',
            }}
          >
            {doubled.map((item, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  padding: '0 36px',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(107,112,232,0.7)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }

  /* ── Vertical version (Home page) ─────────────────────── */
  return (
    <section className="overflow-hidden" style={{ background: '#1B1F3B' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 block"
              style={{ color: 'rgba(107,112,232,0.85)' }}
            >
              Let&apos;s Build
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.02] mb-6">
              {headline}
              {accentWord && (
                <>
                  <br />
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #6B70E8 0%, #B14AED 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {accentWord}
                  </span>
                </>
              )}
            </h2>
            {subtext && (
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {subtext}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: '#454ADE' }}
              >
                {primaryCTA.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-white/10"
                  style={{
                    border: '1.5px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right — vertical marquee */}
          <div
            style={{
              height: 380,
              overflow: 'hidden',
              maskImage:
                'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                animation: 'marquee-vertical 22s linear infinite',
              }}
            >
              {doubled.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '18px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color:
                      i % 3 === 0
                        ? '#ffffff'
                        : i % 3 === 1
                        ? 'rgba(107,112,232,0.75)'
                        : 'rgba(255,255,255,0.28)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
