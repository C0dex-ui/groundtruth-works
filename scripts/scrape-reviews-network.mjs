/**
 * Capture Google Maps listugcposts / preview responses for reviewer profile photos.
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import http from 'node:http'
import { fileURLToPath } from 'node:url'

const MAPS_URL =
  'https://www.google.com/maps/place/Growfully+LLC/@35.0462794,-92.4842289,17z/data=!4m8!3m7!1s0x87d29da3e0b11ce3:0xa8728947de885622!8m2!3d35.0462794!4d-92.4842289!9m1!1b1!16s%2Fg%2F11f4qq1fwm?hl=en&entry=ttu'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PHOTO_DIR = path.join(ROOT, 'public/images/reviewers')
const OUT_JSON = path.join(ROOT, 'resources/google-reviews.json')
const RAW_OUT = path.join(ROOT, 'resources/gmap-network-raw.json')

function slugify(name) {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40) || 'reviewer'
  )
}

function hiResPhotoUrl(url) {
  if (!url) return null
  let u = url
  if (u.startsWith('//')) u = 'https:' + u
  // Common size tokens
  u = u.replace(/=s\d+[^&]*/i, '=s128-c')
  u = u.replace(/=w\d+-h\d+[^&]*/i, '=s128-c')
  return u
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const lib = url.startsWith('https') ? https : http
    const req = lib.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Referer: 'https://www.google.com/',
        },
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close()
          try {
            fs.unlinkSync(dest)
          } catch {
            /* */
          }
          return download(res.headers.location, dest).then(resolve).catch(reject)
        }
        if (res.statusCode !== 200) {
          file.close()
          try {
            fs.unlinkSync(dest)
          } catch {
            /* */
          }
          return reject(new Error(`HTTP ${res.statusCode}`))
        }
        res.pipe(file)
        file.on('finish', () => file.close(() => resolve(dest)))
      },
    )
    req.on('error', (err) => {
      file.close()
      try {
        fs.unlinkSync(dest)
      } catch {
        /* */
      }
      reject(err)
    })
  })
}

/** Recursively walk nested arrays/objects looking for review-like structures */
function walk(node, found, depth = 0) {
  if (depth > 40 || node == null) return
  if (typeof node === 'string') {
    // profile photo URLs
    if (
      /googleusercontent\.com\/a\//i.test(node) ||
      (/lh3\.googleusercontent\.com/i.test(node) && !/gps-cs-s/i.test(node) && /=s\d+/i.test(node))
    ) {
      found.photos.push(node)
    }
    return
  }
  if (Array.isArray(node)) {
    // Pattern: [name, null, ..., photoUrl?, ..., rating?, text?]
    // Also look for tuples that look like [ "Name", photo ]
    if (
      node.length >= 2 &&
      typeof node[0] === 'string' &&
      node[0].length >= 2 &&
      node[0].length < 60 &&
      /^[\p{L}\p{N} .'\-]+$/u.test(node[0]) &&
      !/http|google|map|function|null|undefined|Review|star/i.test(node[0])
    ) {
      // find photo string in this array or nested
      let photo = null
      let text = null
      let rating = null
      let time = null
      const stack = [...node]
      while (stack.length) {
        const v = stack.shift()
        if (typeof v === 'string') {
          if (/googleusercontent\.com\/a\//i.test(v)) photo = photo || v
          else if (
            /lh3\.googleusercontent\.com/i.test(v) &&
            !/gps-cs-s/i.test(v) &&
            v.length > 40
          )
            photo = photo || v
          else if (v.length > 40 && /[.!?]/.test(v) && !/http|html|function/i.test(v))
            text = text || v
          else if (/\b(ago|week|month|year|day)\b/i.test(v) && v.length < 40) time = time || v
        } else if (typeof v === 'number' && v >= 1 && v <= 5) {
          rating = rating ?? v
        } else if (Array.isArray(v)) {
          stack.push(...v.slice(0, 30))
        }
      }
      if (photo || (text && text.length > 30)) {
        found.candidates.push({
          name: node[0],
          photo,
          text,
          rating,
          relativeTime: time,
        })
      }
    }
    for (const item of node) walk(item, found, depth + 1)
    return
  }
  if (typeof node === 'object') {
    for (const v of Object.values(node)) walk(v, found, depth + 1)
  }
}

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  locale: 'en-US',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 1100 },
})
const page = await context.newPage()

