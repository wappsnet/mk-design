import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKThemeVariants } from 'types';

const generateThemeStyles = (theme: MKThemeVariants) => {
  switch (theme) {
    case 'primary':
      return css`
        color: var(--color-brand-primary);
      `;
    case 'secondary':
      return css`
        color: var(--color-brand-secondary);
      `;
    case 'tertiary':
      return css`
        color: var(--color-brand-tertiary);
      `;
    case 'success':
      return css`
        color: var(--color-info-success);
      `;
    case 'danger':
      return css`
        color: var(--color-info-danger);
      `;
  }
};

export const MKLayoutDividerLabelStyled = styled('span')`
  color: currentColor;
  font-size: var(--mk-font-size-scale-2);
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  border: 1px solid currentColor;
  padding: var(--mk-space-scale-2);
  border-radius: var(--mk-border-radius-sm);
`;

export const MKLayoutDividerStyled = styled('div')<{
  theme: MKThemeVariants;
  labeled: boolean;
}>`
  width: 100%;

  ${({ theme }) => generateThemeStyles(theme)}

  ${({ labeled }) => {
    if (labeled) {
      return css`
        width: 100%;
        display: flex;
        align-items: center;

        &:after,
        &:before {
          content: '';
          flex: 1;
          height: 0;
          border-bottom: 1px solid currentColor;
        }
      `;
    }

    return css`
      height: 0;
      border-bottom: 1px solid currentColor;
    `;
  }}
`;

export const MKLayoutDividerHrStyled = styled('hr')<{
  theme: MKThemeVariants;
}>`
  height: 0;
  border-bottom: 1px solid currentColor;

  ${({ theme }) => generateThemeStyles(theme)}
`;
