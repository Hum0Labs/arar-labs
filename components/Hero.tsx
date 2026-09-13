import { hero, site } from '@/content/site'

export function Hero() {
  return (
    <header className="relative">
      <div className="flex items-baseline justify-between gap-8 pb-28 pt-7 sm:pt-10">
        <span className="font-display text-lg">{site.name}</span>
        <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-ink-soft">
          {site.city}
        </span>
      </div>

      <div className="grid gap-8 pb-20 sm:pb-28 lg:pb-36">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-ink-soft">{hero.eyebrow}</p>

        <h1 className="max-w-[18ch] text-balance font-display text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.75rem]">
          {hero.headline}
        </h1>

        <div className="measure-rule" aria-hidden="true" />

        <p className="max-w-[46ch] text-ink-soft">{hero.standfirst}</p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
          <a
            href={hero.primary.href}
            className="border-b border-ink pb-0.5 transition-colors hover:border-oxide hover:text-oxide"
          >
            {hero.primary.label}
          </a>
          <a
            href={hero.secondary.href}
            className="border-b border-rule-strong pb-0.5 text-ink-soft transition-colors hover:border-oxide hover:text-oxide"
          >
            {hero.secondary.label}
          </a>
        </div>
      </div>
    </header>
  )
}
