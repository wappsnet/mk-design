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
}>`
  display: flex;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);

  ${({ mkHighlighted }) =>
    mkHighlighted &&
    css`
      border: 1px solid var(--color-neutral-stroke);
      box-shadow: var(--mk-shadow-xs);
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
`;

export const MKBadgeUserInfoStyled = styled('div')`
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-1);
`;
