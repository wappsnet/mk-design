import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MK_SIZES } from 'definitions';
import { MKAlignTypes, MKJustifyTypes } from 'types';

export const MKGridWrapperStyled = styled('div')<{
  mkAlign?: MKAlignTypes;
  mkJustify?: MKJustifyTypes;
  mkSize: keyof typeof MK_SIZES.breakPoints;
  mkWrap: boolean;
}>`
  width: 100%;
  margin: auto;
  ${({ mkSize }) => css`
    max-width: var(--mk-breakpoint-${mkSize});
  `}

  ${({ mkAlign }) =>
    mkAlign &&
    css`
      align-items: ${mkAlign};
    `}
  
  ${({ mkJustify }) =>
    mkJustify &&
    css`
      align-items: ${mkJustify};
    `}


  ${({ mkWrap }) => {
    if (mkWrap) {
      return css`
        flex-wrap: wrap;
      `;
    }

    return css`
      flex-wrap: nowrap;
    `;
  }}
`;
