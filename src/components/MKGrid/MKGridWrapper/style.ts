import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MK_SIZES } from '../../../definitions';
import { MKAlignTypes, MKJustifyTypes } from '../../../types';

export const MKGridWrapperStyled = styled('div')<{
  align?: MKAlignTypes;
  justify?: MKJustifyTypes;
  size: keyof typeof MK_SIZES.breakPoints;
  wrap: boolean;
}>`
  width: 100%;
  margin: auto;
  ${({ size }) => css`
    max-width: var(--mk-breakpoint-${size});
  `}

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
  
  ${({ justify }) =>
    justify &&
    css`
      align-items: ${justify};
    `}


  ${({ wrap }) => {
    if (wrap) {
      return css`
        flex-wrap: wrap;
      `;
    }

    return css`
      flex-wrap: nowrap;
    `;
  }}
`;
