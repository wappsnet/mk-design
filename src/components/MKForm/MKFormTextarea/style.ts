import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKResizeTypes, MKShapeTypes } from 'types';

export const MKFormTextareaStyled = styled('textarea')<{
  valid: boolean;
  invalid: boolean;
  disabled: boolean;
  shape: MKShapeTypes;
  resize: MKResizeTypes;
}>`
  width: 100%;
  font-size: var(--mk-font-size-scale-3);
  line-height: inherit;
  padding: var(--mk-space-scale-2);
  border: 1px solid var(--color-neutral-stroke);
  border-radius: var(--mk-border-radius-base);
  font-family: inherit;
  outline: none;
  position: relative;

  ${({ shape }) => {
    switch (shape) {
      case 'base':
        return css`
          border-radius: var(--mk-border-radius-base);
        `;
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

  ${({ resize }) => css`
    resize: ${resize};
  `}

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
    border: 1px solid var(--color-brand-tertiary);
  }
`;
