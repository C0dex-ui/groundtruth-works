import { ExternalLink, Navigation } from 'lucide-react'
import { buildMapEmbedUrl, buildMapLinkUrl } from '../data/content'

type AreaMapProps = {
  name: string
  lat: number
  lng: number
  /** Wider delta = more zoomed out (overview). Default is city-level. */
  delta?: number
  zoom?: number
  heightClass?: string
  subtitle?: string
}

export function AreaMap({
  name,
  lat,
  lng,
  delta = 0.12,
  zoom = 12,
  heightClass = 'h-72 sm:h-80 lg:h-[22rem]',
  subtitle,
}: AreaMapProps) {
  const embedSrc = buildMapEmbedUrl(lat, lng, delta)
  const openSrc = buildMapLinkUrl(lat, lng, zoom)

  return (
    <div className="card-industrial overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-black/8 bg-ink px-4 py-3 text-white">
        <div className="min-w-0">
          <span className="font-condensed block truncate text-sm uppercase tracking-[0.14em]">
            {name}, AR
          </span>
          {subtitle && (
            <span className="mt-0.5 block truncate text-xs text-white/55">{subtitle}</span>
          )}
        </div>
        <Navigation className="h-4 w-4 shrink-0 text-accent" aria-hidden />
      </div>
      <iframe
        key={`${lat}-${lng}`}
        title={`Map of Growfully service area — ${name}, Arkansas`}
        src={embedSrc}
        className={`w-full border-0 ${heightClass}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/5 bg-white px-4 py-2.5 text-xs text-muted">
        <span>
          {lat.toFixed(4)}°N, {Math.abs(lng).toFixed(4)}°W
        </span>
        <a
          href={openSrc}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-ink underline underline-offset-2"
        >
          Open full map
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      </div>
    </div>
  )
}
