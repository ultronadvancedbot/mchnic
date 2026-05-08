import Navbar from '@/components/layout/Navbar'
import CinematicFooter from '@/components/ui/motion-footer'
import PageHero from '@/components/sections/PageHero'
import ContactForm from '@/components/sections/ContactForm'
import { Mail, Clock, CheckCircle2 } from 'lucide-react'

const whatHappensNext = [
  {
    step: '01',
    title: 'We review your submission',
    description: 'Every inquiry is reviewed personally — not by a sales bot. Expect a response within 24 hours.',
  },
  {
    step: '02',
    title: 'Discovery call scheduled',
    description: 'A 30-minute call to understand your business, your challenges, and what you want to achieve.',
  },
  {
    step: '03',
    title: 'Custom proposal delivered',
    description: 'Within 5 business days, you receive a detailed scope of work, timeline, and fixed-price proposal.',
  },
  {
    step: '04',
    title: 'Build begins',
    description: 'Once approved, we kick off immediately. No lengthy contracts, no months of back-and-forth.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          headline={
            <>
              Let&apos;s build something
              <br />
              <span style={{ color: '#454ADE' }}>that changes your business.</span>
            </>
          }
          subtext="Every project starts with a conversation. Tell us what you're working on — we'll tell you exactly what AI can do about it."
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form — 3 cols */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Sidebar — 2 cols */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact details */}
                <div
                  className="rounded-2xl p-7 border"
                  style={{ background: '#FAFAFA', borderColor: '#E5E7EB' }}
                >
                  <h3 className="text-base font-bold mb-5" style={{ color: '#0D0D0D' }}>
                    Direct contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(69,74,222,0.08)' }}
                      >
                        <Mail className="w-4 h-4" style={{ color: '#454ADE' }} />
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-0.5" style={{ color: '#6B7280' }}>Email us</p>
                        <a
                          href="mailto:hello@mchnic.com"
                          className="text-sm font-semibold hover:opacity-80 transition-opacity"
                          style={{ color: '#0D0D0D' }}
                        >
                          hello@mchnic.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(69,74,222,0.08)' }}
                      >
                        <Clock className="w-4 h-4" style={{ color: '#454ADE' }} />
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-0.5" style={{ color: '#6B7280' }}>Response time</p>
                        <p className="text-sm font-semibold" style={{ color: '#0D0D0D' }}>Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next */}
                <div
                  className="rounded-2xl p-7 border"
                  style={{ background: '#FAFAFA', borderColor: '#E5E7EB' }}
                >
                  <h3 className="text-base font-bold mb-5" style={{ color: '#0D0D0D' }}>
                    What happens next
                  </h3>
                  <div className="space-y-5">
                    {whatHappensNext.map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black text-white"
                          style={{ background: '#454ADE' }}
                        >
                          {item.step}
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-0.5" style={{ color: '#0D0D0D' }}>
                            {item.title}
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guarantee */}
                <div
                  className="rounded-2xl p-7"
                  style={{ background: 'linear-gradient(135deg, rgba(69,74,222,0.06) 0%, rgba(177,74,237,0.06) 100%)', border: '1px solid rgba(69,74,222,0.12)' }}
                >
                  <CheckCircle2 className="w-8 h-8 mb-3" style={{ color: '#454ADE' }} />
                  <h3 className="text-base font-bold mb-2" style={{ color: '#0D0D0D' }}>
                    No pitch. No pressure.
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    Our discovery call is genuinely free. We&apos;ll audit one of your workflows live
                    and show you exactly what&apos;s possible — whether or not you hire us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CinematicFooter />
    </>
  )
}
