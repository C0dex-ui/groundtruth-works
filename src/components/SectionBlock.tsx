import type { ReactNode } from 'react'

type SectionBlockProps = {
  id?: string
  eyebrow?: string
  title: string
  lead?: ReactNode
  children: ReactNode
  tone?: 'paper' | 'white' | 'ink'
  className?: string
}

export function SectionBlock({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = 'paper',
  className = '',
}: SectionBlockProps) {
  const bg =
    tone === 'white' ? 'bg-white' : tone === 'ink' ? 'steel-grid text-white' : 'bg-paper'

  return (
    <section id={id} className={`section-pad ${bg} ${className}`}>
      <div className="container-site">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className={`eyebrow ${tone === 'ink' ? '!text-accent' : ''}`}>{eyebrow}</p>
          )}
          <div className="accent-bar mt-3" />
          <h2
            className={`heading-xl mt-4 ${tone === 'ink' ? 'text-white' : 'text-ink'}`}
          >
            {title}
          </h2>
          {lead && (
            <div
              className={`mt-3 text-base leading-relaxed sm:text-lg ${
                tone === 'ink' ? 'text-white/75' : 'text-muted'
              }`}
            >
              {lead}
            </div>
          )}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
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
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="card-industrial rounded-2xl p-5 sm:p-6"
        >
          <h3 className="heading-md text-ink">{item.title}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted">{item.body}</p>
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
    <ol className="grid gap-3 sm:gap-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="card-industrial flex gap-4 rounded-2xl p-4 sm:gap-5 sm:p-5"
        >
          <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-lg text-accent">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <h3 className="heading-md text-ink">{step.title}</h3>
            <p className="mt-1.5 font-body text-sm leading-relaxed text-muted sm:text-base">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-black/8 rounded-2xl border border-black/8 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 sm:px-6">
          <summary className="cursor-pointer list-none font-condensed text-base uppercase tracking-[0.04em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.q}
              <span className="mt-0.5 text-accent transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-muted sm:text-base">
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
