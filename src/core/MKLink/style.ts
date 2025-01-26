import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const generateActiveStyles = () => css`
  color: var(--color-info-link-dark);

  &:hover,
  &:focus {
    color: var(--color-info-link-dark);
    text-decoration: underline;
  }
`;

export const MKLinkStyled = styled('a', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<{
  mkActive: boolean;
  mkDisabled: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  color: var(--color-info-link);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &[data-active='true'] {
    ${generateActiveStyles()}
  }

  ${({ mkDisabled }) =>
    mkDisabled &&
    css`
      color: var(--color-disabled-dark);
      cursor: not-allowed;
      text-decoration: none;
    `}

  &:hover,
  &:focus {
    ${({ mkDisabled }) =>
      !mkDisabled &&
      css`
        color: var(--color-info-link-dark);
        text-decoration: underline;
      `}
  }

  ${({ mkActive, mkDisabled }) => {
    if (mkActive && !mkDisabled) {
      return generateActiveStyles();
    }
  }}
`;
