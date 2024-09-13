import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKAnimationTypes, MKOrientationVariants } from 'types';

export const MKSliderStyled = styled('div')<{
  animation?: 'slide' | 'scale';
  direction: MKOrientationVariants;
}>`
    width: 100%;
    display: flex;
    gap: var(--mk-space-scale-3);
    position: relative;

    ${({ animation }) =>
      !!animation &&
      css`
        transition: all ease-in-out 0.3s;
      `}

    ${({ direction }) => {
      switch (direction) {
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
  direction: MKOrientationVariants;
}>`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  transition: inherit;

    ${({ direction }) => {
      switch (direction) {
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
  direction: MKOrientationVariants;
  diffX: number;
  diffY: number;
  gap: number;
  shake: number;
}>`
    position: relative;
    display: flex;
    transition: inherit;
    flex-direction: inherit;
    user-select: none;
    
    ${({ gap }) => css`
      padding: ${gap}px;
    `}

    ${({ direction, shake, diffX, diffY }) => {
      switch (direction) {
        case 'horizontal':
          return css`
            width: 100%;
            transform: translateX(-${shake - diffX}%);
          `;
        case 'vertical':
          return css`
            height: 100%;
            transform: translateY(-${shake - diffY}%);
          `;
      }
    }}}
`;

export const MKSliderItemStyled = styled('div')<{
  active: boolean;
  grow: number;
  gap: number;
  direction: MKOrientationVariants;
  animation: MKAnimationTypes;
}>`
  position: relative;
  display: flex;
  transition: inherit;
  user-select: inherit;

  ${({ gap }) => css`
    padding: ${gap}px;
  `}

  ${({ animation, grow, active }) => {
    switch (animation) {
      case 'slide':
        return css`
          flex: 0 0 ${grow}%;
        `;
      case 'scale':
        return css`
          flex: ${active ? 2 : 1};
        `;
    }
  }}
`;

export const MKSliderBulletsStyled = styled('div')<{
  direction: MKOrientationVariants;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  flex-direction: inherit;

    ${({ direction }) => {
      switch (direction) {
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
  active: boolean;
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

  ${({ active }) =>
    active &&
    css`
      background: var(--color-brand-primary);
    `}
`;

export const MKSliderButtonStyled = styled('button')<{
  direction: MKOrientationVariants;
  slideType: 'prev' | 'next';
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

    ${({ direction, slideType }) => {
      if (direction === 'horizontal') {
        if (slideType === 'next') {
          return css`
            right: -2rem;
          `;
        } else if (slideType === 'prev') {
          return css`
            left: -2rem;
          `;
        }
      } else if (direction === 'vertical') {
        const styles = css`
          left: 50%;
          transform: translateX(-50%);
        `;
        if (slideType === 'next') {
          return css`
            ${styles};
            bottom: -0.5rem;
          `;
        } else if (slideType === 'prev') {
          return css`
            ${styles};
            top: -0.5rem;
          `;
        }
      }
    }}}
`;
