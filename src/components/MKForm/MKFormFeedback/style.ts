import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormFeedbackStyled = styled('span')<{
  mkVariant: 'invalid' | 'warning' | 'valid';
}>`
  line-height: 1;
  font-size: var(--mk-font-size-scale-2);

  ${({ mkVariant }) => {
    switch (mkVariant) {
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
`;
