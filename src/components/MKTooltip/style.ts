import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKPlacementTypes, MKDesignTypes } from 'types';

import { MKOverlay } from 'core/MKOverlay';

const ARROW_SIZE = 10;
const ARROW_MARGIN = ARROW_SIZE / 2;

export const MKTooltipWrapperStyled = styled(MKOverlay.Content)`
  position: fixed;
  z-index: 999;
`;

export const MKTooltipStyled = styled('div')<{
  mkDesign: MKDesignTypes;
  mkPlacement: MKPlacementTypes;
}>`
  display: flex;
  width: max-content;
  max-height: 60vh;
  position: relative;
  padding: var(--mk-space-scale-2);
  text-align: left;
  background-color: var(--color-brand-primary);
  border-radius: var(--mk-border-radius-sm);
  color: var(--color-neutral-light);
  box-shadow: var(--mk-shadow-sm);

  ${({ mkDesign }) => {
    switch (mkDesign) {
      case 'primary':
        return css`
          background-color: var(--color-brand-primary);
        `;
      case 'secondary':
        return css`
          background-color: var(--color-brand-secondary);
        `;
      case 'tertiary':
        return css`
          background-color: var(--color-brand-tertiary);
        `;
      case 'success':
        return css`
          background-color: var(--color-info-success);
        `;
      case 'new':
        return css`
          background-color: var(--color-info-new);
        `;
      case 'danger':
        return css`
          background-color: var(--color-info-danger);
        `;
      case 'warning':
        return css`
          background-color: var(--color-info-warning);
        `;
    }
  }}

  ${({ mkPlacement }) => {
    switch (mkPlacement) {
      case 'top':
      case 'bottom':
        return css`
          margin: var(--mk-space-scale-3) 0;
        `;
      case 'left':
      case 'right':
        return css`
          margin: 0 var(--mk-space-scale-3);
        `;
    }
  }}
`;

export const MKTooltipArrowStyled = styled('div')<{
  marginLeft: number;
  marginRight: number;
  mkPlacement: MKPlacementTypes;
}>`
  position: absolute;
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  transform: rotate(45deg);
  background-color: inherit;

  ${({ marginRight, marginLeft }) => css`
    margin-left: ${marginLeft}px;
    margin-right: ${marginRight}px;
  `}

  ${({ mkPlacement }) => {
    switch (mkPlacement) {
      case 'top':
        return css`
          left: -${ARROW_MARGIN}px;
          bottom: -${ARROW_MARGIN}px;
        `;
      case 'bottom':
        return css`
          left: -${ARROW_MARGIN}px;
          top: -${ARROW_MARGIN}px;
        `;
      case 'left':
        return css`
          right: -${ARROW_MARGIN}px;
          top: -${ARROW_MARGIN}px;
        `;
      case 'right':
        return css`
          left: -${ARROW_MARGIN}px;
          top: -${ARROW_MARGIN}px;
        `;
    }
  }}
`;

export const MKTooltipInnerStyled = styled('div')`
  width: 100%;
  height: inherit;
  overflow-y: auto;
  font-size: var(--mk-font-size-scale-3);
  color: currentColor;
`;