const bodies = []
page.on('response', async (res) => {
  try {
    const url = res.url()
    if (
      !/listugcposts|preview\/review|rpc\/|batchexecute|maps\/preview/i.test(url) &&
      !/PlaceService|review/i.test(url)
    )
      return
    const ct = res.headers()['content-type'] || ''
    if (!/json|javascript|text|octet/i.test(ct) && !url.includes('listugcposts')) return
    const status = res.status()
    if (status !== 200) return
    const text = await res.text()
    if (text.length < 50 || text.length > 5_000_000) return
    bodies.push({ url: url.slice(0, 200), len: text.length, text: text.slice(0, 500000) })
  } catch {
    /* ignore */
  }
})

console.error('Navigating…')
await page.goto(MAPS_URL, { waitUntil: 'domcontentloaded', timeout: 90000 })
await page.waitForTimeout(5000)

// Consent
for (const label of ['Accept all', 'I agree', 'Accept']) {
  const btn = page.getByRole('button', { name: new RegExp(`^${label}$`, 'i') })
  if (await btn.count()) {
    await btn.first().click({ timeout: 2000 }).catch(() => {})
  }
}

// Click reviews
for (const loc of [
  page.getByRole('tab', { name: /reviews/i }),
  page.getByRole('button', { name: /reviews/i }),
  page.locator('button[aria-label*="Reviews" i]'),
]) {
  if (await loc.count()) {
    await loc.first().click({ timeout: 4000 }).catch(() => {})
    console.error('Clicked reviews')
    break
  }
}
await page.waitForTimeout(5000)

for (let i = 0; i < 10; i++) {
  await page.evaluate(() => {
    const candidates = Array.from(document.querySelectorAll('div'))
    let best = null
    let bestH = 0
    for (const el of candidates) {
      if (el.scrollHeight > el.clientHeight + 50 && el.clientHeight > 200 && el.clientHeight > bestH) {
        best = el
        bestH = el.clientHeight
      }
    }
    if (best) best.scrollTop = best.scrollHeight
  })
  await page.waitForTimeout(900)
}

// Also try DOM extraction for jftiEf again after wait
const domReviews = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('div.jftiEf')).map((card) => {
    const name = card.querySelector('div.d4r55')?.textContent?.trim() || ''
    const img =
      card.querySelector('button.WEBjve img') ||
      card.querySelector('img.NBa7we') ||
      card.querySelector('img[src*="googleusercontent"]')
    const photo = img?.currentSrc || img?.src || null
    const starsLabel = card.querySelector('[aria-label*="star" i]')?.getAttribute('aria-label') || ''
    const rating = Number((starsLabel.match(/([0-9]+)/) || [])[1]) || null
    const relativeTime = card.querySelector('span.rsqaWe')?.textContent?.trim() || ''
    const text = card.querySelector('span.wiI7pd')?.textContent?.trim() || null
    return { name, photo, rating, relativeTime, text }
  })
})
console.error('DOM cards', domReviews.length, JSON.stringify(domReviews, null, 2))

