import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKThemeVariants } from 'types';

export const MKCardOverlayStyled = styled('div')<{
  theme: MKThemeVariants;
  compact: boolean;
}>`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  color: var(--color-neutral-light);

  ${({ compact }) =>
    !compact &&
    css`
      padding: var(--mk-space-scale-3);
    `}

  ${({ theme }) => {
    switch (theme) {
      case 'primary':
        return css`
          background-color: var(--color-brand-primary-light);
          color: var(--color-neutral-light);
        `;
      case 'secondary':
        return css`
          background-color: var(--color-brand-secondary-light);
          color: var(--color-neutral-light);
        `;
      case 'tertiary':
        return css`
          background-color: var(--color-brand-tertiary-light);
          color: var(--color-neutral-light);
        `;
      case 'success':
        return css`
          background-color: var(--color-info-success-light);
          color: var(--color-neutral-light);
        `;
      case 'danger':
        return css`
          background-color: var(--color-info-danger-light);
          color: var(--color-neutral-light);
        `;
      case 'new':
        return css`
          background-color: var(--color-info-new-light);
          color: var(--color-neutral-light);
        `;
      case 'neutral':
        return css`
          background-color: rgba(0, 0, 0, 0.3);
        `;
    }
  }}
`;
