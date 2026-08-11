import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { COMPANY, RATINGS, TESTIMONIALS } from '../data/content'

/** Trustindex grid cards typically clamp longer bodies behind Read more. */
const PREVIEW_CHARS = 120

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-[#fbbc05] text-[#fbbc05]'
              : 'fill-transparent text-[#dadce0]'
          }`}
          aria-hidden
        />
      ))}
    </div>
  )
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.97 6.97 0 0 1 5.5 12c0-.72.12-1.42.34-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  )
}

/**
 * Trustindex-style circular avatar.
 * Uses real Google profile photo when available; otherwise initial fallback.
 */
function ReviewerAvatar({ name, photo }: { name: string; photo?: string | null }) {
  const [imgFailed, setImgFailed] = useState(false)
  const initial = name.trim().charAt(0).toUpperCase() || '?'
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  const hue = Math.abs(hash) % 360
  const showPhoto = Boolean(photo) && !imgFailed

  if (showPhoto) {
    return (
      <span className="inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#e8eaed] ring-1 ring-black/5">
        <img
          src={photo!}
          alt=""
          width={48}
          height={48}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
        />
      </span>
    )
  }

  return (
    <span
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
      style={{ backgroundColor: `hsl(${hue} 52% 55%)` }}
      aria-hidden
    >
      {initial}
    </span>
  )
}

/**
 * Trustindex Grid “Light” review card:
 * avatar | blue name + gray date → stars → body → Read more
 */
function TrustindexCard({
  review,
}: {
  review: (typeof TESTIMONIALS)[number]
}) {
  const [expanded, setExpanded] = useState(false)
  const full = review.text ?? ''
  const needsMore = full.length > PREVIEW_CHARS
  const shown =
    !full
      ? null
      : expanded || !needsMore
        ? full
        : `${full.slice(0, PREVIEW_CHARS).trimEnd()}…`

  return (
    <article className="ti-card flex h-full min-w-0 flex-col rounded-[10px] border border-[#e5e7eb] bg-white p-5">
      <header className="flex items-center gap-3">
        <ReviewerAvatar name={review.name} photo={review.photo} />
        <div className="min-w-0">
          <p className="truncate font-body text-[15px] font-semibold leading-snug text-[#1a73e8]">
            {review.name}
          </p>
          <p className="mt-0.5 font-body text-[13px] leading-snug text-[#70757a]">
            {review.relativeTime}
          </p>
        </div>
      </header>

      <div className="mt-3.5">
        <Stars rating={review.rating} />
      </div>

      {shown ? (
        <div className="mt-2.5 flex flex-1 flex-col">
          <p className="font-body text-[14.5px] leading-[1.55] text-[#3c4043]">{shown}</p>
          {needsMore && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 self-start font-body text-[14px] font-medium text-[#1a73e8] hover:underline"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      ) : (
        <p className="mt-2.5 flex-1 font-body text-[14px] text-[#70757a]">
          Rated {review.rating}.0 on Google
        </p>
      )}
    </article>
  )
}

function useVisibleCount() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w >= 1024) setCount(3)
      else if (w >= 640) setCount(2)
      else setCount(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return Math.min(count, TESTIMONIALS.length)
}

/**
 * Trustindex-style Google Reviews widget (Slider + Light).
 * Real reviews only — https://maps.app.goo.gl/deo5VoXM6QLw8BsdA
 */
export function Testimonials() {
  const visibleCount = useVisibleCount()
  const total = TESTIMONIALS.length
  const maxIndex = Math.max(0, total - visibleCount)
  const [index, setIndex] = useState(0)

  // Keep index in range when viewport changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const canPaginate = total > visibleCount

  const prev = useCallback(() => {
    if (!canPaginate) return
    setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  }, [canPaginate, maxIndex])

  const next = useCallback(() => {
    if (!canPaginate) return
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }, [canPaginate, maxIndex])

  // Card width percent of track (each card = 100/visibleCount of viewport)
  const cardPct = 100 / visibleCount

  return (
    <section
      id="testimonials"
      className="section-pad bg-paper"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <div className="mb-6 sm:mb-8">
          <p className="eyebrow">Testimonials</p>
          <div className="accent-bar mt-3" />
          <h2 id="testimonials-heading" className="heading-xl mt-4 text-ink">
            What Customers Say
          </h2>
        </div>

        {/* Trustindex widget shell */}
        <div className="ti-widget rounded-[12px] bg-white p-4 shadow-[0_2px_8px_rgb(0_0_0/0.06)] sm:p-5 lg:p-6">
          {/* Summary header */}
          <div className="ti-header mb-5 flex flex-col gap-4 border-b border-[#eee] pb-5 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:pb-5">
            <div className="flex min-w-0 items-center gap-3.5">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f1f3f4]">
                <GoogleMark className="h-8 w-8" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-body text-[17px] font-medium text-[#202124]">
                  {COMPANY}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <span className="font-body text-[16px] font-medium tabular-nums text-[#202124]">
                    {RATINGS.google.score}
                  </span>
                  <Stars rating={5} />
                  <a
                    href={RATINGS.google.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 font-body text-[14px] text-[#1a73e8] hover:underline"
                  >
                    Based on {RATINGS.google.reviewCount} reviews
                  </a>
                </div>
              </div>
            </div>

            <a
              href={RATINGS.google.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1a73e8] px-5 font-body text-[14px] font-medium text-white transition-colors hover:bg-[#1765cc] sm:h-12"
            >
              Review us on Google
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          {/* Slider with pagination arrows */}
          <div className="ti-slider relative">
            {/* Prev arrow */}
            <button
              type="button"
              onClick={prev}
              disabled={!canPaginate}
              aria-label="Previous reviews"
              className="ti-arrow absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#5f6368] shadow-[0_2px_8px_rgb(0_0_0/0.1)] transition-colors hover:border-[#1a73e8] hover:text-[#1a73e8] disabled:pointer-events-none disabled:opacity-30 sm:-translate-x-3 lg:-translate-x-4"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={next}
              disabled={!canPaginate}
              aria-label="Next reviews"
              className="ti-arrow absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#5f6368] shadow-[0_2px_8px_rgb(0_0_0/0.1)] transition-colors hover:border-[#1a73e8] hover:text-[#1a73e8] disabled:pointer-events-none disabled:opacity-30 sm:translate-x-3 lg:translate-x-4"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>

            <div className="overflow-hidden px-1">
              <div
                className="flex transition-transform duration-400 ease-out"
                style={{
                  transform: `translateX(-${index * cardPct}%)`,
                  // smooth cubic-ish
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDuration: '400ms',
                }}
              >
                {TESTIMONIALS.map((review) => (
                  <div
                    key={review.name + review.relativeTime}
                    className="min-w-0 shrink-0 px-2"
                    style={{ width: `${cardPct}%` }}
                  >
                    <TrustindexCard review={review} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot pagination */}
            {canPaginate && (
              <div
                className="mt-5 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Review pages"
              >
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show reviews page ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? 'w-5 bg-[#1a73e8]'
                        : 'w-2 bg-[#dadce0] hover:bg-[#9aa0a6]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Trustindex footer attribution strip (minimal) */}
          <div className="ti-footer mt-5 flex items-center justify-center gap-1.5 border-t border-[#eee] pt-4">
            <GoogleMark className="h-3.5 w-3.5" />
            <span className="font-body text-[12px] text-[#70757a]">
              Reviews from Google
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
