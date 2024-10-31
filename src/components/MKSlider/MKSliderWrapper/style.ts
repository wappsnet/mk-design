import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKAnimationTypes, MKOrientationTypes } from 'types';

export const MKSliderStyled = styled('div')<{
  mkAnimation?: 'slide' | 'scale';
  mkDirection: MKOrientationTypes;
}>`
    width: 100%;
    display: flex;
    gap: var(--mk-space-scale-3);
    position: relative;

    ${({ mkAnimation }) =>
      !!mkAnimation &&
      css`
        transition: all ease-in-out 0.3s;
      `}

    ${({ mkDirection }) => {
      switch (mkDirection) {
        case 'horizontal':
          return css`
            flex-direction: column;
          `;
        case 'vertical':
          return css`
            flex-direction: row;
          `;
      }
    }}}
`;

export const MKSliderWrapperStyled = styled('div')<{
  mkDirection: MKOrientationTypes;
}>`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  transition: inherit;

    ${({ mkDirection }) => {
      switch (mkDirection) {
        case 'horizontal':
          return css`
            flex-direction: row;
          `;
        case 'vertical':
          return css`
            flex-direction: column;
          `;
      }
    }}}
`;

export const MKSliderInnerStyled = styled('div')<{
  mkDirection: MKOrientationTypes;
  mkDiffX: number;
  mkDiffY: number;
  mkGap: number;
  mkShake: number;
}>`
    position: relative;
    display: flex;
    transition: inherit;
    flex-direction: inherit;
    user-select: none;
    
    ${({ mkGap }) => css`
      padding: ${mkGap}px;
    `}

    ${({ mkDirection, mkShake, mkDiffX, mkDiffY }) => {
      switch (mkDirection) {
        case 'horizontal':
          return css`
            width: 100%;
            transform: translateX(-${mkShake - mkDiffX}%);
          `;
        case 'vertical':
          return css`
            height: 100%;
            transform: translateY(-${mkShake - mkDiffY}%);
          `;
      }
    }}}
`;

export const MKSliderItemStyled = styled('div')<{
  mkActive: boolean;
  mkGrow: number;
  mkGap: number;
  mkDirection: MKOrientationTypes;
  mkAnimation: MKAnimationTypes;
}>`
  position: relative;
  display: flex;
  transition: inherit;
  user-select: inherit;

  ${({ mkGap }) => css`
    padding: ${mkGap}px;
  `}

  ${({ mkAnimation, mkGrow, mkActive }) => {
    switch (mkAnimation) {
      case 'slide':
        return css`
          flex: 0 0 ${mkGrow}%;
        `;
      case 'scale':
        return css`
          flex: ${mkActive ? 2 : 1};
        `;
    }
  }}
`;

export const MKSliderBulletsStyled = styled('div')<{
  mkDirection: MKOrientationTypes;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  flex-direction: inherit;

    ${({ mkDirection }) => {
      switch (mkDirection) {
        case 'horizontal':
          return css`
            flex-direction: row;
          `;
        case 'vertical':
          return css`
            flex-direction: column;
          `;
      }
    }}}
`;

export const MKSliderBulletStyled = styled('button')<{
  mkActive: boolean;
}>`
  width: 1rem;
  aspect-ratio: 1/1;
  border: 0;
  box-shadow: var(--mk-shadow-xs);
  background: var(--color-neutral-med);
  border-radius: 100%;

  &:hover {
    background-color: var(--color-brand-secondary);
  }

  ${({ mkActive }) =>
    mkActive &&
    css`
      background: var(--color-brand-primary);
    `}
`;

export const MKSliderButtonStyled = styled('button')<{
  mkDirection: MKOrientationTypes;
  mkType: 'prev' | 'next';
}>`
    all: unset;
    cursor: pointer;
    position: absolute;
    height: 4rem;
    width: 4rem;
    z-index: 1;
    background-color: var(--color-info-new);
    color: var(--color-neutral-light);
    transition: inherit;
    box-shadow: var(--mk-shadow-xs);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    &:active,
    &:hover,
    &:focus {
        background-color: var(--color-brand-primary);
    }

    &:disabled {
        display: none;
    }

    ${({ mkDirection, mkType }) => {
      if (mkDirection === 'horizontal') {
        if (mkType === 'next') {
          return css`
            right: -2rem;
          `;
        } else if (mkType === 'prev') {
          return css`
            left: -2rem;
          `;
        }
      } else if (mkDirection === 'vertical') {
        const styles = css`
          left: 50%;
          transform: translateX(-50%);
        `;
        if (mkType === 'next') {
          return css`
            ${styles};
            bottom: -0.5rem;
          `;
        } else if (mkType === 'prev') {
          return css`
            ${styles};
            top: -0.5rem;
          `;
        }
      }
    }}}
`;
