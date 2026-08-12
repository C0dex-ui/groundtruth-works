import { ArrowRight, MapPin } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PadBuildUp, SolarAcres } from '../components/diagrams'
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
import { INTERIOR_IMAGES, SERVICE_CITIES, SERVICES } from '../data/content'
import { INDUSTRIES_INDEX } from '../data/company-pages'
import { getIndustryDetail, INDUSTRIES_DETAIL } from '../data/industries-detail'
import { getServiceDetail } from '../data/services-detail'

export function IndustriesIndexPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
        eyebrow="Industries"
        title={INDUSTRIES_INDEX.heroTitle}
        lead={INDUSTRIES_INDEX.lead}
        primaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
        image={INTERIOR_IMAGES.industriesIndex}
        imageAlt=""
      />

      {/* Text cards only — homepage owns industry photos; detail pages use unique interior shots. */}
      <SectionBlock title="Industries" tone="white">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES_DETAIL.map((industry, i) => {
            const services = industry.relatedServiceSlugs
              .map((slug) => getServiceDetail(slug))
              .filter(Boolean)
            return (
              <ScrollCard key={industry.slug} delay={i * 70}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="card-industrial group flex h-full flex-col rounded-2xl p-6 sm:p-7"
                >
                  <span className="label text-xs text-muted">
                    0{i + 1} / Industry
                  </span>
                  <h3 className="heading-md mt-2 text-ink">{industry.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {industry.short}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {services.slice(0, 4).map((s) =>
                      s ? (
                        <li
                          key={s.slug}
                          className="rounded-full border border-black/10 bg-paper px-2.5 py-1 text-[0.7rem] text-ink"
                        >
                          {s.title}
                        </li>
                      ) : null,
                    )}
                  </ul>
                  <span className="label mt-5 inline-flex items-center gap-1.5 text-sm text-ink">
                    View industry
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollCard>
            )
          })}
        </div>
      </SectionBlock>

      <SectionBlock
        title={INDUSTRIES_INDEX.ctaTitle}
        lead={INDUSTRIES_INDEX.ctaLead}
        tone="paper"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/get-a-quote" className="btn-primary">
            GET A QUOTE
          </Link>
          <a href="tel:+15012696860" className="btn-outline">
            Call (501) 269-6860
          </a>
        </div>
      </SectionBlock>

      <InteriorCta />
    </PageShell>
  )
}

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const detail = slug ? getIndustryDetail(slug) : undefined

  if (!detail) {
    return <Navigate to="/industries" replace />
  }

  const relatedServices = detail.relatedServiceSlugs
    .map((s) => SERVICES.find((x) => x.href === `/services/${s}`))
    .filter(Boolean)

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: detail.title },
        ]}
        eyebrow="Industry"
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

      {detail.slug === 'solar-site-preparation' && <SolarAcres />}
      {detail.slug === 'commercial-development' && <PadBuildUp />}

      <SectionBlock title="What we self-perform" tone="paper">
        <CardGrid items={detail.selfPerform} />
      </SectionBlock>

      <SectionBlock title="How the work runs" tone="white">
        <ProcessList steps={detail.process} />
      </SectionBlock>

      <SectionBlock title="What drives cost" lead={detail.costNote} tone="paper">
        <CardGrid items={detail.costDrivers} />
      </SectionBlock>

      <SectionBlock title="Typical timeline" tone="white">
        <CardGrid items={detail.timeline} />
      </SectionBlock>

      <SectionBlock title="What to have ready before we mobilise" tone="paper">
        <Checklist items={detail.readyList} />
      </SectionBlock>

      <SectionBlock title={`${detail.title} questions`} tone="white">
        <FaqList items={detail.faqs} />
      </SectionBlock>

      <SectionBlock title="Related services" tone="paper">
        <div className="grid gap-4 sm:grid-cols-2">
          {relatedServices.map((s) =>
            s ? (
              <Link
                key={s.href}
                to={s.href}
                className="card-industrial group rounded-2xl p-5 hover:shadow-[var(--shadow-lift)]"
              >
                <h3 className="heading-md text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
                <span className="label mt-4 inline-flex items-center gap-1 text-sm">
                  View service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ) : null,
          )}
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
      </SectionBlock>

      <InteriorCta
        title={detail.quoteCtaLabel}
        lead="Tell us the acreage, the milestone dates and whether you have a civil set. David Culberson reads every request."
      />
    </PageShell>
  )
}
