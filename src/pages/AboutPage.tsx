import { Link } from 'react-router-dom'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { CardGrid, SectionBlock } from '../components/SectionBlock'
import { TrustStrip } from '../components/TrustStrip'
import { INTERIOR_IMAGES } from '../data/content'
import { ABOUT } from '../data/company-pages'

/**
 * About page — body copy from groundtruth-works.lovable.app/about.
 * No invented license numbers, insurance limits, or equipment inventory.
 */
export function AboutPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
        eyebrow="About Growfully"
        title={ABOUT.heroTitle}
        lead={ABOUT.lead}
        primaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
        image={INTERIOR_IMAGES.about}
        imageAlt="Site clearing work in Central Arkansas"
      >
        <TrustStrip />
      </PageHero>

      <SectionBlock title={ABOUT.whyTitle} tone="white">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {ABOUT.why.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-sm italic text-muted">
          David Culberson, owner and operator, Mayflower, AR.
        </p>
      </SectionBlock>

      <SectionBlock title={ABOUT.yearsTitle} tone="paper">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {ABOUT.years.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT.facts.map((fact) => (
            <div key={fact.label} className="card-industrial rounded-2xl p-5">
              <dt className="label text-xs text-muted">{fact.label}</dt>
              <dd className="mt-2 font-body text-base font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </SectionBlock>

      <SectionBlock title="Equipment" lead={ABOUT.equipmentIntro} tone="white">
        <div className="card-industrial max-w-2xl rounded-2xl border-dashed p-6">
          <p className="label text-xs text-muted">Equipment list</p>
          <p className="mt-2 text-base text-ink">Not published yet</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            The machine inventory stays off the website until every line is confirmed. Ask on the site
            visit for exactly what is coming to your job.
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{ABOUT.equipmentClose}</p>
      </SectionBlock>

      <SectionBlock title="Licensing and insurance" tone="paper">
        <dl className="grid gap-3 sm:grid-cols-2">
          {ABOUT.licensing.map((item) => (
            <div key={item.label} className="card-industrial rounded-2xl p-5">
              <dt className="label text-xs text-muted">{item.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{ABOUT.licensingClose}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn-outline">
            Request certificates
          </Link>
          <a href="tel:+15012696860" className="btn-primary">
            Call (501) 269-6860
          </a>
        </div>
      </SectionBlock>

      <SectionBlock title="How we work" tone="white">
        <CardGrid items={[...ABOUT.howWeWork]} />
      </SectionBlock>

      <InteriorCta
        title="Talk to the owner"
        lead="Call (501) 269-6860 or email growfullyllc@gmail.com. Mayflower, AR · Serving Central Arkansas."
      />
    </PageShell>
  )
}
