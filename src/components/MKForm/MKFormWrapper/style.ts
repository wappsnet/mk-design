import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormStyled = styled('form')<{
  mkInline: boolean;
}>`
  display: flex;
  gap: var(--mk-space-scale-3);

  ${({ mkInline }) => {
    if (mkInline) {
      return css`
        flex-direction: row;
      `;
    }

    return css`
      flex-direction: column;
    `;
  }}
`;
