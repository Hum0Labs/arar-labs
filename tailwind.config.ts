import type { Config } from 'tailwindcss'

/**
 * Tinta sobre papel, un solo tema. La paleta es corta a propósito:
 * dos tintas, dos líneas y un acento óxido.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F4F0',
        ink: '#17171A',
        'ink-soft': '#6B6A64',
        rule: '#DEDDD7',
        'rule-strong': '#B9B8B0',
        oxide: '#7A2E1E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['var(--font-body)', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
