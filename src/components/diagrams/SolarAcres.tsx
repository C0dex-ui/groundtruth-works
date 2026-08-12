/** Array footprint scale blocks — Lovable /industries/solar-site-preparation */

const BLOCKS = [
  {
    mw: '1 MW',
    acres: '5 – 8 acres',
    note: 'Small commercial or community array',
    scale: 6.5,
  },
  {
    mw: '5 MW',
    acres: '25 – 40 acres',
    note: 'Community solar, campus or co-op scale',
    scale: 32.5,
  },
  {
    mw: '20 MW',
    acres: '100 – 160 acres',
    note: 'Utility-scale single-axis tracker field',
    scale: 130,
  },
] as const

export function SolarAcres() {
  const max = BLOCKS[BLOCKS.length - 1].scale

  return (
    <section className="section-pad bg-paper" aria-labelledby="solar-acres-heading">
      <div className="container-site">
        <p className="eyebrow">Solar</p>
        <div className="accent-bar mt-3" />
        <h2 id="solar-acres-heading" className="heading-xl mt-4 text-ink">
          How much ground an array takes
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Before anyone draws a layout, developers and landowners want the same number: how many
          acres. These are the ranges the industry plans with for single-axis tracker fields.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {BLOCKS.map((block) => {
            const sidePct = Math.sqrt(block.scale / max) * 78
            return (
              <figure key={block.mw} className="min-w-0">
                <div className="flex aspect-[5/3] items-end justify-center border-2 border-ink bg-white p-4">
                  <div
                    className="border-2 border-ink bg-accent"
                    style={{
                      width: `${Math.max(sidePct, 14)}%`,
                      aspectRatio: '1',
                    }}
                    aria-hidden
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-2xl uppercase text-ink sm:text-3xl">
                    {block.mw}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-ink">{block.acres}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{block.note}</p>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          Blocks are drawn to scale by area. These are industry rule-of-thumb ranges for single-axis
          tracker fields on workable ground — not a design tool. Real footprint depends on module
          efficiency, ground coverage ratio, row pitch, terrain, setbacks and wetland or easement
          exclusions. Bring your civil set and we will take quantities off it.
        </p>
      </div>
    </section>
  )
}
