/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#000000', // Pure black
          800: '#1a1a1a', // Soft black
          700: '#2c2c2c', // Dark gray
          600: '#363636', // Medium dark gray
          500: '#666666', // Medium gray
          400: '#8c8c8c', // Light gray
          300: '#b3b3b3', // Lighter gray
          200: '#d9d9d9', // Very light gray
          100: '#f2f2f2', // Almost white
          50: '#ffffff',  // Pure white
        },
        accent: {
          900: '#8a8a8a', // Dark silver
          800: '#999999',
          700: '#a6a6a6',
          600: '#b3b3b3', // Medium silver
          500: '#cccccc', // Silver
          400: '#d9d9d9',
          300: '#e6e6e6', // Light silver
          200: '#f2f2f2',
          100: '#f7f7f7',
          50: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.12)',
        'apple-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'apple': '20px',
      },
    },
  },
  plugins: [],
} 