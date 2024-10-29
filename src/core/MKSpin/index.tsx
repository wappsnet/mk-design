import { FC } from 'react';

import { MKSizeTypes, MKDesignTypes } from 'types';

import { MkSpinStyled } from './style';

type MKSpinProps = {
  size: MKSizeTypes;
  design?: MKDesignTypes;
  format: 'border' | 'blow';
  centered?: boolean;
  responsive?: boolean;
};

export const MKSpin: FC<MKSpinProps> = ({
  size = 'sm',
  responsive = false,
  centered = false,
  format = 'border',
  design = 'primary',
}) => (
  <MkSpinStyled
    className="mk-spin"
    centered={centered}
    responsive={responsive}
    design={design}
    format={format}
    size={size}
  />
);
