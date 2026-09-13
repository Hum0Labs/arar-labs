import type { Metadata } from 'next'
import { Archivo, Source_Serif_4 } from 'next/font/google'

import { hero, site } from '@/content/site'

import './globals.css'

/** Archivo para titulares y rótulos; Source Serif para el texto que se lee. */
const display = Archivo({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const body = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

// La descripción sale del mismo copy que ve el visitante: si cambia el titular,
// cambian también los resultados de búsqueda y las previsualizaciones de enlace.
const description = `${hero.headline} ${hero.standfirst}`

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: 'Arar Labs',
  description,
  openGraph: {
    title: 'Arar Labs',
    description,
    url: `https://${site.domain}`,
    siteName: 'Arar Labs',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper font-body text-ink">{children}</body>
    </html>
  )
}
