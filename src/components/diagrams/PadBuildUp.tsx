/** Commercial pad build-up stack — Lovable /industries/commercial-development */

const LAYERS = [
  {
    key: 'surface',
    label: 'Surface',
    detail: 'Asphalt or slab, by others',
    color: '#1c1c1a',
    text: '#ffffff',
    height: 'h-14',
  },
  {
    key: 'base',
    label: 'Base stone',
    detail: 'Typically 6 – 12 in.',
    color: '#8a8a86',
    text: '#ffffff',
    height: 'h-16',
  },
  {
    key: 'fill',
    label: 'Compacted fill',
    detail: 'Placed in 6 – 8 in. lifts',
    color: '#c2ff36',
    text: '#0a0a0a',
    height: 'h-20',
  },
  {
    key: 'subgrade',
    label: 'Prepared subgrade',
    detail: 'Proof rolled, undercut where it fails',
    color: '#5a4a3a',
    text: '#ffffff',
    height: 'h-16',
  },
] as const

const DESCRIPTIONS = [
  {
    title: 'Prepared subgrade',
    body: 'Native ground stripped of organics, dried or undercut until it holds a loaded truck without pumping.',
  },
  {
    title: 'Compacted fill',
    body: 'Engineered fill brought to plan elevation and rolled to the density the geotech specifies, lift by lift.',
  },
  {
    title: 'Base stone',
    body: 'Crushed aggregate spreads wheel and footing loads and gives a working surface in wet weather.',
  },
  {
    title: 'Surface',
    body: 'What traffic or the building sits on. Only as good as what is under it.',
  },
] as const

export function PadBuildUp() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="pad-build-heading">
      <div className="container-site">
        <p className="eyebrow">Commercial development</p>
        <div className="accent-bar mt-3" />
        <h2 id="pad-build-heading" className="heading-xl mt-4 text-ink">
          How a pad is built up
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Every commercial surface is a stack, and every layer has one job. Skip one and the lot fails
          in the first wet winter, not in year ten.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="card-industrial overflow-hidden rounded-2xl bg-white p-5 sm:p-6">
            <p className="label mb-4 text-xs text-muted">
              Commercial pad build-up, bottom to top
            </p>
            <div className="flex flex-col-reverse gap-1">
              {[...LAYERS].reverse().map((layer) => (
                <div
                  key={layer.key}
                  className={`${layer.height} flex flex-col items-center justify-center px-3 text-center`}
                  style={{ backgroundColor: layer.color, color: layer.text }}
                >
                  <span className="font-display text-lg uppercase tracking-wide sm:text-xl">
                    {layer.label}
                  </span>
                  <span className="mt-0.5 text-xs opacity-90 sm:text-sm">{layer.detail}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Typical commercial pad section. Depths follow the geotechnical report and the civil
              plan, not a rule of thumb.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {DESCRIPTIONS.map((item) => (
              <article key={item.title} className="card-industrial rounded-2xl p-5">
                <h3 className="heading-md text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
