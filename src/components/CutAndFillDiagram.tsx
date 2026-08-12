import { useMemo, useState } from 'react'

/**
 * Interactive cut/fill section from Lovable site-grading page.
 * Copy: groundtruth-works.lovable.app/services/site-grading
 * Illustration only — not an engineering tool.
 */

const W = 900
const H = 340
const PAD_X = 20
const PAD_TOP = 24
const PAD_BOT = 20

/** Existing ground as y-from-top fraction along x 0–1 (lower y = higher ground). */
const GROUND: [number, number][] = [
  [0, 0.5],
  [0.08, 0.48],
  [0.16, 0.44],
  [0.24, 0.3],
  [0.32, 0.16],
  [0.4, 0.2],
  [0.48, 0.36],
  [0.56, 0.5],
  [0.64, 0.62],
  [0.72, 0.7],
  [0.8, 0.66],
  [0.88, 0.58],
  [1, 0.54],
]

function groundY(nx: number): number {
  for (let i = 0; i < GROUND.length - 1; i++) {
    const [x0, y0] = GROUND[i]
    const [x1, y1] = GROUND[i + 1]
    if (nx >= x0 && nx <= x1) {
      const t = (nx - x0) / (x1 - x0 || 1)
      return y0 + (y1 - y0) * t
    }
  }
  return GROUND[GROUND.length - 1][1]
}

function toX(nx: number) {
  return PAD_X + nx * (W - PAD_X * 2)
}

function toY(ny: number) {
  return PAD_TOP + ny * (H - PAD_TOP - PAD_BOT)
}

function sampleGround(steps = 80): { nx: number; x: number; y: number }[] {
  const out: { nx: number; x: number; y: number }[] = []
  for (let i = 0; i <= steps; i++) {
    const nx = i / steps
    out.push({ nx, x: toX(nx), y: toY(groundY(nx)) })
  }
  return out
}

function buildCutFillPaths(gradeNy: number) {
  const samples = sampleGround(100)
  const gradeY = toY(gradeNy)
  const cutPts: string[] = []
  const fillPts: string[] = []

  // Walk left→right, emit strips for cut (ground above grade) and fill (ground below grade)
  for (let i = 0; i < samples.length - 1; i++) {
    const a = samples[i]
    const b = samples[i + 1]
    const aAbove = a.y < gradeY
    const bAbove = b.y < gradeY

    // Cut strip
    if (aAbove || bAbove) {
      const ay = Math.min(a.y, gradeY)
      const by = Math.min(b.y, gradeY)
      cutPts.push(
        `M ${a.x} ${gradeY} L ${a.x} ${ay} L ${b.x} ${by} L ${b.x} ${gradeY} Z`,
      )
    }
    // Fill strip
    if (!aAbove || !bAbove) {
      if (a.y > gradeY || b.y > gradeY) {
        const ay = Math.max(a.y, gradeY)
        const by = Math.max(b.y, gradeY)
        fillPts.push(
          `M ${a.x} ${gradeY} L ${a.x} ${ay} L ${b.x} ${by} L ${b.x} ${gradeY} Z`,
        )
      }
    }
  }

  const groundLine = samples
    .map((s, i) => `${i === 0 ? 'M' : 'L'} ${s.x.toFixed(1)} ${s.y.toFixed(1)}`)
    .join(' ')

  return { cutPts, fillPts, groundLine, gradeY }
}

export function CutAndFillDiagram() {
  /** Finished grade as y-fraction (0 high, 1 low). Mid ≈ balanced. */
  const [grade, setGrade] = useState(0.48)

  const { cutPts, fillPts, groundLine, gradeY } = useMemo(
    () => buildCutFillPaths(grade),
    [grade],
  )

  const cutLabelY = Math.min(gradeY - 28, toY(groundY(0.32)) + 20)
  const fillLabelY = Math.max(gradeY + 28, (gradeY + toY(groundY(0.72))) / 2)

  return (
    <section className="section-pad bg-paper" aria-labelledby="cut-fill-heading">
      <div className="container-site">
        <p className="eyebrow">Site grading</p>
        <div className="accent-bar mt-3" />
        <h2 id="cut-fill-heading" className="heading-xl mt-4 text-ink">
          Cut and fill, and why balance matters
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Move the finished grade up and down and watch the earthwork trade off. Every yard of
          surplus leaves on a truck and every yard short arrives on one — which is why the elevation
          your engineer sets is a budget decision as much as a drainage one.
        </p>

        <div className="card-industrial mt-8 overflow-hidden rounded-2xl bg-white p-4 sm:p-6">
          <p className="label text-xs text-muted">Cut and fill section</p>

          <div className="mt-3 overflow-x-auto rounded-xl border border-black/10 bg-white">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="mx-auto block h-auto w-full max-w-4xl"
              role="img"
              aria-label="Cross-section: black cut above finished grade, lime fill below"
            >
              {/* Fill (lime) */}
              {fillPts.map((d, i) => (
                <path key={`f-${i}`} d={d} fill="#c2ff36" />
              ))}
              {/* Cut (black) */}
              {cutPts.map((d, i) => (
                <path key={`c-${i}`} d={d} fill="#0a0a0a" />
              ))}

              {/* Finished grade */}
              <line
                x1={PAD_X}
                y1={gradeY}
                x2={W - PAD_X}
                y2={gradeY}
                stroke="#0a0a0a"
                strokeWidth="2.5"
              />

              {/* Existing ground outline */}
              <path
                d={groundLine}
                fill="none"
                stroke="#0a0a0a"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Labels */}
              <text
                x={toX(0.32)}
                y={cutLabelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#c2ff36"
                fontFamily="Anton, Arial Narrow, sans-serif"
                fontSize="32"
                letterSpacing="0.08em"
              >
                CUT
              </text>
              <text
                x={toX(0.72)}
                y={fillLabelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#0a0a0a"
                fontFamily="Anton, Arial Narrow, sans-serif"
                fontSize="32"
                letterSpacing="0.08em"
              >
                FILL
              </text>
            </svg>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <label
              htmlFor="finished-grade"
              className="label shrink-0 text-xs tracking-[0.08em] text-muted"
            >
              Proposed finished grade
            </label>
            <input
              id="finished-grade"
              type="range"
              min={0.2}
              max={0.72}
              step={0.005}
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
              className="h-2 w-full max-w-xl cursor-pointer appearance-none rounded-full bg-[#d4d4d0] accent-[#c2ff36]"
              aria-label="Adjust proposed finished grade"
            />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            Move the grade up and down: black is earth cut away, lime is earth brought in. Raise the
            grade and you buy dirt; lower it and you truck dirt off. An illustration of the idea, not
            an engineering tool.
          </p>
        </div>
      </div>
    </section>
  )
}

/** Tolerance note that follows cut/fill on Lovable site-grading. */
export function GradeToleranceNote() {
  return (
    <section className="section-pad bg-white" aria-labelledby="tolerance-heading">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">Precision</p>
        <div className="accent-bar mt-3" />
        <h2 id="tolerance-heading" className="heading-xl mt-4 text-ink">
          What plus or minus a tenth means
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            Tolerance is the number a commercial GC asks about first, because it decides whether the
            next trade can start. A pad out by three tenths means a slab pour that eats extra
            concrete, or a subgrade that has to be recut with a paving crew already scheduled and
            already billing.
          </p>
          <p>
            We hold plan tolerance with GPS or laser grade control, verify with a rod before calling
            a surface finished, and proofroll so soft spots show up while a machine is still on site
            rather than after the base stone is down.
          </p>
        </div>
      </div>
    </section>
  )
}
