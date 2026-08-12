/** Three ways to clear — Lovable /services/land-clearing comparison table */

const METHODS = [
  {
    title: 'Forestry mulching',
    summary: 'Mulch mat over intact soil. Stumps and roots stay in the ground.',
    speed: 'Fastest — several acres a day in light to moderate growth',
    cost: 'Lowest per acre',
    debris: 'Ground in place and left as a mat that holds soil',
    best: 'Pasture reclamation, trails, fence lines, fuel reduction, solar prep where stumps can stay',
  },
  {
    title: 'Grubbing and haul-off',
    summary: 'Bare soil, stumps and root balls pulled, holes backfilled, debris gone.',
    speed: 'Slowest — often a day or more per acre with haul cycles',
    cost: 'Highest per acre',
    debris: 'Loaded and hauled to a legal disposal or grinding site, or burned by permit',
    best: 'Anything structural: building pads, slabs, parking, roads, utilities',
  },
  {
    title: 'Selective clearing',
    summary: 'Thinned canopy with the trees you chose still standing.',
    speed: 'Moderate — driven by how much has to be worked around',
    cost: 'Middle, and rises with how tight the selection is',
    debris: 'Mulched, chipped or hauled depending on access and what stays',
    best: 'Homesites, driveway corridors, view and access lines, tracts kept wooded',
  },
] as const

export function ClearingMethods() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="clear-methods-heading">
      <div className="container-site">
        <p className="eyebrow">Land clearing</p>
        <div className="accent-bar mt-3" />
        <h2 id="clear-methods-heading" className="heading-xl mt-4 text-ink">
          Three ways to clear a tract
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Same wooded parcel, three completely different results — and the choice is worth more than
          anything else a clearing contractor decides for you.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-black/8 bg-white">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead className="border-b border-black/8 bg-paper">
              <tr>
                <th className="label px-4 py-3 text-xs text-muted"> </th>
                {METHODS.map((m) => (
                  <th key={m.title} className="px-4 py-3 font-display text-base uppercase text-ink">
                    {m.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/6">
                <td className="label px-4 py-3 text-xs text-muted">Result</td>
                {METHODS.map((m) => (
                  <td key={m.title} className="px-4 py-3 text-muted">
                    {m.summary}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-black/6">
                <td className="label px-4 py-3 text-xs text-muted">Speed</td>
                {METHODS.map((m) => (
                  <td key={m.title} className="px-4 py-3 text-muted">
                    {m.speed}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-black/6">
                <td className="label px-4 py-3 text-xs text-muted">Cost (relative)</td>
                {METHODS.map((m) => (
                  <td key={m.title} className="px-4 py-3 text-muted">
                    {m.cost}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-black/6">
                <td className="label px-4 py-3 text-xs text-muted">Debris</td>
                {METHODS.map((m) => (
                  <td key={m.title} className="px-4 py-3 text-muted">
                    {m.debris}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="label px-4 py-3 text-xs text-muted">Best use</td>
                {METHODS.map((m) => (
                  <td key={m.title} className="px-4 py-3 font-medium text-ink">
                    {m.best}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-2xl font-display text-xl uppercase leading-snug text-ink">
          Mulch a tract you meant to pave and you pay for it twice.
        </p>
      </div>
    </section>
  )
}
