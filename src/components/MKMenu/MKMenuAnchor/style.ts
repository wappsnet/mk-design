import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKAnchorStyled = styled('a')<{
  mkDisabled: boolean;
  mkActive: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  color: var(--color-info-link);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ mkDisabled }) => {
    if (mkDisabled) {
      return css`
        color: var(--color-disabled-dark);
        cursor: not-allowed;
        text-decoration: none;
      `;
    }

    return css`
      &:hover,
      &:focus {
        color: var(--color-info-link-dark);
        text-decoration: underline;
      }
    `;
  }}

  ${({ mkActive, mkDisabled }) =>
    mkActive &&
    !mkDisabled &&
    css`
      color: var(--color-info-link-dark);
    `}
`;
