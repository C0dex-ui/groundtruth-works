import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { SectionBlock } from '../components/SectionBlock'
import { IMAGES, SERVICES } from '../data/content'
import { PROJECTS_PAGE } from '../data/company-pages'

const FRAMES = [
  { src: IMAGES.gallery[0], caption: 'Site work in progress' },
  { src: IMAGES.gallery[1], caption: 'Earthmoving on active pad' },
  { src: IMAGES.gallery[2], caption: 'Cleared tract ready for grade' },
  { src: IMAGES.gallery[3], caption: 'Commercial rough grade' },
] as const

export function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects' },
        ]}
        eyebrow="Projects"
        title={PROJECTS_PAGE.heroTitle}
        lead={PROJECTS_PAGE.lead}
        primaryCta={{ label: 'Call (501) 269-6860', href: 'tel:+15012696860' }}
        secondaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
        image={IMAGES.hero}
        imageAlt=""
      />

      <SectionBlock
        title={PROJECTS_PAGE.scopeTitle}
        lead={PROJECTS_PAGE.scopeLead}
        tone="white"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              className="card-industrial group rounded-2xl p-5 hover:shadow-[var(--shadow-lift)]"
            >
              <h3 className="heading-md text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <span className="label mt-4 inline-flex items-center gap-1 text-sm text-ink">
                View service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-display text-xl uppercase leading-snug text-ink sm:text-2xl">
          {PROJECTS_PAGE.honesty}
        </p>
      </SectionBlock>

      <SectionBlock title="Capability photography" tone="paper">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-4">
          {FRAMES.map((frame, i) => (
            <figure
              key={frame.src}
              className={`card-industrial group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl ${
                i === 0 ? 'col-span-2 md:row-span-2 md:aspect-auto md:min-h-[20rem]' : ''
              }`}
            >
              <img
                src={frame.src}
                alt={frame.caption}
                className="img-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-3 pb-3 pt-10">
                <span className="label text-[0.7rem] text-white/90 sm:text-sm">
                  {frame.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">{PROJECTS_PAGE.photoCaption}</p>
      </SectionBlock>

      <SectionBlock title={PROJECTS_PAGE.visitTitle} tone="white">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {PROJECTS_PAGE.visit.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="tel:+15012696860" className="btn-primary">
            Call (501) 269-6860
          </a>
          <Link to="/about" className="btn-outline">
            About Growfully
          </Link>
        </div>
      </SectionBlock>

      <InteriorCta
        title="Walk a live job"
        lead="Call David Culberson and he will tell you what is open this week and meet you there."
      />
    </PageShell>
  )
}
