import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKModalTitleStyled = styled('h3')<{
  mkBold: boolean;
}>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--mk-space-scale-2);
  text-align: start;
  margin-bottom: 0;
  margin-top: 0;
  font-size: var(--mk-font-size-scale-4);
  font-weight: normal;
  color: var(--color-brand-primary);

  ${({ mkBold }) =>
    mkBold &&
    css`
      font-weight: bold;
    `}
`;
