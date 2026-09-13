import { Colophon } from '@/components/Colophon'
import { Contact } from '@/components/Contact'
import { Container } from '@/components/Container'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Masthead } from '@/components/Masthead'
import { Problem } from '@/components/Problem'
import { Process } from '@/components/Process'
import { Services } from '@/components/Services'
import { Stakes } from '@/components/Stakes'

/**
 * El orden es el argumento: problema → qué hacemos → cómo funciona →
 * prueba → por qué importa → siguiente paso.
 *
 * Stakes va fuera del contenedor porque es la única banda a toda página.
 */
export default function Home() {
  return (
    <main>
      <Container>
        <Masthead />
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Experience />
      </Container>

      <Stakes />

      <Container>
        <Contact />
        <Colophon />
      </Container>
      <div className="pb-20" />
    </main>
  )
}
