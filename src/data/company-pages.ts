/**
 * About, projects, contact, legal, and service-area index copy
 * sourced from groundtruth-works.lovable.app.
 */

export const OWNER = {
  name: 'David Culberson',
  role: 'Owner and operator',
} as const

export const HOURS_LINE = 'Mon–Sat 7:00 AM – 5:00 PM · Sunday closed'
export const HOURS_DETAIL = 'Monday–Saturday, 7:00 AM – 5:00 PM · Closed Sunday'

export const ABOUT = {
  heroTitle: 'The man who quotes it runs it',
  lead:
    'David Culberson has been moving dirt in Central Arkansas since 2002. He walks your site, writes your number, and is the one in the seat when the work starts. No estimator you never see again, no crew handed a job they did not price.',
  whyTitle: 'Why owner-operated matters on your job',
  why: [
    'Most of the outfits bidding against us send an estimator to your site, price the work in an office, and then hand a folder to a crew who sees the ground for the first time on mobilisation day. Every assumption in that folder is somebody else’s. When the subgrade pumps or the rock comes up shallow, the person on the machine has no authority to solve it, so the site stops and a change order goes up the chain.',
    'Growfully does not work that way. David Culberson walks the tract, reads the plan set, prices the job and then operates the machine that does it. The judgement that produced the number is physically present when the number gets tested. If a condition changes, you talk to the man who can decide what to do about it, on the spot, without a meeting.',
    'That is the practical difference against the larger regional contractors. They have more iron and more crews, and for a very large project that matters. On a pad, a lot, an array footprint or a clearing job in the one-to-fifty-acre range, what actually determines whether the schedule holds is whether the decision-maker is on site. Ours is.',
    'It also means one phone number. You are not routed through a dispatcher to a superintendent to a foreman. You call (501) 269-6860 and you get the owner, during the estimate and during the job.',
  ],
  yearsTitle: '24 years in Central Arkansas',
  years: [
    'Growfully has been in business since 2002 — 24 years working the same ground, from the Faulkner County uplands down through the Arkansas River terraces into Pulaski County.',
    'That length of time in one region is not a vanity statistic. It means knowing that Conway clay will not hit density in a wet March, that shallow rock shows up on the Greenbrier benches before the borings say it will, that infill work west of I-430 lives or dies on access, and that river-terrace ground in Maumelle behaves nothing like the bottomland two miles away. Those are things you learn by being wrong about them once, locally, and never again.',
    'The work today is commercial: site work, land clearing and grading for general contractors, developers, solar EPCs and property owners. That is the whole scope. We do not do decorative yard work, grounds care or grounds maintenance, and we do not bid work outside site development.',
  ],
  facts: [
    { label: 'Founded', value: '2002 — 24 years in business' },
    { label: 'Owner', value: 'David Culberson, who quotes and operates' },
    { label: 'Base', value: 'Mayflower, AR. Service-area business — we come to you' },
    { label: 'Service area', value: 'Central Arkansas, roughly a 60–75 mile working radius' },
    { label: 'BBB', value: 'Accredited business, A+ rating' },
    { label: 'Hours', value: HOURS_LINE },
  ],
  howWeWork: [
    {
      title: 'One site visit before any number',
      body: 'No square-foot pricing over the phone. We look at the ground, the access and the drainage first.',
    },
    {
      title: 'Written scope, with the assumptions listed',
      body: 'You see what is included, what is excluded, and what is priced as a unit rate if conditions change.',
    },
    {
      title: 'Unforeseen conditions priced, not buried',
      body: 'Rock, unsuitable soil and undercut get a unit rate up front so nobody argues about it in week three.',
    },
    {
      title: 'Your schedule, not ours',
      body: 'We sequence around the trades that follow us and tell you honestly when weather has taken a day.',
    },
  ],
  equipmentNote:
    'The fleet is sized for the one-to-fifty-acre commercial work we take on, not for jobs we would have to sub out anyway. Specialty attachments and any oversized equipment are brought in per job and disclosed in the quote rather than buried in a lump sum. Ask on the site visit and you will be told exactly what is coming to your job.',
  insuranceNote:
    'Growfully is a licensed and insured Arkansas contractor and carries general liability and workers’ compensation coverage. Certificates of insurance are issued on request to a named certificate holder. We add the owner, GC and lender as additional insured where the contract requires it. Standard prequal packets, W-9 and safety documentation returned promptly.',
} as const

