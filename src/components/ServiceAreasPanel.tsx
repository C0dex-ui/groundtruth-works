import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICE_CITIES } from '../data/content'
import { AreaMap } from './AreaMap'

type ServiceAreasPanelProps = {
  /** Section heading — e.g. "Where we run these services" */
  title: string
  lead?: string
  /** How many city chips to show (default 8 primary markets). */
  cityCount?: number
  tone?: 'white' | 'paper'
  /** Optional id for in-page anchors */
  id?: string
}

/**
 * Two-column service-area strip: cities + CTA on the left, Growfully map on the right.
 * Matches homepage ServiceAreas layout for consistency on service/industry pages.
 */
export function ServiceAreasPanel({
  title,
  lead = 'Based in Mayflower, working a 60–75 mile radius across Central Arkansas — Faulkner and Pulaski counties first, and out across the region.',
  cityCount = 8,
  tone = 'white',
  id,
}: ServiceAreasPanelProps) {
  const cities = SERVICE_CITIES.slice(0, cityCount)
  const bg = tone === 'white' ? 'bg-white' : 'bg-paper'

  return (
    <section id={id} className={`section-pad ${bg}`} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
          <div className="min-w-0">
            <p className="eyebrow">Service areas</p>
            <div className="accent-bar mt-2.5" />
            <h2
              id={id ? `${id}-heading` : undefined}
              className="heading-xl mt-3 text-ink"
            >
              {title}
            </h2>
            <p className="mt-2.5 text-base leading-relaxed text-muted">{lead}</p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}`}
                  className="chip min-h-10"
                >
                  <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
                  <span>
                    {city.name}, AR
                  </span>
                </Link>
              ))}
            </div>

            <Link to="/service-areas" className="btn-outline mt-4 inline-flex">
              All service areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="min-w-0">
            <AreaMap
              mode="state"
              heightClass="h-56 sm:h-64 lg:h-[20rem]"
              subtitle="Google Maps · Growfully LLC · Central Arkansas"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
