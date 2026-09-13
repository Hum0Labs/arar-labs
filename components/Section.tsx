import type { ReactNode } from 'react'

/**
 * Cada sección es una banda: etiqueta a la izquierda, contenido en una columna
 * de medida legible, y aire a la derecha. La estructura no cambia; el contenido sí.
 */
export function Section({
  id,
  label,
  children,
  divider = true,
}: {
  id?: string
  label: string
  children: ReactNode
  divider?: boolean
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 pt-20 sm:pt-28 lg:pt-36 ${divider ? 'border-t border-rule' : ''}`}
    >
      <div className="grid gap-6 lg:grid-cols-[9rem_minmax(0,40rem)] lg:gap-12">
        <h2 className="pt-1 text-[0.6875rem] uppercase tracking-[0.2em] text-ink-soft">{label}</h2>
        <div className="grid gap-9">{children}</div>
      </div>
    </section>
  )
}
