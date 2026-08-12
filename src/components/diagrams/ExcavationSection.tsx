/**
 * Nine-foot benched excavation section — Lovable /services/excavation-services.
 * Illustration only; real depths come from plan and soils report.
 */
export function ExcavationSection() {
  // SVG coordinates: ground at y=40, bottom of hole at y=280 (9 ft scale)
  // 0.5 ft topsoil = ~13px, 4 ft bench = ~107px from grade, 9 ft bearing = ~240px
  const gradeY = 48
  const topsoilY = 48 + 14
  const benchY = 48 + 107
  const bottomY = 48 + 240
  const left = 80
  const right = 520
  const benchInset = 90

  return (
    <section className="section-pad bg-paper" aria-labelledby="ex-section-heading">
      <div className="container-site">
        <p className="eyebrow">Excavation</p>
        <div className="accent-bar mt-3" />
        <h2 id="ex-section-heading" className="heading-xl mt-4 text-ink">
          A nine-foot excavation, in section
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Three numbers decide how a hole gets dug: how much topsoil comes off, where the bench sits,
          and how deep the bearing elevation is. Everything else — slope ratio, working room,
          protective system — follows from those.
        </p>

        <div className="card-industrial mt-8 overflow-hidden rounded-2xl bg-white p-4 sm:p-6">
          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 640 340"
              className="mx-auto block h-auto w-full max-w-3xl"
              role="img"
              aria-label="Benched excavation section: topsoil strip, bench, and bearing elevation"
            >
              {/* Undisturbed clay mass */}
              <path
                d={`M 20 ${gradeY} L ${left} ${gradeY} L ${left + benchInset} ${benchY} L ${left + benchInset + 40} ${bottomY} L ${right - benchInset - 40} ${bottomY} L ${right - benchInset} ${benchY} L ${right} ${gradeY} L 620 ${gradeY} L 620 320 L 20 320 Z`}
                fill="#e4e4e0"
              />
              {/* Hole void */}
              <path
                d={`M ${left} ${gradeY} L ${left + benchInset} ${benchY} L ${left + benchInset + 40} ${bottomY} L ${right - benchInset - 40} ${bottomY} L ${right - benchInset} ${benchY} L ${right} ${gradeY} Z`}
                fill="#ffffff"
                stroke="#0a0a0a"
                strokeWidth="2.5"
              />
              {/* Topsoil strip band */}
              <path
                d={`M ${left} ${gradeY} L ${right} ${gradeY} L ${right - 8} ${topsoilY} L ${left + 8} ${topsoilY} Z`}
                fill="#c2ff36"
                opacity="0.85"
              />
              {/* Existing grade line */}
              <line
                x1="20"
                y1={gradeY}
                x2="620"
                y2={gradeY}
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              {/* Dimension labels */}
              <DimLabel x={36} y1={gradeY} y2={topsoilY} text="0.5 ft topsoil strip" />
              <DimLabel x={36} y1={gradeY} y2={benchY} text="4.0 ft to bench" offset={70} />
              <DimLabel x={36} y1={gradeY} y2={bottomY} text="9.0 ft to bearing" offset={140} />

              <text
                x={(left + right) / 2}
                y={gradeY - 14}
                textAnchor="middle"
                className="fill-ink"
                fontFamily="Roboto, sans-serif"
                fontSize="13"
                fontWeight="500"
              >
                Existing grade
              </text>
              <text
                x={(left + right) / 2}
                y={bottomY - 16}
                textAnchor="middle"
                fontFamily="Roboto, sans-serif"
                fontSize="13"
                fill="#5a5a57"
              >
                Bottom of excavation
              </text>
              <text
                x={560}
                y={280}
                textAnchor="middle"
                fontFamily="Roboto, sans-serif"
                fontSize="12"
                fill="#5a5a57"
              >
                Undisturbed clay
              </text>
            </svg>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Illustration of a typical benched excavation. Real depths, bench widths and slope ratios
            come from your plan and soils report.
          </p>
        </div>
      </div>
    </section>
  )
}

function DimLabel({
  x,
  y1,
  y2,
  text,
  offset = 0,
}: {
  x: number
  y1: number
  y2: number
  text: string
  offset?: number
}) {
  const lx = x + offset
  return (
    <g>
      <line x1={lx} y1={y1} x2={lx} y2={y2} stroke="#0a0a0a" strokeWidth="1" />
      <line x1={lx - 4} y1={y1} x2={lx + 4} y2={y1} stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1={lx - 4} y1={y2} x2={lx + 4} y2={y2} stroke="#0a0a0a" strokeWidth="1.5" />
      <text
        x={lx + 8}
        y={(y1 + y2) / 2}
        dominantBaseline="middle"
        fontFamily="Roboto, sans-serif"
        fontSize="12"
        fill="#0a0a0a"
      >
        {text}
      </text>
    </g>
  )
}
