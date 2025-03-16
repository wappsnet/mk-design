import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MK_SORTABLE_GESTURE_SIZE = 20;

export const MKSortableRowStyled = styled('div')<{
  mkSorting: boolean;
  mkSortable: boolean;
  mkActive: boolean;
  mkEmpty: boolean;
  mkDisabled: boolean;
  mkHidden: boolean;
}>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  ${({ mkSorting, mkActive, mkDisabled, mkSortable }) => {
    if (!mkSorting || mkActive) {
      if (!mkDisabled && mkSortable) {
        return css`
          &:hover {
            border-color: var(--color-brand-primary);

            [data-sortable-tool='actions'] {
              visibility: visible;
              opacity: 1;
            }

            [data-sortable-tool='handle'] {
              transition: all 0.3s ease-in-out;
              color: var(--color-neutral-light);
              background-color: var(--color-brand-primary);
              cursor: row-resize;
            }
          }
        `;
      }
    }
  }}
  
  ${({ mkHidden, mkSorting }) => {
    if (mkHidden) {
      if (!mkSorting) {
        return css`
          overflow: hidden;
          margin: 0;
        `;
      }

      return css`
        min-height: 2rem;
      `;
    }
  }}}


  ${({ mkSortable, mkDisabled }) => {
    if (!mkSortable || mkDisabled) {
      return css`
        color: var(--color-disabled-base);
        background-color: transparent;
        cursor: not-allowed;
      `;
    }
  }}
`;

export const MKSortableRowGestureStyled = styled('div')`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: -${MK_SORTABLE_GESTURE_SIZE}px;
  right: -${MK_SORTABLE_GESTURE_SIZE}px;
  opacity: 0;
`;

export const MKSortableRowHandleStyled = styled('div')`
  width: 2rem;
  flex-shrink: 0;
  height: inherit;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-brand-primary);
  background-color: var(--color-brand-primary-light);
  border-top-left-radius: var(--mk-border-radius-xs);
  border-bottom-left-radius: var(--mk-border-radius-base);
`;

export const MKSortableRowBodyStyled = styled('div')`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  border: 1px solid var(--color-brand-primary-light);
  background-color: var(--color-brand-primary-light);
  border-radius: var(--mk-border-radius-base);
  cursor: pointer;
`;

export const MKSortableRowWrapperStyled = styled('div')`
  width: 100%;
  min-height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2) var(--mk-space-scale-2);
`;