export const PROJECTS_PAGE = {
  heroTitle: 'Work on the ground',
  lead:
    'We are photographing active sites this season, and the before-and-after sets will be published here as they are shot. Until then this page does the honest thing: it tells you the kinds of work Growfully takes on, and invites you to come stand on a job while it is running.',
  scopeTitle: 'The work we take on',
  scopeLead:
    'This is the scope Growfully sells today. It is a description of capability, not a claim about any particular job — the job list appears here once the photographs and the owner’s sign-off exist.',
  honesty: "We would rather show you nothing than show you somebody else's dirt.",
  visitTitle: 'Come see a job running',
  visit: [
    'The most useful thing we can offer before the photography lands is a site visit while a machine is working. Call David Culberson and he will tell you what is open this week and meet you there.',
    'He will also put you in touch with a general contractor or owner whose ground he has worked, so you can ask someone other than us whether the schedule held.',
  ],
  photoCaption:
    "Reference photograph of the work we do. Growfully's own project photography is being shot now.",
} as const

export const CONTACT_PAGE = {
  heroTitle: 'Call and tell us about the site',
  lead: 'Fastest way to reach us, seven a.m. to five, Monday to Saturday:',
  serviceAreaNote:
    'Mayflower, AR · Serving Central Arkansas — roughly 60–75 miles out, Faulkner and Pulaski counties as the anchors.',
  truckNote:
    'Growfully is a service-area business. We work from the truck and go to your site, so there is no yard to visit and no counter to walk into — call and we will come to the ground instead.',
  afterTitle: 'What happens after you contact us',
  after: [
    {
      title: 'Your message reaches David Culberson directly',
      body: 'There is no call centre and no lead reseller in between.',
    },
    {
      title: 'He replies by phone if you left a number',
      body: 'And by email if you did not.',
    },
    {
      title: 'Site visit when the job needs eyes on the ground',
      body: 'Most commercial work does — usually within the same week.',
    },
    {
      title: 'Written scope and price',
      body: 'What is included, what is excluded, and unit rates for rock or unsuitable soil if we hit any.',
    },
    {
      title: 'If the number works, we schedule',
      body: 'Around the trades that follow us. If it does not, nobody chases you.',
    },
  ],
} as const

export const QUOTE_PAGE = {
  heroTitle: 'Tell us about the site',
  lead:
    'Answer what you know and skip what you don’t — David Culberson reviews every request himself, and if the job needs eyes on it he comes out and looks at the ground before quoting.',
  why: [
    {
      title: 'The owner quotes it',
      body: 'David Culberson reads every request himself and runs the machines on the job.',
    },
    {
      title: 'BBB Accredited, A+',
      body: 'Rated A+ by the Better Business Bureau. Working Central Arkansas dirt since 2002.',
    },
    {
      title: 'Licensed and insured',
      body: 'General liability and workers’ compensation. Certificates issued to your certificate holder on request.',
    },
    {
      title: 'Free on-site estimates',
      body: 'We walk the ground before pricing it, so the number holds when the work starts.',
    },
  ],
} as const

export const SERVICES_INDEX = {
  heroTitle: 'Everything we do is site work',
  lead:
    'Eight services, one scope: getting raw or built-on ground ready to build on again. No decorative work, no grounds maintenance — earthwork only, across Central Arkansas since 2002.',
  featuredTitle: 'What most jobs start with',
  restTitle: 'The rest of the scope',
  areasTitle: 'Where we run these services',
} as const

export const INDUSTRIES_INDEX = {
  heroTitle: 'Who we move dirt for',
  lead:
    'Three kinds of client keep us busy in Central Arkansas. Each one measures us differently — tolerance, schedule, or the drainage still working two winters later.',
  ctaTitle: 'Send the plans',
  ctaLead:
    'David Culberson quotes off your civil set and walks the tract before the number goes out.',
} as const

export const SERVICE_AREAS_INDEX = {
  heroTitle: 'Where we work in Central Arkansas',
  lead:
    'Growfully is based in Mayflower, Arkansas and works a 60–75 mile radius across Central Arkansas — Faulkner and Pulaski counties as the anchors, with Saline, Lonoke, Conway and Perry counties in reach. Little Rock is 30 minutes south; Conway is 15 minutes north.',
  townsTitle: '15 towns we work in every year',
  townsLead:
    'Drive times are measured from our Mayflower yard. Towns with a page linked below have detail on the local ground, permitting and the work we get called for there.',
  outsideTitle: "Don't see your town?",
  outside:
    'The radius is a guideline, not a fence. For the right job — a large clearing tract, a multi-phase site package, a solar field — David Culberson will travel further than this table suggests. The only way to find out is to ask him. What decides a job outside the radius is size and duration: work that keeps equipment busy for weeks travels well; a half-day job does not.',
  counties:
    'Counties covered: Faulkner County, Pulaski County, Saline County, Lonoke County, Conway County, Perry County. We are a service-area business — we work from your site, so there is no yard to visit.',
} as const

