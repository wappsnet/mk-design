import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKDropdownToggleStyled = styled('div')<{
  disabled: boolean;
  modified: boolean;
}>`
  width: fit-content;

  ${({ modified }) => {
    if (!modified)
      return css`
        display: inline-flex;
        align-items: center;
        gap: var(--mk-space-scale-2);
        padding: var(--mk-space-scale-2);
        transition: all 0.3s ease-in-out;
        border: 1px solid var(--color-neutral-stroke);
        border-radius: var(--mk-border-radius-base);
        background: transparent;
      `;
  }}

  &:not(:disabled) {
    ${({ disabled }) => {
      if (!disabled) {
        return css`
          &:not(:disabled) {
            cursor: pointer;
          }
        `;
      }

      return css`
        &:disabled {
          background-color: var(--color-disabled-light);
          color: var(--color-disabled-dark);
          cursor: not-allowed;
        }
      `;
    }}
  }
`;

export const MKDropdownToggleIconStyled = styled('span')`
  display: flex;
  flex-shrink: 0;
`;

export const MKDropdownToggleTextStyled = styled('span')`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MKDropdownToggleArrowStyled = styled('span')`
  display: flex;
  transition: inherit;
  line-height: 0;
  font-size: var(--mk-font-size-scale-1);
`;
