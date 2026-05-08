import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/sections/PageHero'
import CTAWithTextMarquee from '@/components/ui/cta-with-text-marquee'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    emoji: '🏥',
    name: 'Healthcare',
    automations: [
      'Patient intake and documentation',
      'Insurance prior authorization',
      'Appointment scheduling and reminders',
      'Clinical note summarization',
    ],
  },
  {
    emoji: '⚖️',
    name: 'Legal',
    automations: [
      'Contract review and clause extraction',
      'Legal research summarization',
      'Client intake automation',
      'Billing and time tracking',
    ],
  },
  {
    emoji: '🏢',
    name: 'Real Estate',
    automations: [
      'Lead qualification and routing',
      'Property listing generation',
      'Document and contract processing',
      'CRM and follow-up sequences',
    ],
  },
  {
    emoji: '📈',
    name: 'Finance',
    automations: [
      'Financial report generation',
      'Transaction anomaly detection',
      'Client onboarding workflows',
      'Regulatory compliance monitoring',
    ],
  },
  {
    emoji: '🛍️',
    name: 'E-Commerce',
    automations: [
      'Customer support ticket deflection',
      'Product description generation',
      'Inventory forecasting',
      'Review analysis and response',
    ],
  },
  {
    emoji: '🏨',
    name: 'Hospitality',
    automations: [
      'Booking and reservation management',
      'Guest communication automation',
      'Review response generation',
      'Demand forecasting',
    ],
  },
  {
    emoji: '🛡️',
    name: 'Insurance',
    automations: [
      'Claims processing and triage',
      'Policy document analysis',
      'Underwriting data collection',
      'Customer query handling',
    ],
  },
  {
    emoji: '👥',
    name: 'HR & Recruiting',
    automations: [
      'Resume screening and scoring',
      'Candidate outreach sequences',
      'Interview scheduling',
      'Onboarding workflow automation',
    ],
  },
  {
    emoji: '📣',
    name: 'Marketing',
    automations: [
      'Content creation and repurposing',
      'Ad copy generation and testing',
      'Lead scoring and segmentation',
      'Campaign performance reporting',
    ],
  },
  {
    emoji: '🏭',
    name: 'Manufacturing',
    automations: [
      'Quality control inspection',
      'Predictive maintenance alerts',
      'Supply chain optimization',
      'Production reporting',
    ],
  },
  {
    emoji: '🚚',
    name: 'Logistics',
    automations: [
      'Route optimization',
      'Shipment tracking and updates',
      'Document processing (BOL, customs)',
      'Customer communication automation',
    ],
  },
  {
    emoji: '🎓',
    name: 'Education',
    automations: [
      'Student support and tutoring AI',
      'Grading assistance',
      'Enrollment and admin workflows',
      'Personalized learning paths',
    ],
  },
  {
    emoji: '🍽️',
    name: 'Restaurants',
    automations: [
      'Reservation management',
      'Menu optimization from reviews',
      'Staff scheduling',
      'Customer feedback analysis',
    ],
  },
  {
    emoji: '💼',
    name: 'Professional Services',
    automations: [
      'Proposal and SOW generation',
      'Client reporting automation',
      'Project status updates',
      'Knowledge base and IP capture',
    ],
  },
  {
    emoji: '🔨',
    name: 'Construction',
    automations: [
      'Project documentation management',
      'Bid and estimate generation',
      'Subcontractor coordination',
      'Safety compliance reporting',
    ],
  },
  {
    emoji: '🤝',
    name: 'Non-Profit',
    automations: [
      'Donor outreach and stewardship',
      'Grant application assistance',
      'Volunteer coordination',
      'Impact reporting automation',
    ],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Industries"
          headline={
            <>
              Every industry has
              <br />
              <span style={{ color: '#454ADE' }}>automation opportunities.</span>
            </>
          }
          subtext="We've deployed AI systems across 16+ industries. Each vertical has its own workflows, compliance requirements, and data structures — we know them all."
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="rounded-2xl p-6 border transition-all duration-200 hover:border-[#454ADE] hover:shadow-md group"
                  style={{ background: '#ffffff', borderColor: '#E5E7EB' }}
                >
                  <div className="text-3xl mb-3">{industry.emoji}</div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#0D0D0D' }}>
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.automations.map((a) => (
                      <li
                        key={a}
                        className="text-sm flex items-start gap-2"
                        style={{ color: '#6B7280' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#454ADE' }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#454ADE' }}
                  >
                    Get a quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTAWithTextMarquee
          headline="Your industry."
          accentWord="Your transformation."
          subtext="We've built AI systems across 16+ industries. Whatever your vertical, we know the workflows, the compliance requirements, and the automation opportunities."
          primaryCTA={{ label: 'Book a Discovery Call', href: '/contact' }}
          marqueeItems={[
            'Real Estate', '✦', 'Healthcare', '✦', 'Finance', '✦',
            'E-Commerce', '✦', 'Professional Services', '✦', 'Restaurants', '✦',
            'Legal', '✦', 'Construction', '✦', 'Marketing Agencies', '✦',
            'Cleaning Services', '✦', 'Car Rentals', '✦', 'SaaS',
          ]}
          direction="horizontal"
        />
      </main>
    </>
  )
}
