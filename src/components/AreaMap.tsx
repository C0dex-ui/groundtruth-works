import { ExternalLink, Navigation } from 'lucide-react'
import {
  ARKANSAS_STATE_MAP,
  buildArkansasStateMapEmbedUrl,
  buildArkansasStateMapLinkUrl,
  buildMapEmbedUrl,
  buildMapLinkUrl,
} from '../data/content'

type AreaMapProps = {
  /**
   * `state` = whole Arkansas with one pin (homepage).
   * `city` = single Arkansas city pin (area pages).
   */
  mode?: 'state' | 'city'
  name?: string
  lat?: number
  lng?: number
  zoom?: number
  heightClass?: string
  subtitle?: string
}

/**
 * Google Maps embed for Arkansas only.
 * Homepage uses whole-state pin; city pages pin that AR city.
 */
export function AreaMap({
  mode = 'city',
  name,
  lat,
  lng,
  zoom = 12,
  heightClass = 'h-64 sm:h-80 lg:h-[22rem]',
  subtitle,
}: AreaMapProps) {
  const isState = mode === 'state'

  const title = isState ? 'Arkansas' : `${name ?? 'Service area'}, AR`
  const embedSrc = isState
    ? buildArkansasStateMapEmbedUrl()
    : buildMapEmbedUrl(lat ?? ARKANSAS_STATE_MAP.lat, lng ?? ARKANSAS_STATE_MAP.lng, {
        zoom,
        place: `${name}, AR`,
      })
  const openSrc = isState
    ? buildArkansasStateMapLinkUrl()
    : buildMapLinkUrl(lat ?? ARKANSAS_STATE_MAP.lat, lng ?? ARKANSAS_STATE_MAP.lng, {
        zoom,
        place: `${name}, Arkansas`,
      })

  const meta = isState
    ? 'State of Arkansas · service territory'
    : `${name}, Arkansas · ${(lat ?? 0).toFixed(4)}°N, ${Math.abs(lng ?? 0).toFixed(4)}°W`

  return (
    <div className="card-industrial overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-black/8 bg-ink px-4 py-3 text-white">
        <div className="min-w-0">
          <span className="label block truncate text-sm">{title}</span>
          {subtitle && (
            <span className="mt-0.5 block truncate text-xs text-white/55">{subtitle}</span>
          )}
        </div>
        <Navigation className="h-4 w-4 shrink-0 text-accent" aria-hidden />
      </div>
      <iframe
        key={embedSrc}
        title={
          isState
            ? 'Google Map — State of Arkansas service area'
            : `Google Map — ${name}, Arkansas`
        }
        src={embedSrc}
        className={`w-full border-0 ${heightClass}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/5 bg-white px-4 py-2.5 text-xs text-muted">
        <span>{meta}</span>
        <a
          href={openSrc}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-ink underline underline-offset-2"
        >
          Open in Google Maps
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      </div>
    </div>
  )
}
