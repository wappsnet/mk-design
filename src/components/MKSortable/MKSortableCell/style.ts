import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSortableCellTypes } from './type';

export const MKSortableCellStyled = styled('div')<{
  mkType: MKSortableCellTypes;
  mkActive: boolean;
}>`
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);

  ${({ mkActive }) =>
    mkActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  ${({ mkType }) => {
    switch (mkType) {
      case 'content':
        return css`
          flex: 1;
          overflow: hidden;
        `;
      case 'actions':
        return css`
          color: var(--color-brand-primary);
        `;
      case 'empty':
        return css`
          width: 100%;
          flex: 1;
        `;
    }
  }}
`;
