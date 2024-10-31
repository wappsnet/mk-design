import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKMenuGroupStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKMenuGroupContentStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKMenuGroupHeaderStyled = styled('div')<{
  mkUppercase: boolean;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  background-color: rgba(0, 0, 0, 0.025);

  ${({ mkDesign }) => {
    switch (mkDesign) {
      case 'primary':
        return css`
          color: var(--color-brand-primary-dark);
        `;
    }
  }}

  ${({ mkUppercase }) =>
    mkUppercase &&
    css`
      text-transform: uppercase;
    `}
`;

export const MKMenuGroupIconStyled = styled('span')`
  display: flex;
  flex-shrink: 0;
`;
