import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKAlignTypes, MKGridDirectionTypes, MKJustifyTypes } from 'types';

export const MKGridBoxStyled = styled('div')<{
  direction: MKGridDirectionTypes;
  align?: MKAlignTypes;
  justify?: MKJustifyTypes;
  wrap: boolean;
}>`
  width: 100%;
  display: flex;
  gap: var(--mk-space-scale-2);

  ${({ direction }) => css`
    flex-direction: ${direction};
  `}

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
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
