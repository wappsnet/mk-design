import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKHeadingTypes } from 'types';

export const MKTitleStyled = styled.h1<{
  mkCentered: boolean;
  mkBold: boolean;
  mkItalic?: boolean;
  mkUnderline?: boolean;
  mkTruncate?: boolean;
  mkTag: MKHeadingTypes;
}>`
  line-height: 1.5;
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

  ${({ mkTag }) => {
    switch (mkTag) {
      case 'h1':
        return css`
          font-size: var(--mk-font-size-scale-6);
        `;
      case 'h2':
        return css`
          font-size: var(--mk-font-size-scale-5);
        `;
      case 'h3':
        return css`
          font-size: var(--mk-font-size-scale-4);
        `;
      case 'h4':
        return css`
          font-size: var(--mk-font-size-scale-3);
        `;
      case 'h5':
        return css`
          font-size: var(--mk-font-size-scale-2);
        `;
      case 'h6':
        return css`
          font-size: var(--mk-font-size-scale-1);
        `;
    }
  }}
`;
