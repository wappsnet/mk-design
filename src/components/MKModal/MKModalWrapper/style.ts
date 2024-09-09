import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MK_SIZES } from 'definitions';

export const MKModalContainerStyled = styled('div')<{
  visible: boolean;
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  outline: 0;
  opacity: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;

  ${({ visible }) => css`
    opacity: ${Number(visible)};
  `}
`;

export const MKModalDialogStyled = styled('div')<{
  visible: boolean;
  centered: boolean;
  scrollable: boolean;
  size: keyof typeof MK_SIZES.modal;
}>`
  width: 100%;
  position: relative;
  max-height: 100%;
  margin: 0 auto;
  height: max-content;
  z-index: 1;
  transition: inherit;

  ${({ visible }) => {
    if (visible) {
      return css`
        animation-duration: inherit;
        animation-name: mk-scale-show;
      `;
    }

    return css`
      opacity: 0;
      transform: scale(0);
      animation-duration: inherit;
      animation-name: mk-scale-hide;
    `;
  }}

  ${({ size }) => css`
    max-width: ${MK_SIZES.modal[size].width}px;
  `}
    
    ${({ centered }) =>
    centered &&
    css`
      display: flex;
      align-items: center;
      min-height: 100%;
    `}
  
    ${({ scrollable }) =>
    scrollable &&
    css`
      display: flex;
      max-height: 100%;
    `}
`;

export const MKModalStyled = styled('div')<{
  scrollable: boolean;
}>`
  min-height: 150px;
  border-radius: var(--mk-border-radius-sm);
  background-color: var(--color-neutral-light);
  display: flex;
  flex-direction: column;
  background-clip: padding-box;
  border: 1px solid var(--color-neutral-stroke);
  outline: 0;
  pointer-events: auto;
  position: relative;
  width: 100%;
  box-shadow: var(--mk-shadow-md);
    
    ${({ scrollable }) =>
      scrollable &&
      css`
        max-height: calc(100vh - 1rem);
        overflow: hidden;
      `}}
`;
