import { Rubric } from '@/components/Rubric'
import { proof } from '@/content/site'

export function Proof() {
  return (
    <section id="prueba" className="scroll-mt-8 py-16 lg:py-20">
      <Rubric n="04" label={proof.label} />
      <div className="grid gap-10 lg:grid-cols-12">
        {[proof.work, proof.parent].map((item) => (
          <article key={item.name} className="col-span-full grid content-start gap-3 lg:col-span-5">
            <span className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              {item.meta}
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight">{item.name}</h3>
            <p className="leading-relaxed">{item.body}</p>
          </article>
        ))}

        <div className="col-span-full lg:col-span-2">
          <h3 className="mb-3 font-display text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">
            {proof.refusalsTitle}
          </h3>
          <ul className="grid gap-2">
            {proof.refusals.map((line) => (
              <li key={line} className="text-[0.95rem] leading-snug">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
