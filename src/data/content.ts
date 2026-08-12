/** Real content only — sourced from Growfully / Ground Truth. Images are unique per slot. */

export const PHONE_DISPLAY = '(501) 269-6860'
export const PHONE_HREF = 'tel:+15012696860'
export const EMAIL = 'growfullyllc@gmail.com'
export const EMAIL_HREF = 'mailto:growfullyllc@gmail.com'
export const COMPANY = 'Growfully, LLC'
export const TAGLINE = 'SITE WORK · LAND CLEARING · GRADING'
export const LOCATION_LINE = 'Mayflower, AR · Serving Central Arkansas since 2002'

/**
 * Public trust signals — only real credentials.
 * Google rating: keep in sync with the live Maps listing
 * (https://maps.app.goo.gl/deo5VoXM6QLw8BsdA). Do not invent scores.
 */
export const RATINGS = {
  sinceYear: 2002,
  bbb: {
    grade: 'A+',
    label: 'A+ Rated',
    detail: 'BBB Accredited',
    href: 'https://www.bbb.org/us/ar/mayflower/profile/landscape-contractors/growfully-llc-0935-90361655',
  },
  google: {
    /** Live Google Business Profile score for Growfully LLC */
    score: '5.0',
    /** Total Google reviews on the business profile (Maps listing). */
    reviewCount: 3,
    detail: 'Google Rating',
    href: 'https://maps.app.goo.gl/deo5VoXM6QLw8BsdA',
  },
} as const

/**
 * All Google reviews from the live Maps listing.
 * Source: https://maps.app.goo.gl/deo5VoXM6QLw8BsdA
 * Do not invent, paraphrase into fake quotes, or add placeholder customers.
 * Profile photos scraped from Google (local copies under /images/reviewers/).
 * Kelvin Blevens left stars only — no written body.
 */
export const TESTIMONIALS = [
  {
    name: 'Tina Ford',
    rating: 5,
    relativeTime: 'a week ago',
    text: 'I wish I could give more than 5 stars! David was very professional, polite, on time, excellent communication with his time, got the job done in extreme heat, and was very reasonable with the quote for removing 18 trees that were 60-65 feet tall. His attention to safety was exceptional and was a concern for me when hiring someone to do this job. Once I saw his process start, I had every confidence in his ability to get the job done with his safety techniques. He removed stumps, graded, leveled and seeded the whole area and had the job done on time as promised within one week from starting. I highly recommend Growfully for any landscaping needs.',
    photo: '/images/reviewers/tina-ford.jpg',
    source: 'Google' as const,
  },
  {
    name: 'M Ten',
    rating: 5,
    relativeTime: '8 years ago',
    text: 'DAVID IS HONEST AND DEPENDABLE HE GOT TO MY JOB SOONER THAN HE PROMISED. HE AND HIS CREW ARE FRIENDLY AND VERY RESPECTFUL AND DID AN ABSOLUTELY BEAUTIFUL JOB! I WILL BE CALLING HIM BACK TO DO MORE IN THE FUTURE',
    photo: '/images/reviewers/m-ten.jpg',
    source: 'Google' as const,
  },
  {
    name: 'Kelvin Blevens',
    rating: 5,
    relativeTime: '8 years ago',
    /** No written review on Google — star rating only */
    text: null as string | null,
    photo: '/images/reviewers/kelvin-blevens.jpg',
    source: 'Google' as const,
  },
]

/** Hero background video (served from public/). */
export const HERO_VIDEO = '/videos/groundtruth-hero.mp4'

/**
 * HOMEPAGE imagery only — each path is used once on `/`.
 * Interior pages must use INTERIOR_IMAGES so nothing is shared across routes.
 */
