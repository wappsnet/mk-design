import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKThemeVariants } from 'types';

export const MKProgressCircleStyled = styled('div')<{
  theme: MKThemeVariants;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--mk-space-scale-2);

  ${({ theme }) => {
    switch (theme) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${theme});
        `;
      case 'new':
      case 'success':
      case 'danger':
      case 'warning':
        return css`
          color: var(--color-info-${theme});
        `;
    }
  }}
`;

export const MKProgressCircleSvgStyled = styled('svg')`
  overflow: visible;
`;

export const MKProgressCircleTruckStyled = styled('circle')`
  box-shadow: var(--mk-shadow-sm);
  stroke: var(--color-neutral-cover);
`;

export const MKProgressCircleBarStyled = styled('circle')`
  box-shadow: var(--mk-shadow-sm);
  stroke: currentColor;
  transition: all 0.3s ease-in-out;
`;

export const MKProgressCircleLabelStyled = styled('div')`
  flex-shrink: 0;
  font-size: 1em;
`;
