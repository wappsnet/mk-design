import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKTreeLeafStyled = styled('div')<{
  mkInlined: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--mk-space-scale-1);
  position: relative;

  ${({ mkInlined }) => {
    if (mkInlined) {
      return css`
        &:before {
          content: '';
          position: absolute;
          left: -1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0.5rem;
          height: 1px;
          border-bottom: 1px solid var(--color-neutral-stroke);
        }
      `;
    }
  }}
`;

export const MKTreeLeafToggleStyled = styled('button')`
  background: transparent;
  box-shadow: none;
  border: none;
  padding: 0;
`;

export const MKTreeLeafNodeStyled = styled('div')`
  width: 100%;
`;
