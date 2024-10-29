import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKCardWrapperStyled = styled('div')<{
  highlighted: boolean;
  borderless: boolean;
}>`
  width: 100%;
  border-radius: var(--mk-border-radius-base);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  background-color: var(--color-neutral-light);
  background-clip: border-box;

  ${({ borderless }) =>
    !borderless &&
    css`
      border: 1px solid var(--color-neutral-stroke);
    `}

  ${({ highlighted }) =>
    highlighted &&
    css`
      box-shadow: var(--mk-shadow-sm);
    `}
`;
