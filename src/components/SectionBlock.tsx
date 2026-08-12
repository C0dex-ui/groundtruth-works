import type { ReactNode } from 'react'

type SectionBlockProps = {
  id?: string
  eyebrow?: string
  title: string
  lead?: ReactNode
  children: ReactNode
  tone?: 'paper' | 'white' | 'ink'
  className?: string
  /**
   * Optional photo on the right (desktop). Use for plain prose intros so the
   * section is not a text-only column with empty space.
   * Path must be unique to this route (INTERIOR_IMAGES).
   */
  image?: string
  imageAlt?: string
}

export function SectionBlock({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = 'paper',
  className = '',
  image,
  imageAlt = '',
}: SectionBlockProps) {
  const bg =
    tone === 'white' ? 'bg-white' : tone === 'ink' ? 'steel-grid text-white' : 'bg-paper'
  const titleClass = tone === 'ink' ? 'text-white' : 'text-ink'
  const leadClass = tone === 'ink' ? 'text-white/75' : 'text-muted'

  const header = (
    <>
      {eyebrow && (
        <p className={`eyebrow ${tone === 'ink' ? '!text-accent' : ''}`}>{eyebrow}</p>
      )}
      <div className="accent-bar mt-2.5" />
      <h2 className={`heading-xl mt-3 ${titleClass}`}>{title}</h2>
      {lead && (
        <div className={`mt-2.5 text-base leading-relaxed sm:text-[1.05rem] ${leadClass}`}>
          {lead}
        </div>
      )}
    </>
  )

  const media = image ? (
    <div className="card-industrial relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[5/3] lg:sticky lg:top-28 lg:aspect-[4/3]">
      <img
        src={image}
        alt={imageAlt}
        className="img-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent"
        aria-hidden
      />
    </div>
  ) : null

  return (
    <section id={id} className={`section-pad ${bg} ${className}`}>
      <div className="container-site">
        {image ? (
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-8">
            {/* Media first on very small screens for visual interest, then copy */}
            <div className="order-2 min-w-0 lg:order-1">
              {header}
              <div className="mt-4 sm:mt-6">{children}</div>
            </div>
            <div className="order-1 lg:order-2">{media}</div>
          </div>
        ) : (
          <>
            <div className="max-w-3xl min-w-0">{header}</div>
            <div className="mt-4 min-w-0 sm:mt-6">{children}</div>
          </>
        )}
      </div>
    </section>
  )
}

export function CardGrid({
  items,
}: {
  items: { title: string; body: string }[]
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="card-industrial rounded-xl p-4 sm:p-5"
        >
          <h3 className="heading-md text-ink">{item.title}</h3>
          <p className="mt-1.5 font-body text-sm leading-relaxed text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  )
}

export function ProcessList({
  steps,
}: {
  steps: { title: string; body: string }[]
}) {
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3.5">
      {steps.map((step, i) => (
        <li key={step.title} className="h-full min-w-0">
          <article className="card-industrial flex h-full gap-2.5 rounded-xl p-3 sm:gap-3.5 sm:p-4">
            <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-sm text-accent sm:h-10 sm:w-10 sm:text-base">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="heading-md text-ink">{step.title}</h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  )
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-black/8 rounded-xl border border-black/8 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-4 py-3 sm:px-5">
          <summary className="cursor-pointer list-none font-condensed text-sm uppercase tracking-[0.04em] text-ink marker:content-none sm:text-base [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-3">
              {item.q}
              <span className="mt-0.5 text-accent transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-2 max-w-3xl font-body text-sm leading-relaxed text-muted">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  )
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 rounded-lg border border-black/8 bg-white px-3 py-2.5 text-sm text-ink"
        >
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  )
}
