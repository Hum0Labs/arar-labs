import { hero, site } from '@/content/site'

export function Masthead() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-4 border-b-4 border-ink py-5">
      <span className="font-display text-2xl font-extrabold uppercase tracking-[0.14em]">
        {site.name}
      </span>
      <span className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
        {hero.eyebrow}
      </span>
    </header>
  )
}
