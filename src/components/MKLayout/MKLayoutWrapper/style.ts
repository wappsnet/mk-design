import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKLayoutStyled = styled('section')<{
  mkDesign: MKDesignTypes;
  mkCentered: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-neutral-cover);

  ${({ mkCentered }) =>
    mkCentered &&
    css`
      justify-content: center;
    `}
`;

export const MKLayoutWrapperStyled = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const MKLayoutContainerStyled = styled('div')<{
  mkCentered: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: visible;
  overflow-x: hidden;
  box-shadow: var(--mk-shadow-xs);

  ${({ mkCentered }) =>
    mkCentered &&
    css`
      justify-content: center;
    `}
`;

export const MKLayoutInnerStyled = styled('div')`
  width: 100%;
  max-height: 100%;
`;
