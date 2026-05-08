import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/sections/PageHero'
import CTA4 from '@/components/ui/cta-4'
import { Brain, Workflow, Bot, BarChart3, Plug, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'ai-engine',
    icon: Brain,
    title: 'AI Engine Build',
    tagline: 'Your own intelligent core',
    description:
      'Most AI implementations fail because they use generic models on specific problems. We build custom AI engines trained on your data, your processes, and your domain knowledge. The result is an intelligence layer that understands your business the way a 10-year veteran does — and operates at machine speed.',
    price: 'From $8,000',
    timeline: '4–10 weeks',
    includes: [
      'Custom LLM fine-tuning or RAG architecture',
      'Proprietary knowledge base construction',
      'Intelligent decision engine design',
      'API layer for system integration',
      'Performance benchmarking & evaluation',
      'Documentation and handoff',
    ],
    useCases: ['Contract analysis AI', 'Custom support brain', 'Proposal generation engine', 'Internal knowledge assistant'],
  },
  {
    id: 'workflow',
    icon: Workflow,
    title: 'Workflow Automation',
    tagline: 'End-to-end process elimination',
    description:
      'We map every step of your most time-intensive workflows, identify every decision point and data transfer, and replace the entire chain with an automated system. From single-step tasks to complex multi-system orchestrations — we build workflows that run themselves.',
    price: 'From $3,500',
    timeline: '2–6 weeks',
    includes: [
      'Full workflow discovery and mapping',
      'Multi-system integration (CRM, ERP, email, etc.)',
      'Conditional logic and exception handling',
      'Monitoring and alerting dashboard',
      'Team training and documentation',
      '30-day post-launch support',
    ],
    useCases: ['Lead processing pipelines', 'Invoice and billing automation', 'Onboarding workflows', 'Report generation'],
  },
  {
    id: 'chatbots',
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    tagline: 'Always on. Always accurate.',
    description:
      'Not generic chatbots — AI assistants trained specifically on your products, services, pricing, policies, and brand voice. Deployed across your website, app, or internal tools, they handle the conversations that eat your team\'s time while escalating the ones that need a human.',
    price: 'From $2,500',
    timeline: '2–4 weeks',
    includes: [
      'Custom training on your knowledge base',
      'Multi-channel deployment (web, app, Slack, etc.)',
      'Escalation and handoff logic',
      'CRM integration for lead capture',
      'Analytics and conversation dashboard',
      'Ongoing model improvement',
    ],
    useCases: ['Customer support bot', 'Sales qualification assistant', 'HR & onboarding helper', 'Internal knowledge bot'],
  },
  {
    id: 'data',
    icon: BarChart3,
    title: 'Data Intelligence',
    tagline: 'Turn data into decisions',
    description:
      'You have more data than you know what to do with. We build intelligent systems that automatically collect, clean, analyze, and surface actionable insights — from real-time executive dashboards to predictive models that flag issues before they become problems.',
    price: 'From $4,000',
    timeline: '3–8 weeks',
    includes: [
      'Data pipeline architecture and build',
      'Automated reporting and dashboards',
      'Predictive analytics models',
      'Anomaly detection and alerting',
      'Executive summary automation',
      'Data warehouse integration',
    ],
    useCases: ['Sales forecasting', 'Churn prediction', 'Operational dashboards', 'Market intelligence reports'],
  },
  {
    id: 'integration',
    icon: Plug,
    title: 'AI Integration',
    tagline: 'Make your existing tools smarter',
    description:
      'You don\'t always need to replace your stack — you need to enhance it. We layer AI capabilities onto your existing CRM, ERP, support platform, or custom software. The result: your current tools become dramatically more powerful without a rip-and-replace migration.',
    price: 'From $2,000',
    timeline: '1–4 weeks',
    includes: [
      'Current tool audit and integration mapping',
      'AI layer design and implementation',
      'API development and documentation',
      'Data synchronization setup',
      'User training and onboarding',
      'Integration health monitoring',
    ],
    useCases: ['CRM AI enrichment', 'Smart email routing', 'AI-powered search', 'Automated data entry'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          headline={
            <>
              Five capabilities.
              <br />
              <span style={{ color: '#454ADE' }}>Built for real businesses.</span>
            </>
          }
          subtext="Every engagement is custom. We don't sell templates or retainers — we build systems that solve specific, measurable problems in your business."
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                    i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(69,74,222,0.08)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: '#454ADE' }} />
                      </div>
                      <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#454ADE' }}>
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: '#0D0D0D' }}>
                      {service.title}
                    </h2>
                    <p className="text-lg leading-relaxed mb-8" style={{ color: '#6B7280' }}>
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <span
                        className="px-4 py-2 rounded-xl text-sm font-bold"
                        style={{ background: 'rgba(69,74,222,0.08)', color: '#454ADE' }}
                      >
                        {service.price}
                      </span>
                      <span
                        className="px-4 py-2 rounded-xl text-sm font-medium"
                        style={{ background: '#F8F8FF', color: '#6B7280', border: '1px solid #E5E7EB' }}
                      >
                        {service.timeline}
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90"
                      style={{ background: '#454ADE' }}
                    >
                      Start a project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Details panel */}
                  <div
                    className={`rounded-2xl p-8 border ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                    style={{ background: '#FAFAFA', borderColor: '#E5E7EB' }}
                  >
                    <h3 className="text-base font-bold mb-5" style={{ color: '#0D0D0D' }}>
                      What&apos;s included
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#454ADE' }} />
                          <span className="text-sm" style={{ color: '#0D0D0D' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-base font-bold mb-4" style={{ color: '#0D0D0D' }}>
                      Common use cases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((uc) => (
                        <span
                          key={uc}
                          className="text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{ background: 'rgba(69,74,222,0.06)', color: '#454ADE', border: '1px solid rgba(69,74,222,0.15)' }}
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <CTA4 />
      </main>
    </>
  )
}