/** City table data from lovable service-areas page. */
export type CityMeta = {
  slug: string
  county: string
  drive: string
  commonWork: string
  hasDetailPage: boolean
}

export const CITY_META: CityMeta[] = [
  {
    slug: 'mayflower-ar',
    county: 'Faulkner County',
    drive: 'Home base',
    commonWork: 'Lot clearing, shop and storage pads, drainage on small commercial tracts',
    hasDetailPage: true,
  },
  {
    slug: 'conway-ar',
    county: 'Faulkner County',
    drive: '15 min · 12 mi',
    commonWork: 'Commercial pads, parking subgrade and grading for retail, medical and institutional work',
    hasDetailPage: true,
  },
  {
    slug: 'vilonia-ar',
    county: 'Faulkner County',
    drive: '25 min · 19 mi',
    commonWork: 'Land clearing and forestry mulching on acreage, driveways and building pads',
    hasDetailPage: true,
  },
  {
    slug: 'greenbrier-ar',
    county: 'Faulkner County',
    drive: '28 min · 22 mi',
    commonWork: 'Clearing wooded acreage, rock-heavy cuts and pads for bedroom-community commercial',
    hasDetailPage: true,
  },
  {
    slug: 'maumelle-ar',
    county: 'Pulaski County',
    drive: '15 min · 12 mi',
    commonWork: 'Wooded lot clearing and pad grading on river-terrace ground, drainage control',
    hasDetailPage: true,
  },
  {
    slug: 'north-little-rock-ar',
    county: 'Pulaski County',
    drive: '25 min · 22 mi',
    commonWork: 'Industrial dirt work, warehouse pads and parking-field reconstruction',
    hasDetailPage: true,
  },
  {
    slug: 'little-rock-ar',
    county: 'Pulaski County',
    drive: '30 min · 25 mi',
    commonWork: 'Infill excavation with tight access, commercial pads and rock cuts west of I-430',
    hasDetailPage: true,
  },
  {
    slug: 'sherwood-ar',
    county: 'Pulaski County',
    drive: '30 min · 26 mi',
    commonWork: 'Retail and medical pads along 67/167, subgrade prep and detention',
    hasDetailPage: true,
  },
  {
    slug: 'benton-ar',
    county: 'Saline County',
    drive: '45 min · 42 mi',
    commonWork: 'Commercial pads and site prep on the Saline County growth corridor',
    hasDetailPage: false,
  },
  {
    slug: 'bryant-ar',
    county: 'Saline County',
    drive: '42 min · 39 mi',
    commonWork: 'Clearing and grading for retail and light-industrial buildout',
    hasDetailPage: false,
  },
  {
    slug: 'cabot-ar',
    county: 'Lonoke County',
    drive: '40 min · 35 mi',
    commonWork: 'Acreage clearing, pads and drainage on Lonoke County ground',
    hasDetailPage: false,
  },
  {
    slug: 'jacksonville-ar',
    county: 'Pulaski County',
    drive: '35 min · 31 mi',
    commonWork: 'Industrial and commercial dirt work along the 67/167 corridor',
    hasDetailPage: false,
  },
  {
    slug: 'searcy-ar',
    county: 'White County',
    drive: '60 min · 55 mi',
    commonWork: 'Land clearing and site prep on larger White County tracts',
    hasDetailPage: false,
  },
  {
    slug: 'russellville-ar',
    county: 'Pope County',
    drive: '60 min · 57 mi',
    commonWork: 'Clearing, mulching and pad work on Arkansas River Valley ground',
    hasDetailPage: false,
  },
  {
    slug: 'hot-springs-ar',
    county: 'Garland County',
    drive: '70 min · 62 mi',
    commonWork: 'Rock-heavy site prep and clearing on Garland County slopes',
    hasDetailPage: false,
  },
]

export function getCityMeta(slug: string): CityMeta | undefined {
  return CITY_META.find((c) => c.slug === slug)
}

