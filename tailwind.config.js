/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bitqar-green': '#6CFFDD',
          'bitqar-dark-green': '#407569',
          'bitqar-text-dark': '#000000',
          'bitqar-text-light': '#FFFFFF',
          'bitqar-bg-light': '#F0F8F8',
        },
        fontFamily: {
          sans: ['Sk-Modernist', 'Inter', 'sans-serif'],
          modernist: ['Sk-Modernist', 'sans-serif'],
          mono: ['Sk-Modernist Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  }