import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKGridRowStyled = styled('div')<{
  mkCompact: boolean;
}>`
  min-width: 100%;
  justify-content: inherit;
  align-items: inherit;

  ${({ mkCompact }) =>
    mkCompact &&
    css`
      margin-left: 0;
      margin-right: 0;
    `}
`;
