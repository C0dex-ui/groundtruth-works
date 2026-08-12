import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'
import { AreaMap } from './AreaMap'
import { PHONE_DISPLAY, PHONE_HREF, isExternalHref } from '../data/content'

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
   * Unique photo per route — used as a full-bleed hero background.
   * Every interior page should pass a distinct path from INTERIOR_IMAGES.
   */
  image?: string
  imageAlt?: string
  /**
   * Optional map (legacy). Shown only when no image is set.
   */
  map?: HeroMap
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string; external?: boolean }
  children?: ReactNode
  /** Force dark steel-grid look when there is no photo. Photo heroes are always dark-over-image. */
  dark?: boolean
}

/**
 * Interior page hero — full-width background photo with left-aligned content.
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
  const hasBg = Boolean(image)
  /** Light text on photo or steel-grid; ink text on plain paper. */
  const onDark = hasBg || dark

  return (
    <section
      className={`relative overflow-hidden ${
        hasBg ? 'text-white' : dark ? 'steel-grid text-white' : 'bg-paper'
      }`}
    >
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {/* Readability scrim — strong left/base so white copy always reads */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/55"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/50"
            aria-hidden
          />
          <div className="noise-fade pointer-events-none absolute inset-0" aria-hidden />
        </>
      )}

      {dark && !image && (
        <div className="noise-fade pointer-events-none absolute inset-0" aria-hidden />
      )}

      <div className="section-pad-hero relative">
        <div className="container-site">
          <Breadcrumbs items={crumbs} light={onDark} />

          {/* Content stays left-aligned; no right-side image column */}
          <div className="mt-4 max-w-2xl lg:max-w-3xl">
            {eyebrow && (
              <p className={`eyebrow ${onDark ? '!text-accent' : ''}`}>{eyebrow}</p>
            )}
            <div className="accent-bar mt-2.5" />
            <h1 className={`heading-xl mt-3 ${onDark ? 'text-white' : 'text-ink'}`}>{title}</h1>
            {/*
              Nested lead content often hardcodes text-ink / text-muted (e.g. phone numbers).
              .hero-lead-on-dark forces readable light text for all descendants.
            */}
            <div
              className={`mt-3 text-base leading-relaxed sm:text-[1.05rem] ${
                onDark ? 'hero-lead-on-dark' : 'text-muted'
              }`}
            >
              {lead}
            </div>

            <div className="btn-row mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {primaryCta &&
                (isExternalHref(primaryCta.href) || primaryCta.href.startsWith('#') ? (
                  <a href={primaryCta.href} className="btn-primary">
                    {primaryCta.href.startsWith('tel:') && (
                      <Phone className="h-4 w-4" aria-hidden />
                    )}
                    {primaryCta.label}
                  </a>
                ) : (
                  <Link to={primaryCta.href} className="btn-primary">
                    {primaryCta.label}
                  </Link>
                ))}

              {secondaryCta ? (
                isExternalHref(secondaryCta.href) ||
                secondaryCta.external ||
                secondaryCta.href.startsWith('#') ? (
                  <a
                    href={secondaryCta.href}
                    className={onDark ? 'btn-ghost-light' : 'btn-outline'}
                    {...(secondaryCta.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    {secondaryCta.href.startsWith('tel:') && (
                      <Phone className="h-4 w-4" aria-hidden />
                    )}
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    to={secondaryCta.href}
                    className={onDark ? 'btn-ghost-light' : 'btn-outline'}
                  >
                    {secondaryCta.label}
                  </Link>
                )
              ) : (
                <a href={PHONE_HREF} className={onDark ? 'btn-ghost-light' : 'btn-outline'}>
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {PHONE_DISPLAY}
                </a>
              )}
            </div>

            {children}
          </div>

          {!image && map && (
            <div className="mt-6 max-w-3xl">
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
    </section>
  )
}
