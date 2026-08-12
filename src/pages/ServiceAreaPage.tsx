import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AreaMap } from '../components/AreaMap'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { FaqList, SectionBlock } from '../components/SectionBlock'
import { TrustStrip } from '../components/TrustStrip'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_CITIES,
  SERVICES,
  getCityBySlug,
} from '../data/content'
import {
  CITY_META,
  getCityMeta,
  MAYFLOWER_DETAIL,
  SERVICE_AREAS_INDEX,
} from '../data/company-pages'

export function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>()
  const city = slug ? getCityBySlug(slug) : undefined
  const meta = slug ? getCityMeta(slug) : undefined

  if (!city) {
    return <Navigate to="/service-areas" replace />
  }

  const others = SERVICE_CITIES.filter((c) => c.slug !== city.slug)
  const isMayflower = city.slug === 'mayflower-ar'

  const lead = isMayflower
    ? MAYFLOWER_DETAIL.lead
    : `Growfully provides land clearing, site grading and excavation for commercial and contractor jobs in and around ${city.name}, Arkansas — working a 60–75 mile radius from Mayflower across Central Arkansas.${
        meta ? ` Common work here: ${meta.commonWork}.` : ''
      }`

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${city.name}, AR` },
        ]}
        eyebrow="Service area"
        title={
          isMayflower
            ? MAYFLOWER_DETAIL.heroTitle
            : `Site Work in ${city.name}, AR`
        }
        lead={
          <>
            {lead}
            {(isMayflower || meta) && (
              <span className="mt-3 block text-sm text-muted">
                {isMayflower
                  ? MAYFLOWER_DETAIL.subline
                  : meta
                    ? `${meta.county} · ${meta.drive} from Mayflower`
                    : null}
              </span>
            )}
          </>
        }
        primaryCta={{ label: 'GET A QUOTE', href: '#quote' }}
      >
        <TrustStrip />
      </PageHero>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            {isMayflower ? (
              <>
                <h2 className="heading-xl text-ink">{MAYFLOWER_DETAIL.groundTitle}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                  {MAYFLOWER_DETAIL.ground.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <h2 className="heading-xl mt-10 text-ink">{MAYFLOWER_DETAIL.builtTitle}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                  {MAYFLOWER_DETAIL.built.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <h2 className="heading-xl mt-10 text-ink">
                  {MAYFLOWER_DETAIL.calledForTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {MAYFLOWER_DETAIL.calledFor}
                </p>
              </>
            ) : (
              <>
                <h2 className="heading-xl text-ink">Site work in {city.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Based in Mayflower, Growfully regularly works {city.name} and the surrounding
                  {meta ? ` ${meta.county}` : ' Central Arkansas'} market. Drive time from the yard
                  is {meta?.drive ?? 'within our 60–75 mile working radius'}.
                </p>
                {meta && (
                  <div className="card-industrial mt-6 rounded-2xl p-5">
                    <p className="label text-xs text-muted">Most common work</p>
                    <p className="mt-2 text-base text-ink">{meta.commonWork}</p>
                  </div>
                )}
                <p className="mt-6 text-base leading-relaxed text-muted">
                  David Culberson walks the tract, writes the number, and runs the machines —
                  whether the job is a commercial pad, acreage clearing, or drainage that keeps a
                  finished grade where you put it.
                </p>
              </>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={PHONE_HREF} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
              <Link to="/get-a-quote" className="btn-outline">
                GET A QUOTE
              </Link>
            </div>
          </div>

          <AreaMap
            mode="city"
            name={city.name}
            lat={city.lat}
            lng={city.lng}
            zoom={12}
            heightClass="h-80 sm:h-96 lg:h-[28rem]"
            subtitle="Google Maps · Arkansas city pin only"
          />
        </div>
      </section>

      <SectionBlock title={`What we do in ${city.name}`} tone="paper">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="card-industrial rounded-2xl p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <p className="font-display text-lg uppercase text-ink">{s.title}</p>
              <p className="mt-1 text-xs text-muted">in {city.name}, AR</p>
            </Link>
          ))}
        </div>
      </SectionBlock>

      {isMayflower && (
        <SectionBlock title="Mayflower questions" tone="white">
          <FaqList items={[...MAYFLOWER_DETAIL.faqs]} />
        </SectionBlock>
      )}

      <SectionBlock title="Other cities we serve" tone="white">
        <div className="flex flex-wrap gap-2">
          {others.map((c) => (
            <Link key={c.slug} to={`/service-areas/${c.slug}`} className="chip">
              <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </SectionBlock>

      <InteriorCta
        title={`Get a quote for your ${city.name} site`}
        lead={`${city.name} is in our working radius. Add the scope and the timing and David Culberson will come look at it.`}
      />
    </PageShell>
  )
}

export function ServiceAreasIndexPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas' },
        ]}
        eyebrow="Coverage"
        title={SERVICE_AREAS_INDEX.heroTitle}
        lead={SERVICE_AREAS_INDEX.lead}
        primaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
      >
        <TrustStrip />
      </PageHero>

      <SectionBlock
        title={SERVICE_AREAS_INDEX.townsTitle}
        lead={SERVICE_AREAS_INDEX.townsLead}
        tone="white"
      >
        <div className="overflow-x-auto rounded-2xl border border-black/8 bg-white">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="border-b border-black/8 bg-paper">
              <tr>
                <th className="label px-4 py-3 text-xs text-muted">Town</th>
                <th className="label px-4 py-3 text-xs text-muted">County</th>
                <th className="label px-4 py-3 text-xs text-muted">Drive time</th>
                <th className="label px-4 py-3 text-xs text-muted">Most common work</th>
              </tr>
            </thead>
            <tbody>
              {CITY_META.map((row) => {
                const city = SERVICE_CITIES.find((c) => c.slug === row.slug)
                if (!city) return null
                return (
                  <tr key={row.slug} className="border-b border-black/6 last:border-0">
                    <td className="px-4 py-3 font-medium text-ink">
                      <Link
                        to={`/service-areas/${row.slug}`}
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {city.name}, AR
                        <ArrowRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-muted">{row.county}</td>
                    <td className="px-4 py-3 text-muted">{row.drive}</td>
                    <td className="px-4 py-3 text-muted">{row.commonWork}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">{SERVICE_AREAS_INDEX.counties}</p>
      </SectionBlock>

      <SectionBlock title={SERVICE_AREAS_INDEX.outsideTitle} tone="paper">
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          {SERVICE_AREAS_INDEX.outside}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={PHONE_HREF} className="btn-primary">
            Call {PHONE_DISPLAY}
          </a>
          <Link to="/get-a-quote" className="btn-outline">
            GET A QUOTE
          </Link>
        </div>
      </SectionBlock>

      <SectionBlock title="What we do across the region" tone="white">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="card-industrial rounded-2xl p-5 hover:shadow-[var(--shadow-lift)]"
            >
              <h3 className="heading-md text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.description}</p>
            </Link>
          ))}
        </div>
      </SectionBlock>

      <InteriorCta
        title="Get a quote anywhere in Central Arkansas"
        lead="Tell us where the site is and what needs doing. Free on-site estimates, written scope, no travel surprises."
      />
    </PageShell>
  )
}
