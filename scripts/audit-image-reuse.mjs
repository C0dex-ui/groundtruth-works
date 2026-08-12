import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const refs = new Map()

function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (/\.(tsx?|jsx?)$/.test(e.name)) {
      const t = readFileSync(p, 'utf8')
      for (const m of t.matchAll(/['"`](\/(?:images|logo)[^'"`]+)['"`]/g)) {
        const img = m[1]
        if (!refs.has(img)) refs.set(img, new Set())
        refs.get(img).add(p.replace(/\\/g, '/'))
      }
    }
  }
}

walk('src')

const brand = /logo\.png|bbb-logo|google-5star|favicon|icons\.svg|reviewers\//
let bad = 0
console.log('Image reference audit\n')
for (const [img, files] of [...refs.entries()].sort()) {
  const list = [...files]
  if (list.length > 1 && !brand.test(img)) {
    bad++
    console.log('REUSED:', img)
    for (const f of list) console.log('  ', f)
  }
}
console.log(bad === 0 ? '\nOK: no photo reuse across source files (brand assets excluded).' : `\n${bad} reused photo path(s).`)
console.log('Total paths:', refs.size)
