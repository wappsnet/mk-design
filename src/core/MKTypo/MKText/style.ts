import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSizeXTypes, MKDesignTypes } from 'types';

export const MKTextStyled = styled('span')<{
  mkCentered: boolean;
  mkBold: boolean;
  mkItalic: boolean;
  mkUnderline: boolean;
  mkTruncate: boolean;
  mkDesign: MKDesignTypes;
  mkSize: MKSizeXTypes;
}>`
  max-width: 100%;
  line-height: initial;
  color: currentColor;
  margin: 0;

  ${({ mkBold }) =>
    mkBold &&
    css`
      font-weight: bold;
    `}

  ${({ mkCentered }) =>
    mkCentered &&
    css`
      text-align: center;
    `}

    ${({ mkItalic }) =>
    mkItalic &&
    css`
      font-style: italic;
    `}

    ${({ mkUnderline }) =>
    mkUnderline &&
    css`
      text-decoration: underline;
    `}

    ${({ mkTruncate }) =>
    mkTruncate &&
    css`
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}

    ${({ mkSize }) => css`
    font-size: ${0.5 + 0.25 * Number(mkSize)}rem;
  `}

    ${({ mkDesign }) => {
    switch (mkDesign) {
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
