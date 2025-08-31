/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B67E4C', // caramel
          dark: '#A06B3D',
        },
        secondary: {
          DEFAULT: '#F3E9E2', // cream
          dark: '#E8D5C5',
        },
        accent: {
          DEFAULT: '#7A3E2E', // cocoa
          dark: '#6B3526',
        },
        text: {
          DEFAULT: '#1F2937',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        'serif': ['Fraunces', 'Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2937',
            a: {
              color: '#B67E4C',
              '&:hover': {
                color: '#7A3E2E',
              },
            },
            h1: {
              color: '#1F2937',
              fontFamily: 'Fraunces, serif',
            },
            h2: {
              color: '#1F2937',
              fontFamily: 'Fraunces, serif',
            },
            h3: {
              color: '#1F2937',
              fontFamily: 'Fraunces, serif',
            },
            h4: {
              color: '#1F2937',
              fontFamily: 'Fraunces, serif',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
