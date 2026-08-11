/**
 * Scrape real Google Maps reviews for Growfully LLC.
 * Outputs JSON to resources/google-reviews.json
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const MAPS_URL =
  'https://maps.app.goo.gl/deo5VoXM6QLw8BsdA'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../resources/google-reviews.json')
const DEBUG_DIR = path.join(__dirname, '../resources')

async function dismissConsent(page) {
  for (const label of [
    'Accept all',
    'I agree',
    'Accept',
    'Reject all',
    'Alle akzeptieren',
    'Aceptar todo',
  ]) {
    const btn = page.getByRole('button', { name: new RegExp(`^${label}$`, 'i') })
    if (await btn.count()) {
      try {
        await btn.first().click({ timeout: 2500 })
        await page.waitForTimeout(1500)
      } catch {
        /* ignore */
      }
    }
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    locale: 'en-US',
    geolocation: { latitude: 35.046, longitude: -92.484 },
    permissions: ['geolocation'],
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 1100 },
  })
  const page = await context.newPage()

  console.error('Navigating…', MAPS_URL)
  await page.goto(MAPS_URL, { waitUntil: 'networkidle', timeout: 90000 }).catch(() =>
    page.goto(MAPS_URL, { waitUntil: 'domcontentloaded', timeout: 90000 }),
  )
  await page.waitForTimeout(5000)
  await dismissConsent(page)
  await page.waitForTimeout(3000)

  // Wait for place title
  await page.waitForSelector('h1', { timeout: 30000 }).catch(() => {})
  const title = await page.locator('h1').first().textContent().catch(() => '')
  console.error('Title:', title)

  // Overall rating
  let overallRating = null
  let reviewCount = null
  const ratingCandidates = await page.locator('[aria-label*="star"], [aria-label*="Star"]').allTextContents().catch(() => [])
  console.error('rating candidates text', ratingCandidates.slice(0, 10))

  const ariaRatings = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('[aria-label]'))
      .map((el) => el.getAttribute('aria-label') || '')
      .filter((a) => /star/i.test(a))
      .slice(0, 40)
  })
  console.error('aria star labels', ariaRatings)

  for (const a of ariaRatings) {
    const m = a.match(/([0-9]\.[0-9])\s*star/i)
    if (m) overallRating = m[1]
    const c = a.match(/([0-9]+)\s*review/i)
    if (c) reviewCount = Number(c[1])
  }

  // Click Reviews tab / button
  const reviewTriggers = [
    page.getByRole('tab', { name: /reviews/i }),
    page.getByRole('button', { name: /reviews/i }),
    page.locator('button[aria-label*="Reviews" i]'),
    page.locator('button[aria-label*="review" i]'),
    page.locator('a[href*="reviews"]'),
  ]
  for (const loc of reviewTriggers) {
    if (await loc.count()) {
      try {
        await loc.first().click({ timeout: 4000 })
        console.error('Clicked reviews trigger')
        await page.waitForTimeout(4000)
        break
      } catch {
        /* try next */
      }
    }
  }

  // Sometimes reviews are under "See all reviews"
  const seeAll = page.getByText(/see all reviews|all reviews/i)
  if (await seeAll.count()) {
    try {
      await seeAll.first().click({ timeout: 3000 })
      await page.waitForTimeout(3000)
      console.error('Clicked see all reviews')
    } catch {
      /* ignore */
    }
  }

  // Scroll sidebar to load reviews
  for (let i = 0; i < 12; i++) {
    await page.evaluate(() => {
      const candidates = Array.from(document.querySelectorAll('div[role="main"] div, div.m6QErb'))
      // scroll the tallest scrollable panel
      let best = null
      let bestH = 0
      for (const el of candidates) {
        if (el.scrollHeight > el.clientHeight + 40 && el.clientHeight > bestH) {
          best = el
          bestH = el.clientHeight
        }
      }
      if (best) best.scrollTop = best.scrollHeight
      else window.scrollBy(0, 900)
    })
    await page.waitForTimeout(900)
  }

  // Expand more
  const more = page.locator('button:has-text("More"), button[aria-label*="See more" i], button.w8nwRe')
  const nMore = await more.count()
  for (let i = 0; i < Math.min(nMore, 25); i++) {
    try {
      await more.nth(i).click({ timeout: 600 })
    } catch {
      /* ignore */
    }
  }
  await page.waitForTimeout(1000)

  // Broad extraction from DOM
  const reviews = await page.evaluate(() => {
    const results = []

    // Strategy 1: known review card classes (can change)
    const cardSelectors = [
      'div.jftiEf',
      'div[data-review-id]',
      'div.gws-localreviews__google-review',
      'div[jscontroller][data-review-id]',
    ]
    let cards = []
    for (const sel of cardSelectors) {
      cards = Array.from(document.querySelectorAll(sel))
      if (cards.length) break
    }

    // Strategy 2: containers that have a star aria-label + substantial text
    if (!cards.length) {
      const withStars = Array.from(document.querySelectorAll('[aria-label*="star" i], [aria-label*="Star"]'))
      const parents = new Set()
      for (const el of withStars) {
        let p = el.parentElement
        for (let i = 0; i < 6 && p; i++) {
          if (p.innerText && p.innerText.length > 40) {
            parents.add(p)
            break
          }
          p = p.parentElement
        }
      }
      cards = Array.from(parents)
    }

    for (const card of cards) {
      const text = (card.innerText || '').replace(/\s+/g, ' ').trim()
      if (text.length < 20) continue

      const starEl = card.querySelector('[aria-label*="star" i], [aria-label*="Star"]')
      const starsLabel = starEl?.getAttribute('aria-label') || ''
      const starsMatch = starsLabel.match(/([0-9]+(?:\.[0-9])?)/)
      const rating = starsMatch ? Number(starsMatch[1]) : null

      // Heuristic parse lines
      const lines = (card.innerText || '')
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)

      // name often first non-empty line
      let name = lines[0] || ''
      if (/^[0-9]/.test(name) || /star/i.test(name) || name.length > 40) {
        name = lines.find((l) => l.length < 40 && /[A-Za-z]/.test(l) && !/star|review|ago|Edited/i.test(l)) || name
      }

      // relative time
      const relativeTime =
        lines.find((l) => /\b(ago|week|month|year|day|hour|Edited)\b/i.test(l)) || ''

      // body: longest line that isn't name/meta
      let body = ''
      for (const l of lines) {
        if (l === name || l === relativeTime) continue
        if (/star|response from|owner/i.test(l)) continue
        if (l.length > body.length) body = l
      }
      // prefer span bodies if present
      const bodyEl =
        card.querySelector('span.wiI7pd') ||
        card.querySelector('div.MyEned') ||
        card.querySelector('[data-expandable-section]')
      if (bodyEl?.textContent?.trim()) {
        body = bodyEl.textContent.replace(/\s+/g, ' ').trim()
      }

      if (!body || body.length < 15) continue
      if (/^Failed to|Not enough storage|cookie|consent/i.test(body)) continue

      results.push({
        name: name.slice(0, 80),
        rating,
        relativeTime: relativeTime.slice(0, 60),
        text: body,
      })
    }

    // de-dupe by text
    const seen = new Set()
    return results.filter((r) => {
      const k = r.text.slice(0, 100)
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
  })

  // Screenshot + debug HTML for debugging if empty
  await page.screenshot({ path: path.join(DEBUG_DIR, 'gmap-shot.png'), fullPage: false })
  if (!reviews.length) {
    fs.writeFileSync(path.join(DEBUG_DIR, 'gmap-debug.html'), await page.content(), 'utf8')
    console.error('No reviews extracted; wrote debug files')
  }

  const payload = {
    source: 'https://maps.app.goo.gl/deo5VoXM6QLw8BsdA',
    place: title?.trim() || 'Growfully LLC',
    scrapedAt: new Date().toISOString(),
    overallRating,
    reviewCount,
    reviews,
  }

  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2), 'utf8')
  console.log(JSON.stringify(payload, null, 2))
  await browser.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
