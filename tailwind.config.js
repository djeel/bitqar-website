/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bitqar-green': '#A1EAD9',
          'bitqar-dark-green': '#1E5F5A',
          'bitqar-text-dark': '#333333',
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