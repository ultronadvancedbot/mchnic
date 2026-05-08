'use client'

import { motion } from 'framer-motion'
import { Search, Cpu, Rocket, TrendingUp } from 'lucide-react'

const phases = [
  {
    icon: Search,
    phase: 'Phase 01',
    title: 'Audit & Discovery',
    duration: '1–2 weeks',
    description:
      'We go deep into your operations. Workflow mapping, bottleneck analysis, data audit, and ROI modelling to pinpoint exactly where AI creates the most value.',
    deliverables: ['Process map', 'Automation opportunity report', 'ROI projection', 'Tech stack assessment'],
  },
  {
    icon: Cpu,
    phase: 'Phase 02',
    title: 'Architect & Plan',
    duration: '1–2 weeks',
    description:
      'Our architects design the full system blueprint — model selection, data pipelines, integration points, and security architecture. You approve before we write a single line of code.',
    deliverables: ['System architecture doc', 'Tech stack selection', 'Integration plan', 'Project timeline'],
  },
  {
    icon: Rocket,
    phase: 'Phase 03',
    title: 'Build & Integrate',
    duration: '2–8 weeks',
    description:
      'Agile development sprints with weekly demos. We build your AI system, integrate it with your existing tools, and run staged deployments with thorough QA at every checkpoint.',
    deliverables: ['Working AI system', 'API integrations', 'User training docs', 'QA reports'],
  },
  {
    icon: TrendingUp,
    phase: 'Phase 04',
    title: 'Launch & Optimize',
    duration: 'Ongoing',
    description:
      'Go-live, performance monitoring, and continuous improvement. We track real-world metrics, iterate on model performance, and expand automation coverage over time.',
    deliverables: ['Performance dashboard', 'Monthly optimization reports', 'Expansion roadmap', 'Support SLA'],
  },
]

export default function ProcessSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#454ADE' }}
          >
            Our Process
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight"
            style={{ color: '#0D0D0D' }}
          >
            A proven path from
            <br />
            <span style={{ color: '#454ADE' }}>idea to live system.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="rounded-2xl p-8 border"
                style={{ background: '#FAFAFA', borderColor: '#E5E7EB' }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(69,74,222,0.08)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#454ADE' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#454ADE' }}>
                        {phase.phase}
                      </span>
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(69,74,222,0.07)', color: '#454ADE' }}
                      >
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#0D0D0D' }}>
                      {phase.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>
                      {phase.description}
                    </p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#0D0D0D' }}>
                        Deliverables
                      </p>
                      <ul className="space-y-1">
                        {phase.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: '#454ADE' }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
