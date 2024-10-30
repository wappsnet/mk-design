import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

const generateThemeStyles = (design: MKDesignTypes) => {
  switch (design) {
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
  mkDesign: MKDesignTypes;
  mkLabeled: boolean;
}>`
  width: 100%;

  ${({ mkDesign }) => generateThemeStyles(mkDesign)}

  ${({ mkLabeled }) => {
    if (mkLabeled) {
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
  mkDesign: MKDesignTypes;
}>`
  height: 0;
  border-bottom: 1px solid currentColor;

  ${({ mkDesign }) => generateThemeStyles(mkDesign)}
`;
