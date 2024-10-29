import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKSizeTypes, MKDesignTypes } from 'types';

export const MQLoaderSkeletonStyled = styled.div<{
  shape: MKShapeTypes;
  design: MKDesignTypes;
  static?: boolean;
  speed: 'slow' | 'fast' | 'static';
  pulse: MKSizeTypes;
}>`
  width: 100%;
  animation-timing-function: ease-in-out;

  ${({ shape }) => {
    switch (shape) {
      case 'base':
        return css`
          border-radius: var(--mk-border-radius-base);
        `;
      case 'square':
        return css`
          border-radius: var(--mk-border-radius-sm);
        `;
      case 'circle':
        return css`
          border-radius: 100%;
          aspect-ratio: 1 / 1;
        `;
    }
  }}

  ${({ design }) => {
    switch (design) {
      case 'primary':
        return css`
          background-color: var(--color-brand-primary);
        `;
      case 'secondary':
        return css`
          background-color: var(--color-brand-secondary);
        `;
      case 'tertiary':
        return css`
          background-color: var(--color-brand-tertiary);
        `;
      case 'neutral':
        return css`
          background-color: var(--color-neutral-med);
        `;
    }
  }}
  
  ${({ speed }) => {
    switch (speed) {
      case 'fast':
        return css`
          animation-duration: 1s;
        `;
      case 'slow':
        return css`
          animation-duration: 3s;
        `;
      case 'static':
        return css`
          animation-duration: 0s;
        `;
    }
  }}

  ${({ pulse }) => {
    switch (pulse) {
      case 'sm':
        return css`
          animation-name: small-range-pulse;
          animation-iteration-count: infinite;
        `;
      case 'md':
        return css`
          animation-name: medium-range-pulse;
          animation-iteration-count: infinite;
        `;
      case 'lg':
        return css`
          animation-name: large-range-pulse;
          animation-iteration-count: infinite;
        `;
    }
  }}
`;
