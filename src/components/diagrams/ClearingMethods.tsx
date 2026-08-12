/**
 * Three ways to clear a tract — visual icons + comparison from
 * groundtruth-works.lovable.app/services/land-clearing
 */

function ForestryMulchingIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      {/* Sky */}
      <rect x="0" y="0" width="200" height="120" fill="#ffffff" />
      {/* Mulch mat (lime) over intact soil */}
      <rect x="0" y="78" width="200" height="14" fill="#c2ff36" />
      <rect x="0" y="92" width="200" height="28" fill="#0a0a0a" />
      {/* Stumps left in place */}
      {[40, 80, 120, 160].map((x) => (
        <rect key={x} x={x - 5} y={68} width="10" height="10" fill="#0a0a0a" />
      ))}
    </svg>
  )
}

function GrubbingIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect x="0" y="0" width="200" height="120" fill="#ffffff" />
      {/* Bare soil surface */}
      <rect x="0" y="82" width="200" height="10" fill="#c2ff36" />
      <rect x="0" y="92" width="200" height="28" fill="#0a0a0a" />
      {/* Root-ball voids backfilled (lime notches into black) */}
      {[45, 100, 155].map((x) => (
        <path
          key={x}
          d={`M ${x - 18} 92 L ${x} 108 L ${x + 18} 92 Z`}
          fill="#c2ff36"
        />
      ))}
    </svg>
  )
}

function SelectiveClearingIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect x="0" y="0" width="200" height="120" fill="#ffffff" />
      <rect x="0" y="88" width="200" height="10" fill="#c2ff36" />
      <rect x="0" y="98" width="200" height="22" fill="#0a0a0a" />
      {/* Standing trees */}
      {[50, 100, 150].map((x) => (
        <g key={x}>
          <rect x={x - 2} y={58} width="4" height="30" fill="#0a0a0a" />
          <path d={`M ${x} 28 L ${x + 22} 62 L ${x - 22} 62 Z`} fill="#0a0a0a" />
        </g>
      ))}
    </svg>
  )
}

const METHODS = [
  {
    title: 'Forestry mulching',
    summary: 'Mulch mat over intact soil. Stumps and roots stay in the ground.',
    speed: 'Fastest — several acres a day in light to moderate growth',
    cost: 'Lowest per acre',
    debris: 'Ground in place and left as a mat that holds soil',
    best: 'Pasture reclamation, trails, fence lines, fuel reduction, solar prep where stumps can stay',
    Icon: ForestryMulchingIcon,
  },
  {
    title: 'Grubbing and haul-off',
    summary: 'Bare soil, stumps and root balls pulled, holes backfilled, debris gone.',
    speed: 'Slowest — often a day or more per acre with haul cycles',
    cost: 'Highest per acre',
    debris: 'Loaded and hauled to a legal disposal or grinding site, or burned by permit',
    best: 'Anything structural: building pads, slabs, parking, roads, utilities',
    Icon: GrubbingIcon,
  },
  {
    title: 'Selective clearing',
    summary: 'Thinned canopy with the trees you chose still standing.',
    speed: 'Moderate — driven by how much has to be worked around',
    cost: 'Middle, and rises with how tight the selection is',
    debris: 'Mulched, chipped or hauled depending on access and what stays',
    best: 'Homesites, driveway corridors, view and access lines, tracts kept wooded',
    Icon: SelectiveClearingIcon,
  },
] as const

export function ClearingMethods() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="clear-methods-heading">
      <div className="container-site">
        <p className="eyebrow">Land clearing</p>
        <div className="accent-bar mt-2.5" />
        <h2 id="clear-methods-heading" className="heading-xl mt-3 text-ink">
          Three ways to clear a tract
        </h2>
        <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-muted">
          Same wooded parcel, three completely different results — and the choice is worth more than
          anything else a clearing contractor decides for you.
        </p>

        {/* Visual diagrams — Lovable icon style */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {METHODS.map(({ title, summary, Icon }) => (
            <figure key={title} className="min-w-0">
              <div className="aspect-[16/9] overflow-hidden rounded-sm border-2 border-ink bg-white">
                <Icon />
              </div>
              <figcaption className="mt-2.5">
                <h3 className="font-display text-lg uppercase leading-tight text-ink sm:text-xl">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{summary}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Comparison table under the icons */}
        <div className="table-scroll mt-6 overflow-x-auto rounded-xl border border-black/8 bg-white">
          <table className="w-full min-w-[40rem] text-left text-sm sm:min-w-[48rem]">
            <thead className="border-b border-black/8 bg-paper">
              <tr>
                <th className="label px-3 py-2.5 text-xs text-muted">Method</th>
                {METHODS.map((m) => (
                  <th key={m.title} className="px-3 py-2.5 font-display text-sm uppercase text-ink sm:text-base">
                    {m.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ['Speed', 'speed'],
                  ['Cost (relative)', 'cost'],
                  ['Debris', 'debris'],
                  ['Best use', 'best'],
                ] as const
              ).map(([label, key]) => (
                <tr key={label} className="border-b border-black/6 last:border-0">
                  <td className="label px-3 py-2.5 text-xs text-muted">{label}</td>
                  {METHODS.map((m) => (
                    <td
                      key={m.title}
                      className={`px-3 py-2.5 ${key === 'best' ? 'font-medium text-ink' : 'text-muted'}`}
                    >
                      {m[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 max-w-2xl font-display text-lg uppercase leading-snug text-ink sm:text-xl">
          Mulch a tract you meant to pave and you pay for it twice.
        </p>
      </div>
    </section>
  )
}
