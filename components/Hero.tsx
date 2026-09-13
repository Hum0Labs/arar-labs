import { hero, site } from '@/content/site'

export function Hero() {
  return (
    <section className="enter grid gap-10 border-b border-rule py-16 lg:grid-cols-12 lg:py-24">
      <h1 className="col-span-full text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:col-span-8 lg:text-[5.5rem]">
        {hero.headline}
      </h1>

      <div className="col-span-full grid content-end gap-5 lg:col-span-4">
        <p className="text-xl leading-snug">{hero.standfirst}</p>
        <p className="text-sm text-ink-soft">
          {hero.backing}{' '}
          <a
            href={site.parentUrl}
            className="border-b border-ink-soft transition-colors hover:border-oxide hover:text-oxide"
          >
            arar.com.co
          </a>
        </p>
      </div>
    </section>
  )
}
