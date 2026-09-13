import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { proof } from '@/content/site'

export function Proof() {
  return (
    <Section id="prueba" label={proof.label}>
      <Reveal>
        <p className="font-display text-2xl">{proof.title}</p>
      </Reveal>

      {[proof.work, proof.parent].map((item, i) => (
        <Reveal key={item.name} delay={i * 70}>
          <article className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.08em]">{item.meta}</span>
            <h3 className="font-display text-xl">{item.name}</h3>
            <p className="max-w-[56ch] text-ink-soft">{item.body}</p>
          </article>
        </Reveal>
      ))}

      <Reveal>
        <div className="grid gap-4 border-t border-rule pt-8">
          <h3 className="text-[0.6875rem] uppercase tracking-[0.2em] text-ink-soft">
            {proof.refusalsTitle}
          </h3>
          <ul className="grid gap-3">
            {proof.refusals.map((line) => (
              <li key={line} className="max-w-[44ch] font-display text-lg">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
