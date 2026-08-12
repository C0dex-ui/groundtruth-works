import { Link } from 'react-router-dom'
import { PROCESS } from '../data/content'
import { ScrollCard } from './ScrollCard'

export function Process() {
  return (
    <section className="section-pad steel-grid text-white" aria-labelledby="process-heading">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow !text-accent">Process</p>
          <div className="accent-bar mt-2.5" />
          <h2 id="process-heading" className="heading-xl mt-3">
            How a Site Gets Built
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-white/70">
            Raw ground to a pad you can build on, in five stages. We do all five, so nobody is
            waiting on another contractor to finish the dirt.
          </p>
        </div>

        <ol className="mt-6 grid list-none gap-2.5 p-0 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-5">
          {PROCESS.map((stage, i) => (
            <li key={stage.title} className="h-full">
              <ScrollCard delay={i * 60} className="h-full">
                <Link
                  to={stage.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/8"
                >
                  {/* Photos reserved for interior page heroes — process uses number cards only */}
                  <div className="flex flex-1 flex-col p-4">
                    <span className="font-display flex h-10 w-10 items-center justify-center rounded-md bg-accent text-xl text-ink">
                      {stage.step}
                    </span>
                    <h3 className="heading-md mt-3 text-white">
                      {stage.step}. {stage.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-white/65">
                      {stage.description}
                    </p>
                  </div>
                </Link>
              </ScrollCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
