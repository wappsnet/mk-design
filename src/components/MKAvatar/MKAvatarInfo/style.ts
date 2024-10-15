import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKDesignTypes } from 'types';

export const MKAvatarInfoStyled = styled('div')<{
  shape: MKShapeTypes;
  design: MKDesignTypes;
  blank: boolean;
  width: number;
  border: number;
}>`
  border-radius: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: bold;
  aspect-ratio: 1/1;

  ${({ design, blank, border }) => {
    switch (design) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        if (blank) {
          return css`
            background-color: var(--color-neutral-light);
            color: var(--color-brand-${design});
            border: ${border}px solid currentColor;
          `;
        }
        return css`
          color: var(--color-neutral-light);
          background-color: var(--color-brand-${design});
        `;
      case 'warning':
      case 'danger':
      case 'success':
      case 'new':
        if (blank) {
          return css`
            background-color: var(--color-neutral-light);
            color: var(--color-info-${design});
            border: ${border}px solid currentColor;
          `;
        }
        return css`
          color: var(--color-neutral-light);
          background-color: var(--color-info-${design});
        `;
    }
  }}

  ${({ shape }) => {
    switch (shape) {
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
          border-radius: 100%;
        `;
    }
  }}

  ${({ width }) => css`
    width: ${width}px;
    font-size: ${Math.floor(width / 2)}px;
  `}
`;
