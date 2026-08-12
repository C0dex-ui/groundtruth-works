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
  ['about.jpg', 'public/images/process-clear.jpg', 0.05, 0.08, 0.9, 0.75],
  ['contact.jpg', 'public/images/process-strip.jpg', 0.1, 0.12, 0.85, 0.78],
  ['quote.jpg', 'public/images/process-grade.jpg', 0.0, 0.05, 0.92, 0.8],
  ['reviews.jpg', 'public/images/process-compact.jpg', 0.08, 0.1, 0.88, 0.78],
  ['insights.jpg', 'public/images/process-base.jpg', 0.12, 0.0, 0.88, 0.82],
  ['insights-article.jpg', 'public/images/gallery-01.jpg', 0.15, 0.1, 0.8, 0.75],
  ['privacy.jpg', 'public/images/gallery-02.jpg', 0.05, 0.15, 0.85, 0.75],
  ['terms.jpg', 'public/images/gallery-03.jpg', 0.1, 0.05, 0.85, 0.8],
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
