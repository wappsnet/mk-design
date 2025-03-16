import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKSortableHandleStyled = styled('div')<{
  mkDisabled: boolean;
  mkCompact: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
  user-select: none;
  cursor: move;

  ${({ mkCompact }) =>
    !mkCompact &&
    css`
      width: 100%;
      height: 100%;
    `}

  ${({ mkDisabled }) =>
    !mkDisabled &&
    css`
      color: var(--color-disabled-base);
      background-color: transparent;
      cursor: not-allowed;
    `}

  * {
    pointer-events: none;
  }
`;
