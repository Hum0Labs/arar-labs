import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { services } from '@/content/site'

export function Services() {
  return (
    <Section id="servicios" label={services.label}>
      <Reveal>
        <p className="font-display text-2xl">{services.title}</p>
      </Reveal>

      <div className="grid gap-9">
        {services.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 70}>
            <article className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.08em] tabular-nums">{item.meta}</span>
              <h3 className="font-display text-xl">{item.name}</h3>
              <p className="max-w-[56ch] text-ink-soft">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
