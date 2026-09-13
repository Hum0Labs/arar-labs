import { Colophon } from '@/components/Colophon'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Process } from '@/components/Process'
import { Proof } from '@/components/Proof'
import { Services } from '@/components/Services'
import { Stakes } from '@/components/Stakes'

/**
 * El orden es el argumento: problema → qué hacemos → cómo funciona →
 * prueba → por qué importa → siguiente paso.
 */
export default function Home() {
  return (
    <main className="mx-auto max-w-[78rem] px-6 pb-20 sm:px-10 lg:px-24">
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Proof />
      <Stakes />
      <Contact />
      <Colophon />
    </main>
  )
}
