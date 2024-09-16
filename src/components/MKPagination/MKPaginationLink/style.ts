import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKPaginationLinkStyled = styled('a')<{
  disabled: boolean;
}>`
  height: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: var(--color-neutral-med);
  padding: var(--mk-space-scale-2);
  border-radius: var(--mk-border-radius-sm);
  transition: inherit;

  &:hover,
  &:focus,
  &:active {
    color: var(--color-neutral-med);
    background-color: var(--color-neutral-cover);
  }

  &:focus {
    outline: currentColor;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--color-disabled-light);
      color: var(--color-disabled-dark);
      cursor: not-allowed;
    `}
`;
