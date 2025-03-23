import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { generateShapeStyles } from 'styles';
import { MKShapeTypes } from 'types';

export const MKFormDateStyled = styled('input')<{
  mkValid: boolean;
  mkInvalid: boolean;
  mkDisabled: boolean;
  mkShape: MKShapeTypes;
}>`
  width: 100%;
  line-height: inherit;
  font-size: var(--mk-font-size-scale-3);
  padding: var(--mk-space-scale-2) var(--mk-space-scale-3);
  border: 1px solid var(--color-neutral-stroke);

  ${({ mkShape }) => generateShapeStyles(mkShape)}}

  ${({ mkValid }) =>
    mkValid &&
    css`
      border: 1px solid var(--color-info-success);
    `}

    ${({ mkInvalid }) =>
      mkInvalid &&
      css`
        border: 1px solid var(--color-info-danger);
      `}

    ${({ mkDisabled }) =>
      mkDisabled &&
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
