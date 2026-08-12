import { ExternalLink, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { SectionBlock } from '../components/SectionBlock'
import {
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  RATINGS,
  TESTIMONIALS,
} from '../data/content'
import { REVIEWS_PAGE } from '../data/insights'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-[#fbbc05] text-[#fbbc05]' : 'fill-transparent text-[#dadce0]'
          }`}
          aria-hidden
        />
      ))}
    </div>
  )
}

export function ReviewsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reviews' },
        ]}
        eyebrow="Trust"
        title={REVIEWS_PAGE.heroTitle}
        lead={REVIEWS_PAGE.lead}
        primaryCta={{ label: `Call ${PHONE_DISPLAY}`, href: PHONE_HREF }}
        secondaryCta={{ label: 'See project record', href: '/projects' }}
      />

      <SectionBlock title="Verified credentials" tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="card-industrial rounded-2xl p-5 sm:p-6">
            <p className="label text-xs text-muted">BBB Accredited</p>
            <p className="font-display mt-2 text-2xl uppercase text-ink">
              {RATINGS.bbb.grade} Rated
            </p>
            <p className="mt-2 text-sm text-muted">
              Better Business Bureau accredited business. Profile on file with BBB.
            </p>
            <a
              href={RATINGS.bbb.href}
              target="_blank"
              rel="noreferrer"
              className="label mt-4 inline-flex items-center gap-1 text-sm text-ink hover:underline"
            >
              View BBB profile
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </article>

          <article className="card-industrial rounded-2xl p-5 sm:p-6">
            <p className="label text-xs text-muted">Google Business Profile</p>
            <p className="font-display mt-2 text-2xl uppercase text-ink">
              {RATINGS.google.score} · {RATINGS.google.reviewCount} reviews
            </p>
            <p className="mt-2 text-sm text-muted">
              Live Google rating for Growfully LLC. Keep scores in sync with the Maps listing.
            </p>
            <a
              href={RATINGS.google.href}
              target="_blank"
              rel="noreferrer"
              className="label mt-4 inline-flex items-center gap-1 text-sm text-ink hover:underline"
            >
              View on Google
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </article>

          <article className="card-industrial rounded-2xl p-5 sm:p-6">
            <p className="label text-xs text-muted">Years in business</p>
            <p className="font-display mt-2 text-2xl uppercase text-ink">
              24 years · since {RATINGS.sinceYear}
            </p>
            <p className="mt-2 text-sm text-muted">
              Same region under the same owner, David Culberson. Licensed and insured; certificates
              issued before mobilisation.
            </p>
          </article>
        </div>
      </SectionBlock>

      <SectionBlock title={REVIEWS_PAGE.whichTitle} tone="paper">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {REVIEWS_PAGE.which.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        title="Google reviews from the live profile"
        lead="Attributed, unedited reviews from the Growfully LLC Google Business Profile."
        tone="white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.name}
              className="card-industrial flex h-full flex-col rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-black/5"
                    loading="lazy"
                  />
                ) : (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-accent">
                    {review.name.charAt(0)}
                  </span>
                )}
                <div>
                  <p className="font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-muted">{review.relativeTime}</p>
                </div>
              </div>
              <div className="mt-3">
                <Stars rating={review.rating} />
              </div>
              {review.text ? (
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{review.text}</p>
              ) : (
                <p className="mt-3 flex-1 text-sm text-muted">
                  Rated {review.rating}.0 on Google (star rating only).
                </p>
              )}
              <p className="label mt-4 text-[0.7rem] text-muted">Source: Google</p>
            </article>
          ))}
        </div>
        <a
          href={RATINGS.google.href}
          target="_blank"
          rel="noreferrer"
          className="btn-outline mt-8 inline-flex"
        >
          Read on Google
          <ExternalLink className="h-4 w-4" />
        </a>
      </SectionBlock>

      <SectionBlock title={REVIEWS_PAGE.leaveTitle} tone="paper">
        <p className="max-w-2xl text-base leading-relaxed text-muted">{REVIEWS_PAGE.leave}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={RATINGS.google.href}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Leave a Google review
          </a>
          <a href={EMAIL_HREF} className="btn-outline">
            Or email growfullyllc@gmail.com
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">
          Want a reference? David Culberson will put you in touch with a general contractor or owner
          whose site he has worked on.{' '}
          <Link to="/contact" className="font-medium text-ink underline">
            Contact
          </Link>{' '}
          or call {PHONE_DISPLAY}.
        </p>
      </SectionBlock>

      <InteriorCta />
    </PageShell>
  )
}
