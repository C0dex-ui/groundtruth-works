import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ClearingMethods,
  CubicYardCalculator,
  CutAndFillDiagram,
  ExcavationSection,
  GradeToleranceNote,
  MulchingCompare,
  SitePrepSchedule,
} from '../components/diagrams'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { ScrollCard } from '../components/ScrollCard'
import {
  CardGrid,
  Checklist,
  FaqList,
  ProcessList,
  SectionBlock,
} from '../components/SectionBlock'
import { ServiceAreasPanel } from '../components/ServiceAreasPanel'
import { TrustStrip } from '../components/TrustStrip'
import { INTERIOR_IMAGES, SERVICES } from '../data/content'
import { SERVICES_INDEX } from '../data/company-pages'
import {
  getServiceDetail,
  serviceSlugFromHref,
  SERVICES_DETAIL,
} from '../data/services-detail'

export function ServicesIndexPage() {
  const featured = SERVICES.filter((s) => 'featured' in s && s.featured)
  const rest = SERVICES.filter((s) => !('featured' in s && s.featured))

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
        eyebrow="Services"
        title={SERVICES_INDEX.heroTitle}
        lead={SERVICES_INDEX.lead}
        primaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
        image={INTERIOR_IMAGES.servicesIndex}
        imageAlt="Land clearing and site work services in Central Arkansas"
      >
        <TrustStrip />
      </PageHero>

      {/* Text cards only — homepage already owns each service photo; do not reuse here. */}
      <SectionBlock title={SERVICES_INDEX.featuredTitle} tone="white">
        <div className="grid gap-3 md:grid-cols-2">
          {featured.map((service, i) => (
            <ScrollCard key={service.title} delay={i * 60}>
              <Link
                to={service.href}
                className="card-industrial group flex h-full flex-col rounded-xl border-l-4 border-l-accent p-4 sm:p-5"
              >
                <span className="label text-xs text-muted">Core service</span>
                <h3 className="heading-md mt-1.5 text-ink">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="label mt-3 inline-flex items-center gap-1.5 text-sm text-ink">
                  Explore
                  <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title={SERVICES_INDEX.restTitle} tone="paper">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service, i) => (
            <ScrollCard key={service.title} delay={i * 50}>
              <Link
                to={service.href}
                className="card-industrial group flex h-full flex-col rounded-xl p-4"
              >
                <h3 className="heading-md text-ink">{service.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="label mt-3 inline-flex items-center gap-1 text-sm text-ink">
                  Learn more
                  <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ScrollCard>
          ))}
        </div>
      </SectionBlock>

      <ServiceAreasPanel
        title={SERVICES_INDEX.areasTitle}
        lead="Based in Mayflower, working a 60–75 mile radius across Central Arkansas. Select a city for a local page, or open the full service-area map."
        tone="white"
        id="where-we-run"
      />

      <InteriorCta />
    </PageShell>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const detail = slug ? getServiceDetail(slug) : undefined

  if (!detail) {
    return <Navigate to="/services" replace />
  }

  const related = SERVICES_DETAIL.filter((s) => detail.relatedSlugs.includes(s.slug))

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: detail.title },
        ]}
        eyebrow="Service"
        title={detail.heroTitle}
        lead={detail.lead}
        image={detail.image}
        imageAlt=""
        primaryCta={{ label: detail.quoteCtaLabel, href: '#quote' }}
      >
        <TrustStrip />
      </PageHero>

      <SectionBlock
        title={detail.introTitle}
        tone="white"
        image={INTERIOR_IMAGES.serviceIntro[detail.slug as keyof typeof INTERIOR_IMAGES.serviceIntro]}
        imageAlt={`${detail.title} site work in Central Arkansas`}
      >
        <div className="space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {detail.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </SectionBlock>

      {/* Interactive diagrams from Lovable service pages */}
      {detail.slug === 'land-clearing' && <ClearingMethods />}
      {detail.slug === 'site-grading' && (
        <>
          <CutAndFillDiagram />
          <GradeToleranceNote />
        </>
      )}
      {detail.slug === 'excavation-services' && <ExcavationSection />}
      {detail.slug === 'site-preparation' && <SitePrepSchedule />}
      {detail.slug === 'forestry-mulching' && <MulchingCompare />}
      {detail.slug === 'dirt-work' && <CubicYardCalculator />}

      {/* Land clearing methods already shown as interactive table — skip duplicate card grid */}
      {detail.extraSections
        ?.filter((section) =>
          detail.slug === 'land-clearing' ? section.title !== 'Three ways to clear a tract' : true,
        )
        .map((section) => (
        <SectionBlock
          key={section.title}
          title={section.title}
          lead={section.lead}
          tone="paper"
        >
          <CardGrid items={section.items} />
        </SectionBlock>
      ))}

      <SectionBlock title="When you need it" tone="paper">
        <CardGrid items={detail.useCases} />
      </SectionBlock>

      <SectionBlock title="How the job runs" tone="white">
        <ProcessList steps={detail.process} />
      </SectionBlock>

      <SectionBlock
        title="What drives the cost"
        lead={detail.costNote}
        tone="paper"
      >
        <CardGrid items={detail.costDrivers} />
      </SectionBlock>

      <SectionBlock title="Timeline" tone="white">
        <CardGrid items={detail.timeline} />
      </SectionBlock>

      <SectionBlock title="What to have ready" tone="paper">
        <Checklist items={detail.readyList} />
      </SectionBlock>

      <SectionBlock title={`${detail.title} questions`} tone="white">
        <FaqList items={detail.faqs} />
      </SectionBlock>

      <SectionBlock title="Related services" tone="paper">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="card-industrial group rounded-xl p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <h3 className="heading-md text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {SERVICES.find((x) => serviceSlugFromHref(x.href) === s.slug)?.description}
              </p>
              <span className="label mt-3 inline-flex items-center gap-1 text-sm text-ink">
                View service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </SectionBlock>

      <ServiceAreasPanel
        title={`${detail.title} across Central Arkansas`}
        lead="Based in Mayflower, working a 60–75 mile radius across Central Arkansas. The map pins Growfully LLC — open a city for the local page."
        tone="white"
        id="service-areas-panel"
      />

      <InteriorCta
        title={detail.quoteCtaLabel}
        lead="Five quick questions about your site. David Culberson reads every one and comes back with a real number."
      />
    </PageShell>
  )
}
