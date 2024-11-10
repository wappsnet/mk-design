import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKImage } from 'core/MKImage';

export const MKAvatarImageStyled = styled(MKImage)<{
  mkBorder: number;
}>`
  border-color: var(--color-neutral-stroke);
  border-style: solid;
  object-fit: cover;
  background-color: var(--color-neutral-med);
  aspect-ratio: 1 / 1;

  ${({ mkBorder }) => css`
    border-width: ${mkBorder}px;
  `}
`;
