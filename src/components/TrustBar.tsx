import { BadgeCheck, Clock3, FileCheck2, Shield } from 'lucide-react'
import { TRUST } from '../data/content'

const ICONS = [BadgeCheck, Clock3, Shield, FileCheck2]

export function TrustBar() {
  return (
    <section className="relative z-10 border-y border-black/10 bg-white" aria-label="Trust signals">
      <div className="container-site grid grid-cols-2 divide-x divide-y divide-black/8 md:grid-cols-4 md:divide-y-0">
        {TRUST.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <div
              key={item.label}
              className="flex min-w-0 items-start gap-2.5 px-3 py-3.5 sm:gap-3 sm:px-5 sm:py-4"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-accent sm:h-9 sm:w-9">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[clamp(1.05rem,2.4vw,1.55rem)] uppercase leading-none text-ink">
                  {item.label}
                </p>
                <p className="label mt-1 text-[0.68rem] leading-tight text-ink/75 sm:text-[0.78rem]">
                  {item.detail}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
