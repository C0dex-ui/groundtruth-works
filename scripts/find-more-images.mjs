import { createWriteStream, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'
import { fileURLToPath } from 'url'

const base = 'https://groundtruth-works.lovable.app'
const pages = [
  '/',
  '/about',
  '/contact',
  '/get-a-quote',
  '/reviews',
  '/insights',
  '/projects',
  '/privacy',
  '/services/land-clearing',
  '/services/excavation-services',
  '/service-areas/mayflower-ar',
]

const found = new Set()

for (const p of pages) {
  const html = await (await fetch(base + p)).text()
  const matches = [
    ...html.matchAll(/(?:src|content|href)=["']([^"']+\.(?:jpg|jpeg|png|webp)[^"']*)["']/gi),
  ].map((m) => m[1])
  for (let u of matches) {
    if (u.startsWith('//')) u = 'https:' + u
    else if (u.startsWith('/')) u = base + u
    u = u.split('?')[0]
    if (/logo|tree\.png|favicon|avatar|icon|bbb|5star|reviewer/i.test(u)) continue
    found.add(u)
  }
}

console.log('Found', found.size)
;[...found].forEach((u) => console.log(u))

const outDir = join(dirname(fileURLToPath(import.meta.url)), '../public/images/lovable')
mkdirSync(outDir, { recursive: true })

let i = 20
for (const url of found) {
  const file = url.split('/').pop().replace(/[^a-zA-Z0-9._-]/g, '_')
  // skip if already downloaded under any name
  const existing = [
    join(outDir, file),
    ...Array.from({ length: 30 }, (_, n) =>
      join(outDir, `${String(n + 1).padStart(2, '0')}-${file}`),
    ),
  ]
  if (existing.some((p) => existsSync(p))) {
    console.log('have', file)
    continue
  }
  i++
  const dest = join(outDir, `${String(i).padStart(2, '0')}-${file}`)
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(String(res.status))
    await pipeline(Readable.fromWeb(res.body), createWriteStream(dest))
    console.log('saved', dest)
  } catch (e) {
    console.log('fail', url, e.message)
  }
}
