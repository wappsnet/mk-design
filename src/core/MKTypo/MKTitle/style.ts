import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKHeadingTypes } from 'types';

export const MKTitleStyled = styled.h1<{
  center?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  truncate?: boolean;
  tag: MKHeadingTypes;
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

  ${({ tag }) => {
    switch (tag) {
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
