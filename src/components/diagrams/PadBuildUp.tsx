/** Commercial pad build-up stack — Lovable /industries/commercial-development */

const LAYERS = [
  {
    key: 'surface',
    label: 'Surface',
    detail: 'Asphalt or slab, by others',
    fill: '#0a0a0a',
    text: '#ffffff',
    h: 48,
  },
  {
    key: 'base',
    label: 'Base stone',
    detail: 'Typically 6 – 12 in.',
    fill: '#6b6b66',
    text: '#ffffff',
    h: 56,
  },
  {
    key: 'fill',
    label: 'Compacted fill',
    detail: 'Placed in 6 – 8 in. lifts',
    fill: '#c2ff36',
    text: '#0a0a0a',
    h: 72,
  },
  {
    key: 'subgrade',
    label: 'Prepared subgrade',
    detail: 'Proof rolled, undercut where it fails',
    fill: '#3d3228',
    text: '#ffffff',
    h: 56,
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
  const totalH = LAYERS.reduce((s, l) => s + l.h, 0) + 40
  let y = 16

  return (
    <section className="section-pad bg-paper" aria-labelledby="pad-build-heading">
      <div className="container-site">
        <p className="eyebrow">Commercial development</p>
        <div className="accent-bar mt-2.5" />
        <h2 id="pad-build-heading" className="heading-xl mt-3 text-ink">
          How a pad is built up
        </h2>
        <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-muted">
          Every commercial surface is a stack, and every layer has one job. Skip one and the lot fails
          in the first wet winter, not in year ten.
        </p>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="overflow-hidden border-2 border-ink bg-white p-3.5 sm:p-5">
            <p className="label mb-3 text-xs text-muted">
              Commercial pad build-up, bottom to top
            </p>
            <svg
              viewBox={`0 0 360 ${totalH}`}
              className="mx-auto block h-auto w-full max-w-sm"
              role="img"
              aria-label="Pad section: subgrade, compacted fill, base stone, surface"
            >
              {/* Draw top → bottom for visual stack from surface down */}
              {LAYERS.map((layer) => {
                const rectY = y
                y += layer.h
                return (
                  <g key={layer.key}>
                    <rect
                      x="20"
                      y={rectY}
                      width="320"
                      height={layer.h}
                      fill={layer.fill}
                      stroke="#0a0a0a"
                      strokeWidth="1"
                    />
                    <text
                      x="180"
                      y={rectY + layer.h / 2 - 6}
                      textAnchor="middle"
                      fill={layer.text}
                      fontFamily="Anton, Arial Narrow, sans-serif"
                      fontSize="18"
                      letterSpacing="0.04em"
                    >
                      {layer.label.toUpperCase()}
                    </text>
                    <text
                      x="180"
                      y={rectY + layer.h / 2 + 14}
                      textAnchor="middle"
                      fill={layer.text}
                      fontFamily="Roboto, sans-serif"
                      fontSize="11"
                      opacity="0.9"
                    >
                      {layer.detail}
                    </text>
                  </g>
                )
              })}
            </svg>
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
