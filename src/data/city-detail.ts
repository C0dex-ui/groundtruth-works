/**
 * City detail pages — only copy present on groundtruth-works.lovable.app.
 * Mayflower + Conway full pages migrated; other cities use table facts only
 * (county / drive / common work from the service-areas index) — no invented local copy.
 */

export type CityDetail = {
  slug: string
  heroTitle: string
  lead: string
  subline: string
  groundTitle?: string
  ground?: string[]
  builtTitle?: string
  built?: string[]
  calledForTitle?: string
  calledFor?: string | { title: string; body: string }[]
  calledForNote?: string
  faqs?: { q: string; a: string }[]
  nearby?: string[]
}

export const CITY_DETAILS: Record<string, CityDetail> = {
  'mayflower-ar': {
    slug: 'mayflower-ar',
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
    nearby: ['conway-ar', 'maumelle-ar', 'vilonia-ar'],
  },
  'conway-ar': {
    slug: 'conway-ar',
    heroTitle: 'Excavation, Land Clearing & Site Grading in Conway, AR',
    lead:
      "Growfully provides commercial excavation, land clearing and site grading in Conway, Arkansas — 15 minutes north of our Mayflower yard. We grade pads and parking subgrade for the retail, medical and institutional work going up along Dave Ward Drive and the I-40 corridor, and we plan Conway's clay-heavy drainage before the grade goes in.",
    subline:
      "Faulkner County · 15 minutes from Mayflower · Gently rolling uplands with clay subsoil that holds water; slow-draining lows toward Cadron Creek",
    groundTitle: 'What the ground is like in Conway',
    ground: [
      'Conway is clay, and clay is the whole story for a site work budget here. The uplands roll gently, which keeps cut and fill volumes reasonable, but the subsoil holds water for days after a rain and will not hit density until it dries. In a wet February a Conway subgrade that proof-rolled fine in October will pump under a loaded tandem. That is not a surprise to anyone who builds here, and it should be in the schedule and the contingency rather than discovered on the day the testing agency shows up.',
      'Toward Cadron Creek and the lower parts of the west side, drainage slows further and the water table sits higher. Those sites need the outfall settled first — where water leaves, at what elevation — because a beautifully graded pad with nowhere to drain is just a pond with a building on it.',
    ],
    builtTitle: 'What is being built here',
    built: [
      'Conway is the largest construction market in Faulkner County and it does not slow down. Three universities drive institutional and student-adjacent work; Dave Ward Drive carries the retail and medical buildout; the interstate corridor and the industrial parks take the distribution and light manufacturing. It is a general-contractor market, which means most of our Conway work is subcontracted off a civil set with a geotech report attached and a superintendent expecting daily contact.',
      'That changes how we price it. Conway jobs are quoted from drawings and quantities, coordinated with a survey crew and a testing agency, and billed on a pay application. It is a different rhythm from an owner-direct acreage job twenty minutes away.',
    ],
    calledForTitle: 'What we get called for in Conway',
    calledFor: [
      {
        title: 'Building pads',
        body: 'Brought to plan elevation and compacted to the geotech spec, with the moisture management the clay demands.',
      },
      {
        title: 'Parking subgrade',
        body: 'Proof-rolled and stoned so the paving crew is not waiting on dirt or chasing a soft corner.',
      },
      {
        title: 'Full site prep',
        body: 'Greenfield commercial tracts on the growth edges — clear, strip, grade, compact and stone in one scope.',
      },
      {
        title: 'Footing and trench',
        body: 'Excavation for footings, storm and utility runs, coordinated with the trades that follow us.',
      },
      {
        title: 'Undercut and replace',
        body: 'When the native clay will not reach density wet: dry and rework, undercut to select fill, or stabilise. Priced up front.',
      },
      {
        title: 'Drainage and detention',
        body: 'Outfall settled first, pond grading and outlet detail built to the civil drawings.',
      },
    ],
    calledForNote: 'Conway clay will not compact wet. Price the fix, do not hide it.',
    faqs: [
      {
        q: 'Why does Conway clay cost more to work in winter?',
        a: 'Because it will not compact wet. Between December and April a Conway subgrade often has to be dried, reworked or undercut before it reaches the density the geotech report requires, and every one of those is time and money that a July schedule would not spend. We build weather float into winter durations rather than promising a date the weather owns.',
      },
      {
        q: 'Do you subcontract to general contractors in Conway?',
        a: 'That is most of what we do here. We bid from your civil set, take our own quantities, carry general liability, auto and workers’ compensation with certificates issued before mobilisation, and bill on your pay application format with field-measured quantities. David Culberson quotes the work and runs the crew, so the person who priced it is the one on the radio.',
      },
      {
        q: 'How far out do you schedule Conway work?',
        a: 'Mobilisation runs off an executed subcontract, subject to locates and access. Conway is 15 minutes from our yard, which keeps equipment moves short and makes it realistic to start a job a week after award.',
      },
      {
        q: 'Can you handle detention basins and storm structures, or just dirt?',
        a: 'Both. Detention and retention basins excavated to the pond grading plan, outlet structures and spillways set to detail, inlets and pipe runs installed and backfilled, slopes stabilised. On a Conway commercial lot the drainage is usually what determines whether the pavement survives its first few winters.',
      },
    ],
    nearby: ['mayflower-ar', 'vilonia-ar', 'greenbrier-ar'],
  },
}

export function getCityDetail(slug: string): CityDetail | undefined {
  return CITY_DETAILS[slug]
}
