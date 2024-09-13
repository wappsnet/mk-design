import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKSliderItemStyled = styled('div')<{
  disabled: boolean;
}>`
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.9;
      cursor: not-allowed;
    `}
`;
