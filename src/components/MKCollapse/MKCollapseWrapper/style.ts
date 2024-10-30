import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKCollapseStyled = styled('div')<{
  mkBordered: boolean;
}>`
  overflow: hidden;
  border-radius: var(--mk-border-radius-base);

  ${({ mkBordered }) =>
    mkBordered &&
    css`
      border: 1px solid var(--color-neutral-stroke);
    `}
`;
