import type { Config } from 'tailwindcss'

/**
 * Ink on paper. Single theme by intention — see README.
 * The palette is deliberately narrow: two inks, two rules, one oxide accent.
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
        display: ['var(--font-display)', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        measure: '40rem',
      },
    },
  },
  plugins: [],
}

export default config
