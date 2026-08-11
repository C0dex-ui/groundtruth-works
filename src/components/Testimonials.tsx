import { ExternalLink, Star } from 'lucide-react'
import { COMPANY, RATINGS, TESTIMONIALS } from '../data/content'

function Stars({
  rating,
  size = 'md',
}: {
  rating: number
  size?: 'sm' | 'md' | 'lg'
}) {
  const dim =
    size === 'lg' ? 'h-5 w-5' : size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${dim} ${
            i < rating
              ? 'fill-[#fbbc04] text-[#fbbc04]'
              : 'fill-transparent text-black/15'
          }`}
          aria-hidden
        />
      ))}
    </div>
  )
}

/** Official multicolor Google “G”. */
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

/** Colored initial avatar — Elfsight grid card pattern. */
function ReviewerAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || '?'
  // Stable hue from name so cards feel distinct without fake photos
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  const hue = Math.abs(hash) % 360
  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white sm:h-11 sm:w-11 sm:text-base"
      style={{ backgroundColor: `hsl(${hue} 42% 42%)` }}
      aria-hidden
    >
      {initial}
    </span>
  )
}

/**
 * Elfsight-style Google Reviews grid:
 * header (business + aggregate) → equal-height card grid → write/read CTA.
 * Content is live Google reviews only.
 */
export function Testimonials() {
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

        {/* Elfsight-style widget shell */}
        <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_8px_30px_rgb(0_0_0/0.06)]">
          {/* Header bar — business rating strip */}
          <div className="flex flex-col gap-4 border-b border-black/6 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/6 bg-paper sm:h-14 sm:w-14">
                <GoogleMark className="h-7 w-7 sm:h-8 sm:w-8" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-body text-base font-medium text-ink sm:text-lg">
                  {COMPANY}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-body text-lg font-semibold tabular-nums text-ink sm:text-xl">
                    {RATINGS.google.score}
                  </span>
                  <Stars rating={5} size="md" />
                  <a
                    href={RATINGS.google.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-sm text-[#1a73e8] underline-offset-2 hover:underline"
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
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1a73e8] px-5 py-2.5 font-body text-sm font-medium text-white transition-colors hover:bg-[#1765cc]"
            >
              Review us on Google
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          {/* Grid cards — Elfsight Grid Card pattern */}
          <div className="grid gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5 lg:grid-cols-2 lg:p-6">
            {TESTIMONIALS.map((review) => (
              <article
                key={review.name + review.relativeTime}
                className="flex h-full min-w-0 flex-col rounded-xl border border-black/6 bg-white p-4 shadow-[0_2px_12px_rgb(0_0_0/0.04)] sm:p-5"
              >
                {/* Author row */}
                <div className="flex items-start gap-3">
                  <ReviewerAvatar name={review.name} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-body text-sm font-semibold text-ink sm:text-[0.95rem]">
                          {review.name}
                        </p>
                        <p className="mt-0.5 font-body text-xs text-muted">
                          {review.relativeTime}
                        </p>
                      </div>
                      <GoogleMark className="mt-0.5 h-5 w-5 shrink-0 opacity-90" />
                    </div>
                    <div className="mt-1.5">
                      <Stars rating={review.rating} size="sm" />
                    </div>
                  </div>
                </div>

                {/* Review body */}
                <blockquote className="mt-3 flex-1">
                  <p className="font-body text-sm leading-relaxed text-[#3c4043] sm:text-[0.9375rem] sm:leading-relaxed">
                    {review.text}
                  </p>
                </blockquote>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
