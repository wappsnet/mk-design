import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignVariants } from 'types';

export const MKLayoutToggleStyled = styled('button')<{
  design: MKDesignVariants;
}>`
  height: 100%;
  aspect-ratio: 1/1;
  padding: var(--mk-space-scale-2);
  background-color: transparent;
  font-size: var(--mk-font-size-scale-4);
  color: var(--color-neutral-med);
  border: 0;
  cursor: pointer;

  &:hover {
    ${({ design }) => {
      switch (design) {
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
  }
`;
