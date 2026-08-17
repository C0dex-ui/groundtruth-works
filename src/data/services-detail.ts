/**
 * Service detail copy — sourced from groundtruth-works.lovable.app service pages.
 * Do not invent claims; keep placeholders out of published UI.
 */
import { INTERIOR_IMAGES } from './content'

export type NamedBlurb = { title: string; body: string }
export type Faq = { q: string; a: string }

export type ServiceDetail = {
  slug: string
  title: string
  heroTitle: string
  lead: string
  quoteCtaLabel: string
  image: string
  introTitle: string
  intro: string[]
  useCases: NamedBlurb[]
  process: NamedBlurb[]
  costDrivers: NamedBlurb[]
  costNote: string
  timeline: NamedBlurb[]
  readyList: string[]
  faqs: Faq[]
  relatedSlugs: string[]
  extraSections?: { title: string; lead?: string; items: NamedBlurb[] }[]
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: 'land-clearing',
    title: 'Land Clearing',
    heroTitle: 'Land clearing in Central Arkansas',
    lead:
      'Land clearing is the removal of trees, stumps, brush and undergrowth from a tract so the ground underneath can be used. Growfully clears acreage across Central Arkansas three ways — forestry mulching, grubbing with haul-off, and selective clearing — then stays on the job to strip, grade and finish the dirt so the site is ready to build on.',
    quoteCtaLabel: 'Get a clearing quote',
    image: INTERIOR_IMAGES.serviceDetail['land-clearing'],
    introTitle: 'What land clearing is',
    intro: [
      'Clearing takes a tract from whatever grew on it to workable ground: canopy, understory, briar, vines, fence-line growth, downed timber and — depending on method — the stumps and root balls under it. This is site work: machines, acreage, and a surface the next trade can work on.',
      'In Central Arkansas the ground varies more than people expect over short distances. Faulkner County uplands carry clay-heavy subsoil that holds water. The river bottoms below Mayflower are silty and soft when wet. Ridges east of I-40 are firmer and take equipment better. The same acreage price does not apply across all three, and any contractor quoting sight-unseen is guessing.',
    ],
    extraSections: [
      {
        title: 'Three ways to clear a tract',
        lead:
          'Same wooded parcel, three completely different results — and the choice is worth more than anything else a clearing contractor decides for you.',
        items: [
          {
            title: 'Forestry mulching',
            body:
              'Mulch mat over intact soil. Stumps and roots stay in the ground. Fastest and lowest cost per acre — best for pasture reclaim, trails, fence lines, fuel reduction, and solar prep where stumps can stay.',
          },
          {
            title: 'Grubbing and haul-off',
            body:
              'Bare soil, stumps and root balls pulled, holes backfilled, debris gone. Slowest and highest cost — required for anything structural: building pads, slabs, parking, roads, utilities.',
          },
          {
            title: 'Selective clearing',
            body:
              'Thinned canopy with the trees you chose still standing. Moderate cost — homesites, driveway corridors, view and access lines, tracts kept wooded.',
          },
        ],
      },
    ],
    useCases: [
      {
        title: 'Before any site work',
        body: 'Grading, utilities and pad construction wait on it. Clearing is the first line on the schedule.',
      },
      {
        title: 'Solar and utility-scale',
        body: 'Clean, consistent acreage with access roads and erosion control, on a date that holds against a construction start.',
      },
      {
        title: 'Reclaimed acreage',
        body: 'Pasture lost to cedar and sweetgum, or family land nobody has run a machine on in twenty years.',
      },
      {
        title: 'Homesites and drives',
        body: 'Opening a building envelope, a drive corridor and a septic field while leaving the trees you want.',
      },
      {
        title: 'Access and sight lines',
        body: 'Fence rows, boundaries, culvert approaches and the sight triangle at a new commercial entrance.',
      },
    ],
    process: [
      {
        title: 'Walk the tract and price it',
        body: 'David Culberson walks the ground with you — stem size, density, access, low ground, property lines, anything you want left standing. You get the method, the acreage, the debris plan and a written number. Free, on site.',
      },
      {
        title: 'Permits, locates and protection',
        body: 'Arkansas One Call before a machine touches dirt. Stormwater permit, SWPPP or city land-alteration permit where they apply. Save trees flagged, easements marked, silt fence and a rock construction entrance set, haul route agreed.',
      },
      {
        title: 'Clear',
        body: 'Mulching head, dozer or excavator depending on method, working a planned pattern so material lands where it should and finished ground is not driven over twice.',
      },
      {
        title: 'Stumps, debris and drainage',
        body: 'Where the scope calls for it, stumps and root balls come out, holes are backfilled with competent material and compacted, debris is mulched, burned by permit or hauled. The tract is left walkable with water moving where it should.',
      },
      {
        title: 'Walk it before we leave',
        body: 'We walk the finished ground with you while the machine is still on the trailer, not two counties away.',
      },
    ],
    costDrivers: [
      {
        title: 'Stem density and diameter',
        body: 'Diameter drives machine time more than stem count does — ten large hardwoods and two hundred small cedars on the same acre price very differently.',
      },
      {
        title: 'Method and debris',
        body: 'Mulching in place is cheapest per acre. Grubbing with haul-off is the most expensive, because you pay for stump removal, backfill, loading and trucking by the load and by the mile.',
      },
      {
        title: 'Terrain, soil and access',
        body: 'Slope, rock and wet bottomland slow production, and a tract needing a temporary access road first is a different price from one with a gate on a paved road.',
      },
      {
        title: 'Acreage and mobilization',
        body: 'Per-acre cost drops as acreage rises — moving equipment costs the same for one acre or twenty.',
      },
      {
        title: 'Permits, erosion control and season',
        body: 'An acre of disturbance brings stormwater permitting and controls to maintain. Dry summer ground clears faster and cleaner than a wet Arkansas spring.',
      },
    ],
    costNote:
      'We do not print a per-acre range on this page. The number is written after the tract is walked, never before.',
    timeline: [
      {
        title: 'Estimate',
        body: 'Site walk scheduled as soon as the calendar allows; written number after the walk.',
      },
      {
        title: 'Production',
        body: 'Mulching can run several acres a day in light growth; grubbing is often a day or more per acre with haul cycles.',
      },
      {
        title: 'Weather',
        body: 'Wet bottomland near Lake Conway and river bottoms may need a dry window rather than forcing a heavy machine on soft silt.',
      },
    ],
    readyList: [
      'Address or dropped pin, and the county the tract sits in',
      'Approximate acreage to be cleared, and whether that is all of it or part',
      'What is going on the ground afterward — pad, pasture, solar, driveway, nothing yet',
      'Property lines, easements and anything you want left standing',
      'Any survey, plat, civil plan or aerial you already have',
      'Whether debris can stay on site, must be burned, or must be hauled',
      'Access: gate width, road surface, bridges or culverts with weight limits',
      'Your target start date and any deadline already committed',
    ],
    faqs: [
      {
        q: 'How much does land clearing cost per acre in Central Arkansas?',
        a: 'Price per acre moves with stem density, tree diameter, terrain, and what happens to the debris. An open pasture with scattered cedar and a wooded tract with 18-inch hardwood and stumps to pull are different jobs on the same map. We walk the tract, count what is actually standing, and give you a written number per acre or a lump sum for the scope. We do not print a range here; the number comes in writing after the walk.',
      },
      {
        q: 'What is the difference between forestry mulching and grubbing?',
        a: 'Mulching grinds standing vegetation in place and leaves a mulch mat over undisturbed soil — fast, low impact, no haul trucks, but the stumps and root systems stay in the ground. Grubbing pulls stumps and root balls and hauls the material off, leaving bare soil. If anything structural is going on the ground — a pad, a slab, pavement — you need grubbing, not mulching.',
      },
      {
        q: 'Do I need a permit to clear land in Arkansas?',
        a: 'It depends on the jurisdiction and the disturbance. Sites disturbing one acre or more generally require an ADEQ construction stormwater permit with a SWPPP and erosion controls in place before work starts. Cities like Conway, Little Rock and North Little Rock add their own grading and land-alteration permits, and work near a stream, wetland or floodplain brings other agencies in. We tell you which ones apply to your tract before we mobilize.',
      },
      {
        q: 'Can you clear land with wet or bottomland soils?',
        a: 'Often yes, with the right machine and the right timing. Low ground near Lake Conway, the Arkansas River bottoms and Cadron Creek holds water, and a heavy dozer on saturated silt does damage that costs more to fix than the clearing did. On soft ground we use mulching heads on tracked carriers with low ground pressure, or we wait for a dry window and tell you honestly which one your site needs.',
      },
    ],
    relatedSlugs: ['forestry-mulching', 'site-preparation', 'site-grading'],
  },
  {
    slug: 'site-grading',
    title: 'Site Grading',
    heroTitle: 'Site grading in Central Arkansas',
    lead:
      'Site grading is shaping ground to planned elevations and slopes so it drains correctly and carries what gets built on it. Growfully grades commercial pads, parking lots, roads and building sites across Central Arkansas — cut and fill balanced, lifts compacted to spec, finished surface held to plan tolerance.',
    quoteCtaLabel: 'Get a grading quote',
    image: INTERIOR_IMAGES.serviceDetail['site-grading'],
    introTitle: 'What site grading is',
    intro: [
      'A civil plan shows finished elevations at points across a site. Grading is the work of making the real ground match those numbers: cutting where the ground is high, filling where it is low, compacting the fill so it does not settle, and shaping slopes so water runs to a defined outfall instead of pooling against a building.',
      'Done right, nobody notices it. Done wrong, it shows up as cracked slab, ponding in a parking lot, a failed subgrade under new asphalt, or a settlement dish two winters later. Grading is the cheapest part of a project to do correctly and one of the most expensive to fix.',
      'Central Arkansas ground makes this specific. Clay-heavy Faulkner County subsoil holds water and pumps under load when wet. Bottomland silt near the Arkansas River and Lake Conway is soft and needs care with moisture. Both mean the same design grade takes a different approach depending on which side of I-40 the site sits on.',
    ],
    useCases: [
      {
        title: 'Building pads',
        body: 'Structural pad to plan elevation with compacted, tested fill under slab and footings.',
      },
      {
        title: 'Parking lots and drives',
        body: 'Subgrade shaped and compacted for base stone and asphalt, with slope that drains to inlets rather than to the low corner.',
      },
      {
        title: 'After clearing',
        body: 'A cleared tract is not a graded one. Stump holes, ruts and stripped topsoil all have to be dealt with before anything is built.',
      },
      {
        title: 'Drainage and standing water',
        body: 'Water sitting against a foundation, in a yard, or in the middle of a lot is nearly always a grade problem.',
      },
      {
        title: 'Roads and access',
        body: 'Access roads, culvert crossings and laydown yards graded and stoned to carry construction traffic through a wet season.',
      },
      {
        title: 'Solar and industrial sites',
        body: 'Large-area grading to tolerance across acreage, with erosion control that survives inspection.',
      },
    ],
    process: [
      {
        title: 'Plan review or site walk',
        body: 'We read the civil plan — grading sheet, spot elevations, pad detail, geotech report — or walk the site and shoot existing grade where there is no plan yet.',
      },
      {
        title: 'Quantities and estimate',
        body: 'Cut and fill quantities, import or export, undercut allowance, topsoil strip and stone. You get a written scope that says which of those are in and which are not.',
      },
      {
        title: 'Locates, permits, erosion control',
        body: 'Arkansas One Call, stormwater permit and SWPPP where the disturbance requires it, then silt fence, wattles, inlet protection and a rock entrance installed before dirt moves.',
      },
      {
        title: 'Strip topsoil',
        body: 'Organic topsoil is stripped and stockpiled on site. Structural fill does not go over topsoil — that is how settlement gets built into a pad.',
      },
      {
        title: 'Rough grade — cut and fill',
        body: 'Bulk earth moved to shape the site, cut feeding fill wherever the plan allows it, haul routes kept short and off finished areas.',
      },
      {
        title: 'Undercut and moisture conditioning',
        body: 'Soft or unsuitable material is undercut and replaced with competent fill. Wet clay is disked and dried, dry material is watered, so it compacts instead of pumping.',
      },
      {
        title: 'Compact in lifts',
        body: 'Fill placed in controlled lifts and rolled to the density the spec calls for, with the third-party lab testing as we go rather than after the fact.',
      },
      {
        title: 'Fine grade and proofroll',
        body: 'Surface brought to final elevation within plan tolerance using GPS or laser control, then proofrolled with a loaded truck so soft spots surface before the next trade shows up.',
      },
      {
        title: 'Drainage and stabilization',
        body: 'Swales, culverts, inlets and outfalls shaped and confirmed to flow. Slopes seeded or matted so the first storm does not take the grade with it.',
      },
      {
        title: 'Walkthrough and handover',
        body: 'We walk the finished surface with you or your superintendent, confirm elevations and turn the site over ready for base, steel or paving.',
      },
    ],
    costDrivers: [
      {
        title: 'Earthwork volume',
        body: 'Cubic yards moved is the base unit. Everything else adjusts it.',
      },
      {
        title: 'Balance, import and export',
        body: 'A balanced site avoids trucking entirely. Import of structural fill or export of surplus is priced by the load and the mile.',
      },
      {
        title: 'Soil condition and moisture',
        body: 'Wet clay needs drying and rework. Unsuitable material needs undercut and replacement. Both are time nobody sees on the plan.',
      },
      {
        title: 'Rock',
        body: 'Shallow rock turns a dozer job into a hammer or blasting job, and it rarely announces itself before you start.',
      },
      {
        title: 'Tolerance and testing',
        body: 'Tight tolerance and a heavy testing regime cost more than rough grade to the nearest half foot.',
      },
      {
        title: 'Access, phasing, erosion control',
        body: 'Grading around a live facility, SWPPP compliance, and control maintenance are real line items, not overhead.',
      },
    ],
    costNote:
      'We do not print an earthwork range on this page — we price off your plan or a walked site, never off a phone call alone.',
    timeline: [
      {
        title: 'Estimate',
        body: 'Plan review or site visit scheduled as soon as the calendar allows, written estimate to follow.',
      },
      {
        title: 'Locates and permits',
        body: 'Two business days for Arkansas One Call; stormwater and municipal grading permits vary by jurisdiction.',
      },
      {
        title: 'Small pad',
        body: 'Strip, rough grade, compact and fine grade commonly runs several days on a single-building pad.',
      },
      {
        title: 'Multi-acre commercial',
        body: 'Weeks, driven by earthwork volume, undercut, import cycles and lab turnaround on density tests.',
      },
      {
        title: 'Weather',
        body: 'Earthwork stops in wet weather and clay needs dry days to condition. Arkansas spring is the risk window; late summer and fall are the productive ones.',
      },
    ],
    readyList: [
      'Civil plan or grading sheet if you have one, in PDF or DWG',
      'Geotech report, including recommended bearing and compaction',
      'Site address, and the acreage being graded',
      'Whether the site is cleared already or still wooded',
      'Required tolerance and who is doing the density testing',
      'Whether import or export of material is expected',
      'Known utilities, easements and anything staying in place',
      'Target start date and the trade that follows you on site',
    ],
    faqs: [
      {
        q: 'What is the difference between rough grading and fine grading?',
        a: 'Rough grading moves bulk dirt and gets the site within a few tenths of design elevation — cut and fill balanced, slopes shaped, drainage roughed in. Fine grading brings that surface to final elevation and tolerance, usually plus or minus a tenth of a foot on a commercial pad, with the surface proofrolled and ready for base stone, concrete or paving.',
      },
      {
        q: 'How much does site grading cost in Central Arkansas?',
        a: 'Grading is priced by the volume of earth you move, how far you move it, and what you have to do to it when it gets there. A balanced site where cut feeds fill is far cheaper than one importing or exporting thousands of yards. Undercut of unsuitable soil, rock, and moisture conditioning all change the number. We price off your plan or a walked site. We do not print a range here; the number comes in writing after the walk.',
      },
      {
        q: 'What does cut and fill mean, and what is a balanced site?',
        a: 'Cut is earth removed where existing ground sits above the finished grade; fill is earth added where it sits below. A balanced site is one where cut volume roughly equals fill volume, so dirt is neither trucked in nor hauled off. Balance is worth real money — every imported or exported yard is a truck cycle somebody pays for.',
      },
      {
        q: 'What grading tolerance do you hold?',
        a: 'Whatever the plan calls for. Commercial building pads are commonly specified at plus or minus one tenth of a foot, subgrade under pavement similar, and rough grade looser. We shoot grade with GPS or laser control, check with a rod, and proofroll before we call a surface finished.',
      },
      {
        q: 'Do you handle compaction testing and density requirements?',
        a: 'We place and compact in lifts to the density the spec calls for — typically a percentage of standard or modified Proctor — and we coordinate with the third-party testing lab your GC or engineer retains. Independent testing stays independent; we build to the number and let the lab confirm it.',
      },
      {
        q: 'How does grading fix a drainage or standing water problem?',
        a: 'Most standing water is a grade problem, not a water problem. Positive slope away from structures, swales that carry water to a defined outfall, and culverts sized for the flow are what solve it. Grading without a drainage plan just moves the puddle.',
      },
    ],
    relatedSlugs: ['site-preparation', 'dirt-work', 'drainage-erosion-control'],
  },
  {
    slug: 'excavation-services',
    title: 'Excavation Services',
    heroTitle: 'Excavation contractor, Central Arkansas',
    lead:
      'Excavation is the controlled removal of earth to the depths and shapes a plan calls for. Growfully handles bulk cut and fill, ponds, building pads, undercut and demolition across Central Arkansas, protects the excavation while it is open, and puts the backfill back compacted to spec.',
    quoteCtaLabel: 'Get an excavation quote',
    image: INTERIOR_IMAGES.serviceDetail['excavation-services'],
    introTitle: 'What excavation is',
    intro: [
      'Excavation is the trade that moves earth to the right place and the right elevation — bulk cut, pads, ponds and demolition — with the dirt put back so nothing settles later.',
      'On a commercial job it is measured work. Quantities come off the plan in cubic yards, depths get shot against a benchmark, and the backfill has a density number attached to it. That is the difference between an excavation contractor and a machine with an operator.',
      'Central Arkansas ground makes it interesting. Faulkner County uplands run clay that holds water and turns to grease in the spring. The Arkansas River bottoms below Mayflower are silty and soft. Ridges toward Perry and Saline counties hide shale and weathered sandstone at depths a boring log did not catch.',
    ],
    useCases: [
      {
        title: 'Bulk earthmoving',
        body: 'Mass cut and fill to bring a site to subgrade, whether that balances on site or means importing and exporting dirt.',
      },
      {
        title: 'Ponds, basins and detention',
        body: 'Detention and retention basins, farm and stock ponds, and drainage structures shaped to plan inverts and side slopes.',
      },
      {
        title: 'Undercut and soil replacement',
        body: 'Pulling out soft, organic or unsuitable material the geotech condemned and rebuilding with engineered fill.',
      },
      {
        title: 'Demolition and removal',
        body: 'Old slabs, tanks, culverts and buried debris out of the way before new construction starts.',
      },
      {
        title: 'Warehouse demolition',
        body: 'Warehouse and industrial buildings taken down, debris loaded and hauled, and the footprint left ready for the next use of the ground.',
      },
      {
        title: 'House demolition',
        body: 'Residential structures taken down and hauled so the lot can be opened for a new pad, a commercial reuse, or open ground.',
      },
    ],
    process: [
      {
        title: 'Plan review and quantities',
        body: 'We read the civil set and the soils report, take off cut and fill quantities, and flag anything that looks like rock, groundwater or a conflict before it becomes a change order.',
      },
      {
        title: 'Site visit with David',
        body: 'Access, overhead lines, spoil room, haul routes and the neighbors. Free, on site, and the reason our numbers hold up.',
      },
      {
        title: 'Locates and permits',
        body: 'Arkansas One Call placed and two business days honored. Private locates where existing utilities are not on any public map. Stormwater and city permits handled where they apply.',
      },
      {
        title: 'Erosion control and access',
        body: 'Silt fence, inlet protection and a rock construction entrance in before disturbance, and a defined haul route so mud stays off the public road.',
      },
      {
        title: 'Stake and set control',
        body: 'Grades staked from surveyor control or run through GPS grade control on the machine, with a benchmark everyone works from.',
      },
      {
        title: 'Excavate in lifts',
        body: 'Dug in planned lifts with the protective system — slope, bench or trench box — matched to depth and soil classification. Spoil set back from the edge.',
      },
      {
        title: 'Inspection and bearing',
        body: 'Bottom dressed, held for the geotech or the inspector, and protected from rain and traffic until the next trade shows up.',
      },
      {
        title: 'Backfill, compact, restore',
        body: 'Backfill placed in lifts, moisture conditioned, compacted to spec and tested where required. Site left graded, draining and stabilized.',
      },
    ],
    costDrivers: [
      {
        title: 'Volume',
        body: 'Cubic yards moved is the base unit. Everything else is a multiplier on top of it.',
      },
      {
        title: 'Depth and protection',
        body: 'Depth drives slope, benching and shoring, and each of those adds working room, machine time and material.',
      },
      {
        title: 'Soil, rock and groundwater',
        body: 'Clay digs differently than silt; weathered rock needs a breaker; water in the hole means pumps, sumps and schedule risk.',
      },
      {
        title: 'Haul distance and access',
        body: 'Trucking prices by the load and by the mile. A wide-open field is one price; digging between an occupied building and a live drive is another.',
      },
      {
        title: 'Testing and restoration',
        body: 'Density testing, proof rolls, backfill, final grade, topsoil and seeding are part of the job and belong in the number from the start.',
      },
    ],
    costNote:
      'We do not print a price range on this page — we publish a real number after we have seen your plan or your site, never before.',
    timeline: [
      {
        title: 'Estimate',
        body: 'Site visit typically as soon as the schedule allows, with a written estimate to follow.',
      },
      {
        title: 'Locates',
        body: 'Two business days for Arkansas One Call, longer if a private locate is needed on a developed parcel.',
      },
      {
        title: 'Pad and pond work',
        body: 'A small commercial pad or pond commonly runs a few days, driven by volume, haul cycles and how fast the inspector can get there.',
      },
      {
        title: 'Bulk earthwork',
        body: 'Sized by cubic yards per day rather than by acres — one to several weeks on a typical commercial pad.',
      },
      {
        title: 'Weather',
        body: 'Wet clay stops earthwork before it stops anything else on the job. We plan schedule float into an Arkansas spring.',
      },
    ],
    readyList: [
      'Civil plan set, grading plan or at least a sketch with dimensions',
      'Geotechnical report or any borings that exist for the site',
      'Address or dropped pin, and the county the site sits in',
      'What is being built and the finished floor or invert elevation, if known',
      'Known utilities, easements and anything already buried on site',
      'Whether spoil can stay on site or has to be hauled',
      'Access: gate width, road surface, overhead lines, weight-limited bridges',
      'Your target start date and any inspection or delivery dates already committed',
    ],
    faqs: [
      {
        q: 'What does an excavation contractor actually do?',
        a: 'An excavation contractor moves earth to the elevations and shapes a plan calls for. On a commercial job that means bulk cut and fill, pond and basin digging, building pads, undercut and replacement of bad soil, demolition and removal, and backfill compacted to a density spec.',
      },
      {
        q: 'How deep can you dig, and when is shoring required?',
        a: 'Depth is limited by soil, water and access more than by machine size. Under five feet a protective system is not required by rule, but a competent person still inspects the walls. At five feet and deeper you slope, bench or shore. Past twenty feet the protective system has to be designed by a registered professional engineer.',
      },
      {
        q: 'Do you handle rock excavation in Central Arkansas?',
        a: 'Shale and weathered sandstone show up across Faulkner, Perry and Pulaski counties, sometimes shallower than a boring log suggests. Weathered material comes out with a large excavator and a rock bucket or a hydraulic breaker. Solid ledge is a different scope and a different price, so we flag rock risk in the estimate rather than surprising you with a change order.',
      },
      {
        q: 'Do you locate utilities before digging?',
        a: 'Always. Arkansas One Call at 811 gets placed before any excavation and takes two business days. Public locates do not cover private lines — sprinkler mains, site lighting, gas runs to an outbuilding, existing storm on a developed parcel — so on occupied sites we recommend a private locate and we hand dig or vacuum excavate around anything marked.',
      },
      {
        q: 'Do you compact and test backfill?',
        a: 'Backfill goes in lifts sized to the equipment and moisture-conditioned so it will actually compact. Under structures, pavement and pipe we compact to the density the geotechnical spec calls for and hold for the testing agency to shoot it. If a lift fails, it gets reworked before the next one goes on top.',
      },
    ],
    relatedSlugs: ['site-grading', 'dirt-work', 'site-preparation'],
  },
  {
    slug: 'site-preparation',
    title: 'Site Preparation',
    heroTitle: 'Site preparation, Central Arkansas',
    lead:
      'Site preparation is the work that turns raw ground into a buildable site. Growfully clears, strips, grades, compacts and stones commercial sites across Central Arkansas, then hands your foundation crew a pad that is at plan elevation and passes density.',
    quoteCtaLabel: 'Get a site prep quote',
    image: INTERIOR_IMAGES.serviceDetail['site-preparation'],
    introTitle: 'What site preparation is',
    intro: [
      'Site work is the umbrella scope: one contractor, one number, responsible for everything from the first tree to the last proof roll. It exists because splitting clearing, earthwork and stone across three outfits is how elevations get missed and schedules slip.',
      'The deliverable is not a cleared lot. It is a subgrade at the elevation the plan calls for, compacted to the density the geotech specified, draining the direction the civil drawing shows, with the erosion controls still standing.',
      'In Central Arkansas that means planning around ground that does not cooperate. Faulkner County uplands run a tight clay that holds moisture for days after a rain. The bottoms near the Arkansas River are soft and silty. Ridges toward Perry and Saline counties hide shale close to the surface.',
    ],
    useCases: [
      {
        title: 'New commercial construction',
        body: 'Retail, office, warehouse, church and light industrial pads taken from raw ground to a certified subgrade.',
      },
      {
        title: 'Solar and utility-scale sites',
        body: 'Access roads, laydown yards, pad areas and drainage across large tracts with tight erosion requirements.',
      },
      {
        title: 'Subdivision and multi-lot work',
        body: 'Road subgrade, lot balancing and mass earthwork ahead of vertical construction.',
      },
      {
        title: 'Building additions and expansions',
        body: 'Prep on an occupied site, phased so the business keeps operating around the work.',
      },
      {
        title: 'Parking, yard and laydown areas',
        body: 'Subgrade, stone base and positive drainage for truck yards, equipment storage and overflow parking.',
      },
      {
        title: 'Owner-driven rural builds',
        body: 'Shops, barndominiums and homesites where the site has to be built before a single wall goes up.',
      },
    ],
    process: [
      {
        title: 'Plan review and walk',
        body: 'We read the civil set and soils report, then walk the site with you to confirm access, staging, spoil and anything the drawings did not catch.',
      },
      {
        title: 'Erosion control first',
        body: 'Silt fence, construction entrance and inlet protection go in before disturbance, because that is what the permit and the inspector expect.',
      },
      {
        title: 'Clear and grub',
        body: 'Standing growth removed and root systems pulled where the pad footprint requires it. Mulched in place or hauled, depending on scope.',
      },
      {
        title: 'Strip and stockpile topsoil',
        body: 'Organics come off the building area and get stockpiled for final restoration instead of being buried under the pad.',
      },
      {
        title: 'Mass cut and fill',
        body: 'Bulk earthwork to rough grade with GPS control, balancing on site where the design allows and importing select fill when it does not.',
      },
      {
        title: 'Proof roll and undercut',
        body: 'Loaded truck over the subgrade with the inspector watching. Soft spots get undercut and rebuilt before anything goes on top.',
      },
      {
        title: 'Fine grade and compact',
        body: 'Final elevations set to tolerance and compacted in lifts to the density the spec calls for, with the testing agency shooting it.',
      },
      {
        title: 'Stone base and handoff',
        body: 'Base rock placed and compacted, drainage confirmed, controls left in place, and the site turned over to your next trade.',
      },
    ],
    costDrivers: [
      {
        title: 'Acreage and density',
        body: 'Open pasture preps fast. Mature timber adds a whole clearing scope before earthwork starts.',
      },
      {
        title: 'Cubic yards moved',
        body: 'The single biggest line. A balanced site is dramatically cheaper than one that imports dirt.',
      },
      {
        title: 'Haul distance and stone',
        body: 'Trucking prices by load and mile. Base depth on the plan multiplied by area is a purchased material, not just machine time.',
      },
      {
        title: 'Soil condition and moisture',
        body: 'Wet clay has to be dried, limed or replaced before it will hit density.',
      },
      {
        title: 'Erosion control, testing, phasing',
        body: 'SWPPP measures, proof rolls, density tests, and phased work around an operating business all change the number.',
      },
    ],
    costNote:
      'We do not print a price range on this page — a real number follows the site visit, not the phone call.',
    timeline: [
      {
        title: 'Estimate',
        body: 'Site visit typically as soon as the schedule allows, written estimate after.',
      },
      {
        title: 'Permits and locates',
        body: 'Arkansas One Call takes two business days. Stormwater permit coverage should be in hand before disturbance.',
      },
      {
        title: 'Clearing',
        body: 'Days to a couple of weeks depending on acreage and how much has to be hauled.',
      },
      {
        title: 'Earthwork',
        body: 'Measured in cubic yards per day. One to several weeks on a typical commercial pad.',
      },
      {
        title: 'Fine grade and stone',
        body: 'Usually under a week once the subgrade passes.',
      },
    ],
    readyList: [
      'Civil plan set or grading plan, if one exists',
      'Geotechnical report, borings or any soils information',
      'Address or dropped pin, plus the county',
      'Finished floor elevation or target pad elevation',
      'Building footprint, parking and drive dimensions',
      'SWPPP status and who holds the stormwater permit',
      'Access details: gate width, road surface, weight limits, overhead lines',
      'Your construction schedule and the date the foundation crew mobilizes',
    ],
    faqs: [
      {
        q: 'What is included in site preparation?',
        a: 'Site prep is everything between raw ground and a pad a foundation crew can work on: clearing and grubbing, topsoil strip and stockpile, erosion control, mass cut and fill, subgrade proof roll, fine grade, compaction to spec, stone base, and rough drainage. On most commercial jobs it is one contracted scope with one crew responsible for the elevations.',
      },
      {
        q: 'How long does site preparation take?',
        a: 'A small commercial pad on open ground can be prepped in one to two weeks. Wooded acreage, heavy cut and fill, imported dirt or an Arkansas spring pushes it to four to eight. The honest answer is that clearing is predictable and earthwork is not — moisture in Faulkner County clay drives the schedule more than machine count does.',
      },
      {
        q: 'Do you work from a civil plan set?',
        a: 'Yes, and we prefer it. We take quantities off the grading plan, build the model for GPS machine control, and grade to the plan elevations. If there is no plan yet — a lot of owner-driven projects start that way — we can prep to a sketch and known finished floor elevation, then flag anything that will need an engineer.',
      },
      {
        q: 'Who handles permits and erosion control?',
        a: 'Sites disturbing an acre or more need coverage under the ADEQ construction stormwater permit with a SWPPP in place before dirt moves. We install and maintain the measures the SWPPP calls for — silt fence, inlet protection, construction entrance, seeding — and keep the inspection log current. Permit ownership stays with whoever the plan names, and we work to it.',
      },
    ],
    relatedSlugs: ['land-clearing', 'site-grading', 'excavation-services'],
  },
  {
    slug: 'forestry-mulching',
    title: 'Forestry Mulching',
    heroTitle: 'Forestry mulching, Central Arkansas',
    lead:
      'Forestry mulching grinds standing brush and small trees into a mulch mat, in place, in one pass. No burn piles, no haul trucks, minimal soil disturbance. Growfully mulches tracts across Central Arkansas — and tells you when a different method would serve you better.',
    quoteCtaLabel: 'Get a mulching quote',
    image: INTERIOR_IMAGES.serviceDetail['forestry-mulching'],
    introTitle: 'What forestry mulching is',
    intro: [
      'A carrier — a compact track loader or a purpose-built forestry machine — runs a rotary drum with carbide teeth at the front. The drum takes standing vegetation down and grinds it in the same motion. What is standing at 8am is a chip layer on the ground by lunch.',
      'The method exists because hauling is expensive. On traditional clearing, most of the invoice is trucks, tipping fees and the crew handling debris. Mulching deletes that entire category by leaving the material where it grew.',
      'It is not a universal answer. Mulching leaves live root systems in the ground, which is exactly what you want for a hunting lane or a pasture reclaim and exactly what you do not want under a building pad. We quote whichever method fits, and it is not always this one.',
    ],
    useCases: [
      {
        title: 'Overgrown acreage reclaim',
        body: 'Pasture and fields lost to cedar, briar and volunteer scrub brought back to usable ground.',
      },
      {
        title: 'Fence lines and property boundaries',
        body: 'A clean, walkable line without a debris windrow left behind for you to deal with.',
      },
      {
        title: 'Trails, lanes and food plots',
        body: 'Access cut through timber with the canopy and mature trees left standing.',
      },
      {
        title: 'Underbrush thinning',
        body: 'Ladder fuel and understory removed while the trees you want stay untouched.',
      },
      {
        title: 'Invasive species knockdown',
        body: 'Privet, honeysuckle and bradford pear taken to the ground as the first step in a control program.',
      },
      {
        title: 'Sensitive and sloped ground',
        body: 'Work near creeks, wetlands and steep grades where bare soil would be an erosion problem.',
      },
    ],
    process: [
      {
        title: 'Walk the tract',
        body: 'We look at stem size, density, species and terrain — the four things that decide whether mulching is right and what it costs.',
      },
      {
        title: 'Mark what stays',
        body: 'Trees you want kept, boundaries, wells, septic fields, utility runs and anything buried get flagged before the drum turns.',
      },
      {
        title: 'Set the finish level',
        body: 'Rough knockdown for access is a different pass count than a clean park-like finish. We agree on the target up front.',
      },
      {
        title: 'Perimeter first',
        body: 'We open the boundary and access route, which gives the machine room to work and gives you a clear line to check progress against.',
      },
      {
        title: 'Grind in a pattern',
        body: 'Systematic passes rather than wandering, so coverage is even and nothing gets missed in a thicket.',
      },
      {
        title: 'Stumps flush',
        body: 'Cutters run the stumps flush or a few inches under grade so the tract is walkable and mowable where growth allows.',
      },
      {
        title: 'Spread the mat',
        body: 'Chips leveled to an even layer instead of piled, so it acts as erosion cover and breaks down evenly.',
      },
      {
        title: 'Walk it together',
        body: 'We finish the job with you on the ground, and we tell you honestly what will need a follow-up pass and when.',
      },
    ],
    costDrivers: [
      {
        title: 'Stem density and size',
        body: 'Machine hours per acre, not acres, is the real unit. Thick stands cost multiples of light brush. Above 8–10 inches diameter, removal is often cheaper than grinding.',
      },
      {
        title: 'Species and finish level',
        body: 'Cedar and pine grind fast. Dense hardwood and thorny growth are slower. One rough pass costs far less than multiple passes for a clean, uniform mat.',
      },
      {
        title: 'Terrain, obstacles, access',
        body: 'Steep ground, rock, fence wire, trash piles and buried metal slow production. Distance from Mayflower and gate width affect mobilization.',
      },
    ],
    costNote: 'We do not print a range here; the number comes in writing after the site visit.',
    timeline: [
      {
        title: 'Light brush',
        body: 'Two to four acres a day is realistic on open, light growth.',
      },
      {
        title: 'Medium growth',
        body: 'Roughly one acre a day on saplings and mixed understory.',
      },
      {
        title: 'Heavy stands',
        body: 'Under an acre a day where stems are large and tightly spaced.',
      },
      {
        title: 'Follow-up pass',
        body: 'Plan for one in 12 to 24 months if long-term suppression matters to you.',
      },
    ],
    readyList: [
      'Acreage and a dropped pin or parcel number',
      'What is growing: brush, saplings, cedar, hardwood, invasives',
      'Rough sense of the largest stem sizes on the tract',
      'What the land is for after clearing',
      'Trees or features you want left standing',
      'Known utilities, wells, septic fields and old fence',
      'Gate width and access route for equipment',
      'Any HOA, county or timber restrictions you are aware of',
    ],
    faqs: [
      {
        q: 'What is forestry mulching?',
        a: 'A single machine with a rotary drum cutter grinds standing brush and small trees into chips and leaves them on the ground as a mulch mat. One machine, one pass, no piles, no burning, no trucks. The root systems stay in place and so does the soil structure.',
      },
      {
        q: 'Does mulching remove stumps?',
        a: 'No. The cutter grinds the stump flush or a few inches below, but the root system stays in the ground. If you are building on it, running hay equipment over it, or want the growth gone permanently, you need grubbing, not mulching.',
      },
      {
        q: 'Will the brush grow back after mulching?',
        a: 'Some of it will. Hardwood stumps sprout, and invasives like privet and honeysuckle come back aggressively. Expect a follow-up pass in year one or two, or a herbicide program if the goal is long-term control.',
      },
      {
        q: 'Do I need a burn permit or a dumpster?',
        a: 'Neither, and that is most of the cost advantage. Nothing leaves the site, so there is no haul-off, no tipping fee, no burn pit and no waiting on an Arkansas Forestry Division burn ban to lift.',
      },
    ],
    relatedSlugs: ['land-clearing', 'brush-clearing', 'site-preparation'],
  },
  {
    slug: 'brush-clearing',
    title: 'Brush Clearing',
    heroTitle: 'Brush clearing, Central Arkansas',
    lead:
      'Brush clearing removes undergrowth, briar, scrub and volunteer saplings so land is usable again. Growfully clears overgrown lots, fence lines and small acreage across Central Arkansas, and matches the machine and the method to what is actually growing on your ground.',
    quoteCtaLabel: 'Get a brush clearing quote',
    image: INTERIOR_IMAGES.serviceDetail['brush-clearing'],
    introTitle: 'What brush clearing is',
    intro: [
      'Brush clearing is everything below the tree line. In Central Arkansas that usually means privet, honeysuckle, greenbrier, blackberry, cedar scrub, sweetgum volunteers and whatever else took over after a few unmowed seasons. Two years of neglect is a bush hog job. Ten is a machine job.',
      'The work is straightforward but the decision is not. Cut and mulch is fast and cheap and the roots live. Grub it out and it is gone for good but you have bare soil and a bigger invoice. Which one is right depends entirely on what the land is for next.',
      'If what you have is timber rather than brush, land clearing is the right scope. If it is thick understory over acreage, forestry mulching usually costs less per acre.',
    ],
    useCases: [
      {
        title: 'Before you build',
        body: 'You cannot survey, stake or design around ground you cannot see or walk.',
      },
      {
        title: 'Before you sell',
        body: 'An overgrown parcel photographs badly and appraises low. Clearing is one of the cheapest things you can do to a listing.',
      },
      {
        title: 'Code enforcement notices',
        body: 'City lot maintenance letters have deadlines attached. Machine clearing resolves them in a day.',
      },
      {
        title: 'Fence and boundary work',
        body: 'New fence needs a clear line, and so does finding the pins your surveyor set.',
      },
      {
        title: 'Fire and pest reduction',
        body: 'Brush against a structure is fuel, and it is where snakes, ticks and rodents live.',
      },
      {
        title: 'Access and sight lines',
        body: 'Opening a driveway, a lane to the back of a property, or the view a commercial tenant is paying for.',
      },
    ],
    process: [
      {
        title: 'Walk it with you',
        body: 'We look at what is growing, how thick it is, what is buried and what has to stay. Fifteen minutes on site beats an hour on the phone.',
      },
      {
        title: 'Pick the method',
        body: 'Mulch, cut, or grub — based on what the land is for afterward, not on what is easiest to sell.',
      },
      {
        title: 'Flag what stays',
        body: 'Well heads, septic fields and lines, buried electric, sprinkler lines, property pins and any trees you want kept.',
      },
      {
        title: 'Clear the perimeter',
        body: 'Boundary and access first, so you can see the shape of the parcel and we have room to work.',
      },
      {
        title: 'Work the interior',
        body: 'Systematic passes across the tract so coverage is even and nothing gets skipped in the thick spots.',
      },
      {
        title: 'Handle the debris',
        body: 'Mulched flat, piled where you want it, or loaded and hauled off — decided in the estimate, not on the day.',
      },
      {
        title: 'Clean the edges',
        body: 'Hand finishing around fence, structures, meters and anything a machine should not touch.',
      },
      {
        title: 'Final walk',
        body: 'We go over it with you before we load out, and we are straight about what will sprout back and when.',
      },
    ],
    costDrivers: [
      {
        title: 'Density and stem size',
        body: 'How many machine hours per acre. Weeds are minutes; four-inch saplings are hours. The largest thing on the tract sets the machine.',
      },
      {
        title: 'Debris handling',
        body: 'Mulching in place is cheapest. Piling is more. Hauling off is the most, because trucks and disposal are real costs.',
      },
      {
        title: 'Grub or don’t grub',
        body: 'Removing root systems roughly doubles the work and roughly ends the regrowth.',
      },
      {
        title: 'Terrain, obstacles, access',
        body: 'Slope, wet spots, old fence wire, trash and gate width all slow production and affect mobilization from Mayflower.',
      },
    ],
    costNote: 'We do not print a range here; the number comes in writing after the site visit.',
    timeline: [
      {
        title: 'Small lot',
        body: 'A quarter to a half acre of light growth is commonly a single day.',
      },
      {
        title: 'Fence line',
        body: 'Several hundred feet in a day, depending on what is grown into the wire.',
      },
      {
        title: 'Heavy thicket',
        body: 'Half a day to a full day per quarter acre where growth is dense and tangled.',
      },
      {
        title: 'Season',
        body: 'Winter and early spring are ideal — no leaves, no snakes, firmer ground, better visibility.',
      },
    ],
    readyList: [
      'Address or dropped pin, and roughly how much area',
      'What is growing and the biggest stems you have seen',
      'What the land is for after it is cleared',
      'Whether debris can stay on site or has to be hauled',
      'Well, septic, buried electric, sprinkler lines and property pins',
      'Anything you want left standing',
      'Gate width and how equipment gets in',
      'Any deadline you are working against, code letter or closing date',
    ],
    faqs: [
      {
        q: 'What counts as brush clearing?',
        a: 'Anything below timber: briar, privet, honeysuckle, cedar scrub, volunteer saplings, tall weeds and the twenty years of growth that swallowed a fence line. It stops where trees start needing to be felled and hauled — that is land clearing, and it prices differently.',
      },
      {
        q: 'Will the brush grow back?',
        a: 'If we cut or mulch it, yes — the roots are still alive and most of what grows in Arkansas sprouts hard. If we grub it out with an excavator, the root ball is gone and it does not come back. Grubbing costs more up front and less over ten years.',
      },
      {
        q: 'What happens to the debris?',
        a: 'Three options. Mulch it in place, which is cheapest and leaves a chip layer. Pile it on site somewhere out of the way, which you may want if you burn. Or haul it off, which is the cleanest result and the most expensive because it is trucks and disposal.',
      },
      {
        q: 'Do I need a permit to clear brush?',
        a: 'Usually not on private land for maintenance clearing. It changes if you are inside city limits with a tree ordinance, disturbing an acre or more of soil (stormwater permit), or working near a creek or wetland. Burning always needs a permit and is subject to county burn bans.',
      },
    ],
    relatedSlugs: ['forestry-mulching', 'land-clearing', 'site-preparation'],
  },
  {
    slug: 'dirt-work',
    title: 'Dirt Work',
    heroTitle: 'Dirt work, Central Arkansas',
    lead:
      'Dirt work is moving earth to where it needs to be and compacting it so it stays. Growfully hauls, places and shapes fill across Central Arkansas — building pads, access roads, parking areas and balanced cut and fill, with density tested where the spec calls for it.',
    quoteCtaLabel: 'Get a dirt work quote',
    image: INTERIOR_IMAGES.serviceDetail['dirt-work'],
    introTitle: 'What dirt work is',
    intro: [
      'Dirt work is the volume side of earthmoving. Excavation takes material out, grading sets the surface, and dirt work is what happens in between and after — hauling, placing, spreading, compacting and shaping the material into something that will carry a load.',
      'The unit of the trade is the cubic yard. Twenty-seven cubic feet. Everything from the estimate to the truck count to the compaction schedule is denominated in it.',
      'What separates dirt work from dirt moving is what happens after the material lands. Fill placed in lifts, at the right moisture, rolled to density, is structural. The same dirt dumped in a pile and pushed flat is a settlement claim waiting on a slab pour. Central Arkansas clay makes moisture the whole game.',
    ],
    useCases: [
      {
        title: 'Building pads',
        body: 'Engineered fill placed and compacted to the elevation and density a foundation design requires.',
      },
      {
        title: 'Fill dirt delivery and placement',
        body: 'Sourcing select fill, topsoil or base rock and getting it spread and compacted, not just dumped.',
      },
      {
        title: 'Spoil haul-off',
        body: 'Surplus material from an excavation loaded and taken to a permitted location.',
      },
      {
        title: 'Access roads and driveways',
        body: 'Subgrade, crown, base rock and drainage on a road that has to survive a loaded truck in February.',
      },
      {
        title: 'Parking, yards and laydown',
        body: 'Compacted subgrade and stone base for commercial parking, truck yards and equipment storage.',
      },
      {
        title: 'Backfill',
        body: 'Around foundations, retaining walls, tanks and utility trenches, in lifts, compacted over the pipe zone.',
      },
    ],
    process: [
      {
        title: 'Quantities',
        body: 'We take volume off the plan or measure the field, then convert to cubic yards and truckloads with shrink and swell factored in.',
      },
      {
        title: 'Material selection',
        body: 'Select fill, clay-gravel, sand or topsoil chosen for what the layer has to do — structural fill and finish material are not interchangeable.',
      },
      {
        title: 'Strip the organics',
        body: 'Topsoil, roots and vegetation come off before any fill goes down. Fill placed over organics settles, every time.',
      },
      {
        title: 'Prepare the subgrade',
        body: 'Proof roll the existing ground, undercut soft spots, and scarify so the new fill bonds instead of sitting on a slick plane.',
      },
      {
        title: 'Place in lifts',
        body: '6 to 12 inch lifts sized to the roller, moisture-conditioned up or down before compaction rather than after.',
      },
      {
        title: 'Compact and test',
        body: 'Sheepsfoot on cohesive material, smooth drum on granular, rolled to the density the spec calls for and held for testing.',
      },
      {
        title: 'Shape and drain',
        body: 'Final surface shaped to shed water — slope, crown and swales — so the pad you just built does not turn into a pond.',
      },
      {
        title: 'Clean up and haul out',
        body: 'Surplus removed, access route swept, tracking controls maintained so nothing follows the trucks onto the public road.',
      },
    ],
    costDrivers: [
      {
        title: 'Volume and haul distance',
        body: 'Cubic yards is the base unit. Trucking is usually the largest component — every mile between the pit and your site is on the invoice.',
      },
      {
        title: 'Material type',
        body: 'Select fill, clay-gravel, sand, topsoil and base rock all price differently and behave differently.',
      },
      {
        title: 'Compaction requirements',
        body: "A spec'd density with testing is more roller passes, more moisture control and more time than 'push it flat'.",
      },
      {
        title: 'Access and moisture',
        body: 'Whether a loaded tandem can back to the placement point, and whether wet clay needs drying or dry material needs water.',
      },
      {
        title: 'Balance',
        body: 'A site that balances cut against fill avoids buying dirt and avoids paying to get rid of it.',
      },
    ],
    costNote: 'We do not print a range here; the number comes in writing after the site visit.',
    timeline: [
      {
        title: 'Small fill delivery',
        body: 'A handful of loads spread and compacted is commonly a single day.',
      },
      {
        title: 'Building pad',
        body: 'Several days to two weeks depending on cubic yards, lift count and testing holds.',
      },
      {
        title: 'Access road',
        body: 'Roughly a day per few hundred feet, more where drainage structures are involved.',
      },
      {
        title: 'Weather',
        body: 'Compaction stops when the clay is saturated. Plan float into any spring schedule.',
      },
    ],
    readyList: [
      'Rough dimensions: length, width and target depth',
      'What the area will be used for — pad, drive, parking, yard',
      'Grading plan or geotech report if you have one',
      'Required compaction spec, if the plan states one',
      'Address or dropped pin and the county',
      'Whether spoil can stay on site or must be hauled',
      'Access: gate width, turning room, weight-limited bridges, overhead lines',
      'Your target start date and any pour or delivery dates already set',
    ],
    faqs: [
      {
        q: 'What is dirt work?',
        a: 'Dirt work is the moving, placing and shaping of earth — hauling fill in, hauling spoil out, building pads and access roads, backfilling, and balancing cut and fill across a site. It overlaps with excavation and grading, and on most jobs the same crew and the same machines do all three.',
      },
      {
        q: 'How many cubic yards are in a truckload?',
        a: 'A tandem dump truck typically hauls about 12 to 16 cubic yards depending on the material and legal weight. Use 14 yards as a planning figure and confirm with the hauler.',
      },
      {
        q: 'How do I calculate how much dirt I need?',
        a: 'Multiply length by width by depth, all in feet, then divide by 27 to get cubic yards. A 100 by 60 pad at 6 inches deep is about 111 cubic yards. Then add roughly 20 to 30 percent because fill compacts down when it is placed and rolled.',
      },
      {
        q: 'Why does fill dirt have to be compacted in lifts?',
        a: 'Dumping a four-foot pile and rolling the top only compacts the top. Fill goes in 6 to 12 inch lifts, moisture-conditioned, with a roller over each one, so density is uniform through the depth. Skipping it produces settlement, and settlement shows up after the slab is poured.',
      },
    ],
    relatedSlugs: ['site-grading', 'excavation-services', 'drainage-erosion-control'],
  },
  {
    slug: 'drainage-erosion-control',
    title: 'Drainage & Erosion Control',
    heroTitle: 'Site drainage & erosion control',
    lead:
      'Construction site drainage and erosion control across Central Arkansas. Positive grade, swales and ditching, detention, culverts and drainage structures, plus the SWPPP measures that keep an active site in compliance and keep sediment out of the receiving water.',
    quoteCtaLabel: 'Get a drainage quote',
    image: INTERIOR_IMAGES.serviceDetail['drainage-erosion-control'],
    introTitle: 'What this scope covers',
    intro: [
      'This is site civil work. Water gets a designed path off the pad, across the site, into a structure or basin, and out at a stabilized point — and the soil stays where the grading plan put it while the job is open.',
      'Every piece of it is tied to a plan sheet and an inspection. Inverts and slopes come off the drawings. Erosion measures come off the SWPPP. Both get looked at by somebody with authority to shut a site down.',
      'To be explicit about what this is not: it is not residential yard drainage, French drains around a house, downspout tie-ins, sump discharge or anything a landscaper sells. Different trade, different customer. Central Arkansas makes it a real scope — tight clay in Faulkner County sheds almost everything as runoff, river-bottom silt below Mayflower moves as soon as it is exposed, and a spring thunderstorm can drop several inches on an open pad overnight.',
    ],
    useCases: [
      {
        title: 'Any site disturbing an acre or more',
        body: 'Stormwater permit coverage and a SWPPP are required, and the measures have to be in the ground before dirt moves.',
      },
      {
        title: 'New commercial pads and parking',
        body: 'Positive drainage across pavement and pad is a plan requirement and a warranty issue if it is missed.',
      },
      {
        title: 'Detention required by the city or county',
        body: 'Development approvals across Central Arkansas commonly require on-site detention sized by the civil engineer.',
      },
      {
        title: 'Roads and access crossings',
        body: 'Anywhere a drive or road crosses a drainage way, a culvert sized to the flow keeps the road passable.',
      },
      {
        title: 'Sites failing inspection',
        body: 'Notices of violation for sediment leaving the site, damaged silt fence or tracking onto public roads.',
      },
      {
        title: 'Water standing on subgrade',
        body: 'A pad that holds water will not pass proof roll and will not hold density. Drainage is the fix, not more rock.',
      },
    ],
    process: [
      {
        title: 'Read the plan and the SWPPP',
        body: 'Grading, storm and erosion control sheets together, so pipe inverts, basin volumes and control locations are reconciled before mobilization.',
      },
      {
        title: 'Locates and field verification',
        body: 'Arkansas One Call, plus a private locate on developed parcels, then we confirm existing inverts and outfalls actually match the drawings.',
      },
      {
        title: 'Perimeter controls first',
        body: 'Silt fence, construction entrance and diversion in place before disturbance, because that is the sequence the permit and the inspector require.',
      },
      {
        title: 'Rough grade to drain',
        body: 'The site is shaped to shed water from day one, so a storm mid-project does not undo a week of earthwork.',
      },
      {
        title: 'Pipe and structures',
        body: 'Trench, bed, lay to grade with a laser or GPS, set structures to rim elevation, backfill and compact over the pipe zone in lifts.',
      },
      {
        title: 'Basins and swales',
        body: 'Excavated and shaped to plan volume and slope, outlet structures set, then stabilized before they are put in service.',
      },
      {
        title: 'Stabilize and maintain',
        body: 'Blanket, seed, riprap and inlet protection, with inspection-cycle maintenance for as long as the site is open.',
      },
      {
        title: 'Closeout',
        body: 'Final grade verified, permanent stabilization established, temporary measures removed, and the documentation handed over for the notice of termination.',
      },
    ],
    costDrivers: [
      {
        title: 'Linear feet of pipe and ditch',
        body: 'The base quantity, priced by diameter, material and depth.',
      },
      {
        title: 'Structure count and basin volume',
        body: 'Every catch basin, junction box and headwall is a fixed cost. Detention prices by cubic yards excavated and by what happens to the spoil.',
      },
      {
        title: 'Depth, groundwater and rock',
        body: 'Deep storm runs mean shoring and dewatering. Shale in a trench line changes the machine and the schedule.',
      },
      {
        title: 'Erosion control duration',
        body: 'Measures are installed once but maintained for the life of the job — a long schedule is a real cost.',
      },
    ],
    costNote: 'We do not print a range here; the number comes in writing after the site visit.',
    timeline: [
      {
        title: 'Perimeter controls',
        body: 'Usually one to two days, and they go in before any other disturbance.',
      },
      {
        title: 'Storm pipe and structures',
        body: 'Production varies with depth and bedding; roughly a structure or two a day at typical depths.',
      },
      {
        title: 'Detention basin',
        body: 'Sized by cubic yards, commonly several days to a couple of weeks.',
      },
      {
        title: 'Maintenance',
        body: "Inspection-cycle visits after every qualifying rain and on the permit's schedule for as long as the site is open.",
      },
    ],
    readyList: [
      'Grading, storm and erosion control plan sheets',
      'SWPPP and who holds the stormwater permit',
      'Storm structure and pipe schedule, with inverts',
      'Detention volume required by the city or county',
      'Geotechnical report and any groundwater information',
      'Existing utilities, outfall locations and downstream tie-in point',
      'Site access, traffic control needs and working hours',
      'Your schedule: disturbance start, paving date and target stabilization',
    ],
    faqs: [
      {
        q: 'What drainage work do you do on a construction site?',
        a: 'Grading for positive drainage, swales and ditching, detention and retention basins, culvert and drainage structure installation, outfall protection, and the erosion control measures a SWPPP requires while the site is open. It is site civil work tied to a plan and an inspection, not residential yard drainage.',
      },
      {
        q: 'Do you do yard drainage or French drains around a house?',
        a: 'No. That is a different trade with different equipment and a different customer. We work on commercial and development sites — pads, parking, roads, basins and active construction.',
      },
      {
        q: 'When does a site need a stormwater permit and a SWPPP?',
        a: 'In Arkansas, construction disturbing one acre or more — or less than an acre if it is part of a larger common plan of development — needs coverage under the ADEQ construction general permit, with a SWPPP prepared and implemented before disturbance begins.',
      },
      {
        q: 'Who is responsible if the site gets an inspection violation?',
        a: 'The permittee is, which on most jobs is the owner or the general contractor. What we control is that the measures shown on the SWPPP are installed correctly, maintained, and documented. We flag it when we see something on the plan that will not hold in the field rather than installing it and waiting for the notice.',
      },
    ],
    relatedSlugs: ['site-grading', 'dirt-work', 'site-preparation'],
  },
]

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug)
}

export function serviceSlugFromHref(href: string): string {
  return href.replace(/^\/services\//, '')
}
