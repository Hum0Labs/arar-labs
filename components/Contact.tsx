import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { contact, site } from '@/content/site'

export function Contact() {
  return (
    <Section id="contacto" label={contact.label}>
      <Reveal>
        <p className="max-w-[30ch] text-balance font-display text-2xl leading-snug sm:text-[1.75rem]">
          {contact.title}
        </p>
      </Reveal>

      <Reveal delay={70}>
        <p className="max-w-[50ch] text-ink-soft">{contact.body}</p>
      </Reveal>

      <Reveal delay={140}>
        <div className="grid justify-items-start gap-4">
          <a
            href={`mailto:${site.email}`}
            className="border-b border-rule-strong pb-0.5 text-lg transition-colors hover:border-oxide hover:text-oxide"
          >
            {site.email}
          </a>
          <div className="grid gap-1 border-l-2 border-oxide pl-4 text-sm text-ink-soft">
            <span>{site.replyPromise}</span>
            <span>
              Responde {site.responder}
              {site.responderRole ? `, ${site.responderRole}` : ''}.
            </span>
            {site.responderLinkedIn ? (
              <a
                href={site.responderLinkedIn}
                className="justify-self-start border-b border-rule-strong transition-colors hover:border-oxide hover:text-oxide"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
