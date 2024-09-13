import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKShapeTypes, MKThemeVariants } from 'types';

export const MKPaginationWrapperStyled = styled('div')<{
  theme: MKThemeVariants;
  shape: MKShapeTypes;
  disabled: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mk-space-scale-1);
  transition: all 0.3s ease-in-out;

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
  
  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-neutral-med);
    `}}
`;
