import { FC } from 'react';

import { MKSizeTypes, MKDesignVariants } from 'types';

import { MkSpinStyled } from './style';

type MKSpinProps = {
  size: MKSizeTypes;
  design?: MKDesignVariants;
  shape: 'border' | 'blow';
  centered?: boolean;
  responsive?: boolean;
};

export const MKSpin: FC<MKSpinProps> = ({
  size = 'sm',
  responsive = false,
  centered = false,
  shape = 'border',
  design = 'primary',
}) => (
  <MkSpinStyled
    className="mk-spin"
    centered={centered}
    responsive={responsive}
    design={design}
    shape={shape}
    size={size}
  />
);
