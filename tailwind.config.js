module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.html',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        drop: '0 4px 8px 1px rgba(26, 26, 26, .2)',
      },
    },
    colors: {
      transparent: 'transparent',
      white: {
        DEFAULT: '#ffffff',
      },
      'g-orange': {
        DEFAULT: '#FF742C',
        100: '#FF742C',
      },
      orange: {
        DEFAULT: '#FF9056',
        100: '#FF9056',
        50: '#FFA678',
        20: '#FFE9DD',
        10: '#FFF9F7',
      },
      red: {
        DEFAULT: '#FF3938',
        100: '#FF3938',
      },
      purple: {
        DEFAULT: '#1E0338',
        100: '#1E0338',
        80: '#4B3560',
        40: '#A59AAF',
        20: '#D2CDD7',
        10: '#E9E6EB',
        5: '#F7F7F8',
        0: '#F9F9FB',
      },
      gray: {
        DEFAULT: '#1A1A1A',
        100: '#1A1A1A',
        80: '#656565',
        60: '#A1A1A1',
        40: '#C7C7C7',
        5: '#E4E4E4',
        0: '#F1F1F1',
      },
      'alice-blue': {
        DEFAULT: '#E1E9ED',
      },
      melblue: {
        DEFAULT: '#E6EBED',
      },
      dropdown: {
        DEFAULT: '#F7F7F8',
      },
      success: {
        DEFAULT: '#4ABB77',
        100: '#4ABB77',
        80: '#6FC892',
        60: '#93D6AE',
        40: '#B7E4C9',
        5: '#F6FCF8',
      },
      warning: {
        DEFAULT: '#FFAC4C',
        100: '#FFAC4C',
        80: '#FFBC70',
        60: '#FFCD94',
        40: '#FDDCB6',
        5: '#FFFBF6',
      },
      alert: {
        DEFAULT: '#EB4949',
        100: '#EB4949',
        80: '#EF6D6D',
        60: '#F39292',
        40: '#F5B4B4',
        5: '#FEF6F6',
      },
      info: {
        DEFAULT: '#47B5EB',
        100: '#47B5EB',
        80: '#6CC4EF',
        60: '#91D3F3',
        40: '#D1EBF8',
        5: '#F6FBFE',
      },
    },
  },
  variants: {},
  plugins: [],
};
