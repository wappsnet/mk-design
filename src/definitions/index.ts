import NotFoundPNG from 'assets/images/image-not-found.png';

export const MK_COLORS = {
  brand: {
    primary: '#800080',
    secondary: '#036bc9',
    tertiary: '#DC0073',
  },
  info: {
    success: '#22BB33',
    danger: '#bb0c0c',
    warning: '#c56503',
    new: '#013269',
    link: '#0000EE',
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
  breakPoints: {
    xs: {
      size: 0,
      count: 1,
    },
    sm: {
      size: 576,
      count: 1,
    },
    md: {
      size: 768,
      count: 2,
    },
    lg: {
      size: 992,
      count: 3,
    },
    xl: {
      size: 1200,
      count: 4,
    },
    xxl: {
      size: 1440,
      count: 5,
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
