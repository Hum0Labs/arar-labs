import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { problem } from '@/content/site'

export function Problem() {
  return (
    <Section id="problema" label={problem.label} divider={false}>
      <Reveal>
        <p className="max-w-[34ch] text-balance font-display text-2xl font-light leading-snug sm:text-[1.75rem]">
          {problem.title}
        </p>
      </Reveal>

      <ul className="grid gap-6">
        {problem.symptoms.map((symptom, i) => (
          <li key={symptom}>
            <Reveal delay={i * 70}>
              <p className="max-w-[36ch] border-l border-rule-strong pl-6 font-display text-lg font-light leading-relaxed sm:text-xl">
                {symptom}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
