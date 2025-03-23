import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { generateShapeStyles } from 'styles';
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

  ${({ mkShape }) => generateShapeStyles(mkShape)}

  ${({ mkWidth }) => css`
    width: ${mkWidth}px;
    font-size: ${Math.floor(mkWidth / 2)}px;
  `}
`;
