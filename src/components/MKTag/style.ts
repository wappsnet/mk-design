import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKSizeTypes, MKDesignTypes } from 'types';

export const MKTagStyled = styled('span')<{
  size: MKSizeTypes;
  shape: MKShapeTypes;
  design: MKDesignTypes;
  stateless: boolean;
  disabled: boolean;
  active: boolean;
  borderless: boolean;
  blank: boolean;
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

  ${({ blank }) => {
    if (!blank) {
      return css`
        color: var(--color-neutral-light);
      `;
    }

    return css`
      background-color: transparent;
    `;
  }}

  ${({ design, blank }) => {
    switch (design) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        if (blank) {
          return css`
            color: var(--color-brand-${design});
            border-color: var(--color-brand-${design});
          `;
        }
        return css`
          background-color: var(--color-brand-${design});
        `;
      case 'new':
      case 'success':
      case 'danger':
      case 'warning':
        if (blank) {
          return css`
            color: var(--color-info-${design});
            border-color: var(--color-info-${design});
          `;
        }
        return css`
          background-color: var(--color-info-${design});
        `;
      case 'neutral':
        if (blank) {
          return css`
            color: var(--color-neutral-med);
            border-color: var(--color-neutral-stroke);
          `;
        }

        return css`
          background-color: var(--color-neutral-cover);
        `;
    }
  }}

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
  
  ${({ active, disabled }) => {
    if (active && !disabled) {
      return css`
        box-shadow: var(--mk-shadow-sm);
      `;
    }
  }}

  ${({ stateless, disabled }) => {
    if (!stateless && !disabled) {
      return css`
        cursor: pointer;

        &:hover {
          opacity: 0.9;
          box-shadow: var(--mk-shadow-sm);
        }

        &:focus,
        &:active {
          box-shadow: var(--mk-shadow-sm);
        }
      `;
    }

    if (!stateless && disabled) {
      return css`
        cursor: not-allowed;
      `;
    }
  }}
    
    ${({ borderless }) => {
    if (!borderless) {
      return css`
        border-width: 1px;
        border-style: solid;
      `;
    }
  }}
    
    ${({ disabled, blank }) => {
    if (disabled) {
      if (blank) {
        return css`
          color: var(--color-disabled-dark);
          border: 1px solid var(--color-neutral-stroke);
        `;
      }

      return css`
        background-color: var(--color-disabled-light);
      `;
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
