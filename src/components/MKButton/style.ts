import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeVariants, MKThemeVariants } from 'types';

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
  shape: MKShapeVariants;
  theme: MKThemeVariants;
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

  ${(props) => {
    switch (props.shape) {
      case 'square':
        return css`
          border-radius: var(--mk-border-radius-sm);
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

  ${(props) =>
    props.stretch &&
    css`
      width: 100%;
    `}

  ${({ theme, blank }) => {
    switch (theme) {
      case 'primary':
        return css`
          color: var(--color-brand-primary);
          border: 1px solid var(--color-brand-primary);

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-brand-primary);
          `}

          &:hover,
          &:active,
          &:focus {
            color: var(--color-neutral-light);
            background-color: var(--color-brand-primary-dark);
          }
        `;
      case 'secondary':
        return css`
          color: var(--color-brand-secondary);
          border: 1px solid var(--color-brand-secondary);

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-brand-secondary);
          `}

          &:hover,
          &:active,
          &:focus {
            color: var(--color-neutral-light);
            background-color: var(--color-brand-secondary-dark);
          }
        `;
      case 'tertiary':
        return css`
          color: var(--color-brand-tertiary);
          border: 1px solid var(--color-brand-tertiary);

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-brand-tertiary);
          `}

          &:hover,
          &:active,
          &:focus {
            background-color: var(--color-brand-tertiary-dark);
          }
        `;
      case 'success':
        return css`
          color: var(--color-info-success);
          border: 1px solid var(--color-info-success);

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-info-success);
          `}

          &:hover,
          &:active,
          &:focus {
            color: var(--color-neutral-light);
            background-color: var(--color-info-success-dark);
          }
        `;
      case 'warning':
        return css`
          color: var(--color-info-warning);
          border: 1px solid var(--color-info-warning);

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-info-warning);
          `}

          &:hover,
          &:active,
          &:focus {
            color: var(--color-neutral-light);
            background-color: var(--color-info-warning-dark);
          }
        `;
      case 'danger':
        return css`
          color: var(--color-info-danger);
          border: 1px solid var(--color-info-danger);

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-info-danger);
          `}

          &:hover,
          &:active,
          &:focus {
            color: var(--color-neutral-light);
            background-color: var(--color-info-danger-dark);
          }
        `;
      case 'new':
        return css`
          color: var(--color-info-new);
          border: 1px solid var(--color-info-new);

          ${!blank &&
          css`
            color: var(--color-neutral-light);
            background-color: var(--color-info-new);
          `}

          &:hover,
          &:active,
          &:focus {
            color: var(--color-neutral-light);
            background-color: var(--color-info-new-dark);
          }
        `;
    }
  }}
  
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
