import { Rubric } from '@/components/Rubric'
import { problem } from '@/content/site'

export function Problem() {
  return (
    <section id="problema" className="scroll-mt-8 py-16 lg:py-20">
      <Rubric n="01" label={problem.label} />
      <div className="grid gap-10 lg:grid-cols-12">
        <p className="col-span-full text-balance font-display text-3xl font-medium leading-tight tracking-tight lg:col-span-7 lg:text-4xl">
          {problem.title}
        </p>
        <ul className="col-span-full lg:col-span-5">
          {problem.symptoms.map((symptom) => (
            <li key={symptom} className="border-t border-rule py-4 text-lg leading-snug last:border-b">
              {symptom}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
