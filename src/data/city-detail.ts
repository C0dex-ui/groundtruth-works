/**
 * City detail pages — published copy only from groundtruth-works.lovable.app.
 * Eight long-form cities fully migrated; remaining towns use service-areas table facts.
 * Skip editorial notes and [[PLACEHOLDER]] fields from the source site.
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
  accessTitle?: string
  access?: string[]
  permittingTitle?: string
  permitting?: string[]
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
    accessTitle: 'Access and coordination',
    access: [
      'Access is easy — I-40, Highway 65 Business, Dave Ward Drive and Highway 286 reach almost everything. The complexity is the other trades. Conway sites are busy, and trenching, base stone and paving have to be sequenced so nobody is cutting a finished lot two weeks later. We work off your control points, coordinate with your surveyor for stakeout and verification, and give the superintendent a straight answer on where we will be tomorrow.',
    ],
    permittingTitle: 'Permitting and utilities in Conway',
    permitting: [
      'City of Conway grading and building permits apply inside the city limits.',
      'Faulkner County handles driveway and road-cut permits outside city jurisdiction.',
      'ADEQ construction stormwater general permit coverage and a SWPPP are required at one acre of disturbance.',
      'Detention requirements are typically set in the civil drawings against city stormwater criteria — we build to the pond grading plan and outlet detail.',
      "Arkansas One Call at 811, two business days ahead of excavation, plus private locates on sites with unmarked utilities.",
    ],
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
  'vilonia-ar': {
    slug: 'vilonia-ar',
    heroTitle: 'Excavation, Land Clearing & Site Grading in Vilonia, AR',
    lead:
      'Growfully clears land, mulches overgrown acreage and grades building pads in Vilonia, Arkansas, about 25 minutes east of our Mayflower yard. Most Vilonia work is acreage: opening up wooded tracts along Highway 64 and 107 for a house pad, a shop, a driveway or a pasture, with the drainage planned before the dirt moves.',
    subline:
      'Faulkner County · 25 minutes from Mayflower · Rolling wooded uplands east of Conway, mixed hardwood and pine',
    groundTitle: 'What the ground is like in Vilonia',
    ground: [
      'Vilonia is acreage country. The tracts are bigger, the tree cover is heavier, and a large share of what we do here starts with vegetation rather than elevation. Rolling wooded uplands mean the practical question is usually not how much dirt to move but how to get the trees, stumps and root mat off without tearing up the ground you intend to build on.',
      'That pushes a lot of Vilonia work toward forestry mulching. Grinding standing growth in place leaves the root structure holding the soil, avoids burn piles and haul-off, and is dramatically faster per acre than grubbing. Where a pad or a septic field is going, we grub that footprint properly and mulch the rest — you pay for full removal only where it is actually needed.',
    ],
    builtTitle: 'What is being built here',
    built: [
      'Vilonia grew as a bedroom community for Conway and Little Rock, and the construction follows: residential-adjacent acreage work, school and civic projects, and small commercial along the Highway 64 corridor. The buyer is more often the property owner than a general contractor, so the conversation is different — plainer language, a written scope that a person without a civil set can read, and a real number rather than a range.',
      "The town's tornado history also shows up in the work. Clearing damaged timber, opening blocked access and rebuilding pads on tracts that have been through storm damage is recurring work east of Conway.",
    ],
    calledForTitle: 'What we get called for in Vilonia',
    calledFor:
      'Land clearing and forestry mulching are the top two by a wide margin. Dirt work follows: building the driveway, the pad, and the shaped ground around a shop or barn so water leaves the building instead of collecting behind it. Brush clearing for fence lines, sight lines and pasture reclamation is steady seasonal work. Access roads are their own line item on Vilonia tracts. A long gravel drive across rolling ground has to be crowned and ditched or the first heavy spring will rut it out — and if the drive fails, everything you built at the end of it becomes hard to reach.',
    accessTitle: 'Access and staging',
    access: [
      'Highway 64 and Highway 107 carry the traffic; the tracts themselves are typically reached by county roads and private drives. Getting equipment onto a Vilonia property is usually about the last quarter mile — the entrance, the culvert at the ditch, and whether the existing drive will take a loaded lowboy without collapsing the shoulder. We look at that on the site walk, before it becomes a problem on mobilisation day.',
    ],
    permittingTitle: 'Permitting and utilities in Vilonia',
    permitting: [
      'Faulkner County road department handles driveway and culvert permits for tracts outside the Vilonia city limits.',
      'City of Vilonia permitting applies inside the limits.',
      'Septic field location and area are set by the Arkansas Department of Health permit — we grade around the designated field rather than over it.',
      'Disturbance of one acre or more requires ADEQ construction stormwater permit coverage and a SWPPP.',
      'Arkansas One Call at 811 two business days ahead — on rural tracts private lines to wells, pumps and outbuildings are frequently unmarked and need locating separately.',
    ],
    faqs: [
      {
        q: 'Should I mulch my Vilonia acreage or have it grubbed and hauled off?',
        a: 'Mulch what you are keeping as open ground, grub what you are building on. Mulching is faster and cheaper per acre, leaves no burn piles, and keeps the root mat holding the soil — good for pasture, trails, fence lines and sight lines. Anywhere a pad, a slab, a septic field or a drive is going, the stumps and root balls have to come out or they will rot and leave voids under whatever you built.',
      },
      {
        q: 'How many acres a day can you clear out here?',
        a: 'In light to moderate growth, mulching typically covers several acres a day. Heavy hardwood with large-diameter stems is significantly slower, and grubbing with haul-off is slower again because the debris has to be loaded and trucked. We give you a duration after we walk the tract, because stem size and density change the number more than acreage does.',
      },
      {
        q: 'Can you build the driveway as part of the clearing job?',
        a: 'Yes, and it is usually the right sequence. Clear the corridor, cut and shape the road bed, set a culvert where the ditch crossing needs one, crown it for drainage and stone it. A drive built without a crown and a ditch will rut out in the first heavy spring, no matter how much stone is on it.',
      },
      {
        q: 'Do you work on storm-damaged tracts?',
        a: 'Regularly. Downed and leaning timber, blocked access, damaged drives and pads that need rebuilding. Downed timber is more hazardous and slower to handle than standing growth, so we walk it before quoting rather than pricing it off a photo.',
      },
    ],
    nearby: ['conway-ar', 'greenbrier-ar', 'mayflower-ar'],
  },
  'greenbrier-ar': {
    slug: 'greenbrier-ar',
    heroTitle: 'Excavation, Land Clearing & Site Grading in Greenbrier, AR',
    lead:
      'Growfully clears and grades land in Greenbrier, Arkansas, roughly 28 minutes north of Mayflower up Highway 65. Greenbrier work is rural and open: wooded acreage opened up, pads and drives cut into foothill ground where rock comes up shallower than it does south of Conway, and drainage built for slope rather than for flat clay.',
    subline:
      'Faulkner County · 28 minutes from Mayflower · Foothill ground rising toward the Ozark edge, shallower rock in cuts',
    groundTitle: 'What the ground is like in Greenbrier',
    ground: [
      'Greenbrier sits where Faulkner County starts climbing toward the Ozark edge, and the difference from Conway twelve miles south is real. The ground has more relief, the slopes are steeper, and rock turns up in cuts at depths that would be unusual on the Conway uplands. That changes two things in a quote: how much of the excavation is diggable versus rippable, and how much of the site can be balanced instead of hauled.',
      'Slope also changes the drainage strategy entirely. On flat clay the problem is water that will not leave. Here the problem is water that leaves too fast — concentrated flow that cuts a new channel through a fresh cut slope in one storm. Greenbrier sites need check dams, stabilised channels, and permanent cover established quickly, not just a silt fence at the property line.',
    ],
    builtTitle: 'What is being built here',
    built: [
      'Greenbrier is a growing bedroom community and the construction reflects that stage of growth: school expansion, small commercial serving a population that used to drive to Conway for everything, church and civic buildings, and a steady stream of acreage being opened up on the edges of town. Tract sizes are larger than in Conway and the buyers are more often owners than general contractors.',
      "Highway 65 is the spine. Most commercial work here is within sight of it, and access off the highway — sight distance, the entrance grade, the culvert — is often a bigger design constraint on a small Greenbrier lot than the building pad is.",
    ],
    calledForTitle: 'What we get called for in Greenbrier',
    calledFor:
      'Land clearing leads, on tracts that are genuinely wooded rather than lightly overgrown. Site grading follows, and here it means cutting a level pad into ground that is not level — bench cuts, retained slopes and balanced cut and fill where the rock allows. Brush clearing for pasture, fence lines and sight lines is constant. The honest cost conversation in Greenbrier is rock. If a cut hits rock, the machine that was moving three hundred yards a day is now ripping or hammering, and the production rate drops hard. We flag the risk before we quote and price the fix as a unit rate rather than burying an assumption in a lump sum.',
    accessTitle: 'Access and staging',
    access: [
      'Highway 65 handles equipment moves cleanly. From there it is county roads and private drives, and on sloped tracts the entrance is the pinch point — a steep, unstoned drive that a pickup climbs fine will stop a loaded haul truck. We often build or upgrade the access first so the rest of the job is not fighting its own logistics.',
    ],
    permittingTitle: 'Permitting and utilities in Greenbrier',
    permitting: [
      'Faulkner County road department handles driveway and culvert permits outside the Greenbrier city limits.',
      'City of Greenbrier permitting applies inside the limits.',
      'Entrances onto Highway 65 require an ARDOT access permit rather than a county one.',
      'One acre or more of disturbance requires ADEQ construction stormwater coverage and a SWPPP — on sloped sites expect more erosion control maintenance than a flat lot needs.',
      'Arkansas One Call at 811 two business days ahead of excavation.',
    ],
    faqs: [
      {
        q: 'What happens if you hit rock on my Greenbrier site?',
        a: 'We stop, document what we found and where, and price the change before we continue. Depending on the material that means ripping with a dozer, hammering with an excavator-mounted breaker, or redesigning the pad elevation to sit above it — raising a pad a foot is frequently cheaper than removing the rock under it. On foothill ground north of Conway, shallow rock is common enough that we raise it as a risk before you sign anything.',
      },
      {
        q: 'Can you build a level pad on a sloped Greenbrier lot?',
        a: 'Yes — that is a bench cut, and it is routine here. We cut into the high side, use that material to build the low side, and shape the resulting slopes so they are stable and mowable. The balance point determines the cost: a pad positioned well can be built with dirt already on the property, while a pad placed for the view alone can mean importing fill.',
      },
      {
        q: 'Why does erosion control cost more on a hillside here?',
        a: 'Because water moves faster and concentrates. A flat Conway lot needs perimeter silt fence and inlet protection. A sloped Greenbrier cut needs check dams in the channels, diversion above the cut, slope stabilisation and quick temporary seeding — and it needs repair after storms until permanent cover takes. It is more material and more maintenance for the same acreage.',
      },
      {
        q: 'Do you clear pasture and fence lines, not just building sites?',
        a: 'Yes. Brush clearing and mulching for pasture reclamation, fence lines, sight lines and trails is regular Greenbrier work. It is often done as a day-rate or per-acre scope rather than a full site package, which keeps it affordable when there is no construction attached.',
      },
    ],
    nearby: ['conway-ar', 'vilonia-ar', 'mayflower-ar'],
  },
  'maumelle-ar': {
    slug: 'maumelle-ar',
    heroTitle: 'Excavation, Land Clearing & Site Grading in Maumelle, AR',
    lead:
      'Growfully handles excavation, lot clearing and site grading in Maumelle, Arkansas — about 15 minutes south of Mayflower on I-40. Maumelle is wooded river-terrace ground inside a planned-community framework, so the work here is careful: selective clearing, pads proof-rolled for soft bottomland pockets, and drainage that satisfies a strict review.',
    subline:
      'Pulaski County · 15 minutes from Mayflower · Wooded Arkansas River terrace with soft bottomland pockets under the surface',
    groundTitle: 'What the ground is like in Maumelle',
    ground: [
      "Maumelle sits on river-terrace ground along the Arkansas River, and the surface rarely tells you what is underneath. Terrace deposits are layered — firm sandy zones next to soft silty pockets, sometimes with old fill on top from the community's original development. A pad here gets proof-rolled before anything is placed on it, because the soft spots are localised and you find them with a loaded truck, not with a walk-over.",
      'The tree cover is the other defining feature. Maumelle is genuinely wooded, with mature hardwood on many parcels and a community expectation that you do not level everything just because it is easier. Selective clearing — taking what the footprint requires and protecting the root zones of what stays — is the normal scope here, not an upgrade.',
    ],
    builtTitle: 'What is being built here',
    built: [
      "Maumelle is an affluent planned community, and its commercial construction is office, medical, professional and light-industrial buildout inside a framework of covenants, design review and infill parcels rather than open greenfield. Lots are often the last piece of an established block, which means neighbours on two or three sides and a finished street to protect.",
      'That review environment changes the job. Tree protection, hours of work, mud tracked onto a maintained street, dust, and the condition the site is left in each evening all matter more here than they do on a rural tract. It is not harder work — it is work that has to be done tidily and predictably.',
    ],
    calledForTitle: 'What we get called for in Maumelle',
    calledFor:
      'Site grading and site preparation lead, and the specific value we add is proof rolling and undercut on terrace ground before a slab is poured over a soft pocket. Selective clearing of wooded parcels is second. Drainage and erosion control is third, and it is unusually important here: proximity to the river and to maintained drainage systems means water leaving the site has to leave the way the plan says it does. River-adjacent parcels bring floodplain considerations into the design. If any part of the work is in a mapped flood zone, the elevation and any fill placement have to clear floodplain review before we start moving dirt.',
    accessTitle: 'Access and neighbours',
    access: [
      'Access is straightforward from I-40 and Maumelle Boulevard, and most parcels have finished street frontage. The constraint is not getting there — it is working on a small footprint next to occupied buildings. We plan staging, spoil placement and haul routes so the street stays clean, the entrance keeps mud off the pavement, and the neighbouring parking stays usable.',
    ],
    permittingTitle: 'Permitting and utilities in Maumelle',
    permitting: [
      'City of Maumelle permitting and design review apply to commercial work.',
      'Pulaski County jurisdiction applies for parcels outside the city limits.',
      'Parcels touching mapped floodplain along the Arkansas River require floodplain development review before fill is placed.',
      'One acre or more of disturbance requires ADEQ construction stormwater coverage and a SWPPP, with track-out control on maintained streets.',
      'Arkansas One Call at 811 two business days ahead — established neighbourhoods often carry private sprinkler and lighting lines that public locates do not mark.',
    ],
    faqs: [
      {
        q: 'Can you clear part of a wooded Maumelle lot and leave the rest?',
        a: 'Yes — selective clearing is most of what we do here. We take the building footprint, drive and utility corridors, mark and protect the trees that stay, and keep equipment off their root zones rather than driving over them and killing them slowly. Tell us what matters before the site walk and we will scope it that way.',
      },
      {
        q: 'Why do you proof roll before building a pad in Maumelle?',
        a: 'Because river-terrace ground hides soft pockets and old fill. Proof rolling drives a loaded truck over the prepared subgrade to find anything that pumps or ruts, so it can be undercut and rebuilt before fill or slab goes over it. Finding a soft spot in an afternoon costs a fraction of finding it as a cracked slab in year two.',
      },
      {
        q: 'How do you keep the street clean on an infill lot?',
        a: 'A stoned construction entrance to knock mud off the tyres, sweeping as needed, watering for dust, and haul routes agreed before we mobilise. On maintained Maumelle streets with neighbours watching, that is part of the scope, not an extra.',
      },
      {
        q: 'Does being near the river affect what I can build?',
        a: 'It can. If the parcel touches mapped floodplain, elevation requirements and any fill placement go through floodplain review before work starts, and that review sets the pad elevation as much as the building design does. We check the flood mapping during the estimate rather than after mobilisation.',
      },
    ],
    nearby: ['north-little-rock-ar', 'mayflower-ar', 'little-rock-ar'],
  },
  'north-little-rock-ar': {
    slug: 'north-little-rock-ar',
    heroTitle: 'Excavation, Land Clearing & Site Grading in North Little Rock, AR',
    lead:
      'Growfully does industrial and commercial site work in North Little Rock, Arkansas, about 25 minutes south of Mayflower. NLR work is heavy dirt: warehouse pads and truck courts on flat bottomland with a long history of prior fill, parking-field reconstruction, and trench and drainage work around live industrial operations.',
    subline:
      'Pulaski County · 25 minutes from Mayflower · Flat industrial bottomland north of the river, much of it previously filled',
    groundTitle: 'What the ground is like in North Little Rock',
    ground: [
      "North Little Rock's industrial belt is flat river bottomland, and much of it has been built on, filled, demolished and rebuilt at least once. That prior history is the defining condition. Below the surface you find old foundations, buried slabs, abandoned utilities, construction debris used as fill decades ago, and pockets of material nobody documented. It is not a reason to avoid the market — it is a reason to plan for discovery and to price undercut and debris removal as unit rates rather than assumptions.",
      'Flat ground also means the drainage is unforgiving. There is very little natural fall to work with, so the difference between a truck court that drains and one that ponds is a matter of inches held accurately across a large area. Fine grading tolerance matters more here than cut and fill volume does.',
    ],
    builtTitle: 'What is being built here',
    built: [
      'Warehousing, distribution and industrial redevelopment. North Little Rock has the rail, the interstate junction of I-40 and I-30, the 67/167 corridor and the port-adjacent industrial land, and the buildings that go with all of it: large-footprint pads, heavy truck courts, trailer parking and container storage. Alongside the new work is a constant volume of reconstruction — repaving and rebuilding parking and yard areas that were built on fill and have been carrying loaded trucks for thirty years.',
      'The buyer here is a general contractor or a facility owner, and the schedule is usually tied to an operating business. Work has to fit around trucks that still need to get in and out.',
    ],
    calledForTitle: 'What we get called for in North Little Rock',
    calledFor:
      'Dirt work at volume — hauling, placing and compacting fill for large pads and yards. Site grading to hold accurate elevations across a big flat footprint. Excavation for footings, storm systems and utility trench, frequently around live services on an operating site. The recurring technical problem is heavy loads on questionable subgrade. A truck court carries far higher point loads than a car park, and if the underlying fill was never engineered, the section that looks adequate on paper will rut. That is where undercut, geotextile separation, thicker base stone or stabilisation earn their cost — and where we would rather show you the trade-off than quote the cheapest section and watch it fail.',
    accessTitle: 'Access and working around operations',
    access: [
      'Equipment moves are easy: I-40, I-30, Highway 67/167 and the industrial arterials take anything. The complexity is on site. Working next to a functioning warehouse means keeping dock access open, planning haul routes that do not cross the truck lanes, staging inside a tight footprint, and phasing the work so half the yard is in service while the other half is dirt.',
    ],
    permittingTitle: 'Permitting and utilities in North Little Rock',
    permitting: [
      'City of North Little Rock permitting for grading, drainage and right-of-way work inside the city limits.',
      'Pulaski County applies outside city jurisdiction.',
      'ADEQ construction stormwater coverage and a SWPPP at one acre of disturbance — industrial sites may also carry an existing industrial stormwater permit whose conditions we have to work within.',
      'Prior-fill sites can require environmental screening before excavated material leaves the site — confirm disposal characterisation before hauling.',
      'Arkansas One Call at 811 plus private locates: redeveloped industrial ground routinely holds abandoned and undocumented lines that public locates will not mark.',
    ],
    faqs: [
      {
        q: 'What do you do when you hit old foundations or buried debris?',
        a: 'Stop, photograph and measure it, notify the superintendent the same day, and price the removal before proceeding. On redeveloped North Little Rock ground it is common enough that we recommend carrying a contingency and agreeing unit rates for debris excavation and offsite disposal at contract, so a discovery becomes a documented quantity instead of a dispute.',
      },
      {
        q: 'Can you build a truck court that will not rut?',
        a: 'Yes, but the section has to match the loads. That means a proof-rolled subgrade with soft areas undercut, engineered fill compacted in lifts, and a base thickness sized for loaded trailers rather than cars — sometimes with geotextile separation where the subgrade is marginal. Where the geotech report allows options, we will show you the cost difference between sections rather than quietly picking the thinnest one.',
      },
      {
        q: 'Can you work while our facility stays open?',
        a: 'That is normal here. We phase the site so dock and truck access stays open, define haul routes that avoid your operating lanes, and schedule the disruptive work around your shipping windows. It is less productive per day than an empty site, and we say so in the estimate rather than discovering it later.',
      },
      {
        q: 'How do you get a flat yard to drain?',
        a: 'With accurate fine grading and a drainage plan that is actually followed. On flat bottomland the fall available is small, so holding the design slope across the whole surface is the job — GPS grade control, verification shots, and inlets set at the elevations the plan calls for. A quarter inch of error over a long run is the difference between a dry yard and a standing puddle in every winter photo.',
      },
    ],
    nearby: ['little-rock-ar', 'sherwood-ar', 'maumelle-ar'],
  },
  'little-rock-ar': {
    slug: 'little-rock-ar',
    heroTitle: 'Excavation, Land Clearing & Site Grading in Little Rock, AR',
    lead:
      'Growfully provides commercial excavation, land clearing and site grading in Little Rock, Arkansas, roughly 30 minutes from our Mayflower base. Little Rock work is mostly infill: tight urban sites with neighbours and traffic on every side, established commercial redevelopment, and rock cuts on the shallow shale and sandstone west of I-430.',
    subline:
      'Pulaski County · 30 minutes from Mayflower · Two markets in one city — flat river plain east and north, shallow rock in the western hills',
    groundTitle: 'What the ground is like in Little Rock',
    ground: [
      'Little Rock is geologically split, and the split runs roughly along I-430. East and north toward the river and the port, the ground is flat alluvial plain — deep soils, easy digging, and drainage that has to be engineered because there is almost no natural fall. West of I-430, through the Chenal and Highway 10 corridors, shale and sandstone come up shallow, and an excavation that would take an afternoon in the flats can turn into ripping and hammering by lunchtime.',
      'Practically, that means the same scope of work carries very different production rates depending on the address. We do not price a west Little Rock cut off east Little Rock experience. Where the geotech report shows rock or the site walk suggests it, rock excavation goes in as a unit rate so nobody is guessing.',
    ],
    builtTitle: 'What is being built here',
    built: [
      'Little Rock is the largest commercial market in the region, and its defining characteristic is that most of it is already built. The work is redevelopment: a pad on an existing lot, a building replaced on the same block, a parking field reconstructed, an old structure removed and the ground rebuilt. Greenfield acreage exists mainly at the western edge; everything else is infill.',
      'Infill sets the constraints. Sites are small, staging space is minimal, spoil cannot be stockpiled on the property, neighbouring buildings sit on the property line, and the street is in use all day. The dirt work is often the easy part — the logistics are the job.',
    ],
    calledForTitle: 'What we get called for in Little Rock',
    calledFor:
      'Excavation services first: footings, storm and utility trench, and bulk cut on constrained sites where the machine size is limited by access rather than by volume. Site grading for pads and parking follows. Site preparation as a complete scope shows up on the western greenfield edge and on full-block redevelopments. The recurring Little Rock difference is truck cycles. When there is nowhere to stockpile, every cubic yard becomes a load leaving the site immediately, and the cost is driven by haul distance and traffic rather than by digging. Cut-and-fill balance, which saves real money on an open tract, is often simply unavailable downtown — and an honest estimate says so up front.',
    accessTitle: 'Access, traffic and neighbours',
    access: [
      'Getting to Little Rock is easy: I-30, I-40, I-430 and I-630. Getting onto the site is the problem. Lane closures and right-of-way work need city approval, machine size gets limited by gate width and overhead lines, delivery and haul timing has to dodge peak traffic, and protecting an adjacent building’s foundation during excavation is a design question, not an afterthought. We plan all of that before mobilisation — access route, machine selection, staging, spoil disposal and street protection — because a site this tight punishes improvisation.',
    ],
    permittingTitle: 'Permitting and utilities in Little Rock',
    permitting: [
      'City of Little Rock grading and land alteration permits, plus right-of-way and lane-closure permits where work touches the street.',
      'Pulaski County jurisdiction applies outside the city limits.',
      'Franchise utility coordination is heavier on infill sites — poles, overhead lines and shallow service laterals often need relocation before excavation.',
      'ADEQ construction stormwater coverage and a SWPPP at one acre of disturbance, with strict track-out control on city streets.',
      'Arkansas One Call at 811 two business days ahead, plus private locates and potholing at conflict points — downtown and midtown ground is dense with utilities, some of them older than the records.',
    ],
    faqs: [
      {
        q: 'Can you work on a tight infill site with no staging room?',
        a: 'Yes, and we plan for it before mobilising: machine sizing to the access, direct load-out with no on-site stockpile, agreed haul routes and timing, street sweeping and a construction entrance, and protection for adjacent structures. On a constrained Little Rock lot the excavation plan is really a logistics plan.',
      },
      {
        q: 'Why is excavation more expensive west of I-430?',
        a: 'Shallow rock. Through the western hills, shale and sandstone can be within a few feet of the surface, and once you hit it, production drops from bucket work to ripping or hammering. On the flats east and north, the same volume moves several times faster. Where rock is likely, we price it as a unit rate and flag it during the estimate rather than after.',
      },
      {
        q: 'Do you handle city right-of-way and lane closures?',
        a: "We coordinate them as part of the scope — the permit application, traffic control setup and the schedule that fits the city's conditions. The approval belongs to the city and its timeline is theirs, so we start that process early rather than the week before mobilisation.",
      },
      {
        q: 'You are 30 minutes away — does that affect price or response?',
        a: 'Not meaningfully. Little Rock is well inside our normal working radius, we run I-40 daily, and equipment moves are short. What changes on a Little Rock job is the site constraints, not the travel.',
      },
    ],
    nearby: ['north-little-rock-ar', 'sherwood-ar', 'maumelle-ar'],
  },
  'sherwood-ar': {
    slug: 'sherwood-ar',
    heroTitle: 'Excavation, Land Clearing & Site Grading in Sherwood, AR',
    lead:
      'Growfully grades pads, prepares subgrade and builds drainage in Sherwood, Arkansas, about 30 minutes from our Mayflower yard. Sherwood work concentrates along the Highway 67/167 corridor: retail and medical pads, parking subgrade, and detention on gently rolling clay ground where the lows drain slowly.',
    subline:
      'Pulaski County · 30 minutes from Mayflower · Gently rolling ground with clay subsoil and drainage-sensitive lows',
    groundTitle: 'What the ground is like in Sherwood',
    ground: [
      "Sherwood is a middle case between the flat industrial bottoms of North Little Rock and the rolling uplands of Faulkner County. There is enough relief to give a site somewhere for water to go, and enough clay in the subsoil that the low areas stay wet after a rain. Most Sherwood commercial lots have one corner that is the drainage problem, and the design either solves it deliberately or lives with it for the life of the pavement.",
      'For a project manager the practical implication is sequencing. Get the storm system and the detention in before the base stone, keep the subgrade covered and shed water off it, and do not leave a prepared subgrade open through a wet week expecting it to still hit density afterwards.',
    ],
    builtTitle: 'What is being built here',
    built: [
      "Sherwood's commercial development follows the 67/167 corridor and the arterials feeding it: retail centres, medical and dental offices, service commercial, restaurant pads and the parking that goes with all of them. It is a suburban pad market — individual buildings on individual lots, often carved out of a larger parcel, rather than industrial-scale footprints.",
      'Pad sites like these are small, schedule-sensitive and highly visible. The dirt scope is measured in weeks rather than months, and the owner or GC usually has a tenant with an opening date attached, which makes reliable mobilisation worth more than a marginally lower unit price.',
    ],
    calledForTitle: 'What we get called for in Sherwood',
    calledFor:
      "Site grading first: pads and parking brought to plan elevation with compaction to the geotech spec. Site preparation as a package on the greenfield outparcels. Drainage and erosion control third, and on Sherwood's clay lows it is often the scope that determines whether the whole lot behaves. Detention comes up on nearly every commercial lot here, because suburban development on clay concentrates runoff quickly. We excavate and shape basins to the pond grading plan, set the outlet structure to the detail, stabilise the slopes, and keep the SWPPP measures maintained through the build rather than installing them once and forgetting them.",
    accessTitle: 'Access and phasing',
    access: [
      'Highway 67/167, Kiehl Avenue and the arterial network handle equipment moves without difficulty. The constraint on Sherwood pad sites is that they are usually next to something already operating — an existing centre, a shared drive, live parking. Keeping customer access open, maintaining a clean entrance and phasing the work so one part of the lot stays usable is standard here.',
    ],
    permittingTitle: 'Permitting and utilities in Sherwood',
    permitting: [
      'City of Sherwood grading, drainage and building permits inside the city limits.',
      'Pulaski County jurisdiction applies outside the city limits.',
      'Detention is typically required on new commercial impervious area — the civil plan sets the volume and outlet design and we build to it.',
      'Entrances onto Highway 67/167 and other state routes require an ARDOT access permit rather than a city one.',
      'ADEQ construction stormwater coverage and a SWPPP at one acre of disturbance, plus Arkansas One Call at 811 two business days before excavation.',
    ],
    faqs: [
      {
        q: 'Does my Sherwood commercial lot need a detention pond?',
        a: "Most new commercial impervious area here does, and the civil engineer sets the required volume and outlet design against the city's stormwater criteria. Our part is building it right: excavating to the pond grading plan, setting the outlet structure and spillway to the detail, and stabilising the slopes so the basin does not silt itself in during construction.",
      },
      {
        q: 'How long does a Sherwood pad site take?',
        a: 'A single-building pad on a workable lot is commonly a few weeks from mobilisation to turnover, driven by lift count, testing frequency and stone tonnage rather than acreage. A wet stretch adds time — clay subgrade will not hit density until it dries, and we schedule float instead of promising a date the weather controls.',
      },
      {
        q: 'Can you work on a lot next to an operating retail centre?',
        a: 'Regularly. Customer access and fire lanes stay open, haul routes are agreed in advance, a stoned entrance keeps mud off the drive, and we phase the work so part of the lot remains in service. We will also fit the disruptive work around trading hours where the tenant needs it.',
      },
      {
        q: 'Who handles the storm structures and inlets — you or the plumbing sub?',
        a: "We can carry the storm drainage: inlets, pipe runs, headwalls, swales and detention, backfilled and stabilised before base stone goes down. Sanitary and water are usually the plumbing sub's scope, and we coordinate the trench sequence with them so nobody is cutting finished stone later.",
      },
    ],
    nearby: ['north-little-rock-ar', 'little-rock-ar', 'maumelle-ar'],
  },
}

export function getCityDetail(slug: string): CityDetail | undefined {
  return CITY_DETAILS[slug]
}
