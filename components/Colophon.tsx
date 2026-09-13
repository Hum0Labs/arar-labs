import { site } from '@/content/site'

export function Colophon() {
  return (
    <footer className="mt-24 flex flex-wrap justify-between gap-6 border-t border-rule pt-6 text-xs tracking-wide text-ink-soft sm:mt-32">
      <span>
        {site.name} · {site.city}, Colombia
      </span>
      <span className="flex flex-wrap gap-x-3 gap-y-1">
        {site.legalName ? <span>{site.legalName}</span> : null}
        {site.nit ? <span>{site.nit}</span> : null}
        <a
          href={site.parentUrl}
          className="border-b border-rule transition-colors hover:border-oxide hover:text-oxide"
        >
          Parte de Arar
        </a>
      </span>
    </footer>
  )
}
