import { ArrowRight, Clock } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { InteriorCta } from '../components/InteriorCta'
import { PageHero } from '../components/PageHero'
import { PageShell } from '../components/PageShell'
import { Checklist, SectionBlock } from '../components/SectionBlock'
import { INTERIOR_IMAGES } from '../data/content'
import {
  getInsightPost,
  INSIGHT_POSTS,
  INSIGHTS_INDEX,
  LAND_CLEARING_COST_ARTICLE,
} from '../data/insights'

export function InsightsIndexPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights' },
        ]}
        eyebrow="Insights"
        title={INSIGHTS_INDEX.heroTitle}
        lead={INSIGHTS_INDEX.lead}
        primaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
        image={INTERIOR_IMAGES.insights}
        imageAlt="Base stone and finished grade on a Growfully site"
      />

      <SectionBlock title="All posts" tone="white">
        <div className="grid gap-4">
          {INSIGHT_POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/insights/${post.slug}`}
              className="card-industrial group block rounded-2xl p-6 transition-shadow hover:shadow-[var(--shadow-lift)] sm:p-8"
            >
              <p className="label text-xs text-muted">
                {post.dateLabel} · {post.readMinutes} min read
              </p>
              <h2 className="heading-md mt-3 text-ink group-hover:text-ink">
                {post.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <span className="label mt-5 inline-flex items-center gap-1.5 text-sm text-ink">
                Read post
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </SectionBlock>

      <InteriorCta
        title="Rather just ask?"
        lead="Call David Culberson and describe the ground. Free on-site estimates across Central Arkansas."
      />
    </PageShell>
  )
}

export function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getInsightPost(slug) : undefined

  if (!post) {
    return <Navigate to="/insights" replace />
  }

  // Currently one long-form post; expand switch when more articles land.
  if (post.slug !== 'land-clearing-cost-central-arkansas') {
    return <Navigate to="/insights" replace />
  }

  const article = LAND_CLEARING_COST_ARTICLE

  return (
    <PageShell>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'This post' },
        ]}
        eyebrow="Insights"
        title={post.title}
        lead={
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span>
              By{' '}
              <Link to={post.authorHref} className="font-medium text-ink underline">
                {post.author}
              </Link>
            </span>
            <span aria-hidden>·</span>
            <span>Published {post.dateLabel}</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readMinutes} min read
            </span>
          </span>
        }
        primaryCta={{ label: 'GET A QUOTE', href: '/get-a-quote' }}
        image={INTERIOR_IMAGES.insightsArticle}
        imageAlt="Land clearing and site work in Central Arkansas"
      />

      <article className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {article.intro.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          <h2 className="heading-xl mt-8 text-ink">The short answer, by ground type</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{article.tableLead}</p>

          <div className="table-scroll mt-6 overflow-x-auto rounded-2xl border border-black/8">
            <table className="w-full min-w-[32rem] text-left text-sm sm:min-w-[36rem]">
              <thead className="border-b border-black/8 bg-paper">
                <tr>
                  <th className="label px-4 py-3 text-xs text-muted">Ground condition</th>
                  <th className="label px-4 py-3 text-xs text-muted">Typical range / acre</th>
                  <th className="label px-4 py-3 text-xs text-muted">What drives it</th>
                </tr>
              </thead>
              <tbody>
                {article.ranges.map((row) => (
                  <tr key={row.condition} className="border-b border-black/6 last:border-0">
                    <td className="px-4 py-3 font-medium text-ink">{row.condition}</td>
                    <td className="px-4 py-3 font-semibold text-ink">{row.range}</td>
                    <td className="px-4 py-3 text-muted">{row.drives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">{article.tableNote}</p>

          {article.factors.map((factor) => (
            <section key={factor.title} className="mt-8">
              <h2 className="heading-md text-ink">{factor.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                {factor.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              {'bullets' in factor && factor.bullets && (
                <ul className="mt-4 space-y-3">
                  {factor.bullets.map((b) => (
                    <li
                      key={b.slice(0, 40)}
                      className="flex gap-3 text-base leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {'after' in factor && factor.after && (
                <p className="mt-4 text-base font-medium leading-relaxed text-ink">
                  {factor.after}
                </p>
              )}
            </section>
          ))}

          <section className="mt-8">
            <h2 className="heading-xl text-ink">{article.comparableTitle}</h2>
            <div className="mt-6">
              <Checklist items={[...article.comparable]} />
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {article.comparableClose}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="heading-xl text-ink">{article.exampleTitle}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
              {article.example.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>

          <section className="mt-8 border-t border-black/8 pt-6">
            <h2 className="heading-md text-ink">Keep reading</h2>
            <ul className="mt-4 space-y-3">
              {article.keepReading.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex items-start gap-2 text-base font-medium text-ink hover:underline"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <InteriorCta
        title="Want this priced on your ground?"
        lead="David Culberson walks the site before quoting. Free, and it takes about an hour."
      />
    </PageShell>
  )
}
