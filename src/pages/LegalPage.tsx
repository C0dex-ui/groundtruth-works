import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { INTERIOR_IMAGES } from '../data/content'
import { PRIVACY, TERMS } from '../data/company-pages'

type LegalKind = 'privacy' | 'terms'

export function LegalPage({ kind }: { kind: LegalKind }) {
  const doc = kind === 'privacy' ? PRIVACY : TERMS
  const image = kind === 'privacy' ? INTERIOR_IMAGES.privacy : INTERIOR_IMAGES.terms

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: doc.title },
        ]}
        eyebrow="Legal"
        title={doc.title}
        lead={
          <>
            <span className="block text-sm text-white/70">{doc.updated}</span>
            <span className="mt-3 block rounded-xl border border-white/20 bg-ink/50 px-4 py-3 text-sm leading-relaxed text-white/80 backdrop-blur-sm">
              {doc.notice}
            </span>
          </>
        }
        primaryCta={{ label: 'Back to Home', href: '/' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
        image={image}
        imageAlt=""
      />

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl space-y-6">
          {doc.sections.map((section) => (
            <article key={section.title}>
              <h2 className="heading-md text-ink">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
