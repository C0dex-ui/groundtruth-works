import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INDUSTRIES } from '../data/content'
import { ScrollCard } from './ScrollCard'

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-white" aria-labelledby="industries-heading">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries</p>
            <div className="accent-bar mt-3" />
            <h2 id="industries-heading" className="heading-xl mt-4 text-ink">
              Who We Work For
            </h2>
            <p className="mt-3 text-base text-muted sm:text-lg">
              Commercial dirt that keeps GC schedules and solar timelines moving.
            </p>
          </div>
          <Link to="/industries" className="btn-outline shrink-0 self-start">
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <ScrollCard key={industry.title} delay={i * 55} className="h-full">
              <Link
                to={industry.href}
                className="card-industrial group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-2xl"
              >
                <img
                  src={industry.image}
                  alt=""
                  className="absolute inset-0 img-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                <div className="relative mt-auto p-6 sm:p-7">
                  <span className="font-condensed text-xs uppercase tracking-[0.18em] text-accent">
                    0{i + 1} / Industry
                  </span>
                  <h3 className="font-condensed mt-2 text-3xl uppercase tracking-wide text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {industry.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
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
