import { Archivo, Source_Serif_4 } from 'next/font/google'

import { contact, hero, problem, process, proof, services, site, stakes } from '@/content/site'

/**
 * Versión editorial: mismo contenido, tratamiento más audaz.
 * Vive en /editorial solo para comparar direcciones de diseño. Cuando se elija
 * una, esta ruta se borra — no es una segunda versión para mantener.
 */

const edDisplay = Archivo({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-ed-display',
  display: 'swap',
})

const edBody = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-ed-body',
  display: 'swap',
})

const display = 'font-[family-name:var(--font-ed-display)]'
const body = 'font-[family-name:var(--font-ed-body)]'

function Rubric({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-b-2 border-ink pb-3">
      <span className={`${display} text-sm font-800 tabular-nums text-oxide`}>{n}</span>
      <h2 className={`${display} text-sm font-bold uppercase tracking-[0.18em]`}>{label}</h2>
    </div>
  )
}

export default function Editorial() {
  return (
    <div className={`${edDisplay.variable} ${edBody.variable} ${body} bg-paper text-ink`}>
      <div className="mx-auto max-w-[86rem] px-6 pb-24 sm:px-10">
        {/* Cabecera */}
        <header className="flex flex-wrap items-baseline justify-between gap-4 border-b-4 border-ink py-5">
          <span className={`${display} text-2xl font-extrabold uppercase tracking-[0.14em]`}>
            Arar Labs
          </span>
          <span className={`${display} text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft`}>
            {hero.eyebrow}
          </span>
        </header>

        {/* Titular */}
        <section className="grid gap-10 border-b border-rule py-16 lg:grid-cols-12 lg:py-24">
          <h1
            className={`${display} col-span-full text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:col-span-8 lg:text-[5.5rem]`}
          >
            {hero.headline}
          </h1>
          <div className="col-span-full grid content-end gap-5 lg:col-span-4">
            <p className="text-xl leading-snug">{hero.standfirst}</p>
            <p className="text-sm text-ink-soft">
              {hero.backing}{' '}
              <a href={site.parentUrl} className="border-b border-ink-soft hover:text-oxide">
                arar.com.co
              </a>
            </p>
          </div>
        </section>

        {/* Problema */}
        <section className="py-16 lg:py-20">
          <Rubric n="01" label={problem.label} />
          <div className="grid gap-10 lg:grid-cols-12">
            <p
              className={`${display} col-span-full text-balance text-3xl font-medium leading-tight tracking-tight lg:col-span-7 lg:text-4xl`}
            >
              {problem.title}
            </p>
            <ul className="col-span-full grid gap-0 lg:col-span-5">
              {problem.symptoms.map((s) => (
                <li key={s} className="border-t border-rule py-4 text-lg leading-snug last:border-b">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 lg:py-20">
          <Rubric n="02" label={services.label} />
          <div className="grid gap-10 sm:grid-cols-3">
            {services.items.map((item) => (
              <article key={item.name} className="grid content-start gap-3">
                <span
                  className={`${display} text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft`}
                >
                  {item.meta}
                </span>
                <h3 className={`${display} text-2xl font-bold tracking-tight`}>{item.name}</h3>
                <p className="leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16 lg:py-20">
          <Rubric n="03" label={process.label} />
          <ol className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <li key={step.name} className="grid content-start gap-3 bg-paper p-6">
                <span className={`${display} text-4xl font-extrabold tabular-nums text-oxide`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${display} text-xl font-bold tracking-tight`}>{step.name}</h3>
                <span
                  className={`${display} text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft`}
                >
                  {step.meta}
                </span>
                <p className="text-[0.95rem] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Prueba */}
        <section className="py-16 lg:py-20">
          <Rubric n="04" label={proof.label} />
          <div className="grid gap-10 lg:grid-cols-12">
            {[proof.work, proof.parent].map((item) => (
              <article key={item.name} className="col-span-full grid content-start gap-3 lg:col-span-5">
                <span
                  className={`${display} text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft`}
                >
                  {item.meta}
                </span>
                <h3 className={`${display} text-3xl font-bold tracking-tight`}>{item.name}</h3>
                <p className="leading-relaxed">{item.body}</p>
              </article>
            ))}
            <div className="col-span-full lg:col-span-2">
              <h3 className={`${display} mb-3 text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft`}>
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
      </div>

      {/* El momento audaz: banda invertida */}
      <section className="bg-ink py-20 text-paper lg:py-28">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <div className="mb-8 flex items-baseline gap-4 border-b-2 border-paper/30 pb-3">
            <span className={`${display} text-sm font-extrabold tabular-nums text-oxide`}>05</span>
            <h2 className={`${display} text-sm font-bold uppercase tracking-[0.18em]`}>
              {stakes.label}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="col-span-full grid gap-6 lg:col-span-8">
              {stakes.lines.map((line) => (
                <p
                  key={line}
                  className={`${display} text-balance text-2xl font-medium leading-tight tracking-tight sm:text-3xl`}
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="col-span-full self-end text-lg leading-snug text-paper/70 lg:col-span-4">
              {stakes.closing}
            </p>
          </div>
        </div>
      </section>

      {/* Siguiente paso */}
      <div className="mx-auto max-w-[86rem] px-6 pb-20 sm:px-10">
        <section className="py-16 lg:py-20">
          <Rubric n="06" label={contact.label} />
          <div className="grid gap-8 lg:grid-cols-12">
            <h2
              className={`${display} col-span-full text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] lg:col-span-7 lg:text-5xl`}
            >
              {contact.title}
            </h2>
            <div className="col-span-full grid content-end gap-4 lg:col-span-5">
              <p className="text-lg leading-snug">{contact.body}</p>
              <a
                href={`mailto:${site.email}`}
                className={`${display} justify-self-start border-b-4 border-oxide text-xl font-bold tracking-tight hover:text-oxide`}
              >
                {site.email}
              </a>
              <p className="text-sm text-ink-soft">
                {site.replyPromise} Responde {site.responder}
                {site.responderRole ? `, ${site.responderRole}` : ''}.
              </p>
            </div>
          </div>
        </section>

        <footer
          className={`${display} flex flex-wrap justify-between gap-4 border-t-2 border-ink pt-5 text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft`}
        >
          <span>
            {site.name} · {site.city}, Colombia
          </span>
          <a href={site.parentUrl} className="hover:text-oxide">
            Parte de Arar
          </a>
        </footer>
      </div>
    </div>
  )
}
