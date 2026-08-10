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

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/35 to-ink/45" />
      <div className="noise-fade pointer-events-none absolute inset-0 -z-10" />

      {/*
        Height: full viewport minus sticky header.
        Mobile also leaves room for the bottom CTA bar (~4.5rem + safe area).
      */}
      <div className="hero-shell container-site relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-center py-10 sm:min-h-[calc(100svh-4.75rem)] sm:py-12 lg:py-14 max-sm:min-h-[calc(100svh-4.25rem-5.25rem)] max-sm:pb-8">
        <motion.div style={reduced ? undefined : { y: fgY }} className="flex w-full min-w-0 flex-col">
          <div className="max-w-3xl min-w-0">
            <div className="label mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-accent backdrop-blur-sm sm:mb-5 sm:text-xs">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">Mayflower · Central Arkansas</span>
            </div>

            <h1 id="hero-heading" className="t-hero max-w-[16ch]">
              WE CLEAR IT.
              <br />
              WE GRADE IT.
              <br />
              <span className="text-accent">YOU BUILD ON IT.</span>
            </h1>

            <p className="t-lead mt-4 max-w-xl text-white/90 sm:mt-6">
              Land clearing, site grading and excavation across Central Arkansas.
              Owner-run site work since 2002 — free on-site estimates, written numbers.
            </p>

            <div className="btn-row mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/get-a-quote" className="btn-primary">
                GET A QUOTE
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <a href={PHONE_HREF} className="btn-ghost-light">
                CALL {PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-5 text-sm text-white/55 sm:mt-8">{LOCATION_LINE}</p>
          </div>

          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:gap-4 sm:pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <dl className="grid w-full max-w-lg grid-cols-3 gap-2 sm:gap-3">
              {[
                { k: 'Since', v: '2002' },
                { k: 'Radius', v: '60–75 mi' },
                { k: 'BBB', v: 'A+' },
              ].map((s) => (
                <div
                  key={s.k}
                  className="flex min-h-[4rem] min-w-0 flex-col justify-center rounded-lg border border-white/10 bg-black/35 px-2.5 py-2.5 backdrop-blur-sm sm:min-h-[4.5rem] sm:px-3 sm:py-3"
                >
                  <dt className="label text-[0.6rem] text-white/45 sm:text-[0.65rem]">{s.k}</dt>
                  <dd className="font-display mt-1 truncate text-lg leading-none text-white sm:text-2xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex w-full max-w-md items-center rounded-xl border border-white/15 bg-ink/65 p-3.5 backdrop-blur-md sm:p-5 lg:ml-auto lg:min-h-[4.5rem] lg:w-auto lg:max-w-sm lg:shrink-0">
              <div className="min-w-0">
                <p className="label text-xs text-accent sm:text-sm">Ready when the dirt is</p>
                <p className="mt-1 font-body text-sm leading-snug text-white/80">
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
