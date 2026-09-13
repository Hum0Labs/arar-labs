/** Cabecera de sección: número, rótulo y regla. El número marca el orden del argumento. */
export function Rubric({ n, label, inverted = false }: { n: string; label: string; inverted?: boolean }) {
  return (
    <div
      className={`mb-8 flex items-baseline gap-4 border-b-2 pb-3 ${
        inverted ? 'border-paper/30' : 'border-ink'
      }`}
    >
      <span className="font-display text-sm font-extrabold tabular-nums text-oxide">{n}</span>
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em]">{label}</h2>
    </div>
  )
}
