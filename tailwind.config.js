/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          50: '#e9eff4',
          100: '#bacedc',
          200: '#98b6cb',
          300: '#6995b3',
          400: '#4c81a4',
          500: '#1f618d',
          600: '#1c5880',
          700: '#164564',
          800: '#11354e',
          900: '#0d293b'
        },
        'light-blue': {
          50: '#f1faff',
          100: '#d4eeff',
          200: '#c0e6ff',
          300: '#a3daff',
          400: '#91d3ff',
          500: '#75c8ff',
          600: '#6ab6e8',
          700: '#538eb5',
          800: '#406e8c',
          900: '#31546b'
        },
        
        yellow: {
          50: '#fefeea',
          100: '#fbfcbf',
          200: '#f9fba0',
          300: '#f7f974',
          400: '#f5f859',
          500: '#f3f630'
        },
        dark: {
          50: '#ebedee',
          100: '#c2c6cb',
          200: '#a5abb1',
          300: '#7c848e',
          400: '#626d78',
          500: '#3b4856',
          600: '#36424e',
          700: '#2a333d',
          800: '#20282f',
          900: '#191e24'
        },
        grey: {
          50: '#fdfdfd',
          100: '#fafafa',
          200: '#f7f7f7',
          300: '#f4f4f4',
          400: '#f1f1f1',
          500: '#eeeeee',
          600: '#d9d9d9',
          700: '#a9a9a9',
          800: '#838383',
          900: '#646464'
        }
      },
    },
  },
  plugins: [tailwindcssAnimate],
};