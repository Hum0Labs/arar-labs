import { Rubric } from '@/components/Rubric'
import { services } from '@/content/site'

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-8 py-16 lg:py-20">
      <Rubric n="02" label={services.label} />
      <div className="grid gap-10 sm:grid-cols-3">
        {services.items.map((item) => (
          <article key={item.name} className="grid content-start gap-3">
            <span className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              {item.meta}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight">{item.name}</h3>
            <p className="leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
