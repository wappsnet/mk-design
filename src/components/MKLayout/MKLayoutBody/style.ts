import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKLayoutBodyStyled = styled('div')<{
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-2);
`;
