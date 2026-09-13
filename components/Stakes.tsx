import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { stakes } from '@/content/site'

export function Stakes() {
  return (
    <Section id="por-que-importa" label={stakes.label}>
      <div className="grid gap-5">
        {stakes.lines.map((line, i) => (
          <Reveal key={line} delay={i * 90}>
            <p className="max-w-[38ch] text-balance font-display text-xl leading-snug sm:text-2xl">
              {line}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <p className="max-w-[50ch] border-l-2 border-oxide pl-5 text-ink-soft">{stakes.closing}</p>
      </Reveal>
    </Section>
  )
}
