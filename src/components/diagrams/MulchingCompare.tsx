/** Mulching vs traditional clearing — Lovable /services/forestry-mulching */

const ROWS = [
  {
    factor: 'Production',
    mulch: 'One machine, one pass. Light growth runs an acre or more a day with no second crew behind it.',
    traditional:
      'Slower on paper — dozer, excavator, grapple and trucks — but faster to a truly clean, buildable pad.',
  },
  {
    factor: 'Cost',
    mulch:
      'Lower on light and medium growth because nothing is hauled and no burn permit or pit is involved.',
    traditional:
      'Higher, and most of the difference is trucking and disposal, not machine time.',
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
        <div className="accent-bar mt-3" />
        <h2 id="mulch-compare-heading" className="heading-xl mt-4 text-ink">
          Mulching vs traditional clearing
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Straight comparison, no thumb on the scale. Both methods are on our own truck list, so we
          have no reason to push one that does not fit your job.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-black/8 bg-white">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="border-b border-black/8 bg-paper">
              <tr>
                <th className="label px-4 py-3 text-xs text-muted">Factor</th>
                <th className="px-4 py-3 font-display text-base uppercase text-ink">
                  Forestry mulching
                </th>
                <th className="px-4 py-3 font-display text-base uppercase text-ink">
                  Traditional clearing
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.factor} className="border-b border-black/6 last:border-0">
                  <td className="label px-4 py-3 text-xs text-muted">{row.factor}</td>
                  <td className="px-4 py-3 text-muted">{row.mulch}</td>
                  <td className="px-4 py-3 text-muted">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h3 className="heading-md text-ink">When mulching is the wrong call</h3>
          <ul className="mt-4 space-y-3">
            {WRONG.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="flex gap-3 text-base leading-relaxed text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base font-medium text-ink">
            If your job is one of those, we will tell you on the estimate and quote the clearing
            method that actually fits.
          </p>
        </div>
      </div>
    </section>
  )
}
