/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: la página no tiene backend, así que se despliega
  // en Vercel, Cloudflare Pages, S3 o cualquier servidor de archivos.
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
}

export default nextConfig
