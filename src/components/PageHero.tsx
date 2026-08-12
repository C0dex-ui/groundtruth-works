import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'
import { AreaMap } from './AreaMap'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/content'

export type HeroMap = {
  mode?: 'state' | 'city'
  name?: string
  lat?: number
  lng?: number
  zoom?: number
}

type PageHeroProps = {
  crumbs: Crumb[]
  eyebrow?: string
  title: string
  lead: ReactNode
  /** Prefer a unique photo per route. */
  image?: string
  imageAlt?: string
  /** Or an interactive map (city pages). */
  map?: HeroMap
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string; external?: boolean }
  children?: ReactNode
  dark?: boolean
}

/**
 * Interior page hero — always two-column on large screens when image or map is set.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  image,
  imageAlt = '',
  map,
  primaryCta,
  secondaryCta,
  children,
  dark = false,
}: PageHeroProps) {
  const shell = dark
    ? 'relative overflow-hidden steel-grid text-white'
    : 'bg-paper'

  const hasMedia = Boolean(image || map)

  return (
    <section className={shell}>
      {dark && <div className="noise-fade pointer-events-none absolute inset-0" aria-hidden />}
      <div className="section-pad relative">
        <div className="container-site">
          <Breadcrumbs items={crumbs} />

          <div
            className={`grid gap-8 lg:items-center ${hasMedia ? 'lg:grid-cols-[1.05fr_0.95fr] lg:gap-12' : ''}`}
          >
            <div>
              {eyebrow && (
                <p className={`eyebrow ${dark ? '!text-accent' : ''}`}>{eyebrow}</p>
              )}
              <div className="accent-bar mt-3" />
              <h1 className={`heading-xl mt-4 ${dark ? 'text-white' : 'text-ink'}`}>{title}</h1>
              <div
                className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
                  dark ? 'text-white/75' : 'text-muted'
                }`}
              >
                {lead}
              </div>

              <div className="btn-row mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primaryCta &&
                  (primaryCta.href.startsWith('tel:') || primaryCta.href.startsWith('http') ? (
                    <a href={primaryCta.href} className="btn-primary">
                      {primaryCta.label}
                    </a>
                  ) : primaryCta.href.startsWith('#') ? (
                    <a href={primaryCta.href} className="btn-primary">
                      {primaryCta.label}
                    </a>
                  ) : (
                    <Link to={primaryCta.href} className="btn-primary">
                      {primaryCta.label}
                    </Link>
                  ))}

                {secondaryCta ? (
                  secondaryCta.href.startsWith('tel:') || secondaryCta.external ? (
                    <a
                      href={secondaryCta.href}
                      className={dark ? 'btn-ghost-light' : 'btn-outline'}
                    >
                      {secondaryCta.href.startsWith('tel:') && (
                        <Phone className="h-4 w-4" aria-hidden />
                      )}
                      {secondaryCta.label}
                    </a>
                  ) : (
                    <Link
                      to={secondaryCta.href}
                      className={dark ? 'btn-ghost-light' : 'btn-outline'}
                    >
                      {secondaryCta.label}
                    </Link>
                  )
                ) : (
                  <a href={PHONE_HREF} className={dark ? 'btn-ghost-light' : 'btn-outline'}>
                    <Phone className="h-4 w-4" aria-hidden />
                    Call {PHONE_DISPLAY}
                  </a>
                )}
              </div>

              {children}
            </div>

            {image && (
              <div className="card-industrial relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="img-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            )}

            {!image && map && (
              <div className="min-w-0">
                <AreaMap
                  mode={map.mode ?? 'city'}
                  name={map.name}
                  lat={map.lat}
                  lng={map.lng}
                  zoom={map.zoom ?? 12}
                  heightClass="h-64 sm:h-80 lg:h-[22rem]"
                  subtitle={
                    map.mode === 'state'
                      ? 'Google Maps · Growfully LLC'
                      : `Google Maps · ${map.name}, AR`
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
