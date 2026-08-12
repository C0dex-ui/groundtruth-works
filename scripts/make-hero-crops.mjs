/**
 * Create unique high-quality hero crops for interior pages that lack photos.
 * Each crop is a different region of a source so files are distinct assets.
 */
import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'public/images/heroes')
mkdirSync(outDir, { recursive: true })

/** [outName, sourceRel, left%, top%, width%, height%] — percentages of source */
const jobs = [
  // Index / company / legal / insights heroes
  ['services-index.jpg', 'public/images/service-land-clearing.jpg', 0.05, 0.08, 0.9, 0.82],
  ['industries-index.jpg', 'public/images/industry-commercial.jpg', 0.08, 0.12, 0.84, 0.78],
  ['about.jpg', 'public/images/process-clear.jpg', 0.05, 0.08, 0.9, 0.75],
  ['contact.jpg', 'public/images/process-strip.jpg', 0.1, 0.12, 0.85, 0.78],
  ['quote.jpg', 'public/images/process-grade.jpg', 0.0, 0.05, 0.92, 0.8],
  ['reviews.jpg', 'public/images/process-compact.jpg', 0.08, 0.1, 0.88, 0.78],
  ['insights.jpg', 'public/images/process-base.jpg', 0.12, 0.0, 0.88, 0.82],
  ['insights-article.jpg', 'public/images/gallery-01.jpg', 0.15, 0.1, 0.8, 0.75],
  ['privacy.jpg', 'public/images/gallery-02.jpg', 0.05, 0.15, 0.85, 0.75],
  ['terms.jpg', 'public/images/gallery-03.jpg', 0.1, 0.05, 0.85, 0.8],
  // City service-area heroes — distinct crops so every city hero is a photo
  ['city-mayflower.jpg', 'public/images/process-clear.jpg', 0.2, 0.2, 0.75, 0.7],
  ['city-conway.jpg', 'public/images/process-strip.jpg', 0.0, 0.0, 0.8, 0.85],
  ['city-vilonia.jpg', 'public/images/process-grade.jpg', 0.15, 0.18, 0.8, 0.72],
  ['city-greenbrier.jpg', 'public/images/process-compact.jpg', 0.0, 0.2, 0.85, 0.75],
  ['city-maumelle.jpg', 'public/images/process-base.jpg', 0.0, 0.15, 0.78, 0.78],
  ['city-north-little-rock.jpg', 'public/images/gallery-01.jpg', 0.0, 0.0, 0.85, 0.85],
  ['city-little-rock.jpg', 'public/images/gallery-02.jpg', 0.15, 0.0, 0.8, 0.85],
  ['city-sherwood.jpg', 'public/images/gallery-03.jpg', 0.0, 0.15, 0.9, 0.75],
  // Fallback for any other Arkansas city route
  ['city-default.jpg', 'public/images/gallery-04.jpg', 0.08, 0.08, 0.85, 0.8],

  // Intro-section media (prose + right photo) — unique files, themed from service/process sources
  ['intro-land-clearing.jpg', 'public/images/service-land-clearing.jpg', 0.12, 0.1, 0.78, 0.8],
  ['intro-site-grading.jpg', 'public/images/service-site-grading.jpg', 0.08, 0.12, 0.82, 0.78],
  ['intro-excavation.jpg', 'public/images/service-excavation.jpg', 0.15, 0.08, 0.8, 0.82],
  ['intro-site-prep.jpg', 'public/images/service-site-prep.jpg', 0.05, 0.15, 0.85, 0.75],
  ['intro-forestry.jpg', 'public/images/service-forestry-mulching.jpg', 0.1, 0.05, 0.8, 0.85],
  ['intro-brush.jpg', 'public/images/service-brush-clearing.jpg', 0.0, 0.1, 0.88, 0.8],
  ['intro-dirt-work.jpg', 'public/images/service-dirt-work.jpg', 0.18, 0.12, 0.75, 0.78],
  ['intro-drainage.jpg', 'public/images/service-drainage.jpg', 0.08, 0.18, 0.84, 0.72],
  ['intro-solar.jpg', 'public/images/industry-solar.jpg', 0.1, 0.1, 0.8, 0.8],
  ['intro-gc.jpg', 'public/images/industry-gc.jpg', 0.05, 0.08, 0.85, 0.82],
  ['intro-commercial.jpg', 'public/images/industry-commercial.jpg', 0.12, 0.15, 0.78, 0.75],
  ['intro-about-why.jpg', 'public/images/process-clear.jpg', 0.25, 0.05, 0.7, 0.75],
  ['intro-about-years.jpg', 'public/images/process-strip.jpg', 0.18, 0.22, 0.72, 0.7],
  ['intro-projects-visit.jpg', 'public/images/process-grade.jpg', 0.22, 0.12, 0.72, 0.75],
  ['intro-reviews-which.jpg', 'public/images/process-compact.jpg', 0.2, 0.0, 0.75, 0.8],
  ['intro-reviews-lines.jpg', 'public/images/process-base.jpg', 0.05, 0.2, 0.8, 0.72],
  ['intro-grade-tolerance.jpg', 'public/images/process-grade.jpg', 0.0, 0.22, 0.7, 0.7],
  ['intro-areas-outside.jpg', 'public/images/gallery-04.jpg', 0.2, 0.15, 0.75, 0.75],
]

for (const [name, srcRel, lx, ty, ww, hh] of jobs) {
  const src = join(root, srcRel)
  const meta = await sharp(src).metadata()
  const w = meta.width ?? 1600
  const h = meta.height ?? 1200
  const left = Math.round(w * lx)
  const top = Math.round(h * ty)
  const width = Math.min(Math.round(w * ww), w - left)
  const height = Math.min(Math.round(h * hh), h - top)

  const dest = join(outDir, name)
  await sharp(src)
    .extract({ left, top, width, height })
    .resize(1600, 1200, { fit: 'cover', position: 'centre' })
    .sharpen({ sigma: 0.8 })
    .modulate({ brightness: 1.04, saturation: 1.06 })
    .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(dest)

  console.log('wrote', dest, width, 'x', height, '-> 1600x1200')
}

console.log('done')
