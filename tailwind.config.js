module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1112px',
        '2xl': '1300px',
        'short': {'raw': '(min-height: 615px)'},
        'tall': {'raw': '(min-height: 705px)'}
      },
      height: {
        icon: '26.25px',
        outsideIcon: '52px',
      },
      width: {
        icon: '26.25px',
        outsideIcon: '52px',
        timeline: '600px',
      },
    }
  },
  plugins: []
}
