import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/content'

type PlaceholderPageProps = {
  title: string
  description?: string
}

/**
 * Lightweight stubs so header/footer "View All" routes resolve.
 * Homepage redesign only — interior pages can be built next.
 */
export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <Header />
      <main id="main" className="section-pad bg-paper">
        <div className="container-site max-w-2xl">
          <p className="eyebrow">Growfully</p>
          <h1 className="heading-xl mt-2 text-ink">{title}</h1>
          <p className="t-lead mt-4 text-muted">
            {description ??
              'This page is linked from the redesigned homepage. Interior content will be migrated next. Call for a free on-site estimate in the meantime.'}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/" className="btn-outline">
              Back to Home
            </Link>
            <a href={PHONE_HREF} className="btn-primary">
              Call {PHONE_DISPLAY}
            </a>
            <Link to="/get-a-quote" className="btn-solid">
              GET A QUOTE
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
