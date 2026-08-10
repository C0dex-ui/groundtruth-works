import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  HERO_VIDEO,
  IMAGES,
  LOCATION_LINE,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../data/content'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink text-white"
      aria-labelledby="hero-heading"
    >
      {/* Video stays full-bleed; only the media layer is clipped */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={reduced ? undefined : { y: bgY }}
        aria-hidden
      >
        {reduced ? (
          <img
            src={IMAGES.hero}
            alt=""
            className="h-full w-full scale-105 object-cover"
            fetchPriority="high"
          />
        ) : (
          <video
            className="h-full w-full scale-105 object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={IMAGES.hero}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
      <div className="noise-fade pointer-events-none absolute inset-0 -z-10" />

      {/* Content fits under sticky header; bottom bar uses full container width */}
      <div className="container-site relative flex min-h-[calc(100svh-4.75rem)] flex-col justify-center px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <motion.div style={reduced ? undefined : { y: fgY }} className="flex w-full flex-col">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent backdrop-blur-sm sm:mb-5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Mayflower · Central Arkansas
            </div>

            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.25rem,7.5vw,5.25rem)] leading-[0.94] uppercase"
            >
              WE CLEAR IT.
              <br />
              WE GRADE IT.
              <br />
              <span className="text-accent">YOU BUILD ON IT.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
              Land clearing, site grading and excavation across Central Arkansas.
              Owner-run site work since 2002 — free on-site estimates, written numbers.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/get-a-quote" className="btn-primary">
                GET A QUOTE
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={PHONE_HREF} className="btn-ghost-light">
                CALL {PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-6 text-sm text-white/55 sm:mt-8">{LOCATION_LINE}</p>
          </div>

          {/* Full-width bar: stats left, callout right — vertically middle-aligned */}
          <div className="mt-8 flex w-full flex-col gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <dl className="grid w-full max-w-lg grid-cols-3 gap-3">
              {[
                { k: 'Since', v: '2002' },
                { k: 'Radius', v: '60–75 mi' },
                { k: 'BBB', v: 'A+' },
              ].map((s) => (
                <div
                  key={s.k}
                  className="flex min-h-[4.5rem] flex-col justify-center rounded-lg border border-white/10 bg-black/35 px-3 py-3 backdrop-blur-sm"
                >
                  <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-white/45">
                    {s.k}
                  </dt>
                  <dd className="font-condensed mt-1 text-xl leading-none text-white sm:text-2xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex w-full max-w-md items-center rounded-xl border border-white/15 bg-ink/65 p-4 backdrop-blur-md sm:p-5 lg:ml-auto lg:min-h-[4.5rem] lg:w-auto lg:max-w-sm lg:shrink-0">
              <div>
                <p className="font-condensed text-sm uppercase tracking-[0.16em] text-accent">
                  Ready when the dirt is
                </p>
                <p className="mt-1 text-sm leading-snug text-white/80">
                  Clear → strip → grade → compact → base. One crew. One scope.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
