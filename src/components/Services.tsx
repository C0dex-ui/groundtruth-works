import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/content'
import { ScrollCard } from './ScrollCard'

export function Services() {
  const featured = SERVICES.filter((s) => 'featured' in s && s.featured)
  const rest = SERVICES.filter((s) => !('featured' in s && s.featured))

  return (
    <section id="services" className="section-pad bg-paper" aria-labelledby="services-heading">
      <div className="container-site">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <div className="accent-bar mt-2.5" />
            <h2 id="services-heading" className="heading-xl mt-3 text-ink">
              What We Do
            </h2>
            <p className="mt-2.5 max-w-xl text-base text-muted">
              Full-service land clearing, grading and excavation — eight scopes, one dirt crew.
            </p>
          </div>
          <Link to="/services" className="btn-outline shrink-0 self-start lg:self-auto">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* High-yield bento: 2 featured heroes + 6 compact cards */}
        <div className="mt-6 grid gap-3 sm:gap-3.5 md:grid-cols-2 lg:grid-cols-12">
          {featured.map((service, i) => (
            <ScrollCard
              key={service.title}
              className={`md:col-span-1 ${i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
              delay={i * 70}
            >
              <Link
                to={service.href}
                className="card-industrial group relative flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-xl sm:min-h-[16rem] lg:min-h-[18rem]"
              >
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 img-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
                <div className="relative mt-auto p-4 sm:p-5 lg:p-6">
                  <span className="label inline-flex rounded-full bg-accent px-2.5 py-1 text-[0.65rem] text-ink">
                    Core service
                  </span>
                  <h3 className="font-display mt-2 text-2xl uppercase text-white sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-md font-body text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>
                  <span className="label mt-3 inline-flex items-center gap-1.5 text-sm text-accent">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollCard>
          ))}

          {rest.map((service, i) => (
            <ScrollCard
              key={service.title}
              className="md:col-span-1 lg:col-span-4"
              delay={60 + i * 55}
            >
              <Link
                to={service.href}
                className="card-industrial group flex h-full flex-col overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-paper-dark">
                  <img
                    src={service.image}
                    alt=""
                    className="img-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-80" />
                </div>
                <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                  <h3 className="heading-md text-ink">{service.title}</h3>
                  <p className="mt-1.5 flex-1 font-body text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="label mt-3 inline-flex items-center gap-1 text-sm text-ink">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollCard>
          ))}
        </div>
      </div>
    </section>
  )
}
