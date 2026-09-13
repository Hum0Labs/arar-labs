import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'

import { hero, site } from '@/content/site'

import './globals.css'

const display = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-display',
  display: 'swap',
})

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
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
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans text-base leading-relaxed">{children}</body>
    </html>
  )
}
