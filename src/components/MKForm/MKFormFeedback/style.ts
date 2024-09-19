import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormFeedbackStyled = styled('span')<{
  variant: 'invalid' | 'warning' | 'valid';
  bold: boolean;
}>`
  line-height: 1;
  font-size: var(--mk-font-size-scale-2);

  ${({ variant }) => {
    switch (variant) {
      case 'valid':
        return css`
          color: var(--color-info-success);
        `;
      case 'invalid':
        return css`
          color: var(--color-info-danger);
        `;
      case 'warning':
        return css`
          color: var(--color-info-warning);
        `;
    }
  }}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
