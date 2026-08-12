# Growfully — Ground Truth Works Homepage

Homepage redesign for **Growfully, LLC** (site work · land clearing · grading) serving Central Arkansas from Mayflower.

Built from `resources/prompt-build.txt` using **only real content** from the live site.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (subtle scroll / 3D card effects)
- React Router

## Design system

- **Accent / CTA:** `#c2ff36`
- **Header / ink:** `#000000`
- **Muted text:** `#5a5a57`
- **Paper:** `#f2f2f0`
- **Fonts:** Anton (hero), Barlow Condensed (headings), Roboto (body)

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Homepage sections (order)

1. Sticky header  
2. Hero (parallax)  
3. Trust bar  
4. Services + “View All Services”  
5. Process (Clear → Base)  
6. Industries + “View All Industries”  
7. Service areas + map + “See All Service Areas”  
8. Projects photo grid (ready for real photos — no invented jobs)  
9. Quote CTA form  
10. Footer  

Interior pages use the same design system as the homepage. Body copy is migrated from the previous live site (`groundtruth-works.lovable.app`) — services (with nav dropdowns), industries, service areas, projects, about, insights, reviews, contact, quote, privacy, and terms. Header dropdowns mirror Lovable for Services, Industries, and Service Areas.
