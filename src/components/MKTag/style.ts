import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKSizeTypes } from 'types';

export const MKTagStyled = styled('span')<{
  size: MKSizeTypes;
  shape: MKShapeTypes;
}>`
  width: max-content;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  line-height: initial;
  font-size: var(--mk-font-size-scale-2);
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  color: var(--color-neutral-light);

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          font-size: var(--mk-font-size-scale-1);
        `;
      case 'sm':
        return css`
          font-size: var(--mk-font-size-scale-2);
        `;
      case 'md':
        return css`
          font-size: var(--mk-font-size-scale-3);
        `;
      case 'lg':
        return css`
          font-size: var(--mk-font-size-scale-4);
        `;
      case 'xl':
        return css`
          font-size: var(--mk-font-size-scale-5);
        `;
      case 'responsive':
        return css`
          font-size: inherit;
        `;
    }
  }}

  ${({ shape }) => {
    switch (shape) {
      case 'square': {
        return css`
          border-radius: 0;
        `;
      }
      case 'round': {
        return css`
          border-radius: var(--mk-border-radius-sm);
        `;
      }
      case 'circle': {
        return css`
          aspect-ratio: 1/1;
          border-radius: 100%;
        `;
      }
    }
  }}
`;

export const MKTagContentStyled = styled('span')`
  width: max-content;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: initial;
`;
