module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'text': ['Roboto', 'sans-serif'],
        'console': ['Azeret Mono', 'monospace']
      },
      colors: {
        'back': '#1b1b1b'
      }
    },
  },
  plugins: [],
}
