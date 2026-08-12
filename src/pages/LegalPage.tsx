import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { PRIVACY, TERMS } from '../data/company-pages'

type LegalKind = 'privacy' | 'terms'

export function LegalPage({ kind }: { kind: LegalKind }) {
  const doc = kind === 'privacy' ? PRIVACY : TERMS

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
            <span className="block text-sm text-muted">{doc.updated}</span>
            <span className="mt-3 block rounded-xl border border-black/10 bg-white px-4 py-3 text-sm leading-relaxed text-muted">
              {doc.notice}
            </span>
          </>
        }
        primaryCta={{ label: 'Back to Home', href: '/' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl space-y-10">
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
