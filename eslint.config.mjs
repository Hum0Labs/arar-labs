import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

// Next 16 quitó `next lint`; ESLint 9 usa configuración plana.
const config = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'prototype/**'] },
  ...coreWebVitals,
  ...typescript,
]

export default config
