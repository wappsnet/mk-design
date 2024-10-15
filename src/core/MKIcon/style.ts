import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSizeTypes, MKDesignTypes } from 'types';

export const MKIconStyled = styled.span<{
  size: MKSizeTypes;
  design: MKDesignTypes;
}>`
  color: currentColor;
  height: 1em;
  line-height: 1;

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          font-size: 0.5em;
        `;
      case 'sm':
        return css`
          font-size: 1em;
        `;
      case 'md':
        return css`
          font-size: 1.5em;
        `;
      case 'lg':
        return css`
          font-size: 2em;
        `;
      case 'xl':
        return css`
          font-size: 4em;
        `;
      default:
        return css`
          font-size: 1em;
        `;
    }
  }};

  svg {
    height: 1em;
    width: 1em;
    vertical-align: -0.125em;
    display: inline-block;
    fill: currentColor;
  }

  ${({ design }) => {
    switch (design) {
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
