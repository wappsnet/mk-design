import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKJustifyTypes } from 'types';

export const MKCardFooterStyled = styled('div')<{
  compact: boolean;
  wrap: boolean;
  justify: MKJustifyTypes;
  highlighted: boolean;
}>`
  width: 100%;
  display: flex;
  padding: var(--mk-space-scale-2);
  gap: var(--mk-space-scale-2);
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  border-top: 1px solid var(--color-neutral-stroke);

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}

  ${({ highlighted }) =>
    highlighted &&
    css`
      background-color: var(--color-neutral-cover);
    `}

  ${({ justify }) => {
    switch (justify) {
      case 'start':
        return css`
          justify-content: flex-start;
        `;
      case 'end':
        return css`
          justify-content: flex-end;
        `;
      case 'center':
        return css`
          justify-content: center;
        `;
      case 'stretch':
        return css`
          justify-content: space-between;
        `;
    }
  }}
`;