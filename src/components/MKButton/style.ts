import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKDesignTypes } from 'types';

export const MKButtonLabelStyled = styled.span<{
  truncate: boolean;
}>`
  color: currentColor;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;

  ${({ truncate }) =>
    truncate &&
    css`
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    `}
`;

export const MKButtonIconStyled = styled.span`
  color: currentColor;
  line-height: 1;
`;

export const MkButtonStyled = styled.button<{
  loading?: boolean;
  stretch: boolean;
  disabled: boolean;
  truncate: boolean;
  blank: boolean;
  shape: MKShapeTypes;
  design: MKDesignTypes;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2) var(--mk-space-scale-3);
  font-size: 1em;
  line-height: 1.5;
  box-shadow: none;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  overflow: hidden;

  ${({ shape }) => {
    switch (shape) {
      case 'base':
        return css`
          border-radius: var(--mk-border-radius-base);
          padding: var(--mk-space-scale-base);
        `;
      case 'square':
        return css`
          border-radius: 0;
          padding: var(--mk-space-scale-2);
          aspect-ratio: 1 / 1;
        `;
      case 'round':
        return css`
          border-radius: var(--mk-border-radius-sm);
        `;
      case 'circle':
        return css`
          flex-shrink: 0;
          aspect-ratio: 1 / 1;
          padding: var(--mk-space-scale-2);
          border-radius: 100%;
        `;
    }
  }}

  ${({ stretch }) =>
    stretch &&
    css`
      width: 100%;
    `}
  
  
  ${({ design, blank }) => {
    switch (design) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${design});
          border: 1px solid var(--color-brand-${design});

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-brand-${design});
          `}

          &:hover,
          &:active,
          &:focus {
            background-color: var(--color-brand-${design}-dark);
          }
        `;
      case 'success':
      case 'danger':
      case 'warning':
      case 'new':
        return css`
          color: var(--color-info-${design});
          border: 1px solid var(--color-info-${design});

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-info-${design});
          `}

          &:hover,
          &:active,
          &:focus {
            background-color: var(--color-info-${design}-dark);
          }
        `;
    }
  }}

  &:hover,
  &:active,
  &:focus {
    color: var(--color-neutral-light);
  }

  &:hover {
    outline: none;
  }

  &:focus {
    box-shadow: var(--mk-shadow-sm);
    outline: none;
  }

  &:active {
    box-shadow: var(--mk-shadow-md);
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
      border: 0;
      background-color: var(--color-disabled-light);
      color: var(--color-disabled-dark);

      &:hover,
      &:focus,
      &:active {
        background-color: var(--color-disabled-light);
        color: var(--color-disabled-dark);
        box-shadow: none;
      }
    `}
`;
