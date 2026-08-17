import { Phone, ShieldCheck } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  QUOTE_SERVICE_OPTIONS,
  openMailtoQuote,
} from '../data/content'
import { HOURS_LINE } from '../data/company-pages'

export function QuoteCTA() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    openMailtoQuote({
      subject: 'Quote request from homepage',
      lines: [
        `Name: ${String(fd.get('name') ?? '')}`,
        `Phone: ${String(fd.get('phone') ?? '')}`,
        `Email: ${String(fd.get('email') ?? '')}`,
        `Service: ${String(fd.get('service') ?? '')}`,
        '',
        'About the site:',
        String(fd.get('message') ?? ''),
      ],
    })
    setSubmitted(true)
  }

  return (
    <section
      id="get-a-quote"
      className="section-pad relative overflow-hidden steel-grid text-white"
      aria-labelledby="quote-heading"
    >
      <div className="noise-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-site relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
        {/* Stacked + vertically centered against the form — no justify-between void */}
        <div className="flex min-w-0 flex-col justify-center gap-5">
          <div>
            <p className="eyebrow !text-accent">Free estimate</p>
            <div className="accent-bar mt-2.5" />
            <h2 id="quote-heading" className="heading-xl mt-3">
              Get a Real Number
            </h2>
            <p className="mt-2.5 max-w-md text-base leading-relaxed text-white/75">
              Tell us what you need cleared or graded and David gets back to you with a real number.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={PHONE_HREF}
              className="font-display group inline-flex max-w-full flex-wrap items-center gap-3 text-[clamp(1.6rem,5vw,2.5rem)] uppercase text-accent transition-colors hover:text-accent-hover"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-ink sm:h-12 sm:w-12">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <span className="break-all sm:break-normal">{PHONE_DISPLAY}</span>
            </a>
            <p className="text-sm text-white/55">
              Or email{' '}
              <a href={EMAIL_HREF} className="text-white underline underline-offset-2">
                {EMAIL}
              </a>
              . {HOURS_LINE}.
            </p>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              'Owner quotes every job',
              'BBB A+ accredited',
              'Licensed & insured',
              'Written on-site estimates',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85"
              >
                <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 rounded-xl border border-white/10 bg-white p-3.5 text-ink shadow-[0_24px_60px_rgb(0_0_0/0.35)] sm:rounded-2xl sm:p-5 lg:p-6">
          {submitted ? (
            <div className="flex min-h-[14rem] flex-col items-center justify-center py-6 text-center">
              <p className="font-display text-3xl uppercase">Request received</p>
              <p className="mt-3 max-w-sm text-muted">
                Thanks — David will follow up. For the fastest reply, call{' '}
                <a href={PHONE_HREF} className="font-semibold text-ink underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-end justify-between gap-4 border-b border-black/8 pb-4">
                <div>
                  <p className="font-display text-xl uppercase sm:text-2xl">Request a quote</p>
                  <p className="mt-1 font-body text-sm text-muted">
                    Usually same-week site visits on commercial work.
                  </p>
                </div>
                <Link to="/get-a-quote" className="hidden text-sm font-medium text-muted underline sm:inline">
                  Full form →
                </Link>
              </div>
              <form onSubmit={onSubmit} className="space-y-3" noValidate>
                <div>
                  <label htmlFor="quote-name" className="mb-1 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="min-h-11 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-phone" className="mb-1 block text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="min-h-11 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="mb-1 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="min-h-11 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="quote-service" className="mb-1 block text-sm font-medium">
                    What do you need?
                  </label>
                  <select
                    id="quote-service"
                    name="service"
                    className="min-h-11 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                    defaultValue=""
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
                <div>
                  <label htmlFor="quote-message" className="mb-1 block text-sm font-medium">
                    Tell us about the site
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Location, acreage, timeline — whatever you know."
                    className="w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <button type="submit" className="btn-primary w-full !min-h-11">
                  GET A QUOTE
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
