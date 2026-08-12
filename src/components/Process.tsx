import { Link } from 'react-router-dom'
import { PROCESS } from '../data/content'
import { ScrollCard } from './ScrollCard'

/** Black + lime process diagrams (Lovable homepage style). */
function ClearIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      {/* White sky — same as the other process diagrams */}
      <rect width="200" height="120" fill="#ffffff" />
      {/* Rolling ground */}
      <path d="M0 78 Q 50 58 100 72 T 200 68 L 200 120 L 0 120 Z" fill="#0a0a0a" />
      {/* Thin lime accent along the ground line (brand, not sky) */}
      <path
        d="M0 78 Q 50 58 100 72 T 200 68 L 200 74 Q 150 76 100 78 T 0 84 Z"
        fill="#c2ff36"
      />
      {/* Three pines */}
      {[48, 100, 152].map((x) => (
        <g key={x}>
          <rect x={x - 2} y={58} width="4" height="22" fill="#0a0a0a" />
          <path d={`M ${x} 28 L ${x + 18} 62 L ${x - 18} 62 Z`} fill="#0a0a0a" />
          <path d={`M ${x} 38 L ${x + 14} 58 L ${x - 14} 58 Z`} fill="#0a0a0a" />
        </g>
      ))}
    </svg>
  )
}

function StripIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect width="200" height="120" fill="#ffffff" />
      {/* Stripped topsoil mound (lime) */}
      <path d="M0 72 Q 40 48 100 58 T 200 62 L 200 88 L 0 88 Z" fill="#c2ff36" />
      {/* Competent subgrade */}
      <rect x="0" y="88" width="200" height="32" fill="#0a0a0a" />
    </svg>
  )
}

function GradeIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect width="200" height="120" fill="#ffffff" />
      {/* Finished grade — slight undulation then solid mass */}
      <path d="M0 70 Q 50 58 100 66 T 200 62 L 200 120 L 0 120 Z" fill="#0a0a0a" />
    </svg>
  )
}

function CompactIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect width="200" height="120" fill="#ffffff" />
      {/* Thin densified surface band */}
      <rect x="0" y="78" width="200" height="10" fill="#c2ff36" />
      <rect x="0" y="88" width="200" height="32" fill="#0a0a0a" />
    </svg>
  )
}

function BaseIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect width="200" height="120" fill="#ffffff" />
      {/* Base stone layer */}
      <rect x="0" y="72" width="200" height="18" fill="#c2ff36" />
      <rect x="0" y="90" width="200" height="30" fill="#0a0a0a" />
    </svg>
  )
}

const ICONS = [ClearIcon, StripIcon, GradeIcon, CompactIcon, BaseIcon] as const

export function Process() {
  return (
    <section className="section-pad steel-grid text-white" aria-labelledby="process-heading">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow !text-accent">Process</p>
          <div className="accent-bar mt-2.5" />
          <h2 id="process-heading" className="heading-xl mt-3">
            How a Site Gets Built
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-white/70">
            Raw ground to a pad you can build on, in five stages. We do all five, so nobody is
            waiting on another contractor to finish the dirt.
          </p>
        </div>

        <ol className="mt-6 grid list-none grid-cols-1 gap-3 p-0 min-[420px]:grid-cols-2 sm:gap-3.5 lg:grid-cols-3 xl:grid-cols-5">
          {PROCESS.map((stage, i) => {
            const Icon = ICONS[i] ?? ClearIcon
            return (
              <li key={stage.title} className="h-full min-w-0">
                <ScrollCard delay={i * 60} className="h-full">
                  <Link
                    to={stage.href}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/8"
                  >
                    <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-white sm:aspect-[5/3]">
                      <Icon />
                    </div>
                    <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                      <h3 className="heading-md text-white">
                        {stage.step}. {stage.title}
                      </h3>
                      <p className="mt-1.5 font-body text-sm leading-relaxed text-white/65">
                        {stage.description}
                      </p>
                    </div>
                  </Link>
                </ScrollCard>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