/** Mayflower long-form from lovable (home base). Other cities use shared template + CITY_META. */
export const MAYFLOWER_DETAIL = {
  heroTitle: 'Excavation, Land Clearing & Site Grading in Mayflower, AR',
  lead:
    'Growfully is based in Mayflower, Arkansas. We clear, grade and excavate here every week — wooded lots off Highway 89, shop and storage pads along the I-40 frontage, and drainage work on the low ground near Lake Conway. Mayflower is our yard, so mobilisation is same-week and there is no travel in the number.',
  subline:
    'Faulkner County · Our home base · Rolling ground between the Arkansas River bottoms and the clay ridges east of I-40',
  groundTitle: 'What the ground is like in Mayflower',
  ground: [
    'Mayflower sits on the seam between two very different kinds of dirt, and which side of town you are on changes the whole scope. West and south toward Lake Conway and the river bottoms, the soil is silty and holds water long after a rain — pads there need the topsoil stripped deeper than a project manager expects, and a subgrade that looked fine on Friday can pump under a loaded truck on Monday. East of I-40 the ground firms up into clay ridges that hold a slope well and compact predictably, but shed water fast enough that erosion control matters from day one.',
    'The practical consequence is that we do not quote Mayflower ground off a map. A tract half a mile apart can be a two-day strip or a week of drying and undercut. On the bottomland side we assume moisture conditioning in the estimate and tell you where the risk is instead of hiding it in a unit price.',
  ],
  builtTitle: 'What is being built here',
  built: [
    'Mayflower is a small town with interstate frontage, and that combination produces a specific kind of work: small-tract commercial along the I-40 corridor, contractor shops and equipment yards, storage-unit buildings, and acreage owners opening up wooded lots for a house pad, a barn or a pond. It is not a warehouse market. Most jobs here are between half an acre and fifteen acres, quoted directly with the person who owns the ground.',
    'The flood history along the river and Lake Conway shapes what gets built and where. Anything on low ground gets designed around water first, and elevation and positive drainage are usually the first two questions we ask, not the last.',
  ],
  calledForTitle: 'What we get called for in Mayflower',
  calledFor:
    'Land clearing and forestry mulching lead, because most Mayflower tracts start with trees on them. After that it is site preparation as a single contracted scope — clear, strip, grade, compact, stone — for shop buildings and small commercial pads. Drainage and erosion control is the third, and on the bottomland side it is often the reason the call comes in at all: water standing where a building is supposed to go. Because we are based here, small jobs still get quoted. A one-acre clearing job in Mayflower is worth doing when the equipment is already in town; the same job an hour out is not.',
  faqs: [
    {
      q: 'Are you actually based in Mayflower, or just listed here?',
      a: 'Based here. Growfully is a Mayflower, Arkansas company and has been operating out of Faulkner County since 2002. That is why Mayflower jobs get the fastest site visits and no travel loading in the estimate. We are a service-area business, so we work from your site rather than a storefront.',
    },
    {
      q: 'My lot near Lake Conway holds water. Can that be fixed before I build?',
      a: 'Usually, and it is one of the more common calls we get in town. It starts with finding where the water is actually going: existing grade, the outfall you have available, and whether the pad can be raised instead of the site drained. From there it is some combination of positive grade away from the building, swales, a culvert at the drive, and fill placed and compacted so it stays where we put it. If you are in a mapped floodplain, that changes the approach and the permitting.',
    },
    {
      q: 'Do you take small jobs in Mayflower?',
      a: 'Yes. Small acreage clearing, a driveway, a shop pad or a drainage fix are all worth doing when we are already in town. Outside our home county, small jobs get harder to justify because the equipment move costs the same either way.',
    },
    {
      q: 'How quickly can you look at a site in Mayflower?',
      a: 'Usually within a few days of your call, and often the same week. David Culberson walks the site himself, so what you get is the person who will run the job, not a salesperson.',
    },
  ],
} as const

