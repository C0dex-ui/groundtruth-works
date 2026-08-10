import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  COMPANY,
  IMAGES,
  NAV,
  PHONE_DISPLAY,
  PHONE_HREF,
  TAGLINE,
} from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-ink text-white transition-shadow ${
        scrolled ? 'shadow-[0_8px_30px_rgb(0_0_0/0.45)]' : ''
      }`}
    >
      <div className="h-0.5 w-full bg-accent" aria-hidden />
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-2 sm:h-[4.75rem] sm:gap-4">
        <Link
          to="/"
          className="flex min-w-0 max-w-[55%] items-center gap-2 sm:max-w-none sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-steel ring-1 ring-white/15 sm:h-11 sm:w-11">
            <img
              src={IMAGES.logo}
              alt={`${COMPANY} logo`}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
          </span>
          <span className="min-w-0">
            <span className="font-display block text-[1.25rem] uppercase leading-none sm:text-[1.45rem]">
              Growfully
            </span>
            <span className="label mt-1 hidden truncate text-[0.66rem] tracking-[0.18em] text-white/70 sm:block">
              {TAGLINE}
            </span>
          </span>
        </Link>

        {/* Desktop / large laptop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `nav-link-dark rounded-md px-2.5 py-2 text-[0.8rem] transition-colors hover:bg-white/10 xl:px-3 xl:text-[0.9rem] ${
                  isActive ? 'is-active bg-white/10' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="nav-link-dark hidden items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm hover:border-accent/50 hover:bg-white/10 xl:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <Link
            to="/get-a-quote"
            className="btn-primary !min-h-10 !w-auto !px-3 !py-2 !text-[0.75rem] sm:!min-h-11 sm:!px-4 sm:!text-[0.9rem]"
          >
            <span className="sm:hidden">QUOTE</span>
            <span className="hidden sm:inline">GET A QUOTE</span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-white/10 bg-ink-soft lg:hidden"
        >
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `nav-link-dark rounded-md px-3 py-3.5 text-base hover:bg-white/10 ${
                    isActive ? 'is-active bg-white/10' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={PHONE_HREF} className="mobile-cta-call mt-2 w-full">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span className="ml-2">{PHONE_DISPLAY}</span>
            </a>
            <Link
              to="/get-a-quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              GET A QUOTE
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
