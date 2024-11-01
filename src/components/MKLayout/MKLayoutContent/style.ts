import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKLayoutContentStyled = styled('div')<{
  mkDesign: MKDesignTypes;
  mkExpanded: boolean;
}>`
  width: 100%;
  height: 100%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;
