import { ArrowRight, MapPin } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
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
import { TrustStrip } from '../components/TrustStrip'
import { SERVICE_CITIES, SERVICES } from '../data/content'
import { SERVICES_INDEX } from '../data/company-pages'
import {
  getServiceDetail,
  serviceSlugFromHref,
  SERVICES_DETAIL,
} from '../data/services-detail'

export function ServicesIndexPage() {
  const featured = SERVICES.filter((s) => 'featured' in s && s.featured)
  const rest = SERVICES.filter((s) => !('featured' in s && s.featured))
  const cities = SERVICE_CITIES.slice(0, 8)

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
        image={SERVICES[0].image}
        imageAlt=""
      >
        <TrustStrip />
      </PageHero>

      <SectionBlock title={SERVICES_INDEX.featuredTitle} tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((service, i) => (
            <ScrollCard key={service.title} delay={i * 60}>
              <Link
                to={service.href}
                className="card-industrial group relative flex min-h-[18rem] flex-col overflow-hidden rounded-2xl sm:min-h-[22rem]"
              >
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 img-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                <div className="relative mt-auto p-6 sm:p-8">
                  <span className="label inline-flex rounded-full bg-accent px-2.5 py-1 text-[0.65rem] text-ink">
                    Core service
                  </span>
                  <h3 className="font-display mt-3 text-3xl uppercase text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                    {service.description}
                  </p>
                  <span className="label mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title={SERVICES_INDEX.restTitle} tone="paper">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service, i) => (
            <ScrollCard key={service.title} delay={i * 50}>
              <Link
                to={service.href}
                className="card-industrial group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-dark">
                  <img
                    src={service.image}
                    alt=""
                    className="img-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="heading-md text-ink">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="label mt-4 inline-flex items-center gap-1 text-sm text-ink">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title={SERVICES_INDEX.areasTitle} tone="white">
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link key={city.slug} to={`/service-areas/${city.slug}`} className="chip">
              <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
              <span>
                {city.name}, AR
              </span>
            </Link>
          ))}
        </div>
        <Link to="/service-areas" className="btn-outline mt-6 inline-flex">
          All service areas
          <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionBlock>

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

      <SectionBlock title={detail.introTitle} tone="white">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {detail.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </SectionBlock>

      {detail.extraSections?.map((section) => (
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="card-industrial group rounded-2xl p-5 transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <h3 className="heading-md text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {SERVICES.find((x) => serviceSlugFromHref(x.href) === s.slug)?.description}
              </p>
              <span className="label mt-4 inline-flex items-center gap-1 text-sm text-ink">
                View service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title={`${detail.title} across Central Arkansas`} tone="white">
        <div className="flex flex-wrap gap-2">
          {SERVICE_CITIES.slice(0, 8).map((city) => (
            <Link key={city.slug} to={`/service-areas/${city.slug}`} className="chip">
              <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
              <span>
                {city.name}, AR
              </span>
            </Link>
          ))}
        </div>
        <Link to="/service-areas" className="btn-outline mt-6 inline-flex">
          See all service areas
          <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionBlock>

      <InteriorCta
        title={detail.quoteCtaLabel}
        lead="Five quick questions about your site. David Culberson reads every one and comes back with a real number."
      />
    </PageShell>
  )
}
