module.exports = {
  theme: {
    extend: {
      colors: {
        'blue-wingu': '#2681FF',
        'green-wingu': '#00DE89',
        'orange-wingu': '#FF7214',
        'yellow-wingu': '#FFBD2E',
        'gray-wingu': '#E0C7BF',
        'error-red': '#F44336'
      },
      fontFamily: {
        'title': ['Oswald', 'sans-serif'],
        'body': ['Raleway', 'sans-serif']
      },
      minHeight: {
        '1/4': '100px',
        '86vh': '86vh'
      },
      inset: {
        '90': '90px'
      },
      animations: { // defaults to {}; the following are examples
        'spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        }
      },
      animationDuration: { // defaults to these values
        'default': '1s',
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s',
      },
      animationTimingFunction: { // defaults to these values
        'default': 'ease',
        'linear': 'linear',
        'ease': 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      animationDelay: { // defaults to these values
        'default': '0s',
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s',
      },
      animationIterationCount: { // defaults to these values
        'default': 'infinite',
        'once': '1',
        'infinite': 'infinite',
      },
      animationDirection: { // defaults to these values
        'default': 'normal',
        'normal': 'normal',
        'reverse': 'reverse',
        'alternate': 'alternate',
        'alternate-reverse': 'alternate-reverse',
      },
      animationFillMode: { // defaults to these values
        'default': 'none',
        'none': 'none',
        'forwards': 'forwards',
        'backwards': 'backwards',
        'both': 'both',
      },
      animationPlayState: { // defaults to these values
        'running': 'running',
        'paused': 'paused',
      },
    },
  },
  variants: {
    animations: ['responsive'],
    animationDuration: ['responsive'],
    animationTimingFunction: ['responsive'],
    animationDelay: ['responsive'],
    animationIterationCount: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
  },
  plugins: [
    require('tailwindcss-animations'),
  ],
}
