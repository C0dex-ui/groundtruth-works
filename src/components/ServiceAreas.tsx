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
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
          <div className="min-w-0">
            <p className="eyebrow">Service Areas</p>
            <div className="accent-bar mt-3" />
            <h2 id="areas-heading" className="heading-xl mt-4 text-ink">
              Where We Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Based in Mayflower, AR. We regularly work a 60–75 mile radius across Central Arkansas.
              Select a city to view its map.
            </p>

            <div
              className="mt-6 flex flex-wrap gap-2 sm:mt-8"
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
                  className="chip min-h-11 cursor-pointer"
                >
                  <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
                  <span>{city.name}</span>
                </button>
              ))}
            </div>

            <div className="btn-row mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
            <AreaMap
              name={active.name}
              lat={active.lat}
              lng={active.lng}
              delta={0.14}
              heightClass="h-64 sm:h-80 lg:h-[22rem]"
              subtitle="Click a city chip to recenter the map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
