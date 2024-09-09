import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKLinkStyled = styled('a')<{
  disabled: boolean;
  active: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  color: var(--color-info-link);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ disabled }) => {
    if (disabled) {
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

  ${({ active, disabled }) =>
    active &&
    !disabled &&
    css`
      color: var(--color-info-link-dark);
    `}
`;
