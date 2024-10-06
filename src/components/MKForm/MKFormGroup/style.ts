import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKAlignTypes, MKGridDirectionTypes, MKGridTypes } from 'types';

export const MKFormGroupStyled = styled('div')<{
  direction: MKGridDirectionTypes;
  grid: MKGridTypes;
  align: MKAlignTypes;
}>`
  display: flex;

  ${({ direction, align }) => css`
    flex-direction: ${direction};
    align-items: ${align};
  `}

  ${({ grid }) => {
    switch (grid) {
      case 'container':
        return css`
          gap: var(--mk-space-scale-3);
        `;
      case 'section':
        return css`
          gap: var(--mk-space-scale-2);
        `;
    }
  }}
`;
