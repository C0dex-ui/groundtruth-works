import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../data/content'

/**
 * Unique gallery frames only — no invented project titles or locations.
 * Captions stay generic so we never claim a named job that isn't published.
 */
const FRAMES = [
  { src: IMAGES.gallery[0], caption: 'Site work in progress' },
  { src: IMAGES.gallery[1], caption: 'Earthmoving on active pad' },
  { src: IMAGES.gallery[2], caption: 'Cleared tract ready for grade' },
  { src: IMAGES.gallery[3], caption: 'Commercial rough grade' },
] as const

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

        {/* Asymmetric high-yield gallery */}
        <div className="mt-10 grid auto-rows-[12rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 md:grid-cols-4 md:auto-rows-[16rem]">
          {FRAMES.map((frame, i) => (
            <figure
              key={frame.src}
              className={`card-industrial group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2' : i === 3 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <img
                src={frame.src}
                alt={frame.caption}
                className="img-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-4 pt-12">
                <span className="font-condensed text-sm uppercase tracking-[0.12em] text-white/90">
                  {frame.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
