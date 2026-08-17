import { Link } from 'react-router-dom'
import { Phone, ShieldCheck } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/content'
import { HOURS_LINE } from '../data/company-pages'

type InteriorCtaProps = {
  id?: string
  eyebrow?: string
  title?: string
  lead?: string
}

/** Dark steel-grid conversion band — same language as homepage QuoteCTA. */
export function InteriorCta({
  id = 'quote',
  eyebrow = 'Free estimate',
  title = 'Get a Real Number',
  lead = 'Tell us what you need cleared or graded and David gets back to you with a real number.',
}: InteriorCtaProps) {
  return (
    <section
      id={id}
      className="section-pad relative overflow-hidden steel-grid text-white"
      aria-labelledby={`${id}-heading`}
    >
      <div className="noise-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-site relative">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8">
          <div>
            <p className="eyebrow !text-accent">{eyebrow}</p>
            <div className="accent-bar mt-2.5" />
            <h2 id={`${id}-heading`} className="heading-xl mt-3">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
              {lead}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Owner quotes every job',
                'BBB A+ accredited',
                'Licensed & insured',
                'Written on-site estimates',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5">
            <Link to="/get-a-quote" className="btn-primary w-full !min-h-12 !text-base">
              GET A QUOTE
            </Link>
            <a href={PHONE_HREF} className="btn-ghost-light w-full !min-h-12 !text-base">
              <Phone className="h-5 w-5" aria-hidden />
              Call {PHONE_DISPLAY}
            </a>
            <p className="text-center text-sm text-white/50">
              {HOURS_LINE}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
