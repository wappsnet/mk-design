import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKPaginationItemStyled = styled(`a`)<{
  active: boolean;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  height: 2rem;
  aspect-ratio: 1/1;
  line-height: 1.5;
  padding: var(--mk-space-scale-2);
  color: var(--color-neutral-med);
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

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: currentColor;
      border: 2px solid currentColor;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--color-disabled-light);
      color: var(--color-disabled-dark);
      cursor: not-allowed;
    `}
`;
