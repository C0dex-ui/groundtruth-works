const base = 'https://groundtruth-works.lovable.app'
const urls = [
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
  '/insights',
  '/insights/land-clearing-cost-central-arkansas',
  '/reviews',
  '/contact',
  '/get-a-quote',
  '/privacy',
  '/terms',
]

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
}

function text(el) {
  return el.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function extract(html) {
  const t = strip(html)
  const title = text((t.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '')
  const h2s = [...t.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)]
    .map((m) => text(m[1]))
    .filter(
      (h) =>
        h &&
        !/^(Services|Service areas|Industries|Company|Growfully)/i.test(h) &&
        h.length < 120,
    )
  const uh2 = [...new Set(h2s)]
  const words = text(t).split(/\s+/).length
  return { title, h2s: uh2, words }
}

for (const path of urls) {
  try {
    const r = await fetch(base + path)
    const html = await r.text()
    const { title, h2s, words } = extract(html)
    console.log('---', path, '| words~', words)
    console.log('H1:', title.slice(0, 140))
    console.log('H2:', h2s.join(' | '))
  } catch (e) {
    console.log('---', path, 'ERR', e.message)
  }
}
