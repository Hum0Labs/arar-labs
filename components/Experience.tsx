import { Rubric } from '@/components/Rubric'
import { experience } from '@/content/site'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-8 py-16 lg:py-20">
      <Rubric n="04" label={experience.label} />

      <div className="grid gap-10 lg:grid-cols-12">
        <p className="col-span-full text-balance font-display text-3xl font-medium leading-tight tracking-tight lg:col-span-7 lg:text-4xl">
          {experience.title}
        </p>
        <p className="col-span-full self-end leading-relaxed lg:col-span-5">{experience.body}</p>
      </div>

      {/* Los sectores son el centro de la sección: se leen de un vistazo. */}
      <ul className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {experience.sectors.map((sector) => (
          <li
            key={sector}
            className="bg-paper px-5 py-6 font-display text-base font-bold leading-tight tracking-tight"
          >
            {sector}
          </li>
        ))}
      </ul>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <article className="col-span-full grid content-start gap-3 lg:col-span-4">
          <span className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
            {experience.work.meta}
          </span>
          <h3 className="font-display text-2xl font-bold tracking-tight">
            {experience.work.name}
          </h3>
          <p className="leading-relaxed">{experience.work.body}</p>
        </article>

        <article className="col-span-full grid content-start gap-3 lg:col-span-6">
          <span className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
            {experience.parent.meta}
          </span>
          <h3 className="font-display text-2xl font-bold tracking-tight">
            {experience.parent.name}
          </h3>
          <p className="leading-relaxed">{experience.parent.body}</p>

          <dl className="mt-2 grid gap-0">
            {experience.parent.lines.map((line) => (
              <div key={line.name} className="border-t border-rule py-3 last:border-b">
                <dt className="font-display text-sm font-bold tracking-tight">{line.name}</dt>
                <dd className="text-[0.95rem] leading-snug text-ink-soft">{line.body}</dd>
              </div>
            ))}
          </dl>

          <p className="text-[0.95rem] text-ink-soft">{experience.parent.closing}</p>
        </article>

        <div className="col-span-full lg:col-span-2">
          <h3 className="mb-3 font-display text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">
            {experience.refusalsTitle}
          </h3>
          <ul className="grid gap-2">
            {experience.refusals.map((line) => (
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
