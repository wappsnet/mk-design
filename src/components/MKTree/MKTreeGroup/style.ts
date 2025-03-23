import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKTreeGroupStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--mk-space-scale-1);
`;

export const MKTreeGroupChildrenStyled = styled('div')<{
  mkInlined: boolean;
  mkExpanded: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--mk-space-scale-1);
  padding-left: var(--mk-space-scale-5);
  position: relative;
  transition: all 0.3s ease-in-out;

  ${({ mkInlined }) => {
    if (mkInlined) {
      return css`
        &:before {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
          border-left: 1px solid var(--color-neutral-stroke);
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
