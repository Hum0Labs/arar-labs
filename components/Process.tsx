import { Rubric } from '@/components/Rubric'
import { process } from '@/content/site'

/** Aquí la numeración dice algo: el orden es el método. */
export function Process() {
  return (
    <section id="como-funciona" className="scroll-mt-8 py-16 lg:py-20">
      <Rubric n="03" label={process.label} />
      <ol className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <li key={step.name} className="grid content-start gap-3 bg-paper p-6">
            <span className="font-display text-4xl font-extrabold tabular-nums text-oxide">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-xl font-bold tracking-tight">{step.name}</h3>
            <span className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              {step.meta}
            </span>
            <p className="text-[0.95rem] leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
