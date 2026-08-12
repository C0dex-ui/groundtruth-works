import { useMemo, useState } from 'react'

/** From Lovable /services/dirt-work — planning estimate only. */
export function CubicYardCalculator() {
  const [length, setLength] = useState(100)
  const [width, setWidth] = useState(60)
  const [depth, setDepth] = useState(6)
  const [unit, setUnit] = useState<'in' | 'ft'>('in')

  const { cy, loads, order } = useMemo(() => {
    const depthFt = unit === 'in' ? depth / 12 : depth
    const volumeCy = (length * width * depthFt) / 27
    const loadCount = volumeCy / 14
    const withAllowance = volumeCy * 1.25
    return {
      cy: volumeCy,
      loads: loadCount,
      order: withAllowance,
    }
  }, [length, width, depth, unit])

  const field =
    'min-h-12 w-full rounded-lg border border-black/12 bg-paper px-3.5 py-2 outline-none ring-accent focus:ring-2'

  return (
    <section className="section-pad bg-paper" aria-labelledby="cy-calc-heading">
      <div className="container-site">
        <p className="eyebrow">Dirt work</p>
        <div className="accent-bar mt-2.5" />
        <h2 id="cy-calc-heading" className="heading-xl mt-3 text-ink">
          Cubic yard calculator
        </h2>
        <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-muted">
          Enter length, width and depth in feet. You get cubic yards, an approximate truckload count,
          and an order allowance for compaction. Useful before you call anybody, including us.
        </p>

        <div className="card-industrial mt-5 grid gap-5 rounded-xl bg-white p-4 sm:p-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <div>
              <label htmlFor="cy-length" className="mb-1.5 block text-sm font-medium">
                Length (ft)
              </label>
              <input
                id="cy-length"
                type="number"
                min={0}
                step={1}
                value={length}
                onChange={(e) => setLength(Number(e.target.value) || 0)}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="cy-width" className="mb-1.5 block text-sm font-medium">
                Width (ft)
              </label>
              <input
                id="cy-width"
                type="number"
                min={0}
                step={1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value) || 0)}
                className={field}
              />
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-3">
              <div>
                <label htmlFor="cy-depth" className="mb-1.5 block text-sm font-medium">
                  Depth
                </label>
                <input
                  id="cy-depth"
                  type="number"
                  min={0}
                  step={unit === 'in' ? 1 : 0.1}
                  value={depth}
                  onChange={(e) => setDepth(Number(e.target.value) || 0)}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="cy-unit" className="mb-1.5 block text-sm font-medium">
                  Depth unit
                </label>
                <select
                  id="cy-unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as 'in' | 'ft')}
                  className={field}
                >
                  <option value="in">in</option>
                  <option value="ft">ft</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-xl border border-black/8 bg-paper p-5">
            <div>
              <p className="label text-xs text-muted">Volume</p>
              <p className="font-display mt-1 text-4xl uppercase text-ink">
                {cy.toFixed(1)} CY
              </p>
            </div>
            <div>
              <p className="label text-xs text-muted">Tandem dump loads (~ 14 CY each)</p>
              <p className="mt-1 text-2xl font-semibold text-ink">
                {Math.ceil(loads)} loads
              </p>
            </div>
            <div>
              <p className="label text-xs text-muted">Order allowance for compaction (+25%)</p>
              <p className="mt-1 text-2xl font-semibold text-ink">
                {order.toFixed(1)} CY
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          Planning estimate only. Actual quantities depend on shrink and swell, subgrade condition,
          over-excavation and haul route — we verify against your plan before anything is ordered.
        </p>
      </div>
    </section>
  )
}
