import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKModalBodyStyled = styled('div')<{
  scrollable: boolean;
}>`
  position: relative;
  flex: 1 1 auto;
  padding: var(--mk-space-scale-2);

  ${({ scrollable }) =>
    scrollable &&
    css`
      overflow-y: auto;
    `}
`;
