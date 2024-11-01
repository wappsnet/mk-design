import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKLayoutBannerStyled = styled('div')<{
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--mk-space-scale-2);
`;
