import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignVariants } from 'types';

export const MKLayoutHeadingTitleStyled = styled('div')<{
  compact: boolean;
}>`
  width: 100%;
  display: flex;
  gap: var(--mk-space-scale-2);

  ${({ compact }) =>
    compact &&
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
  design: MKDesignVariants;
  bold: boolean;
  center: boolean;
  compact: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-2);

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ compact }) =>
    compact &&
    css`
      width: max-content;
    `}
  
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      text-align: center;
    `}

  ${({ design }) => {
    switch (design) {
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
