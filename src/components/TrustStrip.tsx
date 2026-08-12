import { BadgeCheck, Clock3, FileCheck2, Shield } from 'lucide-react'
import { TRUST } from '../data/content'

const ICONS = [BadgeCheck, Clock3, Shield, FileCheck2]

/** Compact trust signals for interior heroes (same copy as homepage TrustBar). */
export function TrustStrip({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 ${className}`}
      aria-label="Trust signals"
    >
      {TRUST.map((item, i) => {
        const Icon = ICONS[i]
        return (
          <div
            key={item.label}
            className="flex min-w-0 items-start gap-1.5 rounded-lg border border-black/8 bg-white px-2 py-2 shadow-[var(--shadow-card)] sm:gap-2 sm:px-2.5 sm:py-2.5"
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink text-accent sm:h-7 sm:w-7">
              <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm uppercase leading-none text-ink sm:text-base">
                {item.label}
              </p>
              <p className="mt-0.5 text-[0.6rem] leading-tight text-muted sm:text-[0.65rem]">
                {item.detail}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
