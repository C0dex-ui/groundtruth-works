/** Real content only — sourced from Growfully / Ground Truth. Images are unique per slot. */

export const PHONE_DISPLAY = '(501) 269-6860'
export const PHONE_HREF = 'tel:+15012696860'
export const EMAIL = 'growfullyllc@gmail.com'
export const EMAIL_HREF = 'mailto:growfullyllc@gmail.com'
export const COMPANY = 'Growfully, LLC'
export const TAGLINE = 'SITE WORK · LAND CLEARING · GRADING'
export const LOCATION_LINE = 'Mayflower, AR · Serving Central Arkansas since 2002'

/** Hero background video (served from public/). */
export const HERO_VIDEO = '/videos/groundtruth-hero.mp4'

/** Every path is used once — no redundant imagery across the homepage. */
export const IMAGES = {
  logo: '/logo.png',
  /** Poster / reduced-motion fallback for hero video */
  hero: '/images/hero.jpg',
  landClearing: '/images/service-land-clearing.jpg',
  siteGrading: '/images/service-site-grading.jpg',
  excavation: '/images/service-excavation.jpg',
  sitePrep: '/images/service-site-prep.jpg',
  forestry: '/images/service-forestry-mulching.jpg',
  brush: '/images/service-brush-clearing.jpg',
  dirtWork: '/images/service-dirt-work.jpg',
  drainage: '/images/service-drainage.jpg',
  solar: '/images/industry-solar.jpg',
  gc: '/images/industry-gc.jpg',
  commercial: '/images/industry-commercial.jpg',
  processClear: '/images/process-clear.jpg',
  processStrip: '/images/process-strip.jpg',
  processGrade: '/images/process-grade.jpg',
  processCompact: '/images/process-compact.jpg',
  processBase: '/images/process-base.jpg',
  gallery: [
    '/images/gallery-01.jpg',
    '/images/gallery-02.jpg',
    '/images/gallery-03.jpg',
    '/images/gallery-04.jpg',
  ],
} as const

export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const TRUST = [
  { label: 'BBB A+', detail: 'Accredited business', value: 'A+' },
  { label: '24 yrs', detail: 'Working Central Arkansas since 2002', value: '24' },
  { label: 'Insured', detail: 'Licensed and covered on commercial sites', value: '✓' },
  { label: 'Free', detail: 'On-site estimate, written number', value: '$0' },
] as const

export const SERVICES = [
  {
    title: 'Land Clearing',
    description:
      'Trees, stumps and undergrowth removed down to workable ground, on tracts from one acre up.',
    href: '/services/land-clearing',
    image: IMAGES.landClearing,
    featured: true,
  },
  {
    title: 'Site Grading',
    description:
      'Rough and fine grade to plan elevations, with the slope and compaction your pad detail calls for.',
    href: '/services/site-grading',
    image: IMAGES.siteGrading,
    featured: true,
  },
  {
    title: 'Excavation Services',
    description:
      'Cut, fill, trenching and bulk earthmoving for footings, utilities, ponds and building pads.',
    href: '/services/excavation-services',
    image: IMAGES.excavation,
  },
  {
    title: 'Site Preparation',
    description:
      'Raw ground to buildable site: clear, strip, grade, compact and stone in one contracted scope.',
    href: '/services/site-preparation',
    image: IMAGES.sitePrep,
  },
  {
    title: 'Forestry Mulching',
    description:
      'Standing vegetation ground in place to a mulch mat — no burn piles, no hauling, minimal soil disturbance.',
    href: '/services/forestry-mulching',
    image: IMAGES.forestry,
  },
  {
    title: 'Brush Clearing',
    description:
      'Undergrowth, briar and small-diameter growth cleared for access, fence lines and sight lines.',
    href: '/services/brush-clearing',
    image: IMAGES.brush,
  },
  {
    title: 'Dirt Work',
    description:
      'Hauling, spreading and shaping fill — pads, access roads, parking areas and balanced cut-and-fill.',
    href: '/services/dirt-work',
    image: IMAGES.dirtWork,
  },
  {
    title: 'Drainage & Erosion Control',
    description:
      'Positive drainage, swales, culverts and silt control that keeps a finished grade where you put it.',
    href: '/services/drainage-erosion-control',
    image: IMAGES.drainage,
  },
] as const

