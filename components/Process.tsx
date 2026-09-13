import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { process } from '@/content/site'

/** Aquí la numeración sí dice algo: el orden es el método. */
export function Process() {
  return (
    <Section id="como-funciona" label={process.label}>
      <Reveal>
        <p className="font-display text-2xl">{process.title}</p>
      </Reveal>

      <ol className="grid gap-9">
        {process.steps.map((step, i) => (
          <li key={step.name}>
            <Reveal delay={i * 70}>
              <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                <span className="pt-1 font-display text-sm tabular-nums text-oxide">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="grid gap-2">
                  <span className="text-xs uppercase tracking-[0.08em] tabular-nums text-ink-soft">
                    {step.meta}
                  </span>
                  <h3 className="font-display text-xl">{step.name}</h3>
                  <p className="max-w-[54ch] text-ink-soft">{step.body}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
