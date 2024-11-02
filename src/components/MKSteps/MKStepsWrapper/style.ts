import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKOrientationTypes } from 'types';

export const MKStepsStyled = styled('div')<{ mkOrientation: MKOrientationTypes }>`
  width: 100%;
  height: 100%;
  display: flex;
  gap: var(--mk-space-scale-2);

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

export const MKStepsWrapperStyled = styled('div')<{
  mkHighlighted: boolean;
}>`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;

  ${({ mkHighlighted }) => {
    if (mkHighlighted) {
      return css`
        box-shadow: var(--mk-shadow-base);
        border-radius: var(--mk-border-radius-base);
      `;
    }
  }}
`;

export const MKStepsHeaderStyled = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const MKStepsFooterStyled = styled('div')`
  width: 100%;
`;
