import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  COMPANY,
  IMAGES,
  NAV,
  type NavItem,
  PHONE_DISPLAY,
  PHONE_HREF,
  TAGLINE,
} from '../data/content'

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const panelId = useId()
  const location = useLocation()
  const children = item.children ?? []
  const isWide = children.length > 4
  const isActive =
    location.pathname === item.href ||
    location.pathname.startsWith(`${item.href}/`)

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
      onFocusCapture={() => {
        cancelClose()
        setOpen(true)
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <NavLink
        to={item.href}
        className={`nav-link-dark inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[0.8rem] transition-colors hover:bg-white/10 xl:px-3 xl:text-[0.9rem] ${
          isActive || open ? 'is-active bg-white/10' : ''
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 opacity-70 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </NavLink>

      {open && (
        <div
          id={panelId}
          role="menu"
          className={`absolute left-0 top-full z-50 pt-2 ${
            isWide ? 'w-[min(36rem,calc(100vw-2rem))]' : 'w-72'
          }`}
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-soft shadow-[0_20px_50px_rgb(0_0_0/0.45)] ring-1 ring-white/5">
            <div className="border-b border-white/10 px-4 py-3">
              <Link
                to={item.href}
                className="label text-xs text-accent hover:underline"
                role="menuitem"
              >
                View all {item.label.toLowerCase()} →
              </Link>
            </div>
            <ul
              className={`p-2 ${isWide ? 'grid grid-cols-2 gap-0.5' : 'flex flex-col gap-0.5'}`}
            >
              {children.map((child) => (
                <li key={child.href}>
                  <Link
                    to={child.href}
                    role="menuitem"
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/10"
                  >
                    <span className="block font-condensed text-[0.85rem] uppercase tracking-[0.04em] text-white">
                      {child.label}
                    </span>
                    {child.description && (
                      <span className="mt-0.5 block font-body text-xs font-normal normal-case tracking-normal text-white/50">
                        {child.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileSection({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const children = item.children

  if (!children?.length) {
    return (
      <NavLink
        to={item.href}
        onClick={onNavigate}
        className={({ isActive }) =>
          `nav-link-dark rounded-md px-3 py-3.5 text-base hover:bg-white/10 ${
            isActive ? 'is-active bg-white/10' : ''
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="rounded-md">
      <div className="flex items-stretch">
        <NavLink
          to={item.href}
          onClick={onNavigate}
          className={({ isActive }) =>
            `nav-link-dark flex-1 rounded-md px-3 py-3.5 text-base hover:bg-white/10 ${
              isActive ? 'is-active bg-white/10' : ''
            }`
          }
        >
          {item.label}
        </NavLink>
        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md text-white/80 hover:bg-white/10"
          aria-expanded={expanded}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.label} menu`}
          onClick={() => setExpanded((v) => !v)}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform ${expanded ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
      </div>
      {expanded && (
        <ul className="mb-2 ml-3 border-l border-white/15 pl-3">
          {children.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                onClick={onNavigate}
                className="block rounded-md px-3 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:text-accent"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

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

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.children?.length ? (
              <DesktopDropdown key={item.href} item={item} />
            ) : (
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
            ),
          )}
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
              <MobileSection
                key={item.href}
                item={item}
                onNavigate={() => setOpen(false)}
              />
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
