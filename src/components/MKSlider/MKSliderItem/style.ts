import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKSliderItemStyled = styled('div')<{
  mkDisabled: boolean;
}>`
  width: 100%;

  ${({ mkDisabled }) =>
    mkDisabled &&
    css`
      opacity: 0.9;
      cursor: not-allowed;
    `}
`;
