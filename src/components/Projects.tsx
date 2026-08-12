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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Projects</p>
            <div className="accent-bar mt-3" />
            <h2 id="projects-heading" className="heading-xl mt-4 text-ink">
              Our Work
            </h2>
            <p className="mt-3 text-base text-muted sm:text-lg">
              Capability photography of the dirt work we run. Named job sets publish as the owner
              signs off — we would rather show you nothing than show you somebody else&apos;s dirt.
            </p>
          </div>
          <Link to="/projects" className="btn-outline shrink-0 self-start">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="card-industrial mt-8 rounded-2xl p-6 sm:p-8">
          <p className="font-display text-2xl uppercase text-ink sm:text-3xl">
            We would rather show you nothing than show you somebody else&apos;s dirt.
          </p>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Until owner-signed project photography is ready, call David to walk a live site.
          </p>
          <Link to="/projects" className="btn-primary mt-6 inline-flex">
            See projects page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
