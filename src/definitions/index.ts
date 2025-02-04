import NotFoundPNG from 'assets/images/image-not-found.png';

export const MK_COLORS = {
  brand: {
    primary: '#13598e',
    primaryDark: '#023256',
    secondary: '#036bc9',
    secondaryDark: '#0257a1',
    tertiary: '#336d80',
    tertiaryDark: '#0f5369',
  },
  info: {
    success: '#35803e',
    successDark: '#0f5917',
    danger: '#bb0c0c',
    dangerDark: '#6c0808',
    warning: '#9e5002',
    warningDark: '#6b3702',
    new: '#013269',
    newDark: '#01254d',
    link: '#0000EE',
    linkDark: '#010172',
  },
  neutral: {
    dark: '#000000',
    light: '#ffffff',
    cover: '#f1f1f1',
    med: '#444444',
    dim: '#555',
    stroke: '#dddddd',
  },
  disabled: {
    light: '#ccc',
    dark: '#666',
  },
};

export const MK_SIZES = {
  borderRadius: {
    xs: '0.25em',
    sm: '0.5em',
    md: '5em',
    lg: '10em',
  },
  modal: {
    xs: {
      width: 200,
    },
    sm: {
      width: 576,
    },
    md: {
      width: 768,
    },
    lg: {
      width: 992,
    },
    xl: {
      width: 1200,
    },
    xxl: {
      width: 1440,
    },
  },
  breakPoints: {
    xs: {
      name: 'xs',
      size: 0,
      count: 1,
      fontSize: 0.75,
    },
    sm: {
      name: 'sm',
      size: 576,
      count: 1,
      fontSize: 1,
    },
    md: {
      name: 'md',
      size: 768,
      count: 2,
      fontSize: 1.25,
    },
    lg: {
      name: 'lg',
      size: 992,
      count: 3,
      fontSize: 1.5,
    },
    xl: {
      name: 'xl',
      size: 1200,
      count: 4,
      fontSize: 1.75,
    },
    xxl: {
      name: 'xxl',
      size: 1440,
      count: 5,
      fontSize: 2,
    },
    responsive: {
      name: 'responsive',
      size: 2000,
      count: 5,
      fontSize: 1,
    },
  },
};

export const MK_KEYBOARD_EVENT_KEYS = {
  Enter: ['Enter', ' '],
  Left: ['ArrowRight'],
  Right: ['ArrowLeft'],
  Escape: ['Escape'],
};

export const MK_ASSETS = {
  images: {
    notFound: NotFoundPNG,
  },
};

export const MK_AVATAR_SIZES_MAP = {
  large: {
    size: 150,
    border: 5,
  },
  medium: {
    size: 90,
    border: 3,
  },
  small: {
    size: 45,
    border: 3,
  },
  tiny: {
    size: 25,
    border: 2,
  },
};

export const MK_THEME_PREFIX = 'mk';

export const MK_CHARTS_COLORS = {
  line: {
    colorChartPurple: '#6929C4',
    colorChartGreen: '#198038',
    colorChartBlue: '#002d9c',
    colorChartCyan: '#1192E8',
    colorChartTeal: '#005D5D',
    colorChartMagenta: '#9F1853',
    colorChartRed: '#FA4D56',
    colorChartBurgundy: '#570408',
    colorChartYellow: '#b28600',
    colorChartOrange: '#8a3800',
  },
  stroke: {
    AREA: '#6baddd',
    BARS: '#666666',
  },
  fill: {
    AREA: '#cee4f4',
    PIE: '#8884d8',
    BARS: '#813697',
  },
};
