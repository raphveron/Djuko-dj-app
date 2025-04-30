import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/webflow-tsx/**/*.{js,ts,jsx,tsx,mdx}', // Ajouté pour Webflow
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Font Family
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Font Weights
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      // Container Sizes
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      // Max Widths
      maxWidth: {
        'xxsmall': '20rem',    // 320px
        'xsmall': '24rem',     // 384px
        'small': '32rem',      // 512px
        'medium': '40rem',     // 640px
        'large': '48rem',      // 768px
        'xlarge': '64rem',     // 1024px
        'xxlarge': '80rem',    // 1280px
        'full-tablet': '991px',
        'full-mobile-landscape': '767px',
        'full-mobile-portrait': '479px',
      },
      // Spacing System
      spacing: {
        'section-small': '2rem',
        'section-medium': '4rem',
        'section-large': '6rem',
        'global': '1rem',
      },
      // Colors
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          text: 'var(--color-primary-text)',
          ...{
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          text: 'var(--color-secondary-text)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
        },
        alternate: {
          text: 'var(--color-alternate-text)',
        },
      },
    },
    // Breakpoints
    screens: {
      'sm': '479px',    // Mobile Portrait
      'md': '767px',    // Mobile Landscape
      'lg': '991px',    // Tablet
      'xl': '1440px',   // Desktop
    },
  },
  plugins: [],
}

export default config
