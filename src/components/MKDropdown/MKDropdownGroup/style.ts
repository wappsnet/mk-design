import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKDropdownGroupStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKDropdownGroupLabelStyled = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--mk-space-scale-2);
`;

export const MKDropdownGroupContentStyled = styled('div')<{
  compact: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ compact }) =>
    !compact &&
    css`
      padding: var(--mk-space-scale-2);
    `}
`;
