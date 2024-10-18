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
      size: 0,
      count: 1,
      fontSize: 1,
    },
    sm: {
      size: 576,
      count: 1,
      fontSize: 2,
    },
    md: {
      size: 768,
      count: 2,
      fontSize: 3,
    },
    lg: {
      size: 992,
      count: 3,
      fontSize: 4,
    },
    xl: {
      size: 1200,
      count: 4,
      fontSize: 5,
    },
    xxl: {
      size: 1440,
      count: 5,
      fontSize: 6,
    },
    responsive: {
      size: 2000,
      count: 5,
      fontSize: 2,
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
