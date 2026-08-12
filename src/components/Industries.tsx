import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INDUSTRIES } from '../data/content'
import { ScrollCard } from './ScrollCard'

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-white" aria-labelledby="industries-heading">
      <div className="container-site">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries</p>
            <div className="accent-bar mt-2.5" />
            <h2 id="industries-heading" className="heading-xl mt-3 text-ink">
              Who We Work For
            </h2>
            <p className="mt-2.5 text-base text-muted">
              Commercial dirt that keeps GC schedules and solar timelines moving.
            </p>
          </div>
          <Link to="/industries" className="btn-outline shrink-0 self-start">
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <ScrollCard
              key={industry.title}
              delay={i * 80}
              className={`h-full ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Link
                to={industry.href}
                className="card-industrial group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-xl sm:min-h-[17rem] lg:min-h-[19rem]"
              >
                <img
                  src={industry.image}
                  alt=""
                  className="absolute inset-0 img-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                <div className="relative mt-auto p-4 sm:p-5">
                  <span className="label text-xs text-accent">
                    0{i + 1} / Industry
                  </span>
                  <h3 className="font-display mt-1.5 text-2xl uppercase text-white sm:text-3xl">
                    {industry.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/80">
                    {industry.description}
                  </p>
                  <span className="label mt-3 inline-flex items-center gap-1.5 text-sm text-white">
                    View industry
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
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
