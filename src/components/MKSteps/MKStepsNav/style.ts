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
  background: transparent;
  box-shadow: none;
`;

export const MKStepsNavItemContainerStyled = styled('span')`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--mk-space-scale-2);
  color: inherit;
`;

export const MKStepsNavItemButtonStyled = styled('button')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  background: transparent;
  box-shadow: none;

  &:before,
  &:after {
    position: relative;
    border-bottom: 2px solid currentColor;
    display: block;
    width: 100%;
    height: 0;
    content: '';
  }
`;

export const MKStepsNavItemIconStyled = styled('span')`
  font-size: var(--mk-font-size-scale-3);
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  aspect-ratio: 1;
  padding: var(--mk-space-scale-2);
  border: 1px solid currentColor;
  border-radius: 100%;
  color: inherit;
  position: relative;
  transition: inherit;

  &:before {
    content: '';
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    color: inherit;
    background-color: currentColor;
    transition: inherit;
    border-radius: inherit;
    opacity: 0.2;
  }
`;

export const MKStepsNavItemContentStyled = styled('div')`
  width: fit-content;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  flex-direction: column;
  gap: var(--mk-space-scale-2);
  color: var(--color-neutral-dark);
  text-align: center;
  transition: inherit;
`;

export const MKStepsNavItemLabelStyled = styled('span')`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  transition: inherit;
`;

export const MKStepsNavItemDescriptionStyled = styled('span')`
  width: 100%;
  color: var(--color-neutral-med);
  transition: inherit;
  font-size: var(--mk-font-size-scale-2);
`;
