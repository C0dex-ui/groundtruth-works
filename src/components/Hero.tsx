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
  RATINGS,
} from '../data/content'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/** Soft ease-out — same family as ScrollCard for a consistent site feel */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
}

const fadeUpSlow = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE },
  },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink text-white"
      aria-labelledby="hero-heading"
    >
      {/* Media: gentle fade-in, optional light parallax */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={reduced ? undefined : { y: bgY }}
        initial={reduced ? false : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.35, ease: EASE }}
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

      <div className="hero-shell container-site relative flex min-h-[min(78svh,42rem)] flex-col justify-center py-8 sm:min-h-[min(80svh,46rem)] sm:py-10 lg:py-12 max-sm:min-h-[min(72svh,36rem)] max-sm:pb-7">
        <motion.div
          className="flex w-full min-w-0 flex-col"
          variants={reduced ? undefined : container}
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'show'}
        >
          <div className="max-w-3xl min-w-0">
            <motion.div
              variants={reduced ? undefined : fadeUp}
              className="label mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-accent backdrop-blur-sm sm:mb-5 sm:text-xs"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">Mayflower · Central Arkansas</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={reduced ? undefined : fadeUpSlow}
              className="t-hero max-w-[16ch]"
            >
              WE CLEAR IT.
              <br />
              WE GRADE IT.
              <br />
              <span className="text-accent">YOU BUILD ON IT.</span>
            </motion.h1>

            <motion.p
              variants={reduced ? undefined : fadeUp}
              className="t-lead mt-4 max-w-xl text-white/90 sm:mt-6"
            >
              Land clearing, site grading and excavation across Central Arkansas.
              Owner-run site work since 2002 — free on-site estimates, written numbers.
            </motion.p>

            <motion.div
              variants={reduced ? undefined : fadeUp}
              className="btn-row mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link to="/get-a-quote" className="btn-primary">
                GET A QUOTE
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <a href={PHONE_HREF} className="btn-ghost-light">
                CALL {PHONE_DISPLAY}
              </a>
            </motion.div>

            <motion.p
              variants={reduced ? undefined : fadeUp}
              className="mt-5 text-sm text-white/55 sm:mt-8"
            >
              {LOCATION_LINE}
            </motion.p>
          </div>

          <motion.div
            variants={reduced ? undefined : fadeUp}
            className="mt-8 flex w-full min-w-0 flex-col gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:gap-4 sm:pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
          >
            <dl
              className="grid w-full max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3"
              aria-label="Trust signals"
            >
              {/* Shared white cards — logos larger, fill card cleanly */}
              <div className="flex min-h-[5rem] min-w-0 items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-3 shadow-sm sm:min-h-[5.5rem] sm:px-4 sm:py-3.5">
                <div className="min-w-0 text-center">
                  <dt className="label text-[0.65rem] text-ink/50 sm:text-[0.7rem]">Since</dt>
                  <dd className="font-display mt-1 text-2xl leading-none text-ink sm:text-3xl">
                    {RATINGS.sinceYear}
                  </dd>
                </div>
              </div>

              <div className="min-h-[5rem] min-w-0 sm:min-h-[5.5rem]">
                <a
                  href={RATINGS.bbb.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full min-w-0 items-center justify-center rounded-lg border border-black/10 bg-white px-2.5 py-2.5 shadow-sm transition-shadow hover:shadow-md sm:px-3 sm:py-3"
                >
                  <dt className="sr-only">BBB Accredited Business</dt>
                  <dd className="m-0 flex h-full w-full items-center justify-center">
                    <img
                      src={IMAGES.bbbLogo}
                      alt="BBB Accredited Business"
                      width={220}
                      height={106}
                      className="h-[3.25rem] w-auto max-w-full object-contain sm:h-14"
                      loading="lazy"
                      decoding="async"
                    />
                  </dd>
                </a>
              </div>

              {/* Match Lovable trust signals — no Google score printed (reviews page policy). */}
              <div className="flex min-h-[5rem] min-w-0 items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-3 shadow-sm sm:min-h-[5.5rem] sm:px-4 sm:py-3.5">
                <div className="min-w-0 text-center">
                  <dt className="label text-[0.65rem] text-ink/50 sm:text-[0.7rem]">Estimate</dt>
                  <dd className="font-display mt-1 text-2xl leading-none text-ink sm:text-3xl">
                    Free
                  </dd>
                </div>
              </div>
            </dl>

            <div className="flex w-full max-w-md items-center rounded-xl border border-white/15 bg-ink/65 p-3.5 backdrop-blur-md sm:p-5 lg:ml-auto lg:min-h-[4.5rem] lg:w-auto lg:max-w-sm lg:shrink-0">
              <div className="min-w-0">
                <p className="label text-xs text-accent sm:text-sm">Ready when the dirt is</p>
                <p className="mt-1 font-body text-sm leading-snug text-white/80">
                  Clear → strip → grade → compact → base. One crew. One scope.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
