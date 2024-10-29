import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKCollapseStyled = styled('div')<{
  bordered: boolean;
}>`
  overflow: hidden;
  border-radius: var(--mk-border-radius-base);

  ${({ bordered }) =>
    bordered &&
    css`
      border: 1px solid var(--color-neutral-stroke);
    `}
`;
