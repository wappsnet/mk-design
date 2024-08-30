import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSizeXTypes, MKStyleVariants } from 'types';

export const MKTextStyled = styled('span')<{
  center?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  truncate?: boolean;
  design: MKStyleVariants;
  size: MKSizeXTypes;
}>`
  max-width: 100%;
  line-height: initial;
  color: currentColor;
  margin: 0;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

    ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}

    ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}

    ${({ truncate }) =>
    truncate &&
    css`
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}

    ${({ size }) => css`
    font-size: ${0.5 + 0.25 * Number(size)}rem;
  `}

    ${({ design }) => {
    switch (design) {
      case 'primary':
        return css`
          color: var(--color-brand-primary-dark);
        `;
      case 'secondary':
        return css`
          color: var(--color-neutral-med);
        `;
      case 'tertiary':
        return css`
          color: var(--color-neutral-dim);
        `;
      case 'neutral':
        return css`
          color: currentColor;
        `;
    }
  }}

    * {
    color: currentColor;
  }
`;
