import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Industries } from '../components/Industries'
import { Process } from '../components/Process'
import { Projects } from '../components/Projects'
import { QuoteCTA } from '../components/QuoteCTA'
import { ServiceAreas } from '../components/ServiceAreas'
import { Services } from '../components/Services'
import { TrustBar } from '../components/TrustBar'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/content'

export function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Industries />
        <ServiceAreas />
        <Projects />
        <QuoteCTA />
      </main>
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-md sm:hidden">
        <div className="flex gap-2">
          <a href={PHONE_HREF} className="mobile-cta-call">
            Call {PHONE_DISPLAY}
          </a>
          <Link to="/get-a-quote" className="mobile-cta-quote">
            GET A QUOTE
          </Link>
        </div>
      </div>
      <div className="h-[4.5rem] sm:hidden" aria-hidden />
    </div>
  )
}
