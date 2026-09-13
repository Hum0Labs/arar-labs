import type { Metadata } from 'next'
import { IBM_Plex_Sans, Newsreader } from 'next/font/google'

import { site } from '@/content/site'

import './globals.css'

const display = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-display',
  display: 'swap',
})

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: 'Arar Labs',
  description:
    'Ingeniería de software y datos para empresas colombianas que crecieron más rápido que sus hojas de cálculo. Diagnóstico, automatización y software a la medida.',
  openGraph: {
    title: 'Arar Labs',
    description:
      'Cuando el Excel ya no da, no siempre la respuesta es un ERP. Diagnóstico, automatización y software a la medida.',
    url: `https://${site.domain}`,
    siteName: 'Arar Labs',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans text-base leading-relaxed">{children}</body>
    </html>
  )
}
