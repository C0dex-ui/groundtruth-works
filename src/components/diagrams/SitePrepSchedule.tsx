/** 12-week pad schedule — Lovable /services/site-preparation */

const PHASES = [
  { name: 'Survey & staking', start: 1, end: 1, ours: false },
  { name: 'Clearing & grubbing', start: 2, end: 3, ours: true },
  { name: 'Erosion control', start: 2, end: 9, ours: true },
  { name: 'Strip & stockpile topsoil', start: 3, end: 3, ours: true },
  { name: 'Mass cut & fill', start: 4, end: 6, ours: true },
  { name: 'Underground utilities', start: 6, end: 8, ours: false },
  { name: 'Fine grade & compact pad', start: 8, end: 9, ours: true },
  { name: 'Stone base', start: 9, end: 9, ours: true },
  { name: 'Foundation & footings', start: 10, end: 12, ours: false },
] as const

export function SitePrepSchedule() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="schedule-heading">
      <div className="container-site">
        <p className="eyebrow">Site preparation</p>
        <div className="accent-bar mt-2.5" />
        <h2 id="schedule-heading" className="heading-xl mt-3 text-ink">
          Where site prep sits in your schedule
        </h2>
        <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-muted">
          For a GC, the useful question is not what site prep includes — it is when it blocks you.
          Here is a typical twelve week strip on a small commercial pad, with our scope marked.
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-6 rounded-sm bg-accent" aria-hidden />
            Growfully scope
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-6 rounded-sm bg-ink/20" aria-hidden />
            Other trades
          </span>
        </div>

        <div className="card-industrial mt-6 overflow-x-auto rounded-2xl bg-white p-4 sm:p-6">
          <p className="label mb-4 text-xs text-muted">
            Site preparation phases against a twelve week construction schedule
          </p>
          <div className="min-w-[36rem]">
            <div className="mb-2 grid grid-cols-[10rem_1fr] gap-2 text-xs text-muted sm:grid-cols-[12rem_1fr]">
              <span />
              <div className="grid grid-cols-12 gap-0.5">
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} className="text-center">
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-2">
              {PHASES.map((phase) => {
                const span = phase.end - phase.start + 1
                const startCol = phase.start
                return (
                  <li
                    key={phase.name}
                    className="grid grid-cols-[10rem_1fr] items-center gap-2 sm:grid-cols-[12rem_1fr]"
                  >
                    <span className="truncate text-sm font-medium text-ink">{phase.name}</span>
                    <div className="relative grid h-9 grid-cols-12 gap-0.5 rounded-md bg-paper">
                      <div
                        className={`absolute top-1 bottom-1 rounded-sm ${
                          phase.ours ? 'bg-accent' : 'bg-ink/25'
                        }`}
                        style={{
                          left: `calc(${((startCol - 1) / 12) * 100}% + 2px)`,
                          width: `calc(${(span / 12) * 100}% - 4px)`,
                        }}
                        title={`Week ${phase.start}${phase.end !== phase.start ? `–${phase.end}` : ''}`}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <p className="mt-4 text-sm text-muted">
            Illustrative sequence for a small commercial pad. Durations shift with acreage, weather
            and inspection holds.
          </p>
        </div>
      </div>
    </section>
  )
}
