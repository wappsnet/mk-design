import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKThemeVariants } from 'types';

import { MKLink } from 'core/MKLink';

const MKMenuLinkActiveCss = css`
  background-color: rgba(0, 0, 0, 0.05);
  text-decoration: none;
`;

const generateNativeColorStyles = (theme: MKThemeVariants) => {
  switch (theme) {
    case 'primary':
      return css`
        color: var(--color-brand-primary);
      `;
    default:
      return css`
        color: var(--color-info-link);
      `;
  }
};

const generateActiveColorStyles = (theme: MKThemeVariants) => {
  switch (theme) {
    case 'primary':
      return css`
        color: var(--color-brand-primary);
      `;
    default:
      return css`
        color: var(--color-info-link);
      `;
  }
};

export const MKMenuLinkStyled = styled(MKLink)<{
  active: boolean;
  theme: MKThemeVariants;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  border-radius: inherit;

  ${({ theme, active }) => {
    if (active) {
      return css`
        ${MKMenuLinkActiveCss}
        ${generateActiveColorStyles(theme)}
      `;
    }

    return generateNativeColorStyles(theme);
  }}

  ${({ theme }) => css`
    &:active,
    &:focus,
    &:hover {
      ${MKMenuLinkActiveCss}
      ${generateActiveColorStyles(theme)}
    }
  `}
`;

export const MKMenuLinkLabelStyled = styled('span')`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MKMenuLinkIconStyled = styled('span')`
  display: flex;
  flex-shrink: 0;
`;
