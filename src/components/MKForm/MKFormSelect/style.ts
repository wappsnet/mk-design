import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes } from 'types';

export const MKFormSelectStyled = styled('select')<{
  valid: boolean;
  invalid: boolean;
  disabled: boolean;
  shape: MKShapeTypes;
}>`
  width: 100%;
  font-size: var(--mk-font-size-scale-3);
  line-height: inherit;
  padding: var(--mk-space-scale-2) var(--mk-space-scale-3);
  border: 1px solid var(--color-neutral-stroke);

  ${({ shape }) => {
    switch (shape) {
      case 'round':
        return css`
          border-radius: var(--mk-border-radius-sm);
        `;
      case 'square':
        return css`
          border-radius: 0;
        `;
      case 'circle':
        return css`
          border-radius: var(--mk-border-radius-md);
        `;
    }
  }}

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid var(--color-info-success);
    `}

    ${({ invalid }) =>
    invalid &&
    css`
      border: 1px solid var(--color-info-danger);
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid var(--color-disabled-dark);
      background-color: var(--color-disabled-light);
    `}


    &:focus,
    &:focus-visible {
    outline: none;
    border: 2px solid var(--color-brand-tertiary);
  }
`;