import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormTextStyled = styled('span')<{
  variant: 'caption' | 'info' | 'description';
}>`
  width: 100%;

  ${({ variant }) => {
    switch (variant) {
      case 'caption':
        return css`
          font-style: italic;
          color: var(--color-neutral-med);
          font-size: var(--mk-font-size-scale-2);
        `;
      case 'info':
        return css`
          font-size: var(--mk-font-size-scale-3);
        `;
      case 'description':
        return css`
          color: var(--color-neutral-med);
          font-size: var(--mk-font-size-scale-3);
        `;
    }
  }}
`;
