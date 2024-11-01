import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKAlignTypes, MKGridDirectionTypes, MKGridTypes } from 'types';

export const MKFormGroupStyled = styled('div')<{
  mkDirection: MKGridDirectionTypes;
  mkGrid: MKGridTypes;
  mkAlign: MKAlignTypes;
}>`
  display: flex;

  ${({ mkDirection, mkAlign }) => css`
    flex-direction: ${mkDirection};
    align-items: ${mkAlign};
  `}

  ${({ mkGrid }) => {
    switch (mkGrid) {
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
