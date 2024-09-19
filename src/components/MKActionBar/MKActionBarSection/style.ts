import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKJustifyTypes, MKThemeVariants } from 'types';

export const MKActionBarSectionStyled = styled('div')<{
  justify: MKJustifyTypes;
  theme: MKThemeVariants;
}>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  border-radius: var(--mk-border-radius-sm);

  ${({ justify }) => css`
    justify-content: ${justify};
  `}

  ${({ theme }) => {
    switch (theme) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          background-color: var(--color-brand-${theme}-light);
        `;
      case 'new':
      case 'success':
      case 'danger':
      case 'warning':
        return css`
          background-color: var(--color-info-${theme}-light);
        `;
      case 'neutral':
        return css`
          background-color: var(--color-neutral-cover);
        `;
    }
  }}
`;
