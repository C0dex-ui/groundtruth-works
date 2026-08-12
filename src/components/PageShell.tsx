import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { PHONE_HREF } from '../data/content'

type PageShellProps = {
  children: ReactNode
  /** Hide sticky mobile conversion bar (e.g. quote page already has CTAs). */
  hideMobileBar?: boolean
}

/**
 * Shared chrome for interior pages — matches homepage header/footer + mobile CTAs.
 */
export function PageShell({ children, hideMobileBar = false }: PageShellProps) {
  return (
    <div className="min-h-svh min-w-0 overflow-x-clip bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-w-0">
        {children}
      </main>
      <Footer />

      {!hideMobileBar && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 pt-3 backdrop-blur-md sm:hidden"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
          >
            <div className="mx-auto flex max-w-lg gap-2">
              <a href={PHONE_HREF} className="mobile-cta-call">
                Call
              </a>
              <Link to="/get-a-quote" className="mobile-cta-quote">
                GET A QUOTE
              </Link>
            </div>
          </div>
          <div
            className="sm:hidden"
            style={{ height: 'calc(4.75rem + env(safe-area-inset-bottom))' }}
            aria-hidden
          />
        </>
      )}
    </div>
  )
}
