import { MKDelayProps, MKPlacementDataProps, MKPlacementTypes, MKSizeTypes } from 'types';

export const generatePlacementTranslate = (size: number, distance: number, max: number) => {
  if (distance + size / 2 > max) {
    return -(size / 2 + (distance + size / 2) - max);
  } else if (distance - size / 2 < 0) {
    return -(size / 2 + (distance - size / 2));
  } else {
    return -(size / 2);
  }
};

export const generatePositionData = (rect: DOMRect, placement: MKPlacementTypes): MKPlacementTypes => {
  const dimensions = {
    left: Math.round(rect.left),
    right: Math.round(window.innerWidth - rect.right),
    top: Math.round(rect.top),
    bottom: Math.round(window.innerHeight - rect.bottom),
  };

  if (['auto', 'right'].includes(placement) && dimensions.left > dimensions.right) {
    placement = 'left';
  } else if (['auto', 'left'].includes(placement) && dimensions.right > dimensions.left) {
    placement = 'right';
  } else if (['auto', 'bottom'].includes(placement) && dimensions.top > dimensions.bottom) {
    placement = 'top';
  } else if (['auto', 'top'].includes(placement) && dimensions.bottom > dimensions.top) {
    placement = 'bottom';
  }

  return placement;
};

export const generatePlacementRelativeData = (
  rect: DOMRect,
  data: MKPlacementDataProps,
): MKPlacementDataProps | null => {
  if (!data.width) {
    data.width = 0;
  }

  if (!data.height) {
    data.height = 0;
  }

  if (rect) {
    data.placement = generatePositionData(rect, data.placement);

    switch (data.placement) {
      case 'bottom':
        data.top = rect.bottom;
        data.left = rect.left + rect.width / 2;
        data.translateX = generatePlacementTranslate(data.width, data.left, window.innerWidth);
        return data;
      case 'top':
        data.bottom = window.innerHeight - rect.top;
        data.left = rect.left + rect.width / 2;
        data.translateX = generatePlacementTranslate(data.width, data.left, window.innerWidth);
        return data;
      case 'left':
        data.right = window.innerWidth - rect.left;
        data.top = rect.top + rect.height / 2;
        data.translateY = generatePlacementTranslate(data.height, data.top, window.innerHeight);
        return data;
      case 'right':
        data.left = rect.right;
        data.top = rect.top + rect.height / 2;
        data.translateY = generatePlacementTranslate(data.height, data.top, window.innerHeight);
        return data;
    }
  }

  return null;
};

export const generatePlacementAbsoluteData = (
  rect: DOMRect,
  data: MKPlacementDataProps,
): MKPlacementDataProps | null => {
  if (!data.width) {
    data.width = 0;
  }

  if (!data.height) {
    data.height = 0;
  }

  if (rect) {
    data.placement = generatePositionData(rect, data.placement);

    switch (data.placement) {
      case 'bottom':
        data.top = rect.bottom;
        data.left = rect.left;
        break;
      case 'top':
        data.bottom = window.innerHeight - rect.top;
        data.left = rect.left;
        break;
      case 'right':
        data.left = rect.right;
        data.top = rect.top;
        break;
      case 'left':
      case 'auto':
      default:
        data.right = window.innerWidth - rect.left;
        data.top = rect.top;
        break;
    }

    if (data.left && data.left + data.width > window.innerWidth) {
      data.translateX = window.innerWidth - data.width - data.left;
    }

    if (data.right && data.right - data.width < 0) {
      data.translateX = data.width - data.right;
    }

    return data;
  }

  return null;
};

export const normalizeDelay = (delay?: MKDelayProps) =>
  delay && typeof delay === 'object'
    ? delay
    : {
        show: delay,
        hide: delay,
      };

export const stringToColor = (str: string, s: number, l: number): string => {
  if (!str.length) {
    return `hsl(150, 0%, 90%)`;
  }

  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, ${l}%, ${s}%)`;
};

export const getAvatarInitials = (text: string): string =>
  text
    .trim()
    .split(' ')
    .reduce(
      (acc: string, n, ind, arr) => (ind === 0 || ind === arr.length - 1 ? acc + (n[0] || '').toUpperCase() : acc),
      '',
    );

export const generateAvatar = (text: string, square = false): string => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = 256;
  canvas.height = 256;
  const fontSize = Math.floor(canvas.width / 2.5);

  if (context) {
    const primaryColor = stringToColor(text, 95, 95);
    const secondaryColor = stringToColor(text, 50, 50);
    if (square) {
      context.rect(0, 0, canvas.width, canvas.height);
    } else {
      context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI, false);
    }
    context.fillStyle = primaryColor;
    context.fill();
    context.lineWidth = 14;
    context.strokeStyle = secondaryColor;
    context.stroke();

    const initials = getAvatarInitials(text);
    context.font = `bold ${fontSize}px Lato, Helvetica, Arial, sans-serif`;
    context.fillStyle = secondaryColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initials, canvas.width / 2, (canvas.height + context.lineWidth) / 2);
  }

  return canvas.toDataURL('image/png', 1.0);
};

export const generateAvatarSVG = (text = '', className = ''): string => {
  const size = 256;
  const primaryColor = stringToColor(text, 95, 95);
  const secondaryColor = stringToColor(text, 50, 50);
  const avatarText = getAvatarInitials(text);
  const bgColor = primaryColor;
  const textColor = secondaryColor;
  const fontFamily = 'Lato, Helvetica, Arial, sans-serif';
  const fontSize = 100;
  const strokeWidth = 20;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" class="${className}" viewBox="0 0 ${size} ${size}">
    <circle fill="${bgColor}" class="${className}-circle" cx="${size / 2}" cy="${size / 2}" r="${126}" 
    stroke="${secondaryColor}"  stroke-width="${strokeWidth}"/>
    <text class="${className}-text" style="color: ${textColor}; font-family: ${fontFamily};" x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-weight="bold" dy=".1em" fill="${textColor}">${avatarText}
    </text>
    </svg>`;
};

