/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: la página no tiene backend, así que se despliega
  // en Vercel, Cloudflare Pages, S3 o cualquier servidor de archivos.
  output: 'export',
  // Con dominio propio (labs.arar.com.co) el sitio va en la raíz y no hace
  // falta basePath. Para previsualizar en hum0labs.github.io/arar-labs,
  // construir con PAGES_BASE_PATH=/arar-labs.
  basePath: process.env.PAGES_BASE_PATH || undefined,
  assetPrefix: process.env.PAGES_BASE_PATH || undefined,
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
}

export default nextConfig
