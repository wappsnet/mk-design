import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKJustifyTypes } from 'types';

export const MKCardHeaderStyled = styled('div')<{
  mkCompact: boolean;
  mkWrap: boolean;
  mkJustify: MKJustifyTypes;
  mkHighlighted: boolean;
}>`
  width: 100%;
  display: flex;
  padding: var(--mk-space-scale-2);
  gap: var(--mk-space-scale-2);
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  border-bottom: 1px solid var(--color-neutral-stroke);

  ${({ mkWrap }) =>
    mkWrap &&
    css`
      flex-wrap: wrap;
    `}

  ${({ mkHighlighted }) =>
    mkHighlighted &&
    css`
      background-color: var(--color-neutral-cover);
    `}

  ${({ mkJustify }) => css`
    justify-content: ${mkJustify};
  `}
`;
