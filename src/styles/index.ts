import { css } from '@emotion/react';

import { MKShapeTypes } from '../types';

export const generateShapeStyles = (shape: MKShapeTypes) => {
  switch (shape) {
    case 'base':
      return css`
        border-radius: var(--mk-border-radius-base);
      `;
    case 'round':
      return css`
        border-radius: var(--mk-border-radius-sm);
      `;
    case 'square':
      return css`
        border-radius: 0;
      `;
    case 'circle':
      return css`
        aspect-ratio: 1/1;
        border-radius: 100%;
      `;
  }
};
