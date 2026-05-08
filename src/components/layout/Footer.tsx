import Image from 'next/image'
import Link from 'next/link'

const services = [
  { label: 'AI Engine Build', href: '/services#ai-engine' },
  { label: 'Workflow Automation', href: '/services#workflow' },
  { label: 'AI Chatbots', href: '/services#chatbots' },
  { label: 'Data Intelligence', href: '/services#data' },
  { label: 'AI Integration', href: '/services#integration' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

const techPartners = [
  'OpenAI', 'Anthropic', 'Google DeepMind', 'NVIDIA', 'Meta AI', 'Microsoft Azure',
]

export default function Footer() {
  return (
    <footer style={{ background: '#1B1F3B' }}>
      {/* Tech ecosystem strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-xs font-medium mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            POWERED BY THE WORLD&apos;S LEADING AI ECOSYSTEM
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {techPartners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold tracking-wide"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logo-white.svg"
              alt="MCHNIC"
              width={140}
              height={35}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              We design, build, and deploy custom AI systems that transform how businesses operate.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@mchnic.com"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  hello@mchnic.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold mt-2"
                  style={{ background: '#454ADE', color: '#ffffff' }}
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} MCHNIC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
