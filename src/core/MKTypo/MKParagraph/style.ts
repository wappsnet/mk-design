import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKParagraphStyled = styled('p')<{
  mkCentered: boolean;
  mkBold: boolean;
  mkItalic: boolean;
  mkUnderline: boolean;
  mkTruncate: boolean;
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
`;
