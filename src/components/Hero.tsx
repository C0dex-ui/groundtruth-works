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

/** Official multicolor Google “G” mark (inline SVG — no external asset). */
function GoogleMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.97 6.97 0 0 1 5.5 12c0-.72.12-1.42.34-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  )
}

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

      <div className="hero-shell container-site relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-center py-10 sm:min-h-[calc(100svh-4.75rem)] sm:py-12 lg:py-14 max-sm:min-h-[calc(100svh-4.25rem-5.25rem)] max-sm:pb-8">
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
              className="grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3"
              aria-label="Trust signals"
            >
              {/* Shared shell: same height, padding, border, and dark fill on every card */}
              <div className="flex min-h-[4.25rem] min-w-0 items-center gap-2.5 rounded-lg border border-white/10 bg-black/35 px-3 py-2.5 backdrop-blur-sm sm:min-h-[4.75rem] sm:gap-3 sm:px-3.5 sm:py-3">
                <div className="min-w-0">
                  <dt className="label text-[0.6rem] text-white/45 sm:text-[0.65rem]">Since</dt>
                  <dd className="font-display mt-1 text-xl leading-none text-white sm:text-2xl">
                    {RATINGS.sinceYear}
                  </dd>
                </div>
              </div>

              <div className="min-h-[4.25rem] min-w-0 sm:min-h-[4.75rem]">
                <a
                  href={RATINGS.bbb.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full min-w-0 items-center gap-2.5 rounded-lg border border-white/10 bg-black/35 px-3 py-2.5 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-black/45 sm:gap-3 sm:px-3.5 sm:py-3"
                >
                  <span className="inline-flex h-9 w-[4.5rem] shrink-0 items-center justify-center bg-transparent sm:h-10 sm:w-20">
                    <img
                      src={IMAGES.bbbLogo}
                      alt=""
                      width={146}
                      height={71}
                      className="h-full w-full object-contain object-left"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <div className="min-w-0">
                    <dt className="sr-only">BBB rating</dt>
                    <dd className="font-display text-lg leading-none text-white sm:text-xl">
                      {RATINGS.bbb.grade}
                    </dd>
                    <p className="label mt-1 truncate text-[0.58rem] text-white/50 sm:text-[0.65rem]">
                      BBB Rating
                    </p>
                  </div>
                </a>
              </div>

              <div className="min-h-[4.25rem] min-w-0 sm:min-h-[4.75rem]">
                <a
                  href={RATINGS.google.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full min-w-0 items-center gap-2.5 rounded-lg border border-white/10 bg-black/35 px-3 py-2.5 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-black/45 sm:gap-3 sm:px-3.5 sm:py-3"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded bg-transparent sm:h-10 sm:w-10">
                    <GoogleMark className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div className="min-w-0">
                    <dt className="sr-only">Google rating</dt>
                    <dd className="font-display flex items-center gap-1 text-lg leading-none text-white sm:text-xl">
                      <span>{RATINGS.google.score}</span>
                      <span className="text-amber-400" aria-hidden>
                        ★
                      </span>
                    </dd>
                    <p className="label mt-1 truncate text-[0.58rem] text-white/50 sm:text-[0.65rem]">
                      {RATINGS.google.detail}
                    </p>
                  </div>
                </a>
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
