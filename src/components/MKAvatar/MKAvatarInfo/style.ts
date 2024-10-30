import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKDesignTypes } from 'types';

export const MKAvatarInfoStyled = styled('div')<{
  mkShape: MKShapeTypes;
  mkDesign: MKDesignTypes;
  mkBlank: boolean;
  mkWidth: number;
  mkBorder: number;
}>`
  border-radius: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: bold;
  aspect-ratio: 1/1;

  ${({ mkDesign, mkBlank, mkBorder }) => {
    switch (mkDesign) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        if (mkBlank) {
          return css`
            background-color: var(--color-neutral-light);
            color: var(--color-brand-${mkDesign});
            border: ${mkBorder}px solid currentColor;
          `;
        }
        return css`
          color: var(--color-neutral-light);
          background-color: var(--color-brand-${mkDesign});
        `;
      case 'warning':
      case 'danger':
      case 'success':
      case 'new':
        if (mkBlank) {
          return css`
            background-color: var(--color-neutral-light);
            color: var(--color-info-${mkDesign});
            border: ${mkBorder}px solid currentColor;
          `;
        }
        return css`
          color: var(--color-neutral-light);
          background-color: var(--color-info-${mkDesign});
        `;
    }
  }}

  ${({ mkShape }) => {
    switch (mkShape) {
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
          border-radius: 100%;
        `;
    }
  }}

  ${({ mkWidth }) => css`
    width: ${mkWidth}px;
    font-size: ${Math.floor(mkWidth / 2)}px;
  `}
`;
