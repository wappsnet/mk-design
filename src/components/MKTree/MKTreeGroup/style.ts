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
  mkExpanded: boolean;
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
