import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes, MKJustifyTypes } from 'types';

export const MKDropdownItemStyled = styled('div')<{
  mkJustify: MKJustifyTypes;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--mk-space-scale-2);

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-neutral-stroke);
  }

  ${({ mkJustify }) => css`
    justify-content: ${mkJustify};
  `}
`;
