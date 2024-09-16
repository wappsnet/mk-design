import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKJustifyTypes } from 'types';

export const MKModalFooterStyled = styled('div')<{
  justify?: MKJustifyTypes;
}>`
  display: flex;
  justify-content: space-between;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  padding: var(--mk-space-scale-2);
  border-top: 1px solid var(--color-neutral-stroke);
  gap: var(--mk-space-scale-2);

  ${({ justify }) => {
    if (justify) {
      return css`
        justify-content: ${justify};
      `;
    }
  }}
`;
