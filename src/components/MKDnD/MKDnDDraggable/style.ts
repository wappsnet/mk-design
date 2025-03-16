import styled from '@emotion/styled';

export const MKDnDDraggableStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: grab;
  padding: var(--mk-space-scale-2);
`;

export const MKDnDDraggablePointerStyled = styled('div')`
  position: fixed;
  pointer-events: none;
  z-index: 5;
`;