// Parse network bodies
const found = { photos: [], candidates: [] }
for (const b of bodies) {
  // try JSON parse after stripping )]}'
  let raw = b.text
  if (raw.startsWith(")]}'")) raw = raw.replace(/^\)\]\}'\s*/, '')
  try {
    const json = JSON.parse(raw)
    walk(json, found)
  } catch {
    // try to find strings with regex
    const names = [
      'Tina Ford',
      'M Ten',
      'Kelvin Blevens',
      'Tina',
      'Kelvin',
    ]
    for (const n of names) {
      if (raw.includes(n)) {
        // find nearby googleusercontent /a/ urls
        const idx = raw.indexOf(n)
        const window = raw.slice(Math.max(0, idx - 500), idx + 2000)
        const photoMatch = window.match(
          /https:\/\/lh3\.googleusercontent\.com\/a\/[A-Za-z0-9_\-=]+(?:\\u003d|=)s[0-9]+[^"\\]*/,
        )
        const photoMatch2 = window.match(
          /https:\/\/lh3\.googleusercontent\.com\/[^"\\]+/,
        )
        let photo = photoMatch?.[0] || photoMatch2?.[0] || null
        if (photo) photo = photo.replace(/\\u003d/g, '=').replace(/\\+/g, '')
        found.candidates.push({ name: n, photo, text: null, rating: 5, relativeTime: null })
      }
    }
    // all /a/ profile urls
    for (const m of raw.matchAll(/https:\/\/lh3\.googleusercontent\.com\/a\/[A-Za-z0-9_\-=%]+/g)) {
      found.photos.push(m[0].replace(/\\u003d/g, '='))
    }
  }
}

console.error('Network bodies captured', bodies.length)
console.error('Profile photo URLs found', found.photos.slice(0, 20))
console.error('Candidates', JSON.stringify(found.candidates.slice(0, 30), null, 2))

fs.writeFileSync(
  RAW_OUT,
  JSON.stringify(
    {
      bodyCount: bodies.length,
      bodyUrls: bodies.map((b) => b.url),
      photos: [...new Set(found.photos)].slice(0, 50),
      candidates: found.candidates,
      domReviews,
    },
    null,
    2,
  ),
)

// Build final list from known + best photo match
const KNOWN = [
  {
    name: 'Tina Ford',
    rating: 5,
    relativeTime: 'a week ago',
    text: 'I wish I could give more than 5 stars! David was very professional, polite, on time, excellent communication with his time, got the job done in extreme heat, and was very reasonable with the quote for removing 18 trees that were 60-65 feet tall. His attention to safety was exceptional and was a concern for me when hiring someone to do this job. Once I saw his process start, I had every confidence in his ability to get the job done with his safety techniques. He removed stumps, graded, leveled and seeded the whole area and had the job done on time as promised within one week from starting. I highly recommend Growfully for any landscaping needs.',
  },
  {
    name: 'M Ten',
    rating: 5,
    relativeTime: '8 years ago',
    text: 'DAVID IS HONEST AND DEPENDABLE HE GOT TO MY JOB SOONER THAN HE PROMISED. HE AND HIS CREW ARE FRIENDLY AND VERY RESPECTFUL AND DID AN ABSOLUTELY BEAUTIFUL JOB! I WILL BE CALLING HIM BACK TO DO MORE IN THE FUTURE',
  },
  {
    name: 'Kelvin Blevens',
    rating: 5,
    relativeTime: '8 years ago',
    text: null,
  },
]

function findPhotoFor(name) {
  const dom = domReviews.find((d) => d.name && d.name.toLowerCase() === name.toLowerCase())
  if (dom?.photo) return dom.photo
  const cand = found.candidates.find(
    (c) => c.name && (c.name.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(c.name.toLowerCase())),
  )
  if (cand?.photo) return cand.photo
  // partial
  const first = name.split(' ')[0].toLowerCase()
  const cand2 = found.candidates.find((c) => c.name?.toLowerCase().includes(first) && c.photo)
  return cand2?.photo || null
}

fs.mkdirSync(PHOTO_DIR, { recursive: true })
const final = []
for (const k of KNOWN) {
  const photoUrl = findPhotoFor(k.name)
  let localPhoto = null
  if (photoUrl) {
    const dest = path.join(PHOTO_DIR, `${slugify(k.name)}.jpg`)
    try {
      const url = hiResPhotoUrl(photoUrl)
      console.error('DL', k.name, url)
      await download(url, dest)
      if (fs.statSync(dest).size > 200) {
        localPhoto = `/images/reviewers/${slugify(k.name)}.jpg`
      } else fs.unlinkSync(dest)
    } catch (e) {
      console.error('DL fail', k.name, e.message)
    }
  }
  final.push({
    name: k.name,
    rating: k.rating,
    relativeTime: k.relativeTime,
    text: k.text,
    photo: localPhoto,
    photoSource: photoUrl,
  })
}

const payload = {
  source: 'https://maps.app.goo.gl/deo5VoXM6QLw8BsdA',
  place: 'Growfully LLC',
  scrapedAt: new Date().toISOString(),
  overallRating: '5.0',
  reviewCount: 3,
  reviews: final,
}
fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2))
console.log(JSON.stringify(payload, null, 2))
await browser.close()
