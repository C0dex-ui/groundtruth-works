import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Homepage projects teaser — no photo grid.
 * Gallery frames were reassigned as unique interior hero crops under /images/heroes/.
 */
export function Projects() {
  return (
    <section id="projects" className="section-pad bg-white" aria-labelledby="projects-heading">
      <div className="container-site">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Projects</p>
            <div className="accent-bar mt-2.5" />
            <h2 id="projects-heading" className="heading-xl mt-3 text-ink">
              Our Work
            </h2>
            <p className="mt-2.5 text-base text-muted">
              Capability photography of the dirt work we run. Named job sets publish as the owner
              signs off — we would rather show you nothing than show you somebody else&apos;s dirt.
            </p>
          </div>
          <Link to="/projects" className="btn-outline shrink-0 self-start">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="card-industrial mt-5 rounded-xl p-5 sm:p-6">
          <p className="font-display text-xl uppercase text-ink sm:text-2xl">
            We would rather show you nothing than show you somebody else&apos;s dirt.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
            Until owner-signed project photography is ready, call David to walk a live site.
          </p>
          <Link to="/projects" className="btn-primary mt-4 inline-flex">
            See projects page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
