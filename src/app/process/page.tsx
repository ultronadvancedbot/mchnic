import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import { CheckCircle2 } from 'lucide-react'

const phases = [
  {
    number: '01',
    title: 'Audit & Discovery',
    duration: '1–2 weeks',
    description:
      'We embed with your team to understand your business at a deep level. Every manual process gets mapped, every data flow documented, every decision point identified. This isn\'t a surface-level review — we go deep enough to design a system that actually works.',
    activities: [
      'Stakeholder interviews and workflow shadowing',
      'Process mapping and bottleneck analysis',
      'Data inventory and quality assessment',
      'Technology stack audit',
      'ROI modelling and prioritization matrix',
    ],
    deliverable: 'Automation Opportunity Report with prioritized ROI projections',
    color: '#454ADE',
  },
  {
    number: '02',
    title: 'Architect & Plan',
    duration: '1–2 weeks',
    description:
      'Before writing a single line of code, we design the complete system architecture. Model selection, data pipeline design, integration architecture, security model, and deployment strategy — all documented and reviewed with your team before build begins.',
    activities: [
      'AI/ML model selection and justification',
      'System architecture design',
      'Integration mapping and API planning',
      'Security and compliance review',
      'Project timeline and sprint planning',
    ],
    deliverable: 'Full System Architecture Document and approved project plan',
    color: '#B14AED',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    duration: '2–8 weeks',
    description:
      'Agile development in 2-week sprints, each ending with a working demo. We build in layers — core functionality first, then integrations, then polish. Every sprint has a clear acceptance criteria and your team is included throughout.',
    activities: [
      'Core AI system development',
      'Third-party integrations and API connections',
      'User interface and dashboard build',
      'QA testing and edge case handling',
      'Staged deployment and smoke testing',
    ],
    deliverable: 'Production-ready AI system, integrated and tested',
    color: '#454ADE',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    duration: 'Ongoing',
    description:
      'Go-live isn\'t the end — it\'s the beginning of the performance optimization cycle. We monitor real-world usage, measure against KPIs, and continuously improve model accuracy and system performance. Monthly optimization reports keep you informed of every improvement.',
    activities: [
      'Supervised go-live and hypercare period',
      'Performance monitoring setup',
      'User training and adoption support',
      'Monthly KPI review and optimization',
      'Expansion planning and roadmap',
    ],
    deliverable: 'Live system + monthly performance reports + expansion roadmap',
    color: '#B14AED',
  },
  {
    number: '05',
    title: 'Scale & Expand',
    duration: 'Ongoing',
    description:
      'Once your first AI system is running and producing results, we identify the next highest-value automation opportunity. Most clients expand from one workflow to five within 12 months. The infrastructure we build in Phase 01 is designed to scale with you.',
    activities: [
      'ROI validation and case study development',
      'Next opportunity identification',
      'Expansion architecture planning',
      'Team capability building',
      'Advanced feature development',
    ],
    deliverable: 'Expansion roadmap and phased implementation plan',
    color: '#454ADE',
  },
]

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Process"
          headline={
            <>
              Five phases.
              <br />
              <span style={{ color: '#454ADE' }}>Zero guesswork.</span>
            </>
          }
          subtext="Every engagement follows our proven build framework. You always know exactly where you are, what's coming next, and what you're getting."
        />

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
                style={{ background: '#E5E7EB' }}
              />

              <div className="space-y-12">
                {phases.map((phase) => (
                  <div key={phase.number} className="relative md:pl-24">
                    {/* Number bubble */}
                    <div
                      className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full items-center justify-center text-white font-black text-lg"
                      style={{ background: phase.color }}
                    >
                      {phase.number}
                    </div>

                    <div
                      className="rounded-2xl p-8 border"
                      style={{ background: '#FAFAFA', borderColor: '#E5E7EB' }}
                    >
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span
                          className="text-xs font-semibold tracking-widest uppercase md:hidden"
                          style={{ color: phase.color }}
                        >
                          Phase {phase.number}
                        </span>
                        <h2 className="text-2xl font-black" style={{ color: '#0D0D0D' }}>
                          {phase.title}
                        </h2>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: `${phase.color}12`, color: phase.color }}
                        >
                          {phase.duration}
                        </span>
                      </div>

                      <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                        {phase.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#0D0D0D' }}>
                            Activities
                          </h3>
                          <ul className="space-y-2">
                            {phase.activities.map((a) => (
                              <li key={a} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: phase.color }} />
                                <span className="text-sm" style={{ color: '#6B7280' }}>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#0D0D0D' }}>
                            Key Deliverable
                          </h3>
                          <div
                            className="rounded-xl p-4 text-sm font-medium"
                            style={{ background: `${phase.color}08`, color: phase.color, border: `1px solid ${phase.color}20` }}
                          >
                            {phase.deliverable}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
