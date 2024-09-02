import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKThemeVariants } from 'types';

export const MKLayoutCardHeaderStyled = styled('div')<{
  theme: MKThemeVariants;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: var(--mk-space-scale-2);

  ${({ theme }) => {
    switch (theme) {
      case 'primary':
        return css`
          color: var(--color-brand-primary);
        `;
      case 'secondary':
        return css`
          color: var(--color-brand-secondary);
        `;
      case 'tertiary':
        return css`
          color: var(--color-brand-tertiary);
        `;
    }
  }}
`;

export const MKLayoutCardFooterStyled = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: var(--mk-space-scale-2);
`;

export const MKLayoutCardBrandStyled = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--mk-space-scale-2);
`;

export const MKLayoutCardWrapperStyled = styled('div')<{
  highlighted: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 450px;

  ${({ highlighted }) =>
    highlighted &&
    css`
      gap: var(--mk-space-scale-3);
    `}
`;

export const MKLayoutCardBodyStyled = styled('div')<{
  highlighted: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-5);

  ${({ highlighted }) =>
    highlighted &&
    css`
      padding: var(--mk-space-scale-3);
      border-radius: var(--mk-border-radius-sm);
      background-color: var(--color-neutral-light);
      box-shadow: var(--mk-shadow-xs);
    `}
`;

export const MKLayoutCardStyled = styled('section')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-neutral-cover);
`;
