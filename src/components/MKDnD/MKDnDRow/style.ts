import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKDnDRowStyled = styled('div')<{
  mkEmpty: boolean;
  mkActive: boolean;
  mkDragging: boolean;
  mkResizing: boolean;
}>`
  width: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;

  ${({ mkActive }) => {
    if (!mkActive) {
      return css`
        border: 1px solid var(--color-brand-primary-light);
      `;
    }
  }}

  ${({ mkDragging }) => {
    if (mkDragging) {
      return css`
        border: 1px dashed var(--color-neutral-stroke);
        min-height: 50px;
      `;
    }
  }}
  
  ${({ mkActive }) => {
    if (mkActive) {
      return css`
        border: 2px solid var(--color-brand-primary);
      `;
    }
  }}
  
  ${({ mkEmpty, mkResizing }) => {
    if (!mkEmpty && mkResizing) {
      return css`
        &:hover {
          [data-dnd-tool='resizer'] {
            opacity: 1;
            pointer-events: all;
          }
        }
      `;
    }
  }}
`;

export const MKDnDRowWrapperStyled = styled('div')`
  width: 100%;
  overflow: hidden;
`;

export const MKDnDRowResizerStyled = styled('div')`
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  cursor: row-resize;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    margin-bottom: -1px;
    width: 100%;
    border: 2px solid var(--color-brand-secondary);
    box-shadow: var(--mk-shadow-sm);
    pointer-events: none;
  }
`;

export const MKDnDRowResizerGestureStyled = styled('button')`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-bottom: -15px;
  margin-left: -15px;
  border-radius: 100%;
  background-color: var(--color-brand-secondary);
  box-shadow: var(--mk-shadow-sm);
  color: var(--color-neutral-light);
  z-index: 1;
  pointer-events: none;
`;
