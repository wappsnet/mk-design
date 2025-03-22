import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKDnDDropZoneStyled = styled('div')<{
  mkDragging: boolean;
  mkActive: boolean;
  mkEmpty: boolean;
}>`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;

  ${({ mkActive }) =>
    mkActive &&
    css`
      border: 2px solid var(--color-info-success);
      background-color: var(--color-info-success-light);
    `}

  ${({ mkDragging }) =>
    mkDragging &&
    css`
      border: 2px dashed var(--color-neutral-stroke);
      min-height: 50px;
    `}
  
  ${({ mkEmpty }) =>
    !mkEmpty &&
    css`
      border: 1px solid var(--color-info-success-light);
    `}
`;