export const PROCESS = [
  {
    step: 1,
    title: 'Clear',
    description:
      'Trees, stumps and undergrowth come off the tract down to workable ground.',
    href: '/services/land-clearing',
    image: IMAGES.processClear,
  },
  {
    step: 2,
    title: 'Strip',
    description:
      'Topsoil is stripped and stockpiled so the pad is built on competent subgrade.',
    href: '/services/site-preparation',
    image: IMAGES.processStrip,
  },
  {
    step: 3,
    title: 'Grade',
    description:
      'Cut and fill balanced, then the surface brought to the elevations on your plan.',
    href: '/services/site-grading',
    image: IMAGES.processGrade,
  },
  {
    step: 4,
    title: 'Compact',
    description:
      'Lifts rolled and proofrolled until the subgrade holds the density the spec calls for.',
    href: '/services/dirt-work',
    image: IMAGES.processCompact,
  },
  {
    step: 5,
    title: 'Base',
    description:
      'Base stone placed and shaped. The pad is ready for footings, steel or paving.',
    href: '/services/site-preparation',
    image: IMAGES.processBase,
  },
] as const

export const INDUSTRIES = [
  {
    title: 'Solar Site Preparation',
    description:
      'Utility-scale array site work — clearing, grading to tolerance, access roads and erosion control.',
    href: '/industries/solar-site-preparation',
    image: IMAGES.solar,
  },
  {
    title: 'General Contractors',
    description:
      'A site-work sub who mobilizes fast, hits grade, and does not hold up your schedule.',
    href: '/industries/general-contractors',
    image: IMAGES.gc,
  },
  {
    title: 'Commercial Development',
    description:
      'Parking lots, warehouse pads, industrial sites and subdivision earthwork.',
    href: '/industries/commercial-development',
    image: IMAGES.commercial,
  },
] as const

/** Real Central Arkansas service cities with map centers (city proper). */
export const SERVICE_CITIES = [
  { name: 'Mayflower', slug: 'mayflower-ar', lat: 34.9568, lng: -92.4274 },
  { name: 'Conway', slug: 'conway-ar', lat: 35.0887, lng: -92.4421 },
  { name: 'Vilonia', slug: 'vilonia-ar', lat: 35.0839, lng: -92.2085 },
  { name: 'Greenbrier', slug: 'greenbrier-ar', lat: 35.2339, lng: -92.3879 },
  { name: 'Maumelle', slug: 'maumelle-ar', lat: 34.8668, lng: -92.4043 },
  { name: 'North Little Rock', slug: 'north-little-rock-ar', lat: 34.7695, lng: -92.2671 },
  { name: 'Little Rock', slug: 'little-rock-ar', lat: 34.7465, lng: -92.2896 },
  { name: 'Sherwood', slug: 'sherwood-ar', lat: 34.8151, lng: -92.2243 },
  { name: 'Benton', slug: 'benton-ar', lat: 34.5645, lng: -92.5868 },
  { name: 'Bryant', slug: 'bryant-ar', lat: 34.5959, lng: -92.489 },
  { name: 'Cabot', slug: 'cabot-ar', lat: 34.9745, lng: -92.0165 },
  { name: 'Jacksonville', slug: 'jacksonville-ar', lat: 34.8662, lng: -92.1101 },
  { name: 'Searcy', slug: 'searcy-ar', lat: 35.2506, lng: -91.7363 },
  { name: 'Russellville', slug: 'russellville-ar', lat: 35.2784, lng: -93.1338 },
  { name: 'Hot Springs', slug: 'hot-springs-ar', lat: 34.5037, lng: -93.0552 },
] as const

export type ServiceCity = (typeof SERVICE_CITIES)[number]

export function getCityBySlug(slug: string): ServiceCity | undefined {
  return SERVICE_CITIES.find((c) => c.slug === slug)
}

/** Mayflower HQ — default map center for homepage overview. */
export const MAP = {
  lat: 34.9568,
  lng: -92.4274,
  zoom: 9,
}

/** Build OpenStreetMap embed URL centered on a lat/lng with a pin. */
export function buildMapEmbedUrl(lat: number, lng: number, delta = 0.12) {
  const bbox = `${lng - delta}%2C${lat - delta * 0.7}%2C${lng + delta}%2C${lat + delta * 0.7}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`
}

export function buildMapLinkUrl(lat: number, lng: number, zoom = 12) {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`
}


export const QUOTE_SERVICE_OPTIONS = [
  'Land clearing',
  'Site grading',
  'Excavation',
  'Site prep',
  'Forestry mulching',
  'Brush clearing',
  'Dirt work',
  'Drainage',
  'Not sure yet',
] as const
