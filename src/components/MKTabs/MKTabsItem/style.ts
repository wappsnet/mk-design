import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes, MKTabShapeTypes } from 'types';

import { MKLink } from 'core/MKLink';

export const MKTabStyled = styled(MKLink)<{
  mkActive: boolean;
  mkDisabled: boolean;
  mkDesign: MKDesignTypes;
  mkShape: MKTabShapeTypes;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2) var(--mk-space-scale-3);
  font-size: var(--mk-font-size-scale-3);
  cursor: pointer;
  outline: none;
  text-decoration: none;

  ${({ mkDesign, mkActive, mkDisabled }) => {
    switch (mkDesign) {
      case 'base':
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${mkDesign});
          background: var(--color-brand-${mkDesign}-light);

          ${!mkActive &&
          !mkDisabled &&
          css`
            &:hover,
            &:active,
            &:focus {
              border-color: var(--color-brand-${mkDesign});
            }
          `}

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

          ${!mkActive &&
          !mkDisabled &&
          css`
            &:hover,
            &:active,
            &:focus {
              border-color: var(--color-info-${mkDesign});
            }
          `}

          ${mkActive &&
          css`
            background-color: var(--color-info-${mkDesign});
          `}
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
    
    ${({ mkShape }) => {
    switch (mkShape) {
      case 'pill':
        return css`
          min-width: 100px;
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
          border: 1px solid transparent;
          border-radius: var(--mk-border-radius-sm) var(--mk-border-radius-sm) 0 0;
          margin-bottom: -1px;
        `;
    }
  }}
`;