export const generatePaginationConfig = ({
  total,
  current = 1,
  size = 10,
  show = 5,
}: {
  total: number;
  current?: number;
  size?: number;
  show?: number;
}) => {
  // calculate total pages
  const totalPages = Math.ceil(total / size);

  // ensure current page isn't out of range
  if (current < 1) {
    current = 1;
  } else if (current > totalPages) {
    current = totalPages;
  }

  let start: number;
  let end: number;

  if (totalPages <= show) {
    // total pages less than max so show all pages
    start = 1;
    end = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    if (current <= Math.floor(show / 2)) {
      // current page near the start
      start = 1;
      end = show;
    } else if (current + Math.floor(show / 2) >= totalPages) {
      // current page near the end
      start = totalPages - show + 1;
      end = totalPages;
    } else {
      // current page somewhere in the middle
      start = current - Math.floor(show / 2);
      end = current + Math.floor(show / 2);
    }
  }

  // create an array of pages to ng-repeat in the pager control
  const pages = Array.from(Array(end + 1 - start).keys()).map((i) => start + i);

  // return object with all pager properties required by the view
  return {
    total,
    current,
    size,
    next: Math.min(current + 1, totalPages),
    prev: Math.max(current - 1, 1),
    first: 1,
    last: totalPages,
    start,
    end,
    pages,
  };
};

export const keyGen = <T = unknown>(items: T[]) => {
  let key = 0;

  return items.map((item) => ({
    item,
    key: ++key,
  }));
};

export const getRandomWidth = (width?: number | `${number}%`) => {
  const str = (width || 100).toString();
  const size = parseInt(str);
  const max = Math.min(size, 100);
  const min = (30 / 100) * size;

  const result = Math.floor(Math.random() * (max - min) + min);

  if (str.includes('%')) {
    return `${result}%`;
  }

  return result;
};

export const generateColumnBreakpoints = (breakpoints: MKSizeTypes[]) =>
  breakpoints.map((item) => ({
    size: item,
    show: true,
  }));

export const replacePathLastPart = ({
  path,
  newLastPart,
  delimiter = '/',
}: {
  path: string;
  newLastPart: string;
  delimiter?: string;
}) => {
  const parts = path.split(delimiter);

  if (parts.length === 0) {
    return newLastPart;
  }

  parts[parts.length - 1] = newLastPart;

  return parts.join(delimiter);
};

export const getMKValueByPath = <T = unknown>(obj: T, pointer: string) => {
  if (pointer === '') {
    return obj;
  }

  const parts = pointer.split('/').filter(Boolean);
  return parts.reduce((acc: any, part: string) => {
    part = part.replace(/~1/g, '/').replace(/~0/g, '~');

    if (acc === undefined || acc === null) {
      return {
        undefined,
      };
    }

    return acc[part];
  }, obj);
};

export const setMKValueByPath = <T = unknown>(obj: T, pointer: string, value: any) => {
  if (pointer === '') {
    throw new Error('Cannot set the root of the object using an empty pointer');
  }
  const clone = JSON.parse(JSON.stringify(obj));
  const parts = pointer.split('/').filter(Boolean);
  let current = clone;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i].replace(/~1/g, '/').replace(/~0/g, '~');

    if (current[part] === undefined) {
      current[part] = {};
    }
    current = current[part];
  }

  const lastPart = parts[parts.length - 1].replace(/~1/g, '/').replace(/~0/g, '~');
  current[lastPart] = value;

  return clone;
};

export const deleteMKValueByPath = <T = unknown>(obj: T, pointer: string): T => {
  if (pointer === '') {
    throw new Error('Cannot delete the root of the object using an empty pointer');
  }

  const clone = JSON.parse(JSON.stringify(obj));
  const parts = pointer.split('/').filter(Boolean);
  let current = clone;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i].replace(/~1/g, '/').replace(/~0/g, '~');
    if (!(part in current)) {
      return clone;
    }
    current = current[part];
  }

  const lastPart = parts[parts.length - 1].replace(/~1/g, '/').replace(/~0/g, '~');
  delete current[lastPart];

  for (let i = parts.length - 2; i >= 0; i--) {
    const parentPath = parts
      .slice(0, i + 1)
      .map((p) => p.replace(/~1/g, '/').replace(/~0/g, '~'))
      .join('/');
    const parent = getMKValueByPath(clone, parentPath);

    if (parent && Object.keys(parent).length === 0) {
      deleteMKValueByPath(clone, parentPath);
    } else {
      break;
    }
  }

  return clone;
};

export function closest({
  el,
  selector = '',
  fn,
}: {
  el: HTMLElement | null;
  selector?: string;
  fn: (el: HTMLElement) => boolean;
}) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    if (!selector) {
      el = el.parentElement;
    } else {
      el = el.querySelector(selector);
    }
  }

  return null;
}

export const getEventTarget = (target: EventTarget) => {
  if (target instanceof HTMLElement) {
    return target;
  }
};
