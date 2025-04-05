import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes, MKJustifyTypes, MKTabShapeTypes } from 'types';

export const MKTabsStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-3);
`;

export const MKTabsNavStyled = styled('div')<{
  mkDesign: MKDesignTypes;
  mkShape: MKTabShapeTypes;
  mkJustify: MKJustifyTypes;
  mkBordered: boolean;
}>`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ mkJustify }) => css`
    justify-content: ${mkJustify};
  `}

  ${({ mkDesign }) => {
    switch (mkDesign) {
      case 'base':
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          color: var(--color-brand-${mkDesign});
        `;
      case 'success':
      case 'danger':
      case 'warning':
      case 'new':
        return css`
          color: var(--color-info-${mkDesign});
        `;
    }
  }}
    
    ${({ mkShape }) => {
    if (mkShape === 'tab') {
      return css`
        border-bottom: 1px solid currentColor;
      `;
    }
  }}
`;

export const MKTabsItemContentStyled = styled('div')<{
  mkActive: boolean;
}>`
  width: 100%;

  ${({ mkActive }) => {
    if (!mkActive) {
      return css`
        display: none;
      `;
    }
  }}
`;

export const MKTabsContentStyled = styled('div')<{
  mkJustify: MKJustifyTypes;
  mkBordered: boolean;
}>`
  width: 100%;
  min-height: 100%;
  display: flex;

  ${({ mkJustify }) => css`
    justify-content: ${mkJustify};
  `}

  ${({ mkBordered }) => {
    if (mkBordered) {
      return css`
        border: 1px solid var(--color-neutral-stroke);
      `;
    }
  }}
`;
