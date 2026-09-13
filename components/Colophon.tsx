import { site } from '@/content/site'

export function Colophon() {
  return (
    <footer className="mt-24 flex flex-wrap justify-between gap-6 border-t border-rule pt-6 text-xs tracking-wide text-ink-soft sm:mt-32">
      <span>
        {site.name} · {site.city}, Colombia
      </span>
      <span>Parte de Arar</span>
    </footer>
  )
}
