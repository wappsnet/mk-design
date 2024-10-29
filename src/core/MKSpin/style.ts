import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSizeTypes, MKDesignTypes } from 'types';

export const MkSpinStyled = styled.div<{
  animate: 'border' | 'blow';
  design: MKDesignTypes;
  size: MKSizeTypes;
  responsive: boolean;
  centered: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  position: relative;

  ${({ size }) => {
    switch (size) {
      case 'xs': {
        return css`
          width: 1.25rem;
        `;
      }
      case 'sm': {
        return css`
          width: 2rem;
        `;
      }
      case 'md': {
        return css`
          width: 4rem;
        `;
      }
      case 'lg': {
        return css`
          width: 6rem;
        `;
      }
      case 'xl': {
        return css`
          width: 10rem;
        `;
      }
    }
  }}

  ${({ responsive }) =>
    responsive &&
    css`
      width: 100%;
      height: 100%;
    `}
  
  ${({ centered }) =>
    centered &&
    css`
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `}

  ${({ design }) => {
    switch (design) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${design});
        `;
      case 'neutral':
        return css`
          color: currentColor;
        `;
    }
  }}
  
  ${({ animate }) => {
    switch (animate) {
      case 'border':
        return css`
          &:before {
            display: block;
            box-sizing: border-box;
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 100%;
            border-style: solid;
            border-width: 5px;
            border-color: currentColor transparent transparent transparent;
            animation: rotate infinite 1s linear;
          }
        `;
      case 'blow':
        return css`
          &:before {
            display: block;
            box-sizing: border-box;
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 100%;
            border-width: 5px;
            border-style: solid;
            border-color: currentColor;
            animation: blow infinite 1s linear;
          }
        `;
    }
  }}}
`;
