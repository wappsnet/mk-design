import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKImageStyled = styled.img<{
  mkCircle: boolean;
  mkFit: 'cover' | 'contain';
  mkInvalid?: boolean;
}>`
  ${({ mkCircle }) =>
    mkCircle &&
    css`
      border-radius: 100%;
      overflow: hidden;
    `}

  ${({ mkFit }) => {
    switch (mkFit) {
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
 
 ${({ mkInvalid }) =>
    mkInvalid &&
    css`
      border: 0;
    `}
`;
