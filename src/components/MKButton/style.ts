import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKDesignTypes } from 'types';

export const MKButtonLabelStyled = styled.span<{
  mkTruncate: boolean;
}>`
  color: currentColor;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;

  ${({ mkTruncate }) =>
    mkTruncate &&
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
  mkLoading: boolean;
  mkStretch: boolean;
  disabled: boolean;
  mkTruncate: boolean;
  mkBlank: boolean;
  mkShape: MKShapeTypes;
  mkDesign: MKDesignTypes;
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

  ${({ mkShape }) => {
    switch (mkShape) {
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

  ${({ mkStretch }) =>
    mkStretch &&
    css`
      width: 100%;
    `}
  
  
  ${({ mkDesign, mkBlank }) => {
    switch (mkDesign) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${mkDesign});
          border: 1px solid var(--color-brand-${mkDesign});

          ${!mkBlank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-brand-${mkDesign});
          `}

          &:hover,
          &:active,
          &:focus {
            background-color: var(--color-brand-${mkDesign}-dark);
          }

          &:hover,
          &:focus {
            box-shadow: var(--mk-shadow-sm);
            outline: none;
          }

          &:active {
            box-shadow: var(--mk-shadow-md);
            outline: none;
          }
        `;
      case 'success':
      case 'danger':
      case 'warning':
      case 'new':
        return css`
          color: var(--color-info-${mkDesign});
          border: 1px solid var(--color-info-${mkDesign});

          ${!mkBlank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-info-${mkDesign});
          `}

          &:hover,
          &:active,
          &:focus {
            background-color: var(--color-info-${mkDesign}-dark);
          }

          &:hover,
          &:focus {
            box-shadow: var(--mk-shadow-sm);
            outline: none;
          }

          &:active {
            box-shadow: var(--mk-shadow-md);
            outline: none;
          }
        `;
    }
  }}

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
