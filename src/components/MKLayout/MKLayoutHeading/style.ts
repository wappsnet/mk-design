import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKLayoutHeadingTitleStyled = styled('div')<{
  mkCompact: boolean;
}>`
  width: 100%;
  display: flex;
  gap: var(--mk-space-scale-2);

  ${({ mkCompact }) =>
    mkCompact &&
    css`
      width: max-content;
    `}
`;

export const MKLayoutHeadingCaptionStyled = styled('p')`
  width: 100%;
  font-size: var(--mk-font-size-scale-3);
  font-style: italic;
  color: var(--color-neutral-med);
`;

export const MKLayoutHeadingDividerStyled = styled('p')`
  width: 100%;
  height: 0;
  border: 1px solid currentColor;
`;

export const MKLayoutHeadingStyled = styled('div')<{
  mkDesign: MKDesignTypes;
  mkBold: boolean;
  mkCentered: boolean;
  mkCompact: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-2);

  ${({ mkBold }) =>
    mkBold &&
    css`
      font-weight: bold;
    `}

  ${({ mkCompact }) =>
    mkCompact &&
    css`
      width: max-content;
    `}
  
  ${({ mkCentered }) =>
    mkCentered &&
    css`
      justify-content: center;
      text-align: center;
    `}

  ${({ mkDesign }) => {
    switch (mkDesign) {
      case 'primary':
        return css`
          color: var(--color-brand-primary-dark);
        `;
      case 'secondary':
        return css`
          color: var(--color-brand-secondary-dark);
        `;
      case 'tertiary':
        return css`
          color: var(--color-brand-tertiary-dark);
        `;
      case 'neutral':
        return css`
          color: currentColor;
        `;
    }
  }}
`;
