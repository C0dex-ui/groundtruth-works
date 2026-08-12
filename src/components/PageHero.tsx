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
  /**
   * Unique photo per route — required for the two-column interior hero.
   * Every interior page should pass a distinct path from INTERIOR_IMAGES.
   */
  image?: string
  imageAlt?: string
  /**
   * Optional map media (legacy). Prefer a photo in the hero; put maps in the body.
   * If both are set, the photo wins.
   */
  map?: HeroMap
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string; external?: boolean }
  children?: ReactNode
  dark?: boolean
}

/**
 * Interior page hero — two-column on large screens when a photo (or map) is set.
 * Prefer `image` so every hero always has a photograph.
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
      <div className="section-pad-hero relative">
        <div className="container-site">
          <Breadcrumbs items={crumbs} />

          <div
            className={`mt-4 grid gap-5 lg:items-center ${hasMedia ? 'lg:grid-cols-[1.1fr_0.9fr] lg:gap-8' : ''}`}
          >
            <div>
              {eyebrow && (
                <p className={`eyebrow ${dark ? '!text-accent' : ''}`}>{eyebrow}</p>
              )}
              <div className="accent-bar mt-2.5" />
              <h1 className={`heading-xl mt-3 ${dark ? 'text-white' : 'text-ink'}`}>{title}</h1>
              <div
                className={`mt-3 max-w-2xl text-base leading-relaxed sm:text-[1.05rem] ${
                  dark ? 'text-white/75' : 'text-muted'
                }`}
              >
                {lead}
              </div>

              <div className="btn-row mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
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
              <div className="card-industrial relative aspect-[16/11] overflow-hidden rounded-xl sm:aspect-[5/3] lg:aspect-[4/3]">
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
                  heightClass="h-52 sm:h-64 lg:h-[18rem]"
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
