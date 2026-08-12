import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { SectionBlock } from '../components/SectionBlock'
import { EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, RATINGS } from '../data/content'
import { REVIEWS_PAGE } from '../data/insights'

/**
 * Reviews page — copy structure matches groundtruth-works.lovable.app/reviews.
 * Do not invent ratings, license numbers, or testimonials.
 * Lovable explicitly keeps “Reviews of current service lines” empty until tagged commercial reviews exist.
 */
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
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="card-industrial rounded-2xl p-5 sm:p-6">
            <p className="label text-xs text-muted">BBB Accredited</p>
            <p className="font-display mt-2 text-xl uppercase text-ink sm:text-2xl">
              A+ rating
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Better Business Bureau accredited business with an A+ rating.
            </p>
            <a
              href={RATINGS.bbb.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-ink underline"
            >
              View BBB profile
            </a>
          </article>

          <article className="card-industrial rounded-2xl p-5 sm:p-6">
            <p className="label text-xs text-muted">HomeAdvisor</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Rating and review count are not published on this site until they are read off the live
              HomeAdvisor profile the same day. Ask David for the current profile link.
            </p>
          </article>

          <article className="card-industrial rounded-2xl p-5 sm:p-6">
            <p className="label text-xs text-muted">Google Business Profile</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We will not print a rating number on this page until the figure is verified on the
              profile the same day. Open the live listing to see current reviews.
            </p>
            <a
              href={RATINGS.google.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-ink underline"
            >
              Open Google listing
            </a>
          </article>

          <article className="card-industrial rounded-2xl p-5 sm:p-6">
            <p className="label text-xs text-muted">Years in business</p>
            <p className="font-display mt-2 text-xl uppercase text-ink sm:text-2xl">
              24 years, since 2002
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              In the same region under the same owner, David Culberson.
            </p>
          </article>

          <article className="card-industrial rounded-2xl p-5 sm:p-6 sm:col-span-2">
            <p className="label text-xs text-muted">Licensed and insured</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              License number and insurance limits are not published as figures on this site. Certificates
              are issued before mobilisation on request. Call or email for current documents.
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

      <SectionBlock title="Reviews of current service lines" tone="white">
        <p className="font-display text-2xl uppercase text-ink">Nothing published here yet.</p>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            We have not yet published a review that describes current commercial site work. Reviews
            from recent clearing, grading and site prep jobs are being collected now and will appear
            here — tagged, attributed and unedited — as they come in.
          </p>
          <p>
            In the meantime, if you want a reference, ask. David Culberson will put you in touch with
            a general contractor or owner whose site he has worked on. Call{' '}
            <a href={PHONE_HREF} className="font-medium text-ink underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
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
            Leave a review on Google
          </a>
          <a href={EMAIL_HREF} className="btn-outline">
            Or email growfullyllc@gmail.com
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">
          Prefer a call?{' '}
          <Link to="/contact" className="font-medium text-ink underline">
            Contact
          </Link>{' '}
          or {PHONE_DISPLAY}.
        </p>
      </SectionBlock>
    </PageShell>
  )
}
