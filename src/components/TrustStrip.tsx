import { BadgeCheck, Clock3, FileCheck2, Shield } from 'lucide-react'
import { TRUST } from '../data/content'

const ICONS = [BadgeCheck, Clock3, Shield, FileCheck2]

/** Compact trust signals for interior heroes (same copy as homepage TrustBar). */
export function TrustStrip({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 ${className}`}
      aria-label="Trust signals"
    >
      {TRUST.map((item, i) => {
        const Icon = ICONS[i]
        return (
          <div
            key={item.label}
            className="flex items-start gap-2 rounded-xl border border-black/8 bg-white px-3 py-3 shadow-[var(--shadow-card)]"
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ink text-accent">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg uppercase leading-none text-ink">{item.label}</p>
              <p className="mt-1 text-[0.7rem] leading-tight text-muted">{item.detail}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
