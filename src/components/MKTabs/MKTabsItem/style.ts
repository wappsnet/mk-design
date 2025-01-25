import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes, MKTabShapeTypes } from 'types';

import { MKLink } from 'core/MKLink';

export const MKTabStyled = styled(MKLink, {
  shouldForwardProp: (prop) => isPropValid(prop),
})<{
  mkActive: boolean;
  mkDisabled: boolean;
  mkBordered: boolean;
  mkDesign: MKDesignTypes;
  mkShape: MKTabShapeTypes;
}>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2) var(--mk-space-scale-3);
  font-size: var(--mk-font-size-scale-3);
  cursor: pointer;
  outline: none;
  text-decoration: none;

  ${({ mkDesign, mkActive }) => {
    switch (mkDesign) {
      case 'base':
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${mkDesign});
          background: var(--color-brand-${mkDesign}-light);

          ${mkActive &&
          css`
            background-color: var(--color-brand-${mkDesign});
          `}
        `;
      case 'new':
      case 'success':
      case 'danger':
      case 'warning':
        return css`
          color: var(--color-info-${mkDesign});
          background: var(--color-info-${mkDesign}-light);

          ${mkActive &&
          css`
            background-color: var(--color-info-${mkDesign});
          `}
        `;
    }
  }}

  ${({ mkActive, mkDisabled }) => {
    if (!mkActive && !mkDisabled) {
      return css`
        &:hover,
        &:active,
        &:focus {
          text-decoration: none;
          border-color: currentColor;
          background-color: var(--color-neutral-cover);
        }
      `;
    }
  }}

  ${({ mkActive }) =>
    mkActive &&
    css`
      color: var(--color-neutral-light);
    `}
  
  ${({ mkDisabled }) =>
    mkDisabled &&
    css`
      color: var(--color-disabled-dark);
      background-color: var(--color-disabled-light);
      border-color: var(--color-disabled-dark);
    `}
    
    ${({ mkShape, mkBordered }) => {
    switch (mkShape) {
      case 'pill':
        return css`
          min-width: 100px;
          border-style: solid;
          border-color: transparent;
          border-width: 0;

          ${mkBordered &&
          css`
            border-width: 1px;
          `};

          &:first-of-type {
            border-radius: var(--mk-border-radius-base) 0 0 var(--mk-border-radius-base);
          }

          &:last-of-type {
            border-radius: 0 var(--mk-border-radius-base) var(--mk-border-radius-base) 0;
          }
        `;
      case 'tab':
        return css`
          min-width: 100px;
          border-width: 0;
          border-style: solid;
          border-color: transparent;
          border-radius: var(--mk-border-radius-sm) var(--mk-border-radius-sm) 0 0;

          ${mkBordered &&
          css`
            border-width: 1px;
            margin-bottom: -1px;
          `}
        `;
    }
  }}
`;
