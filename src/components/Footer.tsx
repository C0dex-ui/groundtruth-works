import { Link } from 'react-router-dom'
import {
  COMPANY,
  COMPANY_LINKS,
  EMAIL,
  EMAIL_HREF,
  IMAGES,
  INDUSTRIES,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_CITIES,
  SERVICES,
  TAGLINE,
} from '../data/content'
import { HOURS_LINE } from '../data/company-pages'

export function Footer() {
  const areaLinks = SERVICE_CITIES.slice(0, 8)

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="h-1 w-full bg-accent" aria-hidden />
      <div className="container-site py-8 sm:py-9 lg:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-steel ring-1 ring-white/15">
                <img src={IMAGES.logo} alt="" className="h-9 w-9 object-contain" />
              </span>
              <span>
                <span className="font-display block text-[1.45rem] uppercase leading-none">
                  Growfully
                </span>
                <span className="label mt-1 block text-[0.66rem] tracking-[0.18em] text-white/50">
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
              {HOURS_LINE}
            </p>
            <Link to="/get-a-quote" className="btn-primary mt-6">
              GET A QUOTE
            </Link>
          </div>

          <div className="lg:col-span-2">
            <p className="label text-sm text-white/40">Services</p>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="nav-link-dark text-sm">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="label text-sm text-white/40">Industries</p>
            <ul className="mt-4 space-y-2">
              {INDUSTRIES.map((i) => (
                <li key={i.href}>
                  <Link to={i.href} className="nav-link-dark text-sm">
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="label mt-8 text-sm text-white/40">Company</p>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="nav-link-dark text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="label text-sm text-white/40">Service areas</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              <li>
                <Link to="/service-areas" className="nav-link-dark text-sm">
                  All Central Arkansas areas
                </Link>
              </li>
              {areaLinks.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/service-areas/${city.slug}`}
                    className="nav-link-dark text-sm"
                  >
                    {city.name}, AR
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
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
            <Link to="/insights" className="hover:text-white">
              Insights
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
