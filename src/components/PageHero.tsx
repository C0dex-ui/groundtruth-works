import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/content'

type PageHeroProps = {
  crumbs: Crumb[]
  eyebrow?: string
  title: string
  lead: ReactNode
  image?: string
  imageAlt?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string; external?: boolean }
  children?: ReactNode
  dark?: boolean
}

/**
 * Interior page hero — industrial card layout matching homepage hierarchy.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  image,
  imageAlt = '',
  primaryCta,
  secondaryCta,
  children,
  dark = false,
}: PageHeroProps) {
  const shell = dark
    ? 'relative overflow-hidden steel-grid text-white'
    : 'bg-paper'

  return (
    <section className={shell}>
      {dark && <div className="noise-fade pointer-events-none absolute inset-0" aria-hidden />}
      <div className="section-pad relative">
        <div className="container-site">
          <Breadcrumbs items={crumbs} />

          <div
            className={`grid gap-8 lg:items-center ${image ? 'lg:grid-cols-[1.05fr_0.95fr] lg:gap-12' : ''}`}
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
                <img src={image} alt={imageAlt} className="img-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
