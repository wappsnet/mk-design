import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKTreeLeafStyled = styled('div')<{
  mkOutLined: boolean;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  ${({ mkOutLined }) => {
    if (mkOutLined) {
      return css`
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: -1rem;
          width: 1rem;
          height: 1px;
          border-bottom: 1px solid var(--color-neutral-stroke);
          z-index: 1;
        }
      `;
    }
  }}
`;

export const MKTreeLeafNodeStyled = styled('div')`
  width: 100%;
`;
