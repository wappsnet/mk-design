import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKTreeLeafStyled = styled('div')<{
  mkInlined: boolean;
  mkOutLined: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  ${({ mkInlined }) => {
    if (mkInlined) {
      return css`
        &:before {
          content: '';
          position: absolute;
          bottom: 1rem;
          left: -1rem;
          width: 0.5rem;
          height: 1px;
          border-bottom: 1px solid var(--color-neutral-stroke);
          z-index: 1;
        }
      `;
    }
  }}

  ${({ mkOutLined }) => {
    if (mkOutLined) {
      return css`
        &:after {
          content: '';
          position: absolute;
          left: -1rem;
          top: -1rem;
          bottom: 1rem;
          border-left: 1px solid var(--color-neutral-stroke);
        }
      `;
    }
  }}
`;

export const MKTreeLeafNodeStyled = styled('div')`
  width: 100%;
`;
