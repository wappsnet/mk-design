import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKLayoutSidebarWrapperStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKLayoutSidebarBrandStyled = styled('div')`
  width: 100%;
  height: var(--mk-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  border-bottom: 1px solid var(--color-neutral-stroke);
`;

export const MKLayoutSidebarContentStyled = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKLayoutSidebarSwiperStyled = styled('div')<{
  mkExpanded: boolean;
  mkPosition: 'right' | 'left';
}>`
  width: 30px;
  height: 100%;
  position: absolute;
  cursor: col-resize;
  z-index: 1;

  ${({ mkPosition, mkExpanded }) => {
    if (mkPosition === 'right') {
      if (!mkExpanded) {
        return css`
          left: 0;
          transform: translateX(-80%);
        `;
      }

      return css`
        left: 0;
        transform: translateX(-50%);
      `;
    } else if (mkPosition === 'left') {
      if (!mkExpanded) {
        return css`
          right: 0;
          transform: translateX(80%);
        `;
      }

      return css`
        right: 0;
        transform: translateX(50%);
      `;
    }
  }}
`;

export const MKLayoutSidebarStyled = styled(`div`)<{
  mkSwiping: boolean;
  mkDesign: MKDesignTypes;
}>`
  width: 250px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: var(--color-neutral-light);
  border: 1px solid var(--color-neutral-stroke);

  ${({ mkSwiping }) =>
    !mkSwiping &&
    css`
      transition: all 0.3s ease-in-out;
    `}
`;
