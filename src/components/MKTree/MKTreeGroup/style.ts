import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKTreeGroupStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--mk-space-scale-1);
`;

export const MKTreeGroupChildrenStyled = styled('div')<{
  mkExpanded: boolean;
  mkOutlined: boolean;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--mk-space-scale-2);
  position: relative;
  transition: all 0.3s ease-in-out;
  padding-left: 1rem;

  ${({ mkOutlined }) => {
    console.log(mkOutlined);
    if (mkOutlined) {
      return css`
        &:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          border-left: 1px solid var(--color-neutral-stroke);
          z-index: 1;
        }
      `;
    }
  }}

  ${({ mkExpanded }) => {
    if (!mkExpanded) {
      return css`
        height: 0;
        overflow: hidden;
        opacity: 0;
        padding: 0;
        margin: 0;
      `;
    }
  }}
`;
