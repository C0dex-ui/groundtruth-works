import { BadgeCheck, Clock3, FileCheck2, Shield } from 'lucide-react'
import { TRUST } from '../data/content'

const ICONS = [BadgeCheck, Clock3, Shield, FileCheck2]

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-0 border-y border-black/10 bg-white" aria-label="Trust signals">
      <div className="container-site grid grid-cols-2 divide-x divide-y divide-black/8 md:grid-cols-4 md:divide-y-0">
        {TRUST.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <div
              key={item.label}
              className="flex items-start gap-3 px-4 py-6 sm:gap-4 sm:px-6 sm:py-7"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-condensed text-xl uppercase tracking-wide text-ink sm:text-2xl">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm leading-snug text-muted">{item.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
