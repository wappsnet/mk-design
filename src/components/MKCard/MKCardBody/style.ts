import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKCardBodyStyled = styled('div')<{
  mkCompact: boolean;
}>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ mkCompact }) =>
    !mkCompact &&
    css`
      padding: var(--mk-space-scale-2);
    `};
`;
