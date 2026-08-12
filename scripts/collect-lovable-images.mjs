import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'
import { fileURLToPath } from 'url'

const base = 'https://groundtruth-works.lovable.app'
const pages = [
  '/',
  '/services',
  '/services/land-clearing',
  '/services/site-grading',
  '/services/excavation-services',
  '/services/site-preparation',
  '/services/forestry-mulching',
  '/services/brush-clearing',
  '/services/dirt-work',
  '/services/drainage-erosion-control',
  '/industries',
  '/industries/solar-site-preparation',
  '/industries/general-contractors',
  '/industries/commercial-development',
  '/service-areas',
  '/service-areas/mayflower-ar',
  '/service-areas/conway-ar',
  '/service-areas/vilonia-ar',
  '/service-areas/greenbrier-ar',
  '/service-areas/maumelle-ar',
  '/service-areas/north-little-rock-ar',
  '/service-areas/little-rock-ar',
  '/service-areas/sherwood-ar',
  '/projects',
  '/about',
  '/contact',
  '/get-a-quote',
  '/insights',
  '/reviews',
]

const all = new Map()

for (const p of pages) {
  const html = await (await fetch(base + p)).text()
  const imgs = [...html.matchAll(/(?:src|content)=["']([^"']+\.(?:jpg|jpeg|png|webp)[^"']*)["']/gi)].map(
    (m) => m[1],
  )
  const abs = imgs.map((u) => {
    if (u.startsWith('http')) return u.split('?')[0]
    if (u.startsWith('//')) return 'https:' + u.split('?')[0]
    return base + u.split('?')[0]
  })
  const uniq = [...new Set(abs)].filter(
    (u) => !/logo|tree\.png|favicon|avatar|icon|bbb|5star|reviewer|growfully-tree/i.test(u),
  )
  console.log(p, uniq.length)
  for (const u of uniq) {
    if (!all.has(u)) all.set(u, [])
    all.get(u).push(p)
  }
}

console.log('\nUNIQUE', all.size)
const list = [...all.entries()].map(([url, pages]) => ({
  url,
  pages,
  file: url.split('/').pop().replace(/[^a-zA-Z0-9._-]/g, '_'),
}))
for (const item of list) {
  console.log(item.file, '->', item.pages.join(' | '))
}

const outDir = join(dirname(fileURLToPath(import.meta.url)), '../public/images/lovable')
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(list, null, 2))

let i = 0
for (const item of list) {
  i++
  const dest = join(outDir, `${String(i).padStart(2, '0')}-${item.file}`)
  if (existsSync(dest)) {
    console.log('skip exists', dest)
    item.local = `/images/lovable/${String(i).padStart(2, '0')}-${item.file}`
    continue
  }
  try {
    const res = await fetch(item.url)
    if (!res.ok) throw new Error(String(res.status))
    await pipeline(Readable.fromWeb(res.body), createWriteStream(dest))
    item.local = `/images/lovable/${String(i).padStart(2, '0')}-${item.file}`
    console.log('saved', item.local)
  } catch (e) {
    console.log('FAIL', item.url, e.message)
  }
}

writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(list, null, 2))
console.log('done', list.filter((x) => x.local).length)
