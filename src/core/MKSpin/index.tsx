import { FC } from 'react';

import { MKSizeTypes, MKThemeVariants } from 'types';

import { MkSpinStyled } from './style';

type MKSpinProps = {
  size: MKSizeTypes;
  theme?: MKThemeVariants;
  shape: 'border' | 'blow';
  centered?: boolean;
  responsive?: boolean;
};

export const MKSpin: FC<MKSpinProps> = ({
  size = 'sm',
  responsive = false,
  centered = false,
  shape = 'border',
  theme = 'primary',
}) => (
  <MkSpinStyled
    className="mk-spin"
    centered={centered}
    responsive={responsive}
    theme={theme}
    shape={shape}
    size={size}
  />
);
