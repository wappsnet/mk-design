import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKOrientationTypes } from 'types';

export const MKStepsStyled = styled('div')<{ mkOrientation: MKOrientationTypes }>`
  width: 100%;
  display: flex;
  gap: var(--mk-space-scale-3);

  ${({ mkOrientation }) => {
    switch (mkOrientation) {
      case 'horizontal':
        return css`
          flex-direction: column;
        `;
      case 'vertical':
        return css`
          flex-direction: row;
        `;
    }
  }}
`;

export const MKStepsWrapperStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKStepsHeaderStyled = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const MKStepsFooterStyled = styled('div')`
  width: 100%;
`;
