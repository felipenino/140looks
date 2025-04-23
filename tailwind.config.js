/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'beige': '#eae7e0',
        'black-main': '#231f20',
        'taupe': '#948780',
        'yellow-400': '#F9DA4A',
      },
      fontFamily: {
        'butler': ['Butler', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', '1.1'],
        'h1': ['3.5rem', '1.2'],
        'h2': ['2.75rem', '1.2'],
        'h3': ['2rem', '1.3'],
        'body': ['1.25rem', '1.5'],
        'small': ['1rem', '1.4'],
        'tiny': ['0.875rem', '1.4'],
      },
      spacing: {
        'button-height': '72px',
        'section': '120px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};