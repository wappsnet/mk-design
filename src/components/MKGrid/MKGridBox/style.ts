import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKAlignTypes, MKGridDirectionTypes, MKJustifyTypes } from 'types';

export const MKGridBoxStyled = styled('div')<{
  mkDirection: MKGridDirectionTypes;
  mkAlign?: MKAlignTypes;
  mkJustify?: MKJustifyTypes;
  mkWrap: boolean;
}>`
  width: 100%;
  display: flex;
  gap: var(--mk-space-scale-2);

  ${({ mkDirection }) => css`
    flex-direction: ${mkDirection};
  `}

  ${({ mkJustify }) =>
    mkJustify &&
    css`
      justify-content: ${mkJustify};
    `}
  
  ${({ mkAlign }) =>
    mkAlign &&
    css`
      align-items: ${mkAlign};
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
