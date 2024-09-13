import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKParagraphStyled = styled('p')<{
  center: boolean;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  truncate: boolean;
}>`
  line-height: 1.5;
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
`;
