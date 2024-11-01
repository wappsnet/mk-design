import { FC } from 'react';

import { MKSizeTypes, MKDesignTypes } from 'types';

import { MkSpinStyled } from './style';

type MKSpinProps = {
  size: MKSizeTypes;
  design?: MKDesignTypes;
  animate: 'border' | 'blow';
  centered?: boolean;
  responsive?: boolean;
};

export const MKSpin: FC<MKSpinProps> = ({
  size = 'sm',
  responsive = false,
  centered = false,
  animate = 'border',
  design = 'primary',
}) => (
  <MkSpinStyled
    className="mk-spin"
    mkCentered={centered}
    mkResponsive={responsive}
    mkDesign={design}
    mkAnimate={animate}
    mkSize={size}
  />
);
