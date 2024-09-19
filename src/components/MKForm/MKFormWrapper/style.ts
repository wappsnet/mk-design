import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormStyled = styled('form')<{
  inline: boolean;
}>`
  display: flex;
  gap: var(--mk-space-scale-3);

  ${({ inline }) => {
    if (inline) {
      return css`
        flex-direction: row;
      `;
    }

    return css`
      flex-direction: column;
    `;
  }}
`;