export const PRIVACY = {
  title: 'Privacy policy',
  updated: 'Last updated February 1, 2026',
  notice:
    'This document was drafted to describe how Growfully actually handles quote requests. It has not been reviewed by an Arkansas attorney — have counsel review before relying on it for legal compliance.',
  sections: [
    {
      title: 'Who we are',
      body: 'Growfully, LLC is a commercial excavation, land clearing and site grading contractor operating as a service-area business out of Mayflower, AR. David Culberson owns the company and is the person who reads what you send. Questions about this policy go to growfullyllc@gmail.com or (501) 269-6860.',
    },
    {
      title: 'What we collect',
      body: 'We only collect what a contractor needs to price and schedule earthwork: contact information you type into quote or contact forms (name, company, phone, email); project information (work needed, site location, acreage, ground condition, access, timeline); files you upload (site photos, plats, civil drawings, geotech reports); and basic technical data generated when you load a page (IP, browser type, referring page). We do not collect Social Security numbers, payment card numbers or bank details through this website.',
    },
    {
      title: 'Why we use it',
      body: 'To prepare an estimate, to call or email you back about it, to schedule a site visit, to sequence the work with the trades that follow us, and to keep a record of what was quoted. We do not sell your information, and we do not sell or trade quote requests as sales leads to other contractors, aggregators or marketplaces.',
    },
    {
      title: 'Who else touches it',
      body: 'The website is hosted by a third-party hosting provider, and form submissions travel by email and are stored with our email and file-storage provider. Those vendors process the data on our behalf. We may disclose information where the law requires it, or where we need it to establish or defend a legal claim.',
    },
    {
      title: 'How long we keep it',
      body: 'Quote requests that never become jobs are kept for roughly two years. Records tied to completed work — scopes, photos, invoices — are kept longer, in line with Arkansas contract and tax record-keeping practice. Ask us to delete something sooner and we will, unless we are legally required to keep it.',
    },
    {
      title: 'Your choices',
      body: 'Ask what we hold about you; ask us to correct anything wrong or delete your request and its uploads; ask us to stop contacting you. Email growfullyllc@gmail.com. We answer promptly for anything we can confirm quickly, and inside 30 days for anything that requires digging through records.',
    },
    {
      title: 'Text messages and calls',
      body: 'If you give us a mobile number, you are agreeing that we can call and text you about your project — scheduling a walk, confirming a mobilization date, sending a photo from the site. Standard message rates apply. We do not run marketing text campaigns.',
    },
    {
      title: 'Security, children, changes',
      body: 'Traffic to this site is encrypted in transit. Access to submissions is limited to David Culberson and anyone he specifically authorizes. This site is for commercial and property-owner inquiries and is not directed at anyone under 18. If this policy changes we will update the date at the top.',
    },
  ],
} as const

export const TERMS = {
  title: 'Terms of use',
  updated: 'Last updated February 1, 2026',
  notice:
    'This document was drafted to describe how Growfully actually handles quote requests. It has not been reviewed by an Arkansas attorney — have counsel review before relying on it.',
  sections: [
    {
      title: 'Agreement',
      body: 'These terms govern your use of the Growfully, LLC website and any quote request, contact form or file upload you send through it. Using the site means you accept them. If you do not, call (501) 269-6860 instead and we will talk it through.',
    },
    {
      title: 'Nothing on this site is a contract or a binding price',
      body: 'Cost ranges, unit rates, per-acre figures, timelines and production numbers published anywhere on this site are illustrative and drawn from past Central Arkansas work. They are not offers, quotes or guarantees. A binding price exists only in a written scope and estimate signed by David Culberson or an executed subcontract. Where the written scope and this website disagree, the written scope controls.',
    },
    {
      title: 'Submitting a quote request',
      body: 'Submitting the form starts a conversation; it does not book a crew, reserve equipment or create any obligation on either side. We may decline work for any lawful reason. You agree that the information you submit is accurate and that you have the authority to submit it.',
    },
    {
      title: 'Files you upload',
      body: 'When you upload photos, plats, civil drawings, surveys or geotechnical reports, you confirm you have the right to share them, and you grant Growfully permission to use them internally to prepare and perform an estimate. We will not publish your drawings or identify your project publicly without asking first.',
    },
    {
      title: 'Property access and locates',
      body: 'If you request a site visit, you confirm you own the property or are authorized to permit access to it. Public utility locates are the client’s responsibility to request before we mobilize unless our written scope says otherwise; private utilities and unmarked infrastructure must be pointed out to us in advance.',
    },
    {
      title: 'Licensing, insurance and permits',
      body: 'Growfully is a licensed and insured Arkansas contractor and carries general liability and workers’ compensation coverage. Certificates of insurance are issued on request to a named certificate holder. Unless our written scope states otherwise, permits, plan approvals, stormwater filings and impact-fee obligations are the owner’s responsibility.',
    },
    {
      title: 'Your use of the site',
      body: 'The text, photographs, diagrams and page designs here belong to Growfully, LLC. You may read, print and share them. You may not scrape the site to build a competing directory, resell the content, or present it as your own.',
    },
    {
      title: 'Disclaimer, limitation and governing law',
      body: 'The site is provided as-is. To the maximum extent Arkansas law allows, Growfully is not liable for indirect or consequential damages arising from your use of this website. Nothing here limits our responsibility for work we actually perform under a signed scope. These terms are governed by the laws of the State of Arkansas, and disputes arising from the website belong in the state or federal courts serving Faulkner County, Arkansas.',
    },
  ],
} as const
