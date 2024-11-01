import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKLayoutFooterStyled = styled('div')<{
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
`;
