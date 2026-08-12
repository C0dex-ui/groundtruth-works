import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { SectionBlock } from '../components/SectionBlock'
import { INTERIOR_IMAGES, SERVICES } from '../data/content'
import { PROJECTS_PAGE } from '../data/company-pages'

/**
 * Projects page — no photo grid reuse of homepage gallery images.
 * Single interior-only hero photo; capability list uses text + service links only.
 */
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
        image={INTERIOR_IMAGES.projectsHero}
        imageAlt="Central Arkansas land — capability photography in progress"
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
        <p className="mt-4 max-w-2xl text-sm text-muted">
          {PROJECTS_PAGE.photoCaption}
        </p>
      </SectionBlock>

      <SectionBlock
        title={PROJECTS_PAGE.visitTitle}
        tone="paper"
        image={INTERIOR_IMAGES.projectsVisit}
        imageAlt="Live job walk with Growfully"
      >
        <div className="space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {PROJECTS_PAGE.visit.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
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
