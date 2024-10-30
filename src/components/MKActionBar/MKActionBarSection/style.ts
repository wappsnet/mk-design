import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKJustifyTypes, MKDesignTypes } from 'types';

export const MKActionBarSectionStyled = styled('div')<{
  mkJustify: MKJustifyTypes;
  mkDesign: MKDesignTypes;
}>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  border-radius: var(--mk-border-radius-sm);

  ${({ mkJustify }) => css`
    justify-content: ${mkJustify};
  `}

  ${({ mkDesign }) => {
    switch (mkDesign) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        return css`
          background-color: var(--color-brand-${mkDesign}-light);
        `;
      case 'new':
      case 'success':
      case 'danger':
      case 'warning':
        return css`
          background-color: var(--color-info-${mkDesign}-light);
        `;
      case 'neutral':
        return css`
          background-color: var(--color-neutral-cover);
        `;
    }
  }}
`;
