import { ArrowRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICE_CITIES, type ServiceCity } from '../data/content'
import { AreaMap } from './AreaMap'

export function ServiceAreas() {
  const [active, setActive] = useState<ServiceCity>(SERVICE_CITIES[0])

  return (
    <section
      id="service-areas"
      className="section-pad bg-paper"
      aria-labelledby="areas-heading"
    >
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
          <div className="min-w-0">
            <p className="eyebrow">Service Areas</p>
            <div className="accent-bar mt-2.5" />
            <h2 id="areas-heading" className="heading-xl mt-3 text-ink">
              Where We Work
            </h2>
            <p className="mt-2.5 text-base leading-relaxed text-muted">
              Based in Mayflower, AR. We regularly work a 60–75 mile radius across Central Arkansas.
              Select a city to open its page — the map pins Growfully LLC.
            </p>

            <div
              className="mt-4 flex flex-wrap gap-2 sm:mt-5"
              role="listbox"
              aria-label="Service area cities"
              aria-activedescendant={`city-${active.slug}`}
            >
              {SERVICE_CITIES.map((city) => (
                <button
                  key={city.slug}
                  id={`city-${city.slug}`}
                  type="button"
                  role="option"
                  aria-selected={city.slug === active.slug}
                  onClick={() => setActive(city)}
                  className="chip min-h-10 cursor-pointer"
                >
                  <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
                  <span>{city.name}</span>
                </button>
              ))}
            </div>

            <div className="btn-row mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Link to={`/service-areas/${active.slug}`} className="btn-primary">
                Open {active.name} map page
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link to="/service-areas" className="btn-outline">
                See All Service Areas
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            {/* Official Growfully LLC Google Maps place pin */}
            <AreaMap
              mode="state"
              heightClass="h-56 sm:h-64 lg:h-[18rem]"
              subtitle="Google Maps · Growfully LLC"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
