import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AreaMap } from '../components/AreaMap'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { CardGrid, FaqList, SectionBlock } from '../components/SectionBlock'
import { TrustStrip } from '../components/TrustStrip'
import {
  INTERIOR_IMAGES,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_CITIES,
  SERVICES,
  cityHeroImage,
  getCityBySlug,
} from '../data/content'
import {
  CITY_META,
  getCityMeta,
  SERVICE_AREAS_INDEX,
} from '../data/company-pages'
import { getCityDetail } from '../data/city-detail'

export function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>()
  const city = slug ? getCityBySlug(slug) : undefined
  const meta = slug ? getCityMeta(slug) : undefined
  const detail = slug ? getCityDetail(slug) : undefined

  if (!city) {
    return <Navigate to="/service-areas" replace />
  }

  const others = SERVICE_CITIES.filter((c) => c.slug !== city.slug)

  // Prefer Lovable long-form when we have it; otherwise table facts only (no invented copy).
  const heroTitle =
    detail?.heroTitle ?? `Site Work in ${city.name}, AR`
  const lead =
    detail?.lead ??
    (meta
      ? `Growfully works ${city.name}, Arkansas (${meta.county}). Drive time from the Mayflower yard: ${meta.drive}. Most common work listed on the service-areas table: ${meta.commonWork}.`
      : `Growfully provides land clearing, site grading and excavation in and around ${city.name}, Arkansas, within a 60–75 mile radius of Mayflower.`)

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${city.name}, AR` },
        ]}
        eyebrow="Service area"
        title={heroTitle}
        lead={
          <>
            {lead}
            {(detail?.subline || meta) && (
              <span className="mt-3 block text-sm text-white/70">
                {detail?.subline ??
                  (meta ? `${meta.county} · ${meta.drive} from Mayflower` : null)}
              </span>
            )}
          </>
        }
        primaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
        image={cityHeroImage(city.slug)}
        imageAlt={`Site work capability photography — ${city.name}, Arkansas service area`}
      >
        <TrustStrip />
      </PageHero>

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
            <div>
              {detail?.ground && detail.groundTitle && (
                <>
                  <h2 className="heading-xl text-ink">{detail.groundTitle}</h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                    {detail.ground.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              {detail?.built && detail.builtTitle && (
                <>
                  <h2 className="heading-xl mt-8 text-ink">{detail.builtTitle}</h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                    {detail.built.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              {detail?.calledFor && detail.calledForTitle && (
                <>
                  <h2 className="heading-xl mt-8 text-ink">{detail.calledForTitle}</h2>
                  {typeof detail.calledFor === 'string' ? (
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {detail.calledFor}
                    </p>
                  ) : (
                    <div className="mt-6">
                      <CardGrid items={detail.calledFor} />
                      {detail.calledForNote && (
                        <p className="mt-4 text-sm font-medium text-ink">
                          {detail.calledForNote}
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}

              {detail?.access && detail.accessTitle && (
                <>
                  <h2 className="heading-xl mt-8 text-ink">{detail.accessTitle}</h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                    {detail.access.map((p) => (
                      <p key={p.slice(0, 48)}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              {detail?.permitting && detail.permittingTitle && (
                <>
                  <h2 className="heading-xl mt-8 text-ink">{detail.permittingTitle}</h2>
                  <ul className="mt-4 space-y-3">
                    {detail.permitting.map((item) => (
                      <li
                        key={item.slice(0, 48)}
                        className="flex gap-3 text-base leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted">
                    Confirm the current requirement with the jurisdiction before mobilisation — we do
                    it for you as part of the scope.
                  </p>
                </>
              )}

              {!detail && meta && (
                <>
                  <h2 className="heading-xl text-ink">{city.name}, AR</h2>
                  <div className="card-industrial mt-6 rounded-2xl p-5">
                    <p className="label text-xs text-muted">From the service-areas table</p>
                    <dl className="mt-3 space-y-2 text-sm">
                      <div>
                        <dt className="text-muted">County</dt>
                        <dd className="font-medium text-ink">{meta.county}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">Drive time from Mayflower</dt>
                        <dd className="font-medium text-ink">{meta.drive}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">Most common work</dt>
                        <dd className="font-medium text-ink">{meta.commonWork}</dd>
                      </div>
                    </dl>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    Long-form local copy for this town is only published when it exists on the source
                    site. Facts above come from the Central Arkansas service-areas table; call for a
                    site-specific number.
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

            <div className="min-w-0 lg:sticky lg:top-28">
              <AreaMap
                mode="city"
                name={city.name}
                lat={city.lat}
                lng={city.lng}
                zoom={12}
                heightClass="h-52 sm:h-64 lg:h-[18rem]"
                subtitle={`Google Maps · ${city.name}, AR`}
              />
            </div>
          </div>
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

      {detail?.faqs && (
        <SectionBlock title={`${city.name} questions`} tone="white">
          <FaqList items={detail.faqs} />
        </SectionBlock>
      )}

      <SectionBlock title="Other cities we serve" tone="white">
        <div className="flex flex-wrap gap-2">
          {(detail?.nearby
            ? SERVICE_CITIES.filter((c) => detail.nearby!.includes(c.slug))
            : others
          ).map((c) => (
            <Link key={c.slug} to={`/service-areas/${c.slug}`} className="chip">
              <MapPin className="chip-icon h-3.5 w-3.5" aria-hidden />
              <span>{c.name}</span>
            </Link>
          ))}
          {detail?.nearby && (
            <Link to="/service-areas" className="chip">
              <span>See all service areas</span>
            </Link>
          )}
        </div>
      </SectionBlock>

      <InteriorCta
        title={`Get a quote for your ${city.name} site`}
        lead={`Add the scope and the timing and David Culberson will come look at it — or call ${PHONE_DISPLAY}.`}
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
        image={INTERIOR_IMAGES.serviceAreasIndex}
        imageAlt="Central Arkansas service territory"
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

      <SectionBlock
        title={SERVICE_AREAS_INDEX.outsideTitle}
        tone="paper"
        image={INTERIOR_IMAGES.serviceAreasOutside}
        imageAlt="Growfully coverage across Central Arkansas"
      >
        <p className="text-base leading-relaxed text-muted">
          {SERVICE_AREAS_INDEX.outside}
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
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
