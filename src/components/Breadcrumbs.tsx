import { Link } from 'react-router-dom'

export type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[]
  /** Light text for full-bleed dark / photo heroes */
  light?: boolean
}) {
  return (
    <nav
      className={`mb-6 text-sm ${light ? 'text-white/55' : 'text-muted'}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {item.href && !last ? (
                <Link
                  to={item.href}
                  className={light ? 'hover:text-white' : 'hover:text-ink'}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? (light ? 'font-medium text-white' : 'font-medium text-ink') : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
