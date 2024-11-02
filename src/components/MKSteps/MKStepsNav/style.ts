import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes, MKOrientationTypes } from 'types';

export const MKStepsNavStyled = styled('div')<{
  mkOrientation: MKOrientationTypes;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;

  ${({ mkOrientation }) => {
    switch (mkOrientation) {
      case 'horizontal':
        return css`
          flex-direction: row;
          justify-content: space-between;
          overflow-x: clip;
        `;
      case 'vertical':
        return css`
          flex-direction: column;
        `;
    }
  }}

  ${({ mkDesign }) => {
    switch (mkDesign) {
      case 'base':
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${mkDesign});
        `;
      case 'new':
      case 'success':
      case 'warning':
      case 'danger':
        return css`
          color: var(--color-brand-${mkDesign});
        `;
    }
  }}
`;

export const MKStepsNavItemStyled = styled('div')<{
  mkStateless: boolean;
  mkFinished: boolean;
  mkInactive: boolean;
  mkActive: boolean;
}>`
  flex: 1;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: inherit;
`;
