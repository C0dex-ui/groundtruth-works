/** Mulching vs traditional clearing — Lovable /services/forestry-mulching */

function MulchIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect width="200" height="120" fill="#fff" />
      <rect x="0" y="78" width="200" height="14" fill="#c2ff36" />
      <rect x="0" y="92" width="200" height="28" fill="#0a0a0a" />
      {[36, 72, 108, 144, 170].map((x) => (
        <rect key={x} x={x} y={68} width="8" height="10" fill="#0a0a0a" />
      ))}
    </svg>
  )
}

function TraditionalIcon() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <rect width="200" height="120" fill="#fff" />
      {/* Bare open soil */}
      <rect x="0" y="70" width="200" height="50" fill="#0a0a0a" />
      {/* Haul pile / windrow */}
      <ellipse cx="150" cy="78" rx="36" ry="18" fill="#c2ff36" />
      <ellipse cx="150" cy="74" rx="28" ry="12" fill="#0a0a0a" opacity="0.25" />
      {/* Disturbed ground texture */}
      {[30, 55, 80, 105].map((x) => (
        <path
          key={x}
          d={`M ${x} 70 Q ${x + 8} 88 ${x + 16} 70`}
          fill="none"
          stroke="#c2ff36"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}

const ROWS = [
  {
    factor: 'Production',
    mulch:
      'One machine, one pass. Light growth runs an acre or more a day with no second crew behind it.',
    traditional:
      'Slower on paper — dozer, excavator, grapple and trucks — but faster to a truly clean, buildable pad.',
  },
  {
    factor: 'Cost',
    mulch:
      'Lower on light and medium growth because nothing is hauled and no burn permit or pit is involved.',
    traditional: 'Higher, and most of the difference is trucking and disposal, not machine time.',
  },
  {
    factor: 'Soil disturbance',
    mulch:
      'Minimal. Roots stay in place, the ground stays knit together, and a rubber-tracked machine spreads load.',
    traditional:
      'High. Grubbing pulls root balls and leaves loose, open soil across the whole tract.',
  },
  {
    factor: 'Erosion risk',
    mulch:
      'Low. The mulch mat is instant cover that slows sheet flow and holds the surface through a hard rain.',
    traditional:
      'Elevated until stabilized. Bare soil on a slope needs silt fence, seeding or matting right away.',
  },
  {
    factor: 'Debris',
    mulch: 'Nothing leaves. Material is ground and left on the ground as a 2 to 6 inch mat.',
    traditional:
      'Stumps, root balls and slash get piled, then hauled, burned or ground — a real line item.',
  },
  {
    factor: 'Regrowth',
    mulch:
      'Stumps and roots live. Hardwood sprouts and privet come back and need a follow-up in year one or two.',
    traditional:
      'Grubbing removes the root system, so regrowth is genuinely knocked back for good.',
  },
] as const

const WRONG = [
  'You are building on it. A mulch mat is organic material over live stumps — it is not a subgrade, and a geotech will make you strip it anyway.',
  'The timber is large. Above roughly 8 to 10 inches diameter, grinding gets slow and expensive fast; those trees come out cheaper with a machine and a grapple.',
  'You need a permanent pasture or a smooth field. Stumps left in place mean you cannot run a mower or a hay implement over it.',
  'The tract is a briar thicket you want gone for good. Without follow-up, cut-and-mulched invasives sprout back thicker than they started.',
] as const

export function MulchingCompare() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="mulch-compare-heading">
      <div className="container-site">
        <p className="eyebrow">Forestry mulching</p>
        <div className="accent-bar mt-2.5" />
        <h2 id="mulch-compare-heading" className="heading-xl mt-3 text-ink">
          Mulching vs traditional clearing
        </h2>
        <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-muted">
          Straight comparison, no thumb on the scale. Both methods are on our own truck list, so we
          have no reason to push one that does not fit your job.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <figure>
            <div className="aspect-[16/9] overflow-hidden border-2 border-ink bg-white">
              <MulchIcon />
            </div>
            <figcaption className="mt-2.5">
              <h3 className="font-display text-lg uppercase text-ink sm:text-xl">
                Forestry mulching
              </h3>
              <p className="mt-1 text-sm text-muted">
                Mulch mat over intact soil. Stumps and roots stay in the ground.
              </p>
            </figcaption>
          </figure>
          <figure>
            <div className="aspect-[16/9] overflow-hidden border-2 border-ink bg-white">
              <TraditionalIcon />
            </div>
            <figcaption className="mt-2.5">
              <h3 className="font-display text-lg uppercase text-ink sm:text-xl">
                Traditional clearing
              </h3>
              <p className="mt-1 text-sm text-muted">
                Bare soil, stumps and root balls pulled — debris piled, hauled or burned.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-black/8 bg-white">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="border-b border-black/8 bg-paper">
              <tr>
                <th className="label px-3 py-2.5 text-xs text-muted">Factor</th>
                <th className="px-3 py-2.5 font-display text-sm uppercase text-ink sm:text-base">
                  Forestry mulching
                </th>
                <th className="px-3 py-2.5 font-display text-sm uppercase text-ink sm:text-base">
                  Traditional clearing
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.factor} className="border-b border-black/6 last:border-0">
                  <td className="label px-3 py-2.5 text-xs text-muted">{row.factor}</td>
                  <td className="px-3 py-2.5 text-muted">{row.mulch}</td>
                  <td className="px-3 py-2.5 text-muted">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h3 className="heading-md text-ink">When mulching is the wrong call</h3>
          <ul className="mt-3 space-y-2">
            {WRONG.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm font-medium text-ink sm:text-base">
            If your job is one of those, we will tell you on the estimate and quote the clearing
            method that actually fits.
          </p>
        </div>
      </div>
    </section>
  )
}
