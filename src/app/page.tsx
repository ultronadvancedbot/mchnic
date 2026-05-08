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
import CTASection from '@/components/sections/CTASection'

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
        <CTASection />
      </main>
      <CinematicFooter />
    </>
  )
}
