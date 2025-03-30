import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { generateShapeStyles } from 'styles';
import { MKDesignTypes, MKShapeTypes } from 'types';

import { MKBadgeUserVariantTypes } from './types';

export const MKBadgeUserStyled = styled('div')<{
  mkVariant: MKBadgeUserVariantTypes;
  mkDesign: MKDesignTypes;
  mkShape: MKShapeTypes;
  mkHighlighted: boolean;
  mkBorderless: boolean;
}>`
  width: max-content;
  display: flex;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);

  ${({ mkHighlighted }) =>
    mkHighlighted &&
    css`
      box-shadow: var(--mk-shadow-xs);
    `}

  ${({ mkBorderless }) =>
    !mkBorderless &&
    css`
      border: 1px solid var(--color-neutral-stroke);
    `}

  ${({ mkShape }) => generateShapeStyles(mkShape)}
  ${({ mkVariant }) => {
    switch (mkVariant) {
      case 'flat': {
        return css`
          align-items: center;
          flex-direction: row;
        `;
      }
      case 'card': {
        return css`
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `;
      }
    }
  }}
`;

export const MKBadgeUserAvatarStyled = styled('a')`
  display: flex;
  flex-shrink: 0;
`;

export const MKBadgeUserInfoStyled = styled('div')`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-1);
`;

export const MKBadgeUserInfoNameStyled = styled('a')`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MKBadgeUserInfoEmailStyled = styled('a')`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
