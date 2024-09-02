import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKSectionTypes } from 'types';

export const MKLayoutSectionStyled = styled('section')<{
  type: MKSectionTypes;
}>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--mk-space-scale-3);

  ${({ type }) => {
    switch (type) {
      case 'header':
        return css`
          flex-direction: column;
        `;
      case 'footer':
        return css`
          flex-direction: column;
        `;
      case 'content':
        return css`
          flex-direction: column;
        `;
    }
  }}
`;
