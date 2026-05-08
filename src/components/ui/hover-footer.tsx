'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

/* ─── SVG Icons ─────────────────────────────────────────── */
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

/* ─── Data ──────────────────────────────────────────────── */
const SERVICES = [
  { label: 'AI Diagnostic', href: '/services#diagnostic' },
  { label: 'AI Tune-Up', href: '/services#tune-up' },
  { label: 'AI Engine Build', href: '/services#engine' },
  { label: 'Full AI Build', href: '/services#full-build' },
  { label: 'AI Maintenance', href: '/services#maintenance' },
]

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'Results', href: '/#results' },
  { label: 'Contact', href: '/contact' },
]

const TECH_PARTNERS = ['Anthropic', 'OpenAI', 'NVIDIA', 'Google', 'Meta', 'Microsoft']

const SOCIALS = [
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: XIcon, label: 'X / Twitter', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
]

/* ─── TextHoverEffect ───────────────────────────────────── */
export function TextHoverEffect({
  text,
  duration = 0,
}: {
  text: string
  duration?: number
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' })

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor])

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="mchnicTextGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#454ADE" />
              <stop offset="50%" stopColor="#7B7FEA" />
              <stop offset="100%" stopColor="#B14AED" />
            </>
          )}
        </linearGradient>
        <motion.radialGradient
          id="mchnicRevealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{ duration, ease: 'easeOut' }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="mchnicTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mchnicRevealMask)" />
        </mask>
      </defs>

      {/* Base dim stroke */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        stroke="rgba(69,74,222,0.2)"
        fill="transparent"
        style={{ fontSize: 42, fontWeight: 900 }}
      >
        {text}
      </text>

      {/* Animated draw-on stroke */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        stroke="#454ADE"
        fill="transparent"
        style={{ fontSize: 42, fontWeight: 900 }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >
        {text}
      </motion.text>

      {/* Hover reveal gradient layer */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#mchnicTextGradient)"
        strokeWidth="0.3"
        fill="transparent"
        mask="url(#mchnicTextMask)"
        style={{ fontSize: 42, fontWeight: 900 }}
      >
        {text}
      </text>
    </svg>
  )
}

/* ─── FooterBackgroundGradient ──────────────────────────── */
export function FooterBackgroundGradient({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#1B1F3B', position: 'relative', overflow: 'hidden' }}>
      {/* #454ADE glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            width: '55%',
            height: '70%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(69,74,222,0.22) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-8%',
            width: '50%',
            height: '60%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(69,74,222,0.14) 0%, transparent 65%)',
            filter: 'blur(48px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '30%',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(107,112,232,0.12) 0%, transparent 70%)',
            filter: 'blur(36px)',
          }}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}

/* ─── HoverFooter ───────────────────────────────────────── */
export default function HoverFooter() {
  return (
    <footer>
      <FooterBackgroundGradient>
        {/* Ecosystem strip */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '20px 48px' }}>
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 36,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginRight: 12,
              }}
            >
              Ecosystem
            </span>
            {TECH_PARTNERS.map((p) => (
              <span
                key={p}
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.4)' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Main grid */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 48px 56px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '48px 40px',
            }}
          >
            {/* Brand column */}
            <div>
              <Image
                src="/logo-white.svg"
                alt="MCHNIC"
                width={130}
                height={32}
                style={{ height: 28, width: 'auto', marginBottom: 16 }}
              />
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 260 }}>
                We install autonomous AI agents, automation workflows, and full AI infrastructure for businesses built to
                scale.{' '}
                <span style={{ color: 'rgba(107,112,232,0.9)', fontWeight: 600 }}>We Install the Future.</span>
              </p>
              {/* Social icons */}
              <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                {SOCIALS.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.55)',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.background = 'rgba(69,74,222,0.4)'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(69,74,222,0.6)'
                      ;(e.currentTarget as HTMLElement).style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
                      ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: 20,
                }}
              >
                Services
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {SERVICES.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.58)')}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: 20,
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {COMPANY.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.58)')}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: 20,
                }}
              >
                Contact
              </h4>
              <a
                href="mailto:hello@mchnic.com"
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.58)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'block',
                  marginBottom: 20,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.58)')}
              >
                hello@mchnic.com
              </a>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 22px',
                  borderRadius: '100px',
                  background: '#454ADE',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Giant MCHNIC hover text */}
        <div style={{ width: '100%', height: 'clamp(100px, 18vw, 200px)' }}>
          <TextHoverEffect text="MCHNIC" duration={0} />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '24px 48px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © 2026 Mchnic. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(107,112,232,0.75)', margin: 0, fontWeight: 600, letterSpacing: '0.05em' }}>
            We Install the Future.
          </p>
        </div>
      </FooterBackgroundGradient>
    </footer>
  )
}
