import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSortableAxisTypes } from '../types';

export const MKSortableWrapperStyled = styled('div')<{
  mkLockedAxis: MKSortableAxisTypes;
  mkScrollable: boolean;
}>`
  width: 100%;
  display: flex;
  gap: var(--mk-space-scale-2);

  ${({ mkLockedAxis, mkScrollable }) => {
    switch (mkLockedAxis) {
      case 'x': {
        if (mkScrollable) {
          return css`
            overflow-y: auto;
          `;
        }

        return css`
          flex-direction: column;
          overflow-x: hidden;
        `;
      }
      case 'y': {
        if (mkScrollable) {
          return css`
            overflow-x: auto;
          `;
        }

        return css`
          flex-direction: row;
          overflow-y: hidden;
        `;
      }
    }
  }}

  ${({ mkScrollable }) =>
    mkScrollable &&
    css`
      height: 100%;
      flex: 1;
    `}
`;
