import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

const MKMenuLinkActiveCss = css`
  background-color: rgba(0, 0, 0, 0.05);
  text-decoration: none;
`;

const generateNativeColorStyles = (design: MKDesignTypes) => {
  switch (design) {
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

const generateActiveColorStyles = (design: MKDesignTypes) => {
  switch (design) {
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

export const MKMenuLinkStyled = styled('a')<{
  mkActive: boolean;
  mkDisabled: boolean;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  color: var(--color-info-link);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: inherit;

  ${({ mkDesign, mkActive }) => {
    if (mkActive) {
      return css`
        ${MKMenuLinkActiveCss}
        ${generateActiveColorStyles(mkDesign)}
      `;
    }

    return generateNativeColorStyles(mkDesign);
  }}

  ${({ mkDisabled }) =>
    mkDisabled &&
    css`
      color: var(--color-disabled-dark);
      cursor: not-allowed;
      text-decoration: none;

      &:hover,
      &:focus {
        color: var(--color-info-link-dark);
        text-decoration: underline;
      }
    `}
  
  ${({ mkDesign }) => css`
    &:active,
    &:focus,
    &:hover {
      ${MKMenuLinkActiveCss}
      ${generateActiveColorStyles(mkDesign)}
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
