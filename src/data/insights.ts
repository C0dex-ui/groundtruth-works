/**
 * Insights posts — sourced from groundtruth-works.lovable.app/insights.
 */

export type InsightPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  dateLabel: string
  readMinutes: number
  author: string
  authorHref: string
}

export const INSIGHTS_INDEX = {
  heroTitle: 'Straight answers about site work',
  lead:
    'Costs, sequencing and the things that actually go wrong on Central Arkansas dirt — written by David Culberson, who runs the machines.',
} as const

export const INSIGHT_POSTS: InsightPost[] = [
  {
    slug: 'land-clearing-cost-central-arkansas',
    title:
      'What land clearing costs in Central Arkansas, and the seven factors that move the number',
    excerpt:
      'A working range for clearing an acre in Central Arkansas, why two neighbouring tracts price differently, and the seven site conditions that decide where inside the range your job lands.',
    date: '2026-08-10',
    dateLabel: 'August 10, 2026',
    readMinutes: 7,
    author: 'David Culberson',
    authorHref: '/about',
  },
]

export function getInsightPost(slug: string): InsightPost | undefined {
  return INSIGHT_POSTS.find((p) => p.slug === slug)
}

/** Full article body for land-clearing cost guide (Lovable copy). */
export const LAND_CLEARING_COST_ARTICLE = {
  intro: [
    'Clearing an acre in Central Arkansas generally runs somewhere between about $1,500 and $6,500. That is a wide band, and any contractor who quotes you a tighter one over the phone is guessing. The spread is real, and it is not padding — it is the difference between open pasture with a few cedars and a hardwood bottom with a hundred stems an acre, standing water, and no way to get a track machine through the fence line.',
    'This piece explains what actually sits behind the number, so that when you get three bids you can tell which one understood your site and which one priced an average acre that does not exist. Everything below reflects how we scope work at Growfully out of Mayflower, on ground between Conway and Little Rock.',
  ],
  tableLead:
    'Rather than a single per-acre figure, it is more honest to price by what is standing on the ground. These are working ranges for Central Arkansas as of 2026 — treat them as the starting point for a site visit, not as a quote.',
  ranges: [
    {
      condition: 'Open pasture, scattered brush',
      range: '$1,200 – $2,200',
      drives: 'Mostly mobilisation and a single pass',
    },
    {
      condition: 'Light brush and saplings under 6 in.',
      range: '$1,800 – $3,200',
      drives: 'Mulching production rate',
    },
    {
      condition: 'Mixed hardwood, 6–14 in. stems',
      range: '$3,000 – $5,500',
      drives: 'Stem density, stump handling',
    },
    {
      condition: 'Heavy hardwood or gum bottom',
      range: '$4,500 – $6,500+',
      drives: 'Slow going, wet ground, haul-off',
    },
    {
      condition: 'Grubbing and root removal on top',
      range: 'add $800 – $2,500',
      drives: 'Stump depth, spoil disposal',
    },
  ],
  tableNote:
    'Two adjacent five-acre tracts off the same county road can sit at opposite ends of that table. The seven factors below are why.',
  factors: [
    {
      title: '1. Stem density and trunk diameter',
      body: [
        'The single biggest variable is not how many acres you have, it is how much wood is standing on each one. A mulching head processes material at a fairly predictable rate by volume, not by area. Forty mature oaks on an acre is several times the material of two hundred cedar saplings, even though the sapling acre looks thicker from the road.',
        'Diameter matters more than count past about eight inches. Below that, a mulcher takes stems continuously and production stays high. Above roughly fourteen inches, the machine has to work each trunk, and on a big enough tree it becomes cheaper to fell and process it with an excavator and thumb than to grind it standing. If your tract has a scattering of large hardwoods among smaller growth, expect the quote to price those separately — that is a sign of a careful estimator, not an upsell.',
      ],
    },
    {
      title: '2. What happens to the debris',
      body: [
        'Debris disposal is frequently a third of the total and it is the line item that most often separates a low bid from a realistic one. There are three routes and they price very differently.',
      ],
      bullets: [
        'Mulch in place: material stays on site as a chip layer. Cheapest, no haul cost, and the layer protects soil from erosion until you build. Not acceptable under a building pad, since organic material cannot stay in structural fill.',
        'Windrow and burn: viable on rural tracts with a burn permit and a safe setback. Cheap on paper, but weather-dependent, and a burn ban stops it.',
        'Grind and haul off: the most expensive route, and the one commercial sites usually require. You are paying for trucking and tipping, both priced by load, both sensitive to how far the site sits from a facility.',
      ],
      after:
        'If a bid does not tell you which of these three it assumed, it is not comparable to the others. Ask.',
    },
    {
      title: '3. Stumps: leave, grind, or grub out',
      body: [
        'Clearing and grubbing are two different scopes and get confused constantly. Clearing takes down what is above the ground. Grubbing removes the root mat below it. If you are putting a building, a slab, a parking field or a solar array on the ground, you need grubbing, because the root mat will rot, void, and settle under whatever you place on top of it.',
        'Grubbing depth is driven by what comes next. A pasture conversion might only need stumps taken below blade depth. A solar array needs stumps out below pile depth, or the pile driver hits wood and the whole row stops. A building pad needs the organics out entirely and the void backfilled with compacted, approved material. Each of those is a different number, and each of them is worth stating explicitly in the scope.',
      ],
    },
    {
      title: '4. Access and mobilisation',
      body: [
        "Equipment has to physically get to the work. A tract fronting a county road with a wide gate is straightforward. A tract behind a neighbour's easement, across a soft creek crossing, or through a gate too narrow for a lowboy costs real money before a single tree comes down — sometimes a temporary stone entrance, sometimes a culvert, sometimes cutting an access lane first.",
        'Mobilisation is also a fixed cost that does not shrink with the job. Moving a mulcher, an excavator and a dozer onto a site costs roughly the same whether the site is one acre or ten. That is why per-acre pricing falls sharply as acreage grows, and why a one-acre job will always look expensive per acre next to a twenty-acre job.',
      ],
    },
    {
      title: '5. Terrain, soil and water',
      body: [
        'Central Arkansas gives you three broadly different working surfaces inside a thirty-mile drive. The Faulkner County uplands north of Mayflower carry shallow rock on the benches, which is good for traction and bad for grubbing. The Arkansas River terraces through Maumelle and North Little Rock are sandier and generally work well. The clay flats around Conway and out toward Lonoke County hold water, and a wet clay tract in March is a different job from the same tract in August.',
        'Slope adds cost in two ways: production drops because the machine works across the grade, and erosion control obligations begin to apply. If you are clearing more than an acre on any meaningful slope, budget for silt fence or wattles and expect them in the quote.',
      ],
    },
    {
      title: '6. Permits, erosion control and inspections',
      body: [
        "Any land disturbance of one acre or more triggers the state's construction stormwater permit, administered by the Arkansas Division of Environmental Quality. That means a SWPPP, installed and maintained controls, and inspection records. Inside city limits — Conway, Little Rock, North Little Rock, Sherwood — there is usually a local grading or land-disturbance permit on top of the state requirement, and floodplain review if any part of the tract is mapped.",
        'None of this is expensive relative to the earthwork, but it is not free and it takes calendar time. A bid that has no line for erosion control on a five-acre commercial clearing job has either overlooked it or is planning for you to pay for it later.',
      ],
    },
    {
      title: '7. What the ground has to be when we leave',
      body: [
        'The last factor is the finish standard, and it is the one owners underestimate. "Cleared" can mean the trees are gone and the ground is rough. It can also mean grubbed, stripped of topsoil, rough-graded to drain, and ready for a surveyor to stake pad corners. The second is substantially more work than the first.',
        'Decide before you bid the job which one you are buying. If a general contractor is following you onto the site next month, clearing to a rough grade that drains is almost always cheaper than clearing, then remobilising a grading crew later.',
      ],
    },
  ],
  comparableTitle: 'How to make three bids actually comparable',
  comparable: [
    'State the acreage and mark the limits of clearing on an aerial image. Ambiguity here is the most common cause of change orders.',
    'Say what the debris route is, or ask each bidder to price mulch-in-place and haul-off separately.',
    'Say whether stumps are grubbed, and to what depth, and what happens to the holes.',
    'Say what the finish is: rough cleared, or cleared and graded to drain.',
    'Ask for a unit rate for unforeseen rock and unsuitable soil, up front, so it is not negotiated mid-job.',
    'Confirm who pulls the permit and who maintains the erosion controls.',
  ],
  comparableClose:
    'A quote that lists its assumptions is worth more than a quote with a lower number and none. You can argue with an assumption before the machines arrive. You cannot argue with a change order after.',
  exampleTitle: 'What this looks like on a real site',
  example: [
    'A typical example: eight acres north of Conway, mixed growth with a wooded fence line, a soft low corner that holds water, and a commercial building planned on the west three acres. The realistic scope is mulch the light growth in place across the whole tract, fell and process the large hardwoods separately, grub and haul the organics only on the building footprint, cut a stone entrance at the road, install silt fence on the downhill side, and leave the ground at a rough grade that sheds water off the pad area. Pricing that as one flat per-acre figure would be wrong in both directions — too high for the pasture, far too low for the footprint.',
    'That is why we walk the ground before quoting. It takes an hour and it is free, and it is the only way the number means anything.',
  ],
  keepReading: [
    {
      label: 'Land Clearing in Central Arkansas — what the service covers and how it is priced',
      href: '/services/land-clearing',
    },
    {
      label: 'Site work in Conway, AR — local ground conditions and permitting',
      href: '/service-areas/conway-ar',
    },
    {
      label: 'Completed Central Arkansas projects',
      href: '/projects',
    },
  ],
} as const

export const REVIEWS_PAGE = {
  heroTitle: 'Credentials and reviews',
  lead:
    'Growfully is a BBB Accredited business with an A+ rating and 24 years of work in Central Arkansas. Our review profiles are listed below, along with a plain statement of which reviews we publish on this site and why.',
  whichTitle: 'Which reviews we publish',
  which: [
    "A good number of Growfully's public reviews were written years ago about residential work from an earlier chapter of this business — services the company no longer offers.",
    'Those reviews are real and they are positive, but reprinting them here would tell a solar developer or a general contractor that they are looking at a residential yard company. That is not what Growfully does and not who this site is for.',
    'So every review is tagged with the service line it actually describes, and only reviews tagged to a current construction service — clearing, grading, excavation, site prep, mulching, dirt work, drainage — are shown. Where we do show Google reviews below, they come from the live Google Business Profile and are attributed unedited.',
  ],
  leaveTitle: 'Worked with us? Leave a review',
  leave:
    'If Growfully has cleared, graded or prepped a site for you, a few honest sentences about that job help the next contractor decide. Mention the work itself — the town, the acreage, whether the schedule held.',
} as const
