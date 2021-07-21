module.exports = {
  purge: [ 
    './src/**/*.html',
    './src/**/*.js',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF7D05',
        dark: '#00221D',
        secondary: '#273751',
        light: '##ecf0f1',
        grey: "#95afc0"
      }
    },
    letterSpacing: {
      extra: '.3em'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'laptop': '1000px',
      // => @media (min-width: 1000px) { ... }
    }
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      ringOffsetWidth: ['hover', 'active']
    },
  },
  plugins: [],
}
