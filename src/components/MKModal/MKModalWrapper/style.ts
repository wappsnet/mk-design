import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MK_SIZES } from 'definitions';

export const MKModalContainerStyled = styled('div')<{
  mkVisible: boolean;
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

  ${({ mkVisible }) => css`
    opacity: ${Number(mkVisible)};
  `}
`;

export const MKModalDialogStyled = styled('div')<{
  mkVisible: boolean;
  mkCentered: boolean;
  mkScrollable: boolean;
  mkSize: keyof typeof MK_SIZES.modal;
}>`
  width: 100%;
  position: relative;
  max-height: 100%;
  margin: 0 auto;
  height: max-content;
  z-index: 1;
  transition: inherit;

  ${({ mkVisible }) => {
    if (mkVisible) {
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

  ${({ mkSize }) => css`
    max-width: ${MK_SIZES.modal[mkSize].width}px;
  `}
    
    ${({ mkCentered }) =>
    mkCentered &&
    css`
      display: flex;
      align-items: center;
      min-height: 100%;
    `}
  
    ${({ mkScrollable }) =>
    mkScrollable &&
    css`
      display: flex;
      max-height: 100%;
    `}
`;

export const MKModalStyled = styled('div')<{
  mkScrollable: boolean;
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
    
    ${({ mkScrollable }) =>
      mkScrollable &&
      css`
        max-height: calc(100vh - 1rem);
        overflow: hidden;
      `}}
`;
