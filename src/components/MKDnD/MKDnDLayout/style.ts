import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKDnDLayoutStyled = styled('div')<{
  mkActive: boolean;
  mkDragging: boolean;
  mkEmpty: boolean;
}>`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-2);
  transition: all 0.3s ease-in-out;

  ${({ mkEmpty }) => {
    if (!mkEmpty) {
      return css`
        border: 1px solid var(--color-brand-secondary-light);
      `;
    }
  }}

  ${({ mkActive }) => {
    if (mkActive) {
      return css`
        background-color: var(--color-brand-secondary);
      `;
    }
  }}
  
  ${({ mkDragging }) => {
    if (mkDragging) {
      return css`
        background-color: var(--color-brand-secondary-light);
      `;
    }
  }}
`;
