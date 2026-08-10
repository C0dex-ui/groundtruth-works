import { ArrowLeft, ArrowRight, MapPin, Phone } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AreaMap } from '../components/AreaMap'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import {
  getCityBySlug,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_CITIES,
} from '../data/content'

export function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>()
  const city = slug ? getCityBySlug(slug) : undefined

  if (!city) {
    return <Navigate to="/service-areas" replace />
  }

  const others = SERVICE_CITIES.filter((c) => c.slug !== city.slug)

  return (
    <>
      <Header />
      <main id="main" className="bg-paper">
        <section className="section-pad">
          <div className="container-site">
            <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link to="/service-areas" className="hover:text-ink">
                    Service Areas
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-ink">{city.name}, AR</li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="eyebrow">Service area</p>
                <div className="accent-bar mt-3" />
                <h1 className="heading-xl mt-4 text-ink">
                  Site Work in {city.name}, AR
                </h1>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  Growfully provides land clearing, site grading and excavation for commercial and
                  contractor jobs in and around {city.name}, Arkansas — working a 60–75 mile radius
                  from Mayflower across Central Arkansas.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-ink" aria-hidden />
                  <span>
                    Map centered on {city.name} · {city.lat.toFixed(4)}°N,{' '}
                    {Math.abs(city.lng).toFixed(4)}°W
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={PHONE_HREF} className="btn-primary">
                    <Phone className="h-4 w-4" aria-hidden />
                    Call {PHONE_DISPLAY}
                  </a>
                  <Link to="/get-a-quote" className="btn-outline">
                    GET A QUOTE
                  </Link>
                  <Link
                    to="/service-areas"
                    className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    All service areas
                  </Link>
                </div>
              </div>

              <AreaMap
                name={city.name}
                lat={city.lat}
                lng={city.lng}
                delta={0.1}
                heightClass="h-80 sm:h-96 lg:h-[28rem]"
                subtitle="Interactive map · OpenStreetMap"
              />
            </div>

            <div className="mt-14">
              <h2 className="font-condensed text-2xl uppercase tracking-wide text-ink">
                Other cities we serve
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/service-areas/${c.slug}`}
                    className="chip"
                  >
                    <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export function ServiceAreasIndexPage() {
  return (
    <>
      <Header />
      <main id="main" className="bg-paper">
        <section className="section-pad">
          <div className="container-site">
            <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-ink">Service Areas</li>
              </ol>
            </nav>

            <p className="eyebrow">Coverage</p>
            <div className="accent-bar mt-3" />
            <h1 className="heading-xl mt-4 text-ink">Service Areas</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Based in Mayflower, working a 60–75 mile radius across Central Arkansas. Click any city
              for a map and local contact path.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}`}
                  className="card-industrial group overflow-hidden rounded-2xl transition-shadow hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative h-40 overflow-hidden bg-paper-dark">
                    <iframe
                      title={`Map of ${city.name}, AR`}
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${city.lng - 0.08}%2C${city.lat - 0.055}%2C${city.lng + 0.08}%2C${city.lat + 0.055}&layer=mapnik&marker=${city.lat}%2C${city.lng}`}
                      className="pointer-events-none h-full w-full scale-105 border-0"
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <div>
                      <p className="font-condensed text-xl uppercase tracking-wide text-ink">
                        {city.name}, AR
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {city.lat.toFixed(3)}°N · {Math.abs(city.lng).toFixed(3)}°W
                      </p>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_HREF} className="btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <Link to="/get-a-quote" className="btn-outline">
                GET A QUOTE
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
