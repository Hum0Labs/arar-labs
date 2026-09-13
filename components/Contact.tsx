import { Rubric } from '@/components/Rubric'
import { contact, site } from '@/content/site'

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-8 py-16 lg:py-20">
      <Rubric n="06" label={contact.label} />
      <div className="grid gap-8 lg:grid-cols-12">
        <h2 className="col-span-full text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] lg:col-span-7 lg:text-5xl">
          {contact.title}
        </h2>

        <div className="col-span-full grid content-end gap-4 lg:col-span-5">
          <p className="text-lg leading-snug">{contact.body}</p>

          <a
            href={`mailto:${site.email}`}
            className="justify-self-start border-b-4 border-oxide font-display text-xl font-bold tracking-tight transition-colors hover:text-oxide"
          >
            {site.email}
          </a>

          <p className="text-sm text-ink-soft">
            {site.replyPromise} Responde {site.responder}
            {site.responderRole ? `, ${site.responderRole}` : ''}.
          </p>

          {site.responderLinkedIn ? (
            <a
              href={site.responderLinkedIn}
              className="justify-self-start border-b border-rule-strong text-sm text-ink-soft transition-colors hover:border-oxide hover:text-oxide"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
