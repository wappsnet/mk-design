import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKCollapseItemStyled = styled('div')<{
  mkBordered: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ mkBordered }) =>
    mkBordered &&
    css`
      &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-neutral-stroke);
      }
    `}
`;

export const MKCollapseItemHeaderStyled = styled('div')<{
  mkActive: boolean;
  mkBordered: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-3);
  cursor: pointer;

  ${({ mkBordered, mkActive }) => {
    if (mkBordered) {
      return css`
        background-color: var(--color-neutral-cover);

        ${mkActive &&
        css`
          border-bottom: 1px solid var(--color-neutral-stroke);
        `}
      `;
    }
  }}
`;

export const MKCollapseItemLabelStyled = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  font-size: var(--mk-font-size-scale-3);
`;

export const MKCollapseItemButtonStyled = styled('div')<{
  mkActive: boolean;
}>`
  transition: all 0.3s linear;

  ${({ mkActive }) =>
    mkActive &&
    css`
      transform: rotate(90deg);
    `}
`;

export const MKCollapseItemToggleStyled = styled('span')`
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  border-right: 0.2rem solid currentColor;
  border-bottom: 0.2rem solid currentColor;
  transform: rotate(-45deg);
`;

export const MKCollapseItemExtraStyled = styled('div')`
  display: flex;
  align-items: center;
`;

export const MKCollapseItemContentStyled = styled('div')<{
  mkActive: boolean;
}>`
  width: 100%;
  overflow: auto;
  max-height: 500px;
  opacity: 1;
  padding: var(--mk-space-scale-3);
  transition: all 0.3s linear;

  ${({ mkActive }) =>
    !mkActive &&
    css`
      opacity: 0;
      overflow: hidden;
      padding: 0;
      height: 0;
    `}
`;
