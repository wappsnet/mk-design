import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKImageStyled = styled.img<{
  circle: boolean;
  fit: 'cover' | 'contain';
  invalid?: boolean;
}>`
  ${({ circle }) =>
    circle &&
    css`
      border-radius: 100%;
      overflow: hidden;
    `}

  ${({ fit }) => {
    switch (fit) {
      case 'cover':
        return css`
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        `;
      case 'contain':
        return css`
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        `;
    }
  }}
 
 ${({ invalid }) =>
    invalid &&
    css`
      border: 0;
    `}
`;
