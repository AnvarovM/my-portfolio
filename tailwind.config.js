module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        my: {
          lightBg: "var(--light-bg)",
          lightText: "var(--light-text-main)",
          lightTextMuted: "var(--light-text-muted)",
          darkBg: "var(--dark-bg)",
          darkText: "var(--dark-text-main)",
          darkTextMuted: "var(--dark-text-muted)",
        },
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'translateY(0)'
            },
            '50%': {
                transform: 'translateY(-20px)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
    },
    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ['"Montserrat"', 'cursive'],
      monda: ['"Monda"', 'sans-serif'],
    },
  },
  plugins: [],
}
