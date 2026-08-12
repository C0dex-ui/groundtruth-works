/** Array footprint scale blocks — Lovable /industries/solar-site-preparation */

const BLOCKS = [
  {
    mw: '1 MW',
    acres: '5 – 8 acres',
    note: 'Small commercial or community array',
    /** Relative visual scale ~ mid of range */
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

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {BLOCKS.map((block) => {
            // Square side proportional to sqrt(area) so blocks are drawn to scale by area
            const sidePct = Math.sqrt(block.scale / max) * 100
            return (
              <article
                key={block.mw}
                className="card-industrial flex flex-col rounded-2xl bg-white p-5 sm:p-6"
              >
                <div className="flex min-h-[11rem] items-end justify-center border-b border-black/8 pb-4">
                  <div
                    className="rounded-md border-2 border-ink bg-accent/90 shadow-[var(--shadow-card)]"
                    style={{
                      width: `${Math.max(sidePct, 18)}%`,
                      aspectRatio: '1',
                      maxWidth: '100%',
                    }}
                    aria-hidden
                  />
                </div>
                <p className="font-display mt-4 text-3xl uppercase text-ink">{block.mw}</p>
                <p className="mt-1 text-lg font-semibold text-ink">{block.acres}</p>
                <p className="mt-2 text-sm text-muted">{block.note}</p>
              </article>
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
