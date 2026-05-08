import Navbar from '@/components/layout/Navbar'
import CinematicFooter from '@/components/ui/motion-footer'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { Target, Zap, Shield, Users } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Outcomes, not outputs',
    description:
      'We measure success by the impact on your business — time saved, revenue generated, costs eliminated — not by lines of code written or features shipped.',
  },
  {
    icon: Zap,
    title: 'Speed without sacrifice',
    description:
      'Enterprise-grade AI in weeks, not years. We move fast because we\'ve done this before. Our build frameworks and pre-built components let us deliver quality at startup speed.',
  },
  {
    icon: Shield,
    title: 'Production-first thinking',
    description:
      'We don\'t build demos. Every system we ship is designed for real production environments — resilient, monitored, secure, and maintainable by your team long after we\'re done.',
  },
  {
    icon: Users,
    title: 'Partnership over transactions',
    description:
      'We work embedded with your team, not as an outside vendor. We learn your business deeply because the best AI systems are built by people who understand the problem from the inside.',
  },
]

const stats = [
  { value: '500+', label: 'AI systems deployed' },
  { value: '16+', label: 'Industries served' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '$12M+', label: 'Client cost savings generated' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About MCHNIC"
          headline={
            <>
              Built by practitioners.
              <br />
              <span style={{ color: '#454ADE' }}>For business owners.</span>
            </>
          }
          subtext="We started MCHNIC because we watched businesses leave millions on the table waiting for AI to become 'simpler.' We decided to build the bridge."
        />

        {/* Origin story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-6" style={{ color: '#0D0D0D' }}>
                The gap between what AI can do and what most businesses are actually doing with it is enormous.
                Most organizations know they need to move on AI. They just don&apos;t have the internal expertise
                to turn possibility into production.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                That&apos;s the problem MCHNIC was built to solve. We&apos;re not consultants who hand you a
                roadmap and wish you luck. We&apos;re builders who design, engineer, and deploy the actual system
                — then hand you the keys.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Our team brings together deep expertise in machine learning, software architecture, and business
                operations. We&apos;ve shipped AI systems for solopreneurs and Fortune 500 subsidiaries alike.
                The approach is always the same: understand the business problem first, then build the right
                technical solution to solve it.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16" style={{ background: '#1B1F3B' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-black mb-2" style={{ color: '#6B70E8' }}>
                    {s.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24" style={{ background: '#F8F8FF' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span
                className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: '#454ADE' }}
              >
                Our Values
              </span>
              <h2
                className="text-4xl md:text-5xl font-black tracking-tight"
                style={{ color: '#0D0D0D' }}
              >
                How we work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="rounded-2xl p-8 border bg-white"
                    style={{ borderColor: '#E5E7EB' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: 'rgba(69,74,222,0.08)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#454ADE' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#0D0D0D' }}>
                      {value.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <CinematicFooter />
    </>
  )
}
