import { site } from '@/content/site'

export function Colophon() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 border-t-2 border-ink pt-5 font-display text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
      <span>
        {site.name} · {site.city}, Colombia
      </span>
      <span className="flex flex-wrap gap-x-4 gap-y-1">
        {site.legalName ? <span>{site.legalName}</span> : null}
        {site.nit ? <span>{site.nit}</span> : null}
        <a href={site.parentUrl} className="transition-colors hover:text-oxide">
          Parte de Arar
        </a>
      </span>
    </footer>
  )
}
