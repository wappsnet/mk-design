import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

import { MKButton } from 'components/MKButton';

export const MKDropdownToggleStyled = styled(MKButton, {
  shouldForwardProp: (prop) => isPropValid(prop),
})<{
  mkDisabled: boolean;
  mkBlank: boolean;
  mkDesign: MKDesignTypes;
}>`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--color-neutral-stroke);
  border-radius: var(--mk-border-radius-base);
  background: transparent;

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

  ${({ mkDisabled }) => {
    if (!mkDisabled) {
      return css`
        cursor: pointer;
      `;
    }

    return css`
      background-color: var(--color-disabled-light);
      color: var(--color-disabled-dark);
      cursor: not-allowed;
    `;
  }}
`;

export const MKDropdownToggleIconStyled = styled('span')`
  display: flex;
  flex-shrink: 0;
`;

export const MKDropdownToggleTextStyled = styled('span')`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MKDropdownToggleArrowStyled = styled('span')`
  display: flex;
  transition: inherit;
  line-height: 0;
  font-size: var(--mk-font-size-scale-1);
`;
