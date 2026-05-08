'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { TypewriterEffectSmooth } from '@/components/ui/TypewriterEffect'

const words = [
  'automate your operations.',
  'eliminate manual work.',
  'scale without hiring.',
  'outpace your competitors.',
]

export default function CTASection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #454ADE 0%, #B14AED 100%)' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Ready to install the future?
          </h2>

          <div className="text-xl md:text-2xl font-medium mb-10 h-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            <span>AI that helps you </span>
            <TypewriterEffectSmooth
              words={words}
              className="font-bold text-white"
              cursorClassName="bg-white"
            />
          </div>

          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Book a free 30-minute discovery call. We&apos;ll audit your biggest workflow bottleneck
            and show you exactly what AI can do for your business — no pitch, no pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[#454ADE] font-semibold text-lg bg-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white text-white transition-all duration-200 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