export const IMAGES = {
  logo: '/logo.png',
  bbbLogo: '/images/bbb-logo.png',
  googleReviewsLogo: '/images/google-5star-logo.png',
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

/**
 * INTERIOR-only photos.
 * Lovable assets under /images/lovable/ + enhanced hero crops under /images/heroes/.
 * Never used on the homepage. Each path appears on at most one interior route.
 */
export const INTERIOR_IMAGES = {
  servicesIndex: '/images/heroes/services-index.jpg',
  industriesIndex: '/images/heroes/industries-index.jpg',
  serviceAreasIndex: '/images/lovable/14-og-city.jpg',
  projectsHero: '/images/lovable/15-arkansas-land-Db6vANsR.jpg',
  about: '/images/heroes/about.jpg',
  contact: '/images/heroes/contact.jpg',
  quote: '/images/heroes/quote.jpg',
  reviews: '/images/heroes/reviews.jpg',
  insights: '/images/heroes/insights.jpg',
  insightsArticle: '/images/heroes/insights-article.jpg',
  privacy: '/images/heroes/privacy.jpg',
  terms: '/images/heroes/terms.jpg',
  /** Service detail heroes — separate files from homepage service cards */
  serviceDetail: {
    'land-clearing': '/images/lovable/03-growfully3.jpg',
    'site-grading': '/images/lovable/04-growfully10.jpg',
    'excavation-services': '/images/lovable/09-growfully13.jpg',
    'site-preparation': '/images/lovable/10-growfully9.jpg',
    'forestry-mulching': '/images/lovable/08-growfully17.jpg',
    'brush-clearing': '/images/lovable/11-brush-clearing-BC_VJsRa.jpg',
    'dirt-work': '/images/lovable/12-growfully5.jpg',
    'drainage-erosion-control': '/images/lovable/13-growfully11.jpg',
  },
  /** Industry detail heroes — separate from homepage industry cards */
  industryDetail: {
    'solar-site-preparation': '/images/lovable/05-solar-site-5X0xDwkN.jpg',
    'general-contractors': '/images/lovable/06-growfully20.jpg',
    'commercial-development': '/images/lovable/02-growfully7.jpg',
  },
  /**
   * City service-area heroes — every city route gets a photo (not map-only).
   * Maps live lower on the page in the body.
   */
  cityHero: {
    'mayflower-ar': '/images/heroes/city-mayflower.jpg',
    'conway-ar': '/images/heroes/city-conway.jpg',
    'vilonia-ar': '/images/heroes/city-vilonia.jpg',
    'greenbrier-ar': '/images/heroes/city-greenbrier.jpg',
    'maumelle-ar': '/images/heroes/city-maumelle.jpg',
    'north-little-rock-ar': '/images/heroes/city-north-little-rock.jpg',
    'little-rock-ar': '/images/heroes/city-little-rock.jpg',
    'sherwood-ar': '/images/heroes/city-sherwood.jpg',
  } as Record<string, string>,
  cityHeroDefault: '/images/heroes/city-default.jpg',
  /**
   * Intro prose media (right column under hero). Distinct from hero paths.
   * One file per section that would otherwise be text-only.
   */
  serviceIntro: {
    'land-clearing': '/images/heroes/intro-land-clearing.jpg',
    'site-grading': '/images/heroes/intro-site-grading.jpg',
    'excavation-services': '/images/heroes/intro-excavation.jpg',
    'site-preparation': '/images/heroes/intro-site-prep.jpg',
    'forestry-mulching': '/images/heroes/intro-forestry.jpg',
    'brush-clearing': '/images/heroes/intro-brush.jpg',
    'dirt-work': '/images/heroes/intro-dirt-work.jpg',
    'drainage-erosion-control': '/images/heroes/intro-drainage.jpg',
  },
  industryIntro: {
    'solar-site-preparation': '/images/heroes/intro-solar.jpg',
    'general-contractors': '/images/heroes/intro-gc.jpg',
    'commercial-development': '/images/heroes/intro-commercial.jpg',
  },
  aboutWhy: '/images/heroes/intro-about-why.jpg',
  aboutYears: '/images/heroes/intro-about-years.jpg',
  projectsVisit: '/images/heroes/intro-projects-visit.jpg',
  reviewsWhich: '/images/heroes/intro-reviews-which.jpg',
  reviewsLines: '/images/heroes/intro-reviews-lines.jpg',
  gradeTolerance: '/images/heroes/intro-grade-tolerance.jpg',
  serviceAreasOutside: '/images/heroes/intro-areas-outside.jpg',
} as const

/** Resolve a unique interior hero photo for a city slug. */
export function cityHeroImage(slug: string): string {
  return INTERIOR_IMAGES.cityHero[slug] ?? INTERIOR_IMAGES.cityHeroDefault
}

/** Primary nav — Services / Industries / Service Areas open dropdowns (Lovable pattern). */
export type NavChild = { label: string; href: string; description?: string }
export type NavItem = {
  label: string
  href: string
  children?: readonly NavChild[]
}

export const NAV: readonly NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Land Clearing',
        href: '/services/land-clearing',
        description: 'Trees, stumps and undergrowth to workable ground',
      },
      {
        label: 'Site Grading',
        href: '/services/site-grading',
        description: 'Rough and fine grade to plan elevations',
      },
      {
        label: 'Excavation Services',
        href: '/services/excavation-services',
        description: 'Cut, fill, trenching and bulk earthmoving',
      },
      {
        label: 'Site Preparation',
        href: '/services/site-preparation',
        description: 'Clear, strip, grade, compact and stone',
      },
      {
        label: 'Forestry Mulching',
        href: '/services/forestry-mulching',
        description: 'Mulch mat in place — no burn piles',
      },
      {
        label: 'Brush Clearing',
        href: '/services/brush-clearing',
        description: 'Undergrowth, briar and fence lines',
      },
      {
        label: 'Dirt Work',
        href: '/services/dirt-work',
        description: 'Hauling, pads, access roads, cut-and-fill',
      },
      {
        label: 'Drainage & Erosion Control',
        href: '/services/drainage-erosion-control',
        description: 'Swales, culverts and silt control',
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      {
        label: 'Solar Site Preparation',
        href: '/industries/solar-site-preparation',
        description: 'Arrays, roads, tolerance grading',
      },
      {
        label: 'General Contractors',
        href: '/industries/general-contractors',
        description: 'Site-work sub who hits grade',
      },
      {
        label: 'Commercial Development',
        href: '/industries/commercial-development',
        description: 'Pads, parking and industrial sites',
      },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-areas',
    children: [
      { label: 'Mayflower, AR', href: '/service-areas/mayflower-ar' },
      { label: 'Conway, AR', href: '/service-areas/conway-ar' },
      { label: 'Vilonia, AR', href: '/service-areas/vilonia-ar' },
      { label: 'Greenbrier, AR', href: '/service-areas/greenbrier-ar' },
      { label: 'Maumelle, AR', href: '/service-areas/maumelle-ar' },
      { label: 'North Little Rock, AR', href: '/service-areas/north-little-rock-ar' },
      { label: 'Little Rock, AR', href: '/service-areas/little-rock-ar' },
      { label: 'Sherwood, AR', href: '/service-areas/sherwood-ar' },
      { label: 'All service areas', href: '/service-areas' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

/** Company links used in footer (matches Lovable sitemap). */
export const COMPANY_LINKS = [
  { label: 'About Growfully', href: '/about' },
  { label: 'Completed projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
  { label: 'Reviews', href: '/reviews' },
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

/** Mayflower HQ (within Arkansas only). */
export const MAP = {
  lat: 34.9568,
  lng: -92.4274,
  zoom: 9,
}

/**
 * Homepage map — official Growfully LLC Google Maps place pin.
 * Embed provided by the business Google listing.
 */
export const GROWFULLY_MAP = {
  name: 'Growfully LLC',
  lat: 35.046168,
  lng: -92.6490385,
  placeQuery: 'Growfully LLC',
  /** Official place embed (Central Arkansas service territory). */
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d257230.79269788688!2d-92.6490385!3d35.046168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d29da3e0b11ce3%3A0xa8728947de885622!2sGrowfully%20LLC!5e1!3m2!1sen!2sus!4v1786430695651!5m2!1sen!2sus',
  openUrl:
    'https://www.google.com/maps/search/?api=1&query=Growfully%20LLC',
} as const

/** @deprecated Prefer GROWFULLY_MAP — kept for city-map fallbacks. */
export const ARKANSAS_STATE_MAP = {
  name: GROWFULLY_MAP.name,
  lat: GROWFULLY_MAP.lat,
  lng: GROWFULLY_MAP.lng,
  zoom: 10,
  placeQuery: GROWFULLY_MAP.placeQuery,
} as const

/**
 * Google Maps embed — Arkansas locations only.
 * Uses the standard maps embed endpoint (no API key required for basic place pins).
 */
export function buildMapEmbedUrl(
  lat: number,
  lng: number,
  options?: { zoom?: number; place?: string },
) {
  const zoom = options?.zoom ?? 12
  const query = options?.place
    ? encodeURIComponent(options.place)
    : `${lat},${lng}`
  return `https://maps.google.com/maps?q=${query}&ll=${lat},${lng}&z=${zoom}&hl=en&output=embed`
}

/** Google Maps full-page link. */
export function buildMapLinkUrl(
  lat: number,
  lng: number,
  options?: { zoom?: number; place?: string },
) {
  const zoom = options?.zoom ?? 12
  if (options?.place) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(options.place)}`
  }
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}`
}

/** Homepage embed — Growfully LLC place pin. */
export function buildArkansasStateMapEmbedUrl() {
  return GROWFULLY_MAP.embedUrl
}

export function buildArkansasStateMapLinkUrl() {
  return GROWFULLY_MAP.openUrl
}

/** City map — still Arkansas only (`City, AR`). */
export function buildCityMapEmbedUrl(city: ServiceCity, zoom = 12) {
  return buildMapEmbedUrl(city.lat, city.lng, {
    zoom,
    place: `${city.name}, AR`,
  })
}

export function buildCityMapLinkUrl(city: ServiceCity) {
  return buildMapLinkUrl(city.lat, city.lng, {
    place: `${city.name}, Arkansas`,
  })
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
