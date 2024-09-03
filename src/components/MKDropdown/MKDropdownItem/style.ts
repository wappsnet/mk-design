import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKJustifyTypes } from 'types';

export const MKDropdownItemStyled = styled('div')<{
  justify: MKJustifyTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--mk-space-scale-2);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-stroke);
  }

  ${({ justify }) => css`
    justify-content: ${justify};
  `}
`;
