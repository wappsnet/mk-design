import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKDesignTypes } from 'types';

export const MKDropdownContentStyled = styled('div')<{
  minWidth?: number;
  delay?: number;
  translateX: number;
  translateY: number;
}>`
  width: fit-content;
  max-width: 300px;
  max-height: 400px;
  padding: var(--mk-space-scale-2);

  ${({ minWidth, delay, translateX, translateY }) => css`
    min-width: ${minWidth ?? 100}px;
    animation-duration: ${delay ?? 0}ms;
    transform: translate(${translateX}, ${translateY});
  `}
`;

export const MKDropdownContainerStyled = styled('div')<{
  design: MKDesignTypes;
}>`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: var(--mk-shadow-sm);
  border-radius: var(--mk-border-radius-base);
  background-color: var(--color-neutral-light);
`;
