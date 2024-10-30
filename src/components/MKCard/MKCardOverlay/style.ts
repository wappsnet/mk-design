import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKCardOverlayStyled = styled('div')<{
  mkDesign: MKDesignTypes;
  mkCompact: boolean;
}>`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  color: var(--color-neutral-light);

  ${({ mkCompact }) =>
    !mkCompact &&
    css`
      padding: var(--mk-space-scale-3);
    `}

  ${({ mkDesign }) => {
    switch (mkDesign) {
      case 'primary':
        return css`
          background-color: var(--color-brand-${mkDesign}-light);
          color: var(--color-neutral-light);
        `;
      case 'secondary':
        return css`
          background-color: var(--color-brand-${mkDesign}-light);
          color: var(--color-neutral-light);
        `;
      case 'tertiary':
        return css`
          background-color: var(--color-brand-${mkDesign}-light);
          color: var(--color-neutral-light);
        `;
      case 'success':
        return css`
          background-color: var(--color-info-${mkDesign}-light);
          color: var(--color-neutral-light);
        `;
      case 'danger':
        return css`
          background-color: var(--color-info-${mkDesign}-light);
          color: var(--color-neutral-light);
        `;
      case 'new':
        return css`
          background-color: var(--color-info-${mkDesign}-light);
          color: var(--color-neutral-light);
        `;
      case 'neutral':
        return css`
          background-color: rgba(0, 0, 0, 0.3);
        `;
    }
  }}
`;
