module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'elderkin-2xs': ['13px', {lineHeight: '1.1', letterSpacing: '0.05em'}],
        'elderkin-xs': ['14px', {lineHeight: '1', letterSpacing: '0.025em'}],
        'elderkin-s': ['16px', {lineHeight: '1', letterSpacing: '0.025em'}],
        'elderkin-base': ['18px', {lineHeight: '1', letterSpacing: '0em'}],
        'elderkin-m': ['23px', {lineHeight: '1', letterSpacing: '0em'}],
        'elderkin-l': ['28px', {lineHeight: '1', letterSpacing: '-0.01em'}],
        'elderkin-xl': ['35px', {lineHeight: '1', letterSpacing: '-0.01em'}],
        'elderkin-2xl': ['41px', {lineHeight: '1', letterSpacing: '-0.01em'}],
        'elderkin-3xl': ['46px', {lineHeight: '1', letterSpacing: '-0.01em'}],
        'elderkin-4xl': ['54px', {lineHeight: '1', letterSpacing: '-0.01em'}],
        'miller-text-3xs': ['11px', {lineHeight: '1.2', letterSpacing: '-0.025'}],
        'miller-text-2xs': ['12px', {lineHeight: '1.2', letterSpacing: '0em'}],
        'miller-text-xs': ['13px', {lineHeight: '1.4', letterSpacing: '0em'}],
        'miller-text-s': ['16px', {lineHeight: '1.2', letterSpacing: '0em'}],
        'miller-text-base': ['18px', {lineHeight: '1.625', letterSpacing: '0em'}],
        'miller-text-m': ['21px', {lineHeight: '1.2', letterSpacing: '0em'}],
        'miller-text-l': ['28px', {lineHeight: '1.2', letterSpacing: '0em'}],
        'miller-text-xl': ['36px', {lineHeight: '1.1', letterSpacing: '0em'}]
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
