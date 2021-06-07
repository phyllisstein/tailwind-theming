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
        'miller-text-xl': ['36px', {lineHeight: '1', letterSpacing: '-.01em'}],
        'miller-display-l': ['24px', {lineHeight: '1', letterSpacing: '0'}],
        'miller-display-xl': ['49px', {lineHeight: '1', letterSpacing: '-0.15px'}],
        'canela-xs': ['12px', {lineHeight: '1.17', letterSpacing: '2px'}],
        'canela-l': ['40px', {lineHeight: '1.05', letterSpacing: '2px'}],
        'canela-xl': ['48px', {lineHeight: '1.1', letterSpacing: '.2px'}],
        'chap-xs': ['12px', {lineHeight: '1', letterSpacing: '2px'}],
        'chap-s': ['13px', {lineHeight: '1.5', letterSpacing: '1px'}]
      }
    },
    fontFamily: {
      'sans': ['Helvetica'],
      'serif': ['Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'canela': ['Canela-Light'],
      'chap': ['Chap-Light'],
      'chap-bold': ['Chap-Bold'],
      'miller-text': ['Miller-Text'],
      'miller-italic': ['Miller-Italic'],
      'miller-display': ['Miller-Display'],
      'elderkin': ['Elderkin']
     },
    letterSpacing: {
      'tighter': '-.01em',
      'tight': '-.025em',
      'normal': '0',
      'wide': '.01em',
      'wider': '.025em',
      'widest': '.05em',
    },
    lineHeight: {
      'none': '1',
      'tight': '1.1',
      'snug': '1.2',
      'nomal': '1.4',
      'relaxed': '1.625',
      'loose': '2'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
