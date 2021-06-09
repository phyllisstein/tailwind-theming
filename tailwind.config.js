module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'elderkin-2xs': ['13px', {lineHeight: '1.1', letterSpacing: '1.8px'}],
        'elderkin-xs': ['14px', {lineHeight: '1', letterSpacing: '2px'}],
        'elderkin-s': ['16px', {lineHeight: '1', letterSpacing: '2px'}],
        'elderkin-base': ['18px', {lineHeight: '1', letterSpacing: '1.5px'}],
        'elderkin-m': ['23px', {lineHeight: '1', letterSpacing: '.3px'}],
        'elderkin-l': ['28px', {lineHeight: '1', letterSpacing: '.6px'}],
        'elderkin-xl': ['35px', {lineHeight: '1', letterSpacing: '0'}],
        'elderkin-2xl': ['41px', {lineHeight: '1', letterSpacing: '0'}],
        'elderkin-3xl': ['46px', {lineHeight: '1', letterSpacing: '0'}],
        'elderkin-4xl': ['54px', {lineHeight: '1', letterSpacing: '0'}],
        'miller-text-3xs': ['11px', {lineHeight: '1.2', letterSpacing: '1.4px'}],
        'miller-text-2xs': ['12px', {lineHeight: '1', letterSpacing: '2px'}],
        'miller-text-xs': ['13px', {lineHeight: '1.4', letterSpacing: '1px'}],
        'miller-text-s': ['16px', {lineHeight: '1.2', letterSpacing: '3px'}],
        'miller-text-base': ['18px', {lineHeight: '1.625', letterSpacing: '0'}],
        'miller-text-m': ['21px', {lineHeight: '1.2', letterSpacing: '0'}],
        'miller-text-l': ['28px', {lineHeight: '1.2', letterSpacing: '0'}],
        'miller-text-xl': ['36px', {lineHeight: '1.02', letterSpacing: '-.36px'}],
        'miller-display-l': ['24px', {lineHeight: '1', letterSpacing: '0'}],
        'miller-display-xl': ['49px', {lineHeight: '1', letterSpacing: '-0.15px'}],
        'canela-xs': ['12px', {lineHeight: '1.17', letterSpacing: '2px'}],
        'canela-base': ['20px', {lineHeight: '1.1', letterSpacing: '0'}],
        'canela-m': ['28px', {lineHeight: '1.2', letterSpacing: '-0.2px'}],
        'canela-l': ['30px', {lineHeight: '1.05', letterSpacing: '0'}],
        'canela-xl': ['35px', {lineHeight: '1.1', letterSpacing: '.2px'}],
        'canela-2xl': ['40px', {lineHeight: '1.05', letterSpacing: '.2px'}],
        'canela-3xl': ['48px', {lineHeight: '1.05', letterSpacing: '.2px'}],
        'chap-4xs': ['11px', {lineHeight: '1.3', letterSpacing: '2px'}],
        'chap-3xs': ['12px', {lineHeight: '1', letterSpacing: '2px'}],
        'chap-2xs': ['13px', {lineHeight: '1.5', letterSpacing: '1px'}],
        'chap-xs': ['15px', {lineHeight: '1', letterSpacing: '1.6px'}],
        'chap-base': ['18px', {lineHeight: '1', letterSpacing: '3px'}],
        'chap-m': ['24px', {lineHeight: '1', letterSpacing: '3px'}]
      }
    },
    fontFamily: {
      'sans': ['Helvetica'],
      'serif': ['Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'canela': ['Canela-Light'],
      'canela-bold': ['Canela-Medium'],
      'chap': ['Chap-Light'],
      'chap-bold': ['Chap-Bold'],
      'miller-text': ['Miller-Text'],
      'miller-italic': ['Miller-Italic'],
      'miller-display': ['Miller-Display'],
      'elderkin': ['Elderkin']
     },
    letterSpacing: {
      'tighter': '-.35px',
      'tight': '-.2px',
      'normal': '0',
      'wide': '.3px',
      'wider': '1px',
      'widest': '2px',
    },
    lineHeight: {
      'none': '1',
      'tight': '1.1',
      'snug': '1.2',
      'nomal': '1.4',
      'relaxed': '1.625',
      'loose': '2'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
