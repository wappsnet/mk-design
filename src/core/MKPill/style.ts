import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeVariants, MKSizeTypes, MKStyleVariants } from 'types';

export const MQLoaderSkeletonStyled = styled.div<{
  shape: MKShapeVariants;
  design: MKStyleVariants;
  static?: boolean;
  speed: 'slow' | 'fast' | 'static';
  opacity: MKSizeTypes;
}>`
  width: 100%;

  ${({ shape }) => {
    switch (shape) {
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
  
  ${({ animationSpeed }) => {
    if (animationSpeed === 'fast') {
      return css`
        animation-timing-function: ease-in-out;
        animation-duration: 1s;
      `;
    } else if (animationSpeed === 'slow') {
      return css`
        animation-timing-function: ease-in-out;
        animation-duration: 3s;
      `;
    }
  }}

  ${({ animationSpeed, opacityRange }) => {
    if (animationSpeed !== 'static') {
      switch (opacityRange) {
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
    }
  }}
`;
