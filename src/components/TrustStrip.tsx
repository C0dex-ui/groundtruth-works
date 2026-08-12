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
            className="flex items-start gap-2 rounded-lg border border-black/8 bg-white px-2.5 py-2.5 shadow-[var(--shadow-card)]"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink text-accent">
              <Icon className="h-3.5 w-3.5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-display text-base uppercase leading-none text-ink">{item.label}</p>
              <p className="mt-0.5 text-[0.65rem] leading-tight text-muted">{item.detail}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
