import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKMenuCollapseStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKMenuCollapseToggleStyled = styled('button')<{
  mkDesign: MKDesignTypes;
  mkCollapsed: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  border: 0;
  background: transparent;
  font-size: var(--mk-font-size-scale-3);
  line-height: inherit;
  cursor: pointer;
    
    ${({ mkDesign }) => {
      switch (mkDesign) {
        case 'primary':
          return css`
            color: var(--color-brand-primary);

            &:hover,
            &:active {
              color: var(--color-brand-primary-dark);
            }
          `;
      }
    }}

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
    
    ${({ mkCollapsed }) =>
      mkCollapsed &&
      css`
        background-color: rgba(0, 0, 0, 0.1);
      `}}
`;

export const MKMenuCollapseContentStyled = styled('div')<{
  mkCollapsed: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  background-color: var(--color-neutral-cover);
  padding-left: var(--mk-space-scale-4);

  ${({ mkCollapsed }) => {
    if (mkCollapsed) {
      return css`
        height: auto;
        overflow: visible;
        opacity: 1;
      `;
    }

    return css`
      height: 0;
      padding: 0;
      overflow: hidden;
      opacity: 0;
    `;
  }}
`;

export const MKMenuCollapseToggleLabelStyled = styled('span')<{
  mkTruncate: boolean;
}>`
  ${({ mkTruncate }) =>
    mkTruncate &&
    css`
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
