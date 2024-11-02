import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes, MKOrientationTypes } from 'types';

export const MKStepsNavStyled = styled('div')<{
  mkOrientation: MKOrientationTypes;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  gap: var(--mk-space-scale-2);

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
          color: var(--color-info-${mkDesign});
        `;
    }
  }}
`;

export const MKStepsNavItemStyled = styled('div')<{
  mkStateless: boolean;
  mkFinished: boolean;
  mkInactive: boolean;
  mkActive: boolean;
  mkOrientation: MKOrientationTypes;
}>`
  flex: 0;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  transition: all 0.3s ease-in-out;
  background: transparent;
  box-shadow: none;
  color: var(--color-neutral-dark);

  ${({ mkActive }) =>
    mkActive &&
    css`
      color: inherit;
    `}

  ${({ mkFinished }) =>
    mkFinished &&
    css`
      color: inherit;
      opacity: 0.5;
    `}

  &:not(:last-child) {
    flex: 1;

    &:after {
      content: '';
      display: inline-flex;
      border: 1px solid currentColor;

      ${({ mkOrientation }) => {
        switch (mkOrientation) {
          case 'horizontal':
            return css`
              height: 0;
              width: 100%;
            `;
          case 'vertical':
            return css`
              height: 100%;
              min-height: 50px;
              width: 0;
            `;
        }
      }}
    }
  }

  ${({ mkOrientation }) => {
    switch (mkOrientation) {
      case 'horizontal':
        return css`
          flex-direction: row;
        `;
      case 'vertical':
        return css`
          text-align: center;
          flex-direction: column;
        `;
    }
  }}
`;

export const MKStepsNavItemIconStyled = styled('button')`
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

export const MKStepsNavItemInfoStyled = styled('div')`
  width: fit-content;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  flex-direction: column;
  color: var(--color-neutral-dark);
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
