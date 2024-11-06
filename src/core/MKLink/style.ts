import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes, MKShapeTypes } from 'types';

export const MKLinkStyled = styled('a', {
  shouldForwardProp: () => false,
})<{
  mkActive: boolean;
  mkDisabled: boolean;
  mkDesign?: MKDesignTypes;
  mkShape?: MKShapeTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  color: var(--color-info-link);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ mkDisabled }) =>
    mkDisabled &&
    css`
      color: var(--color-disabled-dark);
      cursor: not-allowed;
      text-decoration: none;
    `}

  ${({ mkActive, mkDisabled }) => {
    if (mkActive && !mkDisabled) {
      return css`
        color: var(--color-info-link-dark);
      `;
    } else if (!mkActive && !mkDisabled) {
      return css`
        &:hover,
        &:focus {
          color: var(--color-info-link-dark);
          text-decoration: underline;
        }
      `;
    }
  }}
`;
