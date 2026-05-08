'use client'

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

/* ─── Constants ─────────────────────────────────────────── */

const MARQUEE_ITEMS = [
  'AI Agents Deployed', '✦',
  'Workflows Automated', '✦',
  'We Install the Future', '✦',
  'Operations Transformed', '✦',
  '24/7 Systems Running', '✦',
]

const TECH_PARTNERS = ['Anthropic', 'OpenAI', 'NVIDIA', 'Google', 'Meta', 'Apple', 'SpaceX']

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '#' },
]

/* ─── Magnetic Button ────────────────────────────────────── */

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'solid' | 'glass'
  className?: string
}

function MagneticButton({ children, href, variant = 'solid', className }: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const onMove = useCallback((e: MouseEvent) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(el, { x: x * 0.28, y: y * 0.28, duration: 0.35, ease: 'power2.out' })
    gsap.to(innerRef.current, { x: x * 0.1, y: y * 0.1, duration: 0.35, ease: 'power2.out' })
  }, [])

  const onLeave = useCallback(() => {
    gsap.to(wrapRef.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
    gsap.to(innerRef.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    el.addEventListener('mousemove', onMove as EventListener)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove as EventListener)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [onMove, onLeave])

  const solidStyle: React.CSSProperties = {
    background: '#454ADE',
    color: '#ffffff',
    border: '1.5px solid #454ADE',
  }
  const glassStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.07)',
    color: '#ffffff',
    border: '1.5px solid rgba(255,255,255,0.18)',
    backdropFilter: 'blur(12px)',
  }

  const base =
    'inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-90 cursor-pointer select-none'

  const inner = (
    <div
      ref={innerRef}
      style={variant === 'solid' ? solidStyle : glassStyle}
      className={`${base} ${className ?? ''}`}
    >
      {children}
    </div>
  )

  return (
    <div ref={wrapRef} style={{ display: 'inline-block' }}>
      {href ? <Link href={href}>{inner}</Link> : inner}
    </div>
  )
}

/* ─── Cinematic Footer ──────────────────────────────────── */

export default function CinematicFooter() {
  const footerRef = useRef<HTMLElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const marqueeTrackRef = useRef<HTMLDivElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)
  const auroraRef = useRef<HTMLDivElement>(null)
  const partnerRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const footer = footerRef.current
    const curtain = curtainRef.current
    if (!footer || !curtain) return

    const ctx = gsap.context(() => {
      // ── Curtain clip-path reveal ──────────────────────
      gsap.fromTo(
        curtain,
        { clipPath: 'inset(100% 0% 0% 0% round 24px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: footer,
            start: 'top 92%',
            end: 'top 20%',
            scrub: 1.4,
          },
        }
      )

      // ── Background giant text parallax ───────────────
      if (bgTextRef.current) {
        gsap.fromTo(
          bgTextRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footer,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        )
      }

      // ── Partner row stagger ───────────────────────────
      if (partnerRef.current) {
        gsap.fromTo(
          partnerRef.current.querySelectorAll('span'),
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footer,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── Headline slide up ────────────────────────────
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── CTA buttons pop in ───────────────────────────
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: 'back.out(1.6)',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── Bottom bar fade ──────────────────────────────
      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: bottomRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── Marquee infinite scroll ───────────────────────
      if (marqueeTrackRef.current) {
        const track = marqueeTrackRef.current
        const totalWidth = track.scrollWidth / 2
        gsap.to(track, {
          x: -totalWidth,
          duration: 28,
          ease: 'none',
          repeat: -1,
        })
      }
    }, footer)

    return () => ctx.revert()
  }, [])

  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <footer ref={footerRef} className="relative w-full" style={{ minHeight: '80px' }}>
      {/* Clip-path curtain container */}
      <div
        ref={curtainRef}
        style={{
          background: '#1B1F3B',
          position: 'relative',
          overflow: 'hidden',
          clipPath: 'inset(100% 0% 0% 0% round 24px)',
          willChange: 'clip-path',
        }}
      >
        {/* ── Aurora glow orbs ─────────────────────── */}
        <div
          ref={auroraRef}
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden
        >
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-5%',
              width: '55%',
              height: '70%',
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(69,74,222,0.22) 0%, transparent 65%)',
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
              background:
                'radial-gradient(ellipse at center, rgba(177,74,237,0.18) 0%, transparent 65%)',
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
              background:
                'radial-gradient(ellipse at center, rgba(107,112,232,0.14) 0%, transparent 70%)',
              filter: 'blur(36px)',
            }}
          />
        </div>

        {/* ── Giant watermark text ─────────────────── */}
        <div
          ref={bgTextRef}
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(8rem, 22vw, 22rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: 'rgba(69,74,222,0.06)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0,
          }}
        >
          MCHNIC
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* ── Tech partner ecosystem row ────────── */}
          <div
            ref={partnerRef}
            style={{
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '20px 48px',
            }}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '36px',
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
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.4)',
                    opacity: 0,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* ── Main content ─────────────────────── */}
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '80px 48px 56px',
              textAlign: 'center',
            }}
          >
            {/* Headline */}
            <div ref={headlineRef} style={{ opacity: 0 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(107,112,232,0.9)',
                  marginBottom: 20,
                }}
              >
                Let&apos;s build something
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#ffffff',
                  marginBottom: 48,
                }}
              >
                Ready to install
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6B70E8 0%, #B14AED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  the future?
                </span>
              </h2>
            </div>

            {/* CTA buttons */}
            <div
              ref={ctaRef}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                marginBottom: 64,
              }}
            >
              <MagneticButton href="/contact" variant="solid">
                Book a Discovery Call
                <ArrowRight style={{ width: 15, height: 15 }} />
              </MagneticButton>
              <MagneticButton href="/services" variant="glass">
                See Our Services
              </MagneticButton>
            </div>

            {/* Social icons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                marginBottom: 16,
              }}
            >
              {[
                { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
                { Icon: XIcon, label: 'X / Twitter', href: '#' },
                { Icon: InstagramIcon, label: 'Instagram', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(69,74,222,0.4)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(69,74,222,0.6)'
                    ;(e.currentTarget as HTMLElement).style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(255,255,255,0.12)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Marquee strip ────────────────────── */}
          <div
            style={{
              overflow: 'hidden',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '14px 0',
              marginBottom: 0,
            }}
          >
            <div ref={marqueeTrackRef} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {marqueeItems.map((item, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    padding: '0 28px',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:
                      item === '✦'
                        ? 'rgba(107,112,232,0.6)'
                        : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── Bottom bar ───────────────────────── */}
          <div
            ref={bottomRef}
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '28px 48px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              opacity: 0,
            }}
          >
            {/* Logo + tagline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Image
                src="/logo-white.svg"
                alt="MCHNIC"
                width={110}
                height={28}
                style={{ height: 26, width: 'auto' }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.3)',
                  borderLeft: '1px solid rgba(255,255,255,0.15)',
                  paddingLeft: 12,
                }}
              >
                Built with ❤ by Mchnic
              </span>
            </div>

            {/* Nav links */}
            <nav
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 20px',
                justifyContent: 'center',
              }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#ffffff')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)')
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', margin: 0 }}>
              © {new Date().getFullYear()} Mchnic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
