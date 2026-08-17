/**
 * Industry detail copy — sourced from groundtruth-works.lovable.app industry pages.
 */
import { INTERIOR_IMAGES } from './content'
import type { Faq, NamedBlurb } from './services-detail'

export type IndustryDetail = {
  slug: string
  title: string
  heroTitle: string
  lead: string
  quoteCtaLabel: string
  image: string
  short: string
  introTitle: string
  intro: string[]
  selfPerform: NamedBlurb[]
  process: NamedBlurb[]
  costDrivers: NamedBlurb[]
  costNote: string
  timeline: NamedBlurb[]
  readyList: string[]
  faqs: Faq[]
  relatedServiceSlugs: string[]
}

export const INDUSTRIES_DETAIL: IndustryDetail[] = [
  {
    slug: 'solar-site-preparation',
    title: 'Solar Site Preparation',
    heroTitle: 'Solar site work, Central Arkansas',
    lead:
      'Civil balance of system for solar developers and EPCs: clearing, grading to racking tolerance, access roads and stormwater — sequenced to your pile-driving date.',
    quoteCtaLabel: 'Get a solar site quote',
    image: INTERIOR_IMAGES.industryDetail['solar-site-preparation'],
    short:
      'Utility-scale array site work — clearing, grading to tolerance, access roads and erosion control.',
    introTitle: 'Solar site preparation, in short',
    intro: [
      'Solar site preparation is the civil scope that turns a raw tract into a buildable array: clearing and grubbing the field, grading rows inside the racking tolerance, cutting access roads and laydown, readying subgrade for pile driving, and holding erosion and stormwater control through construction — on the schedule the interconnection date sets.',
    ],
    selfPerform: [
      {
        title: 'Clearing and grubbing',
        body: 'Tract cleared to the array boundary, with grubbing inside pile lines and road alignments so drivers are not hitting root balls and buried wood.',
      },
      {
        title: 'Array grading to tolerance',
        body: "GPS machine control off your civil model, holding row slope and cross-slope inside the racking or tracker supplier's published band.",
      },
      {
        title: 'Access roads and laydown',
        body: 'Entrance, spine and row roads built to carry delivery and crane traffic, plus a stoned laydown yard sized for module and tracker deliveries.',
      },
      {
        title: 'Compaction and pile readiness',
        body: 'Engineered fill in moisture-conditioned lifts, proof rolled and tested, so the driving rig gets consistent ground and predictable torque.',
      },
      {
        title: 'Erosion and stormwater control',
        body: 'SWPPP measures installed and maintained: perimeter silt fence, check dams, sediment basins, construction entrance, temporary seeding and the inspection log.',
      },
      {
        title: 'Drainage structures and channels',
        body: 'Culverts, road crossings, swales and detention shaped so runoff leaves the array without cutting through the rows.',
      },
      {
        title: 'Trenching support',
        body: 'Open-cut and backfill for DC collection, medium-voltage and communications runs, coordinated with your electrical sub.',
      },
      {
        title: 'Restoration and stabilisation',
        body: 'Final grade, topsoil respread and permanent seeding so the site closes out and the permit can be terminated.',
      },
    ],
    process: [
      {
        title: 'Plan and geotech review',
        body: 'We read the grading plan, pile layout, geotech report and SWPPP, take our own quantities off the model, and reconcile them with your estimate before contract.',
      },
      {
        title: 'Site walk with your PM',
        body: 'Access, wetlands, easements, overhead lines, existing drainage and the practical staging plan — the things a drawing never shows completely.',
      },
      {
        title: 'Erosion control and entrance',
        body: 'Perimeter measures, construction entrance and washout go in before any disturbance, because that is the first thing an inspector looks for.',
      },
      {
        title: 'Roads and laydown first',
        body: 'Spine road and stoned laydown built early so deliveries and the pile rig are never waiting on a soft week of weather.',
      },
      {
        title: 'Clear and grub by block',
        body: 'Field cleared block by block ahead of grading, with grubbing concentrated on pile lines, roads and structure pads.',
      },
      {
        title: 'Mass grade and fine grade',
        body: 'Rough cut and fill balanced on site where the design allows, then fine grade to the tolerance the racking spec calls for.',
      },
      {
        title: 'Compact, proof roll and test',
        body: 'Fill placed in lifts and rolled to spec, proof rolled with the testing agency present, soft areas undercut and rebuilt before the pile crew mobilises.',
      },
      {
        title: 'Turnover and maintenance',
        body: 'Grade surface delivered for survey verification, erosion measures maintained through construction, restoration and permanent seeding at closeout.',
      },
    ],
    costDrivers: [
      {
        title: 'Acreage and vegetation density',
        body: 'Open pasture is a fraction of the cost of mature hardwood. Density, stem size and how much has to be grubbed rather than mulched set the clearing line.',
      },
      {
        title: 'Terrain and cut/fill volume',
        body: 'Rolling ground graded to tracker tolerance moves far more dirt than a flat field. A site that balances is dramatically cheaper than one importing select fill.',
      },
      {
        title: 'Racking tolerance',
        body: 'A tighter published slope band means more fine grading passes and more survey verification across every row.',
      },
      {
        title: 'Road length and stone quantity',
        body: 'Aggregate is a purchased material. Miles of road and a large laydown yard show up as tonnage, not machine hours.',
      },
      {
        title: 'Soil moisture, SWPPP and schedule compression',
        body: 'Arkansas clay holds water. Basin count, maintenance frequency, and beating an interconnection deadline all price in.',
      },
    ],
    costNote:
      'We do not print a price range on this page — we quote in writing after we walk the tract and read the plan set.',
    timeline: [
      {
        title: 'Estimate',
        body: 'Site walk typically as soon as the schedule allows, written scope and quantities to follow.',
      },
      {
        title: 'Permits and locates',
        body: 'Arkansas One Call is two business days. Stormwater permit coverage must be in hand before disturbance.',
      },
      {
        title: 'Roads and laydown',
        body: 'One to three weeks depending on road miles, stone haul distance and crossings.',
      },
      {
        title: 'Clearing and grading',
        body: 'Several acres a day mulching in light growth; grading measured in cubic yards per day across a utility-scale block.',
      },
      {
        title: 'Weather float',
        body: 'Build real float into any spring schedule. Wet clay stops earthwork before it stops anything else on the site.',
      },
    ],
    readyList: [
      'Civil plan set: grading, roads, drainage and details',
      'Pile layout and racking or tracker tolerance spec',
      'Geotechnical report and test pile results, if complete',
      'SWPPP and who holds the stormwater permit',
      'Boundary and topographic survey, plus wetland delineation',
      'Easements, setbacks and any exclusion areas',
      'Interconnection and module delivery milestone dates',
      'Access route, weight limits and any overhead line constraints',
    ],
    faqs: [
      {
        q: 'What grade tolerance can you hold across a tracker field?',
        a: "We grade to the tolerance the racking supplier publishes, which on most single-axis tracker rows means holding north–south slope within the allowable run and keeping east–west cross-slope inside the tracker's tolerance band. We run GPS machine control off your civil model and give the surveyor a surface to check.",
      },
      {
        q: 'Do you grub the array area or only mulch it?',
        a: 'It depends on the pile plan. Mulching is faster and cheaper and leaves the root mat holding the soil, which is often fine between rows. Inside the pile line, stumps and root balls get grubbed so the driver is not chasing refusal on wood.',
      },
      {
        q: 'What size solar projects do you take?',
        a: 'Community and commercial arrays up to utility-scale blocks within roughly 75 miles of Mayflower. Rough acreage planning runs about 5–8 acres per MW for a single-axis tracker field on workable ground. On larger projects we self-perform clearing, earthwork and roads and coordinate with your EPC on the balance.',
      },
      {
        q: "Do you work from an EPC's civil drawings and quantities?",
        a: 'Yes. Give us the grading plan, the pile layout, the geotech report and the SWPPP and we take our own quantities off the model, then reconcile them against yours before contract. Discrepancies found at bid time are cheap; found at pile driving they are not.',
      },
    ],
    relatedServiceSlugs: [
      'land-clearing',
      'site-grading',
      'site-preparation',
      'drainage-erosion-control',
    ],
  },
  {
    slug: 'general-contractors',
    title: 'General Contractors',
    heroTitle: 'The site sub you can schedule around',
    lead:
      'Excavation, grading and site prep for general contractors across Central Arkansas. Owned equipment, current certificates, and the owner on the job.',
    quoteCtaLabel: 'Send us plans to bid',
    image: INTERIOR_IMAGES.industryDetail['general-contractors'],
    short:
      'A site-work sub who mobilizes fast, hits grade, and does not hold up your schedule.',
    introTitle: 'What we are, in short',
    intro: [
      'Growfully is a Central Arkansas site work subcontractor: clearing, excavation, grading, pads, drainage and erosion control on commercial projects. We bid from your civil set, mobilise inside a 60–75 mile radius of Mayflower, carry full insurance, and turn the pad over at grade so the next trade is not waiting on dirt.',
    ],
    selfPerform: [
      {
        title: 'Clearing and demolition prep',
        body: 'Tract cleared, grubbed and hauled off, with stockpiles staged where the plan and your laydown allow.',
      },
      {
        title: 'Mass excavation and cut/fill',
        body: 'Balanced on site where the model allows, imported or exported where it does not, quantities measured and reported.',
      },
      {
        title: 'Building pads and parking subgrade',
        body: 'Placed in lifts, compacted to the geotech spec, proof rolled with your testing agency present.',
      },
      {
        title: 'Trenching and backfill',
        body: 'Storm, sanitary, water and dry utility trench, bedded and backfilled to detail, coordinated with your MEP subs.',
      },
      {
        title: 'Drainage and detention',
        body: 'Culverts, inlets, swales and detention basins shaped and stabilised before the surface goes in.',
      },
      {
        title: 'Erosion control',
        body: 'SWPPP measures installed and maintained through the build, with the inspection log kept current.',
      },
      {
        title: 'Fine grading and stone',
        body: 'Base stone placed and shaped to plan elevation, ready for paving or slab.',
      },
    ],
    process: [
      {
        title: 'Send the plan set',
        body: "Civil drawings, geotech, specs and your bid date. We take our own quantities rather than repeating the engineer's.",
      },
      {
        title: 'Site walk',
        body: 'Access, haul routes, existing drainage, spoil and stockpile space, and anything the drawing does not show.',
      },
      {
        title: 'Written proposal',
        body: 'Scope in, scope out, unit prices where quantities are uncertain, and the assumptions we priced against — stated plainly.',
      },
      {
        title: 'Subcontract and preconstruction',
        body: 'Insurance, schedule, submittals and your reporting expectations settled before the first machine moves.',
      },
      {
        title: 'Mobilisation',
        body: 'Locates called, erosion control installed, equipment on site and working to your baseline schedule.',
      },
      {
        title: 'Progress and closeout',
        body: 'Daily contact with the superintendent, monthly billing with field-measured quantities, punch walk and lien waivers at completion.',
      },
    ],
    costDrivers: [
      {
        title: 'Earthwork volume and balance',
        body: 'Cubic yards moved, and whether the site balances. Import or export changes the number more than anything else on the page.',
      },
      {
        title: 'Soil conditions',
        body: 'Wet clay, unsuitable material and rock all mean undercut, drying or import. Geotech borings let us price this honestly instead of padding for it.',
      },
      {
        title: 'Access and phasing',
        body: 'Working around an occupied building, restricted hours or a tight urban footprint costs more per yard than an open greenfield tract.',
      },
      {
        title: 'Purchased materials and schedule',
        body: 'Aggregate, pipe and structures are haul-distance-sensitive. Compressed durations, night work or weekend pours are all quotable if we know before bid.',
      },
    ],
    costNote:
      'We do not print a price range on this page — send the plan set and bid date for a written proposal.',
    timeline: [
      {
        title: 'Bid turnaround',
        body: 'Quick on a complete plan set, faster on a scope we have already walked.',
      },
      {
        title: 'Mobilisation',
        body: 'Off an executed subcontract, subject to locates and access.',
      },
      {
        title: 'Locates',
        body: "Arkansas One Call requires two business days' notice before any excavation.",
      },
      {
        title: 'Pad turnover',
        body: 'Driven by cut/fill volume, moisture conditioning and testing frequency — we schedule it against your concrete date and report weekly.',
      },
    ],
    readyList: [
      'Full civil plan set and project specifications',
      'Geotechnical report with boring logs and compaction criteria',
      'Boundary and topographic survey with control points',
      'Baseline schedule and your required mobilisation date',
      'Subcontract terms, insurance requirements and billing format',
      'Site access, haul route limits and working-hour restrictions',
      'Who holds the stormwater permit and the SWPPP',
      'Known utilities, easements and any existing site conditions on record',
    ],
    faqs: [
      {
        q: 'How fast can you mobilise?',
        a: 'For most of Central Arkansas, off an executed subcontract and a signed notice to proceed, assuming locates are called and access is available. Equipment moves are short inside a 60–75 mile radius of Mayflower, which is exactly why we keep the radius that size.',
      },
      {
        q: 'Do you own your equipment or rent it?',
        a: 'We own the core fleet — excavators, dozers, skid steers and mulching attachments — and rent only for specialised or oversized work. Owned iron means your start date does not depend on a rental yard’s availability in the middle of a busy season.',
      },
      {
        q: 'Who actually runs the job?',
        a: 'David Culberson quotes the work and runs the crew. You are not handed to an estimator who disappears at award. The person who walked the site and priced it is the one on the radio when a condition changes.',
      },
      {
        q: 'How do you handle unforeseen conditions?',
        a: 'We stop, document with photos and measurements, notify the superintendent the same day, and price the change before we proceed. Buried debris, undocumented utilities, rock, and unsuitable soils are the usual four. What we do not do is keep working and hand you a surprise at the end of the month.',
      },
      {
        q: 'Can you provide certificates of insurance and add us as additional insured?',
        a: 'Yes. General liability, auto and workers’ compensation, with additional insured and waiver of subrogation endorsements where your subcontract requires them. A COI goes to your office before mobilisation, not after.',
      },
    ],
    relatedServiceSlugs: [
      'site-grading',
      'excavation-services',
      'site-preparation',
      'dirt-work',
    ],
  },
  {
    slug: 'commercial-development',
    title: 'Commercial Development',
    heroTitle: 'Pads, lots and industrial sites',
    lead:
      'Commercial site work across Central Arkansas — warehouse pads, parking fields, retail and industrial ground, built to the geotech spec and the civil plan.',
    quoteCtaLabel: 'Get a site work quote',
    image: INTERIOR_IMAGES.industryDetail['commercial-development'],
    short: 'Parking lots, warehouse pads, industrial sites and subdivision earthwork.',
    introTitle: 'Commercial site work, in short',
    intro: [
      'Commercial site work is everything under the concrete: clearing the tract, cutting and filling to plan elevation, building subgrade and pads to the geotechnical spec, shaping stormwater detention, coordinating utility trench, and placing base stone — so the paving and slab crews arrive to a surface that will hold up.',
    ],
    selfPerform: [
      {
        title: 'Warehouse and building pads',
        body: 'Stripped, proof rolled, filled in compacted lifts and turned over at grade with density testing documented lift by lift.',
      },
      {
        title: 'Parking and drive subgrade',
        body: 'Subgrade prepared and base stone placed and shaped to plan elevation, sloped so water leaves the lot instead of standing on it.',
      },
      {
        title: 'Stormwater detention',
        body: 'Detention and retention basins excavated to the pond grading plan, outlet structures set to detail and slopes stabilised.',
      },
      {
        title: 'Storm drainage',
        body: 'Inlets, pipe runs, headwalls and swales installed and backfilled so the collection system works before the surface goes down.',
      },
      {
        title: 'Curb and paving preparation',
        body: 'Fine grade and stone brought to tolerance so the paving contractor is not correcting dirt work with asphalt.',
      },
      {
        title: 'Erosion control and stabilisation',
        body: 'SWPPP measures maintained through the build, final grade, topsoil respread and permanent seeding at closeout.',
      },
    ],
    process: [
      {
        title: 'Plan and geotech review',
        body: 'Grading plan, utility plan, pavement sections and boring logs read together, with our own quantities taken off the model.',
      },
      {
        title: 'Erosion control and access',
        body: 'Perimeter measures, construction entrance and washout installed before disturbance so the first inspection is clean.',
      },
      {
        title: 'Clear, strip and stockpile',
        body: 'Vegetation and organics removed, topsoil stripped and stockpiled on site for later respread.',
      },
      {
        title: 'Mass grading',
        body: 'Cut and fill to rough grade, balanced on site where the design allows, import or export tracked by the load.',
      },
      {
        title: 'Subgrade prep and proof roll',
        body: 'Subgrade shaped and proof rolled with the testing agency present. Anything that pumps gets undercut and rebuilt before fill goes over it.',
      },
      {
        title: 'Engineered fill in lifts',
        body: 'Fill placed in 6–8 inch lifts at spec moisture and compacted to the required density, tested as we go.',
      },
      {
        title: 'Drainage, detention and trench',
        body: 'Storm system, basins and utility trench installed and backfilled ahead of stone, coordinated with the other trades on site.',
      },
      {
        title: 'Base stone and turnover',
        body: 'Aggregate placed and fine graded to tolerance, surface surveyed and handed to paving or concrete on the date your schedule needs.',
      },
    ],
    costDrivers: [
      {
        title: 'Cut and fill volume',
        body: 'Cubic yards moved, and whether the site balances. Importing select fill or exporting spoil is the single biggest swing on most lots.',
      },
      {
        title: 'Undercut and unsuitable soils',
        body: 'Wet or organic subgrade that will not hit density has to be dried, undercut or chemically stabilised. Borings let us price it instead of guessing.',
      },
      {
        title: 'Aggregate quantity and haul distance',
        body: 'Base stone is purchased tonnage. Section thickness and how far the quarry is both move the number.',
      },
      {
        title: 'Detention, drainage and phasing',
        body: 'Basin volume, structure count, deep storm runs, and working around an operating tenant all reduce productivity per day.',
      },
      {
        title: 'Season',
        body: 'Arkansas clay in a wet spring will not compact. Winter and early spring earthwork carries risk that a summer schedule does not.',
      },
    ],
    costNote:
      'We do not print a price range on this page — quoted in writing after a site walk and a read of the plan set.',
    timeline: [
      {
        title: 'Estimate',
        body: 'Site walk scheduled as soon as the calendar allows, written scope and quantities to follow.',
      },
      {
        title: 'Permits and locates',
        body: "One Call is two business days; grading and stormwater approvals run on the local jurisdiction's clock.",
      },
      {
        title: 'Clearing and stripping',
        body: 'Days on a small pad site, one to two weeks on a large tract.',
      },
      {
        title: 'Mass grading',
        body: 'Priced and scheduled by cubic yard. Weeks on a typical commercial lot.',
      },
      {
        title: 'Pad and base stone',
        body: 'One to three weeks depending on lift count, testing frequency and stone tonnage.',
      },
    ],
    readyList: [
      'Civil plan set: grading, drainage, utility and pavement sections',
      'Geotechnical report with boring logs and compaction criteria',
      'Boundary and topographic survey with control points',
      'Stormwater permit coverage and the SWPPP',
      'City or county grading permit and any detention approvals',
      'Utility locates called and known private lines identified',
      'Access, haul route limits and working-hour restrictions',
      'Your target dates for pad turnover and paving',
    ],
    faqs: [
      {
        q: 'Can you build a pad to a geotechnical spec?',
        a: 'That is the standard scope. Strip organics, proof roll the subgrade, undercut and rebuild anything that pumps, then place engineered fill in 6–8 inch lifts at the moisture content the report calls for and compact to the specified density. Your testing agency shoots densities as we go, and we do not cover a failing lift.',
      },
      {
        q: 'What happens when the subgrade fails a proof roll?',
        a: 'We stop and price the fix rather than bury it. Depending on the soil that means drying and reworking, undercutting to competent material and replacing with select fill, or chemical stabilisation with lime or cement. In Central Arkansas clay after a wet stretch, some undercut is normal — budget a contingency for it.',
      },
      {
        q: 'Can you work on an active, occupied site?',
        a: "Regularly. Phased retail and industrial work means keeping fire lanes and customer access open, dust and mud control on public streets, defined haul routes, temporary striping and barricades, and working hours that fit the tenant's operation.",
      },
      {
        q: 'How long does a typical commercial pad take?',
        a: 'A single-building pad on a workable site is commonly a few weeks from mobilisation to turnover. Large parking fields, deep undercut, imported fill or a wet spring all extend it. We give you a duration tied to cubic yards and testing frequency, and update it weekly against your baseline.',
      },
    ],
    relatedServiceSlugs: [
      'land-clearing',
      'site-grading',
      'dirt-work',
      'drainage-erosion-control',
    ],
  },
]

export function getIndustryDetail(slug: string): IndustryDetail | undefined {
  return INDUSTRIES_DETAIL.find((i) => i.slug === slug)
}
