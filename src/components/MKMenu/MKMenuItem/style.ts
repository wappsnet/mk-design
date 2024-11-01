import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKMenuItemStyled = styled('li')<{
  mkDesign: MKDesignTypes;
}>`
  position: relative;
  border-radius: inherit;

  &:not(:last-child) {
    border-right: inherit;
  }
`;
