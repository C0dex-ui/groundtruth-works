import { Link } from 'react-router-dom'
import {
  COMPANY,
  EMAIL,
  EMAIL_HREF,
  IMAGES,
  NAV,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICES,
  TAGLINE,
} from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="h-1 w-full bg-accent" aria-hidden />
      <div className="container-site section-pad !py-12 sm:!py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-steel ring-1 ring-white/15">
                <img src={IMAGES.logo} alt="" className="h-9 w-9 object-contain" />
              </span>
              <span>
                <span className="font-condensed block text-lg leading-none">Growfully</span>
                <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.12em] text-white/50">
                  {TAGLINE}
                </span>
              </span>
            </Link>
            <a
              href={PHONE_HREF}
              className="mt-6 block text-xl font-semibold text-accent hover:text-accent-hover"
            >
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className="mt-1 block text-sm text-white/65 hover:text-white">
              {EMAIL}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              Mayflower, AR · Serving Central Arkansas
              <br />
              Mon–Sat 7:00 AM – 5:00 PM · Sunday closed
            </p>
            <Link to="/get-a-quote" className="btn-primary mt-6">
              GET A QUOTE
            </Link>
          </div>

          <div className="lg:col-span-2">
            <p className="font-condensed text-sm uppercase tracking-[0.16em] text-white/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="nav-link-dark text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-6">
            <p className="font-condensed text-sm uppercase tracking-[0.16em] text-white/40">
              Services
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="nav-link-dark text-sm">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY} · Site work in Central Arkansas since 2002
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <a
              href="https://www.facebook.com/growfullyllc/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
