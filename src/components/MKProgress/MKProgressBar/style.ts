import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSizeTypes, MKDesignVariants } from 'types';

export const MKProgressBarStyled = styled('div')<{
  design: MKDesignVariants;
  size: MKSizeTypes;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--mk-space-scale-2);

  ${({ design }) => {
    switch (design) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${design});
        `;
      case 'new':
      case 'success':
      case 'danger':
      case 'warning':
        return css`
          color: var(--color-info-${design});
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          font-size: var(--mk-font-size-scale-3);
        `;
      case 'sm':
        return css`
          font-size: var(--mk-font-size-scale-4);
        `;
      case 'md':
        return css`
          font-size: var(--mk-font-size-scale-5);
        `;
      case 'lg':
        return css`
          font-size: var(--mk-font-size-scale-6);
        `;
      case 'xl':
        return css`
          font-size: var(--mk-font-size-scale-7);
        `;
      case 'xxl':
        return css`
          font-size: var(--mk-font-size-scale-8);
        `;
      case 'responsive':
        return css`
          font-size: inherit;
        `;
    }
  }}
`;

export const MKProgressBarInnerStyled = styled('div')`
  width: 100%;
  position: relative;
  height: 1em;
  border-radius: 1em;
  background-color: var(--color-neutral-cover);
`;

export const MKProgressBarThumbStyled = styled('div')<{
  percent: number;
}>`
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  background-color: currentColor;
  border-radius: inherit;

  ${({ percent }) => css`
    width: ${percent}%;
  `}
`;

export const MKProgressBarLabelStyled = styled('div')`
  flex-shrink: 0;
  font-size: 1em;
`;
