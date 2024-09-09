import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKOrientationVariants } from 'types';

export const MKMenuListStyled = styled('ul')<{
  divided: boolean;
  borderless: boolean;
  orientation: MKOrientationVariants;
}>`
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ divided }) =>
    divided &&
    css`
      gap: var(--mk-space-scale-1);
      border-radius: var(--mk-border-radius-xs);
    `}

  ${({ orientation, borderless }) => {
    switch (orientation) {
      case 'horizontal':
        return css`
          flex-direction: row;

          ${!borderless &&
          css`
            border-left: 1px solid var(--color-neutral-stroke);
            border-right: 1px solid var(--color-neutral-stroke);
          `}
        `;
      case 'vertical':
        return css`
          flex-direction: column;

          ${!borderless &&
          css`
            border-top: 1px solid var(--color-neutral-stroke);
            border-bottom: 1px solid var(--color-neutral-stroke);
          `}
        `;
    }
  }}
`;
