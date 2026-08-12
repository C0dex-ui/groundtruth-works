import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { ProcessList, SectionBlock } from '../components/SectionBlock'
import {
  EMAIL,
  EMAIL_HREF,
  INTERIOR_IMAGES,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_CITIES,
  SERVICES,
  SMS_HREF,
  openMailtoQuote,
} from '../data/content'
import { CONTACT_PAGE, HOURS_DETAIL } from '../data/company-pages'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    openMailtoQuote({
      subject: 'Contact from growfully site',
      lines: [
        `Name: ${String(fd.get('name') ?? '')}`,
        `Phone or email: ${String(fd.get('contact') ?? '')}`,
        '',
        'About the site:',
        String(fd.get('message') ?? ''),
      ],
    })
    setSubmitted(true)
  }

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
        eyebrow="Contact"
        title={CONTACT_PAGE.heroTitle}
        lead={
          <>
            {CONTACT_PAGE.lead}
            <a
              href={PHONE_HREF}
              className="font-display mt-4 block break-all text-[clamp(1.5rem,8vw,3rem)] uppercase tracking-tight text-accent hover:text-accent-hover"
            >
              {PHONE_DISPLAY}
            </a>
          </>
        }
        primaryCta={{ label: 'Call now', href: PHONE_HREF }}
        secondaryCta={{
          label: 'Text the same number',
          href: SMS_HREF,
        }}
        image={INTERIOR_IMAGES.contact}
        imageAlt="Growfully crew on a Central Arkansas site"
      />

      <SectionBlock title="Contact details" tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-industrial rounded-2xl p-5">
            <Phone className="h-5 w-5 text-accent" aria-hidden />
            <p className="label mt-3 text-xs text-muted">Phone</p>
            <a href={PHONE_HREF} className="mt-2 block text-base font-medium text-ink hover:underline">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="card-industrial rounded-2xl p-5">
            <Mail className="h-5 w-5 text-accent" aria-hidden />
            <p className="label mt-3 text-xs text-muted">Email</p>
            <a href={EMAIL_HREF} className="mt-2 block text-base font-medium text-ink hover:underline">
              {EMAIL}
            </a>
          </div>
          <div className="card-industrial rounded-2xl p-5">
            <MapPin className="h-5 w-5 text-accent" aria-hidden />
            <p className="label mt-3 text-xs text-muted">Service area</p>
            <Link to="/service-areas" className="mt-2 block text-base font-medium text-ink hover:underline">
              {CONTACT_PAGE.serviceAreaNote}
            </Link>
          </div>
          <div className="card-industrial rounded-2xl p-5">
            <Phone className="h-5 w-5 text-accent" aria-hidden />
            <p className="label mt-3 text-xs text-muted">Hours</p>
            <p className="mt-2 text-base font-medium text-ink">{HOURS_DETAIL}</p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {CONTACT_PAGE.truckNote}
        </p>
      </SectionBlock>

      <SectionBlock
        title="Or send it in writing"
        lead="Three fields. If you would rather scope the whole job — acreage, condition, timeline, photos — use the full quote form instead."
        tone="paper"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="card-industrial rounded-2xl bg-white p-5 sm:p-6">
            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-display text-2xl uppercase">Message received</p>
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
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium">
                    Phone or email
                  </label>
                  <input
                    id="contact-phone"
                    name="contact"
                    required
                    className="min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                    About the site
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send it
                </button>
              </form>
            )}
          </div>
          <div>
            <Link to="/get-a-quote" className="btn-outline">
              Full quote form →
            </Link>
            <p className="mt-4 text-sm text-muted">
              Prefer the multi-step scope form with service selection and more project detail.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title={CONTACT_PAGE.afterTitle} tone="white">
        <ProcessList steps={[...CONTACT_PAGE.after]} />
      </SectionBlock>

      <SectionBlock title="Know what you need already?" tone="paper">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="heading-md text-ink">Services</h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm font-medium text-ink hover:underline">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="heading-md text-ink">Towns</h3>
            <ul className="mt-4 space-y-2">
              {SERVICE_CITIES.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/service-areas/${c.slug}`}
                    className="text-sm font-medium text-ink hover:underline"
                  >
                    Site work in {c.name}, AR
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm font-medium text-ink hover:underline">
                  All service areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionBlock>
    </PageShell>
  )
}
