import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKSortableStyled = styled('div')<{
  mkSorting: boolean;
}>`
  width: 100%;
  overflow: hidden;
  min-height: max-content;

  ${({ mkSorting }) =>
    mkSorting &&
    css`
      transition: all 0.2s linear;
    `}

  [data-draggable="true"] {
    opacity: 0.3;
  }
`;

export const MKDraggableStyled = styled('div')`
  position: fixed;
  opacity: 0.8;
  z-index: 999;
  pointer-events: none;

  * {
    pointer-events: none;
  }
`;
