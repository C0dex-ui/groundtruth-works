import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { CardGrid, SectionBlock } from '../components/SectionBlock'
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  QUOTE_SERVICE_OPTIONS,
} from '../data/content'
import { HOURS_LINE, QUOTE_PAGE } from '../data/company-pages'

export function QuotePage() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageShell hideMobileBar>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Get a quote' },
        ]}
        eyebrow="Free estimate"
        title={QUOTE_PAGE.heroTitle}
        lead={QUOTE_PAGE.lead}
        primaryCta={{ label: `Call ${PHONE_DISPLAY}`, href: PHONE_HREF }}
        secondaryCta={{ label: EMAIL, href: EMAIL_HREF, external: true }}
        dark
      >
        <p className="mt-6 text-sm text-white/55">
          Mayflower, AR · Serving Central Arkansas · {HOURS_LINE}
        </p>
      </PageHero>

      <SectionBlock title="Scope your job" tone="white">
        <div className="mx-auto max-w-2xl">
          <div className="card-industrial rounded-2xl p-5 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <p className="font-display text-3xl uppercase">Request received</p>
                <p className="mt-3 text-muted">
                  Thanks — David will follow up. For the fastest reply, call{' '}
                  <a href={PHONE_HREF} className="font-semibold text-ink underline">
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="q-service" className="mb-1.5 block text-sm font-medium">
                    What do you need?
                  </label>
                  <select
                    id="q-service"
                    name="service"
                    className="min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {QUOTE_SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="q-name"
                      name="name"
                      required
                      autoComplete="name"
                      className="min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="q-phone" className="mb-1.5 block text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="q-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="q-email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="q-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="q-location" className="mb-1.5 block text-sm font-medium">
                    Site location (city / address / pin)
                  </label>
                  <input
                    id="q-location"
                    name="location"
                    className="min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="q-message" className="mb-1.5 block text-sm font-medium">
                    Tell us about the site
                  </label>
                  <textarea
                    id="q-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Acreage, condition, access, timeline — whatever you know."
                    className="w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <button type="submit" className="btn-primary w-full !min-h-12">
                  GET A QUOTE
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Why send it here" tone="paper">
        <CardGrid items={[...QUOTE_PAGE.why]} />
        <div className="mt-10 text-center">
          <p className="text-muted">Rather talk it through?</p>
          <a
            href={PHONE_HREF}
            className="font-display mt-2 inline-block text-3xl uppercase text-ink hover:text-accent-dim"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </SectionBlock>
    </PageShell>
  )
}
