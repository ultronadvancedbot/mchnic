import Navbar from '@/components/layout/Navbar'
import CinematicFooter from '@/components/ui/motion-footer'
import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import TechShowcase from '@/components/sections/TechShowcase'
import ProcessSection from '@/components/sections/ProcessSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import ResultsSection from '@/components/sections/ResultsSection'
import WhyMchnic from '@/components/sections/WhyMchnic'
import CTAWithTextMarquee from '@/components/ui/cta-with-text-marquee'
import { TypewriterEffectSmooth } from '@/components/ui/TypewriterEffect'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesPreview />
        <TechShowcase />
        <ProcessSection />
        <IndustriesSection />
        <ResultsSection />
        <WhyMchnic />
        {/* Typewriter CTA */}
        <section style={{ background: '#1B1F3B' }} className="pt-20 pb-4">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02]">
              We Install the
            </h2>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02]">
              <TypewriterEffectSmooth
                words={['Future.', 'Solution.', 'Difference.', 'System.']}
                className="text-[#454ADE]"
                cursorClassName="bg-[#454ADE]"
              />
            </h2>
          </div>
        </section>

        {/* Marquee CTA */}
        <CTAWithTextMarquee
          headline="Ready to install"
          accentWord="the future?"
          subtext="Book a free 30-minute discovery call. We'll audit your biggest workflow bottleneck and show you exactly what AI can do for your business — no pitch, no pressure."
          primaryCTA={{ label: 'Book a Discovery Call', href: '/contact' }}
          secondaryCTA={{ label: 'See Our Services', href: '/services' }}
          marqueeItems={[
            'AI Agents that never sleep.',
            'Workflows that run themselves.',
            'Operations that scale automatically.',
            "Systems that work while you don't.",
            'We Install the Future.',
          ]}
          direction="vertical"
        />
      </main>
      <CinematicFooter />
    </>
  )
}
