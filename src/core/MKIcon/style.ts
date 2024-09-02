import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSizeTypes, MKThemeVariants } from '../../types';

export const MKIconStyled = styled.span<{
  size: MKSizeTypes;
  theme: MKThemeVariants;
}>`
  color: currentColor;
  height: 1em;
  line-height: 1;
  font-size: ${({ size }) => {
    switch (size) {
      case 'xs':
        return '0.5em';
      case 'sm':
        return '1em';
      case 'md':
        return '1.5rem';
      case 'lg':
        return '2em';
      case 'xl':
        return '4em';
      default:
        return '1em';
    }
  }};

  svg {
    height: 1em;
    width: 1em;
    vertical-align: -0.125em;
    display: inline-block;
    fill: currentColor;
  }

  ${({ theme }) => {
    switch (theme) {
      case 'primary':
        return css`
          color: var(--color-brand-primary);
        `;
      case 'secondary':
        return css`
          color: var(--color-brand-secondary);
        `;
      case 'tertiary':
        return css`
          color: var(--color-brand-primary);
        `;
      case 'danger':
        return css`
          color: var(--color-info-danger);
        `;
      case 'warning':
        return css`
          color: var(--color-info-warning);
        `;
      case 'success':
        return css`
          color: var(--color-info-success);
        `;
      default:
        return css`
          color: currentColor;
        `;
    }
  }}
`;
