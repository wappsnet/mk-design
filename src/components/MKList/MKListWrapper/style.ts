import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKListStyled = styled('div')<{
  mkbBordered: boolean;
  mkDashed: boolean;
  mkStriped: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--mk-border-radius-base);

  ${({ mkbBordered }) =>
    mkbBordered &&
    css`
      border: 1px solid var(--color-neutral-stroke);
      overflow: hidden;
    `}

  ${({ mkDashed }) =>
    mkDashed &&
    css`
      li {
        &:not(:last-of-type) {
          border-block-end: 1px solid var(--color-neutral-stroke);
        }
      }
    `}
  
  ${({ mkStriped }) =>
    mkStriped &&
    css`
      li {
        &:not(:last-of-type) {
          background-color: var(--color-neutral-cover);
        }
      }
    `}
`;

export const MKListHeaderStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--mk-space-scale-3);
  padding: var(--mk-space-scale-3);
  border-block-end: 1px solid var(--color-neutral-stroke);
`;

export const MKListFooterStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--mk-space-scale-3);
  padding: var(--mk-space-scale-3);
  border-block-start: 1px solid var(--color-neutral-stroke);
`;

export const MKListUlStyled = styled('ul')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
