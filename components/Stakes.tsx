import { Container } from '@/components/Container'
import { Rubric } from '@/components/Rubric'
import { stakes } from '@/content/site'

/** El único momento a toda página. Se gasta una sola vez. */
export function Stakes() {
  return (
    <section id="por-que-importa" className="scroll-mt-8 bg-ink py-20 text-paper lg:py-28">
      <Container>
        <Rubric n="05" label={stakes.label} inverted />
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="col-span-full grid gap-6 lg:col-span-8">
            {stakes.lines.map((line) => (
              <p
                key={line}
                className="text-balance font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="col-span-full self-end text-lg leading-snug text-paper/70 lg:col-span-4">
            {stakes.closing}
          </p>
        </div>
      </Container>
    </section>
  )
}
