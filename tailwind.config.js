/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [
    require("nativewind/preset"),
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          light: '#1976D2', // Light theme primary
          dark: '#90CAF9',  // Dark theme primary
        },
        secondary: {
          light: '#9C27B0', // Light theme secondary
          dark: '#CE93D8',  // Dark theme secondary
        },
        accent: {
          light: '#009688',
          dark: '#80DEEA',
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        surface: {
          light: '#F5F5F5',
          dark: '#1E1E1E',
        },
        text: {
          light: '#212121',
          dark: '#E0E0E0',
        },
        error: {
          light: '#B00020',
          dark: '#CF6679',
        },
        warning: {
          light: '#FB8C00',
          dark: '#FFB74D',
        },
        success: {
          light: '#388E3C',
          dark: '#81C784',
        },
        info: {
          light: '#0288D1',
          dark: '#4FC3F7',
        }
      }

    },
  },
  plugins: [],
}

