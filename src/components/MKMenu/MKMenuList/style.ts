import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKOrientationTypes } from 'types';

export const MKMenuListStyled = styled('ul')<{
  mkDivided: boolean;
  mkBorderless: boolean;
  mkOrientation: MKOrientationTypes;
}>`
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ mkDivided }) =>
    mkDivided &&
    css`
      gap: var(--mk-space-scale-1);
      border-radius: var(--mk-border-radius-base);
    `}

  ${({ mkOrientation, mkBorderless }) => {
    switch (mkOrientation) {
      case 'horizontal':
        return css`
          flex-direction: row;

          ${!mkBorderless &&
          css`
            border-left: 1px solid var(--color-neutral-stroke);
            border-right: 1px solid var(--color-neutral-stroke);
          `}
        `;
      case 'vertical':
        return css`
          flex-direction: column;

          ${!mkBorderless &&
          css`
            border-top: 1px solid var(--color-neutral-stroke);
            border-bottom: 1px solid var(--color-neutral-stroke);
          `}
        `;
    }
  }}
`;
